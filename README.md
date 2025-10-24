# SayBuild

A voice-driven visual page builder that lets you create and modify UI components through natural language commands.

## Overview

SayBuild combines voice input, AI (Claude), and the Model Context Protocol (MCP) to enable real-time UI building through spoken commands. Changes are reflected instantly in a live preview with automatic synchronization across the application.

## Architecture

### Monorepo Structure

```
saybuild/
├── apps/
│   └── web/                    # Next.js application
│       ├── src/
│       │   ├── app/
│       │   │   ├── api/        # API routes
│       │   │   │   ├── tree/   # Component tree CRUD
│       │   │   │   ├── component/ # Direct component updates
│       │   │   │   └── sse/    # Server-Sent Events
│       │   │   ├── sayBuilder/ # Main builder UI
│       │   │   └── pageRenderer/ # Live preview iframe
│       │   ├── components/     # React components
│       │   ├── hooks/          # Custom React hooks
│       │   └── lib/            # Utilities & helpers
│       └── package.json
├── packages/
│   ├── component-tree-services/  # MCP Server
│   │   ├── src/
│   │   │   ├── index.ts        # MCP server entry
│   │   │   ├── reader/         # Read operations
│   │   │   └── writer/         # Write operations
│   │   └── build/              # Compiled output
│   └── shared/                 # Shared types & utilities
│       ├── types.ts
│       └── utils/
└── data/
    └── component-tree.json     # Single source of truth
```

### Data Flow

```
┌─────────────────┐
│  Voice Input    │ (Web Speech API)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Next.js API    │ (/api/tree POST)
│  (MCP Client)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Claude API     │ (Anthropic)
│  + MCP Tools    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  MCP Server     │ (component-tree-services)
│  Tool Execution │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ component-tree  │
│    .json        │ (File Write)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Chokidar      │ (File Watcher)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│      SSE        │ (Server-Sent Events)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  React UI       │ (Auto Re-render)
└─────────────────┘
```

## Features

### 🎤 Voice Commands

- **Add components**: "Add a blue welcome button"
- **Update components**: "Change the Welcome button to red"
- **Delete components**: "Delete the Learn More button"

### 🖱️ Manual Editing

- Click any component to select it
- Edit properties in the right panel
- Changes sync instantly via file watcher

### 🔄 Real-time Synchronization

- File watcher detects JSON changes
- SSE pushes updates to all connected clients
- Automatic UI re-rendering

### 🧩 Available Components

- **Box**: Container with padding and background color
- **Text**: Text element with font styling
- **Button**: Interactive button with text and styling

## Setup

### Prerequisites

- Node.js 18+
- pnpm 8+
- Anthropic API key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/sagi0312/SayBuild.git
cd saybuild
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

```bash
cd apps/web
cp .env.local
```

Add your Anthropic API key to `.env.local`:

```
ANTHROPIC_API_KEY=your_api_key_here
```

4. **Build the MCP server**

```bash
cd packages/component-tree-services
pnpm build
```

5. **Start the development server**

```bash
cd apps/web
pnpm dev
```

Visit `http://localhost:3000`

## How It Works

### MCP (Model Context Protocol)

SayBuild uses MCP to connect Claude with your component tree operations:

1. **Next.js acts as MCP Client**: Connects to the MCP server and manages tool execution
2. **component-tree-services is the MCP Server**: Exposes 4 tools to Claude:

   - `get_tree`: Read the current component structure
   - `add_component`: Add a new component
   - `update_component`: Modify existing component
   - `delete_component`: Remove a component

3. **Claude decides which tools to use**: Based on voice commands, Claude calls the appropriate tools in sequence

### Voice Command Processing

```typescript
Voice: "Add a blue button"
  ↓
Claude thinks: "I need to add a Button component"
  ↓
Calls: add_component({
  parentKey: "root-key",
  type: "Button",
  props: { text: "Button", backgroundColor: "blue" }
})
  ↓
MCP Server writes to component-tree.json
  ↓
Chokidar detects change
  ↓
SSE notifies browser
  ↓
React refetches and re-renders
```

### Tool Execution Loop

Claude can use multiple tools in sequence:

