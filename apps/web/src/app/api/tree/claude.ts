import Anthropic from "@anthropic-ai/sdk";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages.mjs";
import type { Client } from "@modelcontextprotocol/sdk/client/index.js";
import type { Tool } from "@anthropic-ai/sdk/resources/messages.mjs";

export async function executeCommand(
  transcript: string,
  rootKey: string,
  mcpClient: Client,
  tools: Tool[]
) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const prompt = `You are a UI component builder. User said: "${transcript}"

    CRITICAL INSTRUCTIONS:
    - The root component key is: "${rootKey}"
    - For DELETE/UPDATE: Use get_tree first to find the component and its parent
    - For ADD: Use root as parent unless they specify a location
    - Execute the actual action, don't just read the tree

    Execute the command now.`;

  let response = await anthropic.messages.create({
    model: "claude-sonnet-4-5-20250929",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
    tools,
  });

  const messages: MessageParam[] = [{ role: "user", content: prompt }];

  while (response.stop_reason === "tool_use") {
    const toolUses = response.content.filter((b) => b.type === "tool_use");
    const toolResults = [];

    for (const toolUse of toolUses) {
      const result = await mcpClient.callTool({
        name: toolUse.name,
        arguments: toolUse.input as Record<string, unknown>,
      });

      toolResults.push({
        type: "tool_result" as const,
        tool_use_id: toolUse.id,
        content: JSON.stringify(result.content),
      });
    }

    messages.push({ role: "assistant", content: response.content });
    messages.push({ role: "user", content: toolResults });

    response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      messages,
      tools,
    });
  }
}
