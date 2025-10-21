import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { TreeReader } from "../reader/index.js";
import { TreeWriter } from "../writer/index.js";

const reader = new TreeReader();
const writer = new TreeWriter();

const server = new Server(
  {
    name: "component-tree-services",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_tree",
        description: "Get the current component tree structure",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "add_component",
        description: "Add a new component to the tree",
        inputSchema: {
          type: "object",
          properties: {
            parentKey: {
              type: "string",
              description: "Key of parent component",
            },
            type: { type: "string", enum: ["Box", "Text", "Button"] },
            props: { type: "object", description: "Component properties" },
          },
          required: ["parentKey", "type", "props"],
        },
      },
      {
        name: "update_component",
        description: "Update an existing component",
        inputSchema: {
          type: "object",
          properties: {
            componentKey: {
              type: "string",
              description: "Key of component to update",
            },
            props: { type: "object", description: "New properties" },
          },
          required: ["componentKey", "props"],
        },
      },
      {
        name: "delete_component",
        description: "Delete a component from the tree",
        inputSchema: {
          type: "object",
          properties: {
            parentKey: {
              type: "string",
              description: "Key of parent component",
            },
            componentKey: {
              type: "string",
              description: "Key of component to delete",
            },
          },
          required: ["parentKey", "componentKey"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (!args) {
    throw new Error("No arguments provided");
  }

  try {
    switch (name) {
      case "get_tree": {
        const tree = await reader.getTree();
        return {
          content: [{ type: "text", text: JSON.stringify(tree, null, 2) }],
        };
      }

      case "add_component": {
        const { parentKey, type, props } = args as {
          parentKey: string;
          type: "Box" | "Text" | "Button";
          props: Record<string, string | number>;
        };
        const result = await writer.addComponent(parentKey, type, props);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      case "update_component": {
        const { componentKey, props } = args as {
          componentKey: string;
          props: Record<string, string | number>;
        };
        const result = await writer.updateComponent(componentKey, props);
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }

      case "delete_component": {
        const { parentKey, componentKey } = args as {
          parentKey: string;
          componentKey: string;
        };
        await writer.deleteComponent(parentKey, componentKey);
        return {
          content: [{ type: "text", text: "Component deleted successfully" }],
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{ type: "text", text: `Error: ${error}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Component Tree MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
