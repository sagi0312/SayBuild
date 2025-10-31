import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import type { Tool } from "@anthropic-ai/sdk/resources/messages.mjs";

interface MCPClientSetup {
  client: Client;
  tools: Tool[];
}

export async function setupMCPClient(pageId: string): Promise<MCPClientSetup> {
  const transport = new StdioClientTransport({
    command: "npx",
    args: ["component-tree-services"],
    env: {
      SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      SUPABASE_ANON_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      PAGE_ID: pageId,
    },
  });

  const client = new Client(
    { name: "voice-builder-client", version: "1.0.0" },
    { capabilities: { tools: {} } }
  );

  await client.connect(transport);

  const toolsResponse = await client.listTools();
  const tools = toolsResponse.tools.map((tool) => ({
    name: tool.name,
    description: tool.description ?? "",
    input_schema: tool.inputSchema as Tool["input_schema"],
  }));

  return { client, tools };
}
