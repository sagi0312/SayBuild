import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import fs from "fs/promises";
import path from "path";
import type { Component } from "@saybuild/shared";
import type { MessageParam } from "@anthropic-ai/sdk/resources/messages.mjs";

export const dataPath = path.join(
  process.cwd(),
  "../../data/component-tree.json"
);

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataPath, "utf-8");
    const tree: Component = JSON.parse(fileContent);
    return NextResponse.json(tree);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read component tree" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { transcript } = await req.json();

    const fileContent = await fs.readFile(dataPath, "utf-8");
    const tree: Component = JSON.parse(fileContent);
    const rootKey = tree.key;

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
    const transport = new StdioClientTransport({
      command: "npx",
      args: ["component-tree-services"],
    });
    const mcpClient = new Client(
      {
        name: "voice-builder-client",
        version: "1.0.0",
      },
      {
        capabilities: { tools: {} },
      }
    );

    await mcpClient.connect(transport);

    const toolsResponse = await mcpClient.listTools();

    const tools = toolsResponse.tools.map((tool) => ({
      name: tool.name,
      description: tool.description,
      input_schema: tool.inputSchema,
    }));

    let response = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are a UI component builder. User said: "${transcript}"

          CRITICAL INSTRUCTIONS:
          - The root component key is: "${rootKey}"
          - For DELETE/UPDATE: Use get_tree first to find the component and its parent
          - For ADD: Use root as parent unless they specify a location
          - Execute the actual action, don't just read the tree

          Execute the command now.`,
        },
      ],
      tools: tools,
    });

    // Conversation history
    const conversationMessages: MessageParam[] = [
      {
        role: "user" as const,
        content: `You are a UI component builder. User said: "${transcript}"

        CRITICAL INSTRUCTIONS:
        - The root component key is: "${rootKey}"
        - For DELETE/UPDATE: Use get_tree first to find the component and its parent
        - For ADD: Use root as parent unless they specify a location
        - Execute the actual action, don't just read the tree

        Execute the command now.`,
      },
    ];

    // Tool execution loop
    let continueLoop = true;

    while (continueLoop) {
      continueLoop = false;

      if (response.stop_reason === "tool_use") {
        const toolUseBlocks = response.content.filter(
          (block) => block.type === "tool_use"
        );

        const toolResults = [];

        for (const toolUse of toolUseBlocks) {
          console.log("Claude wants to use tool:", toolUse.name);
          console.log("With arguments:", toolUse.input);

          const result = await mcpClient.callTool({
            name: toolUse.name,
            arguments: toolUse.input as Record<string, unknown>,
          });

          console.log("Tool result:", result);

          toolResults.push({
            type: "tool_result" as const,
            tool_use_id: toolUse.id,
            content: JSON.stringify(result.content),
          });
        }

        // Add assistant's message to conversation
        conversationMessages.push({
          role: "assistant",
          content: response.content,
        });

        // Add tool results to conversation
        conversationMessages.push({
          role: "user",
          content: toolResults,
        });

        // Continue conversation with tool results
        response = await anthropic.messages.create({
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 4096,
          messages: conversationMessages,
          tools: tools,
        });

        continueLoop = true;
      }
    }

    await mcpClient.close();

    return NextResponse.json({
      success: true,
      message: "Command executed successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to execute command" },
      { status: 500 }
    );
  }
}
