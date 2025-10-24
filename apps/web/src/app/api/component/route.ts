import { NextResponse } from "next/server";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

export async function PATCH(req: Request): Promise<NextResponse> {
  try {
    const { componentKey, props } = await req.json();

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

    // Call update_component tool directly
    const result = await mcpClient.callTool({
      name: "update_component",
      arguments: {
        componentKey,
        props,
      },
    });

    await mcpClient.close();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update component" },
      { status: 500 }
    );
  }
}