```typescript
Voice: "Delete the red Welcome button"
  ↓
Step 1: Claude calls get_tree()
  ↓
Step 2: Claude analyzes tree, finds button with text "Welcome" and backgroundColor "red"
  ↓
Step 3: Claude calls delete_component({
  parentKey: "parent-key",
  componentKey: "button-key"
})
  ↓
File updated, UI refreshes
```

## API Routes

### `GET /api/tree`

Fetch the current component tree

**Response:**

```json
{
  "key": "root-key",
  "type": "Box",
  "props": {
    "backgroundColor": "#fff",
    "children": [...]
  }
}
```

### `POST /api/tree`

Process voice commands via Claude + MCP

**Request:**

```json
{
  "transcript": "add a blue button"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Command executed successfully"
}
```

### `PATCH /api/component`

Directly update a component (used by properties panel)

**Request:**

```json
{
  "componentKey": "component-key",
  "props": {
    "backgroundColor": "red"
  }
}
```

### `GET /api/sse`

Server-Sent Events endpoint for real-time updates

Sends `data: update` when component-tree.json changes

## MCP Server Tools

### get_tree

```typescript
{
  name: "get_tree",
  description: "Get the current component tree structure",
  inputSchema: {
    type: "object",
    properties: {}
  }
}
```

### add_component

```typescript
{
  name: "add_component",
  description: "Add a new component to the tree",
  inputSchema: {
    type: "object",
    properties: {
      parentKey: { type: "string" },
      type: { type: "string", enum: ["Box", "Text", "Button"] },
      props: { type: "object" }
    }
  }
}
```

### update_component

```typescript
{
  name: "update_component",
  description: "Update an existing component",
  inputSchema: {
    type: "object",
    properties: {
      componentKey: { type: "string" },
      props: { type: "object" }
    }
  }
}
```

### delete_component

```typescript
{
  name: "delete_component",
  description: "Delete a component from the tree",
  inputSchema: {
    type: "object",
    properties: {
      parentKey: { type: "string" },
      componentKey: { type: "string" }
    }
  }
}
```

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **AI**: Anthropic Claude API (claude-sonnet-4-5)
- **Protocol**: Model Context Protocol (MCP)
- **File Watching**: Chokidar
- **Real-time Updates**: Server-Sent Events (SSE)
- **Voice Input**: Web Speech API
- **Package Manager**: pnpm (monorepo)

## Development

### Adding New Component Types

1. **Update shared types** (`shared/types.ts`)

```typescript
export enum COMPONENT_TYPE {
  Box = "Box",
  Text = "Text",
  Button = "Button",
}
```

2. **Update MCP tool schema** (`component-tree-services/src/index.ts`)

```typescript
type: { type: "string", enum: ["Box", "Text", "Button"] }
```

3. **Add component renderer** (`apps/web/src/app/pageRenderer/page.tsx`)

### Testing Voice Commands

Use the microphone button in the UI or test via curl:

```bash
curl -X POST http://localhost:3000/api/tree \
  -H "Content-Type: application/json" \
  -d '{"transcript": "add a red button"}'
```

## Troubleshooting

### MCP Server Not Found

```
Error: npm error 404 'component-tree-services@*' is not in this registry
```

**Solution**: Make sure component-tree-services is added as a workspace dependency in `apps/web/package.json`:

```json
{
  "dependencies": {
    "component-tree-services": "workspace:*"
  }
}
```

Then run `pnpm install` from the root.

### SSE Connection Fails

If the SSE connection drops, the browser will automatically attempt to reconnect. Check that:

- The `/api/sse` route is accessible
- The file watcher is running
- No firewall is blocking the connection

### Claude Not Using Tools

If Claude isn't calling the correct tools:

- Check that the MCP server is built (`pnpm build` in component-tree-services)
- Verify the ANTHROPIC_API_KEY is set correctly
- Check the console for tool execution logs

## Future Enhancements

- [ ] Component library with more types
- [ ] Collaborative editing
- [ ] Export to code
- [ ] Visual component tree navigator
- [ ] Voice command history
- [ ] Custom component styling
- [ ] Responsive design preview

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Acknowledgments

- Built with [Anthropic Claude](https://www.anthropic.com/)
- Uses [Model Context Protocol](https://modelcontextprotocol.io/)
- Inspired by visual page builders and voice-driven interfaces
