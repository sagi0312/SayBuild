# SayBuild

A voice-driven visual page builder powered by Claude AI, Supabase, and Next.js. Build web pages by simply speaking.

## What It Does

Speak naturally: **"Add a blue button"** → Button appears instantly.

SayBuild lets multiple users create and manage their own projects with Google OAuth authentication, real-time updates, and AI-powered voice commands.

## Project Structure

```
saybuild/
├── apps/web/              # Next.js app (UI, API routes, auth)
├── component-tree-services/  # MCP server (AI tool interface)
└── shared/                # Shared types & utilities
```

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind
- **Backend**: Supabase (Postgres + Auth + Realtime)
- **AI**: Anthropic Claude via MCP (Model Context Protocol)
- **Voice**: Web Speech API

## How It Works

```
You speak → Claude understands → MCP tools execute → Database updates → UI refreshes
```

**The Flow:**

1. Voice command captured by browser
2. Sent to Claude AI with 4 available tools (add/update/delete/get)
3. Claude decides which tools to use
4. MCP server executes database operations
5. Supabase Realtime broadcasts changes
6. React UI updates instantly

## Quick Setup

### Prerequisites

- Node.js 18+, pnpm
- Supabase account (free)
- Anthropic API key
- Google Cloud project (for OAuth)

### Installation

```bash
# Clone and install
git clone https://github.com/sagi0312/SayBuild.git
cd saybuild
pnpm install

# Build MCP server
cd component-tree-services && pnpm build && cd ..

# Set up environment variables
cd apps/web
cp .env.example .env.local
# Add your keys to .env.local

# Start dev server
pnpm dev
```

### Environment Variables

```env
# apps/web/.env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ANTHROPIC_API_KEY=your_anthropic_key
```

### Database Setup

Run this in Supabase SQL Editor:

```sql
-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Pages table (stores component trees as JSONB)
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID REFERENCES projects(id),
  name TEXT NOT NULL,
  component_tree JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- Policies (users can only access their own data)
CREATE POLICY "Users CRUD own projects" ON projects
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users CRUD own pages" ON pages
  FOR ALL USING (
    EXISTS (SELECT 1 FROM projects WHERE id = pages.project_id AND user_id = auth.uid())
  );

CREATE POLICY "Enable realtime" ON pages
  FOR SELECT USING (true);

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE pages;
```

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create project → Enable "Identity Toolkit API"
3. Create OAuth 2.0 credentials (Web application)
4. Add redirect URI: `https://[your-project].supabase.co/auth/v1/callback`
5. Copy Client ID & Secret to Supabase Dashboard → Auth → Providers → Google

## Features

✅ **Multi-user** - Google OAuth, secure data isolation  
✅ **Voice commands** - "Add button", "Make it red", "Delete text"  
✅ **Real-time** - See changes instantly via Supabase Realtime  
✅ **Manual editing** - Click-to-edit properties panel  
✅ **Projects** - Organize pages into projects

**Available components:** Box, Text, Button

## Voice Command Examples

- "Add a blue welcome button"
- "Make the button bigger and red"
- "Change all text to size 24"
- "Delete the Learn More button"

## MCP Architecture

**MCP (Model Context Protocol)** connects Claude with your database operations:

- **Next.js** = MCP Client (sends commands to Claude)
- **component-tree-services** = MCP Server (4 tools: get/add/update/delete)
- **Claude** = Decides which tools to use

Tools get context via environment variables:

- `PAGE_ID` - Which page to modify
- `SUPABASE_SERVICE_ROLE_KEY` - Database access

## API Routes

| Route                | Method | Purpose                |
| -------------------- | ------ | ---------------------- |
| `/api/tree?pageId=X` | GET    | Fetch component tree   |
| `/api/tree`          | POST   | Execute voice command  |
| `/api/component`     | PATCH  | Update component props |

## Development

**Test voice commands via curl:**

```bash
curl -X POST http://localhost:3000/api/tree \
  -H "Content-Type: application/json" \
  -d '{"transcript": "add a red button", "pageId": "your-page-id"}'
```

**Add new component types:**

1. Update `shared/types.ts` enum
2. Update MCP tool schema in `component-tree-services/src/index.ts`
3. Add renderer in `apps/web/src/app/pageRenderer/page.tsx`

## Troubleshooting

**Realtime not working?**

- Check browser console for `SUBSCRIBED` status
- Verify: `SELECT * FROM pg_publication_tables WHERE pubname = 'supabase_realtime'`

**Voice commands failing?**

- Ensure service role key is set (not anon key)
- Check MCP server is built: `cd component-tree-services && pnpm build`
- Look for errors in terminal

**Auth issues?**

- Verify Google OAuth redirect URI matches Supabase callback
- Check `.env.local` has correct Supabase keys

## Roadmap

- [ ] Multi-user collaboration (real-time editing on same page)
- [ ] Project sharing between users
- [ ] More component types (Image, Input, Select)
- [ ] Drag-and-drop reordering
- [ ] Export to React/HTML code
- [ ] Undo/redo
- [ ] Component templates
- [ ] Version Tracking

## Contributing

PRs welcome! Areas we need help:

- New component types
- UI/UX improvements
- Documentation

## License

MIT

## Built With

- [Anthropic Claude](https://www.anthropic.com/) - AI brain
- [Supabase](https://supabase.com/) - Backend & auth
- [Model Context Protocol](https://modelcontextprotocol.io/) - AI-tool standard
- [Next.js](https://nextjs.org/) - React framework

---

**Build pages with your voice** 🎤 → 🤖 → 🎨
