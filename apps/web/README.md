# SayBuilder 🎙️

A **voice-driven page builder** powered by AI. Speak commands and watch your page build itself in real-time.

---

## Features

- 🎤 Voice commands via Web Speech API
- 🤖 AI-powered natural language understanding (Claude + MCP)
- 👤 Multi-user authentication with Google OAuth
- 📦 Component-based page building (Box, Button, Text, Header)
- ⚡ Real-time updates with Supabase
- 🎨 Live preview with editable properties

---

## How It Works

Say things like:

- "Add a blue button"
- "Delete the header"
- "Make the text pink"
- "Add a box with padding 20"

The AI understands your intent and updates the page live.

---

## Getting Started

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- Next.js 15 + React 19
- Anthropic Claude API
- Model Context Protocol (MCP)
- Supabase (auth + database + realtime)
- TypeScript + pnpm workspace

---

## Notes

- Best in Chrome desktop
- Requires microphone permissions
- Free tier: 10 commands per day

---

**Live Demo:** [saybuild.vercel.app](https://saybuild.vercel.app)
