module.exports = {

"[project]/.next-internal/server/app/api/parseTranscript/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/parseTranscript/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const { transcript, componentTree } = await request.json();
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are a voice command parser for a page builder. Convert natural language into structured CRUD operations for UI components.

CURRENT PAGE STATE (Component Tree):
${JSON.stringify(componentTree, null, 2)}

Component Structure:
- Each component has: key (uuid), alias (4-char short id), type (Box/Text/Button), props
- Components can be nested (Box can have children array)
- Use the component's "key" or "alias" to target specific components
- When user says "the blue text", find component by matching props (color, text content, etc.)

Return ONLY valid JSON in this exact format:
{
  "commands": [
    {
      "operation": "CREATE" | "READ" | "UPDATE" | "DELETE",
      "targetKey": "component-key-or-alias-if-updating-deleting",
      "componentType": "Box" | "Text" | "Button",
      "props": {},
      "parentKey": "parent-key-if-creating-nested-component"
    }
  ]
}

Examples:
1. "Make the blue text bigger"
   - Find Text component with color "#3980eaff"
   - Return: {"operation": "UPDATE", "targetKey": "found-key", "componentType": "Text", "props": {"fontSize": 60}}

2. "Delete the sign up button"
   - Find Box containing Text with "SIGN UP FREE"
   - Return: {"operation": "DELETE", "targetKey": "found-box-key", "componentType": "Box", "props": {}}

3. "Add a red button that says Click Me"
   - Return: {"operation": "CREATE", "componentType": "Button", "props": {"text": "Click Me", "backgroundColor": "red"}, "parentKey": "root-or-parent-key"}

4. "Change the demo button background to green"
   - Find Box containing Text with "REQUEST A DEMO"
   - Return: {"operation": "UPDATE", "targetKey": "found-box-key", "componentType": "Box", "props": {"backgroundColor": "green"}}

5. "Make it blue" (ambiguous - use context to determine what "it" refers to, likely the most recently created/modified component)

IMPORTANT:
- Use actual key/alias values from the component tree
- When updating nested components, target the correct parent/child
- Match components by their text content, colors, or position in tree
- For ambiguous references ("it", "that", "the button"), use context to identify the right component

Return only JSON, no explanations.`
                    },
                    {
                        role: "user",
                        content: `Parse this transcript into commands: ${transcript}`
                    }
                ],
                temperature: 0.2,
                response_format: {
                    type: "json_object"
                }
            })
        });
        if (!groqResponse.ok) {
            const errorText = await groqResponse.text();
            console.error("❌ Groq API Error:", errorText);
            throw new Error(`Groq API error: ${errorText}`);
        }
        const groqData = await groqResponse.json();
        const parsedContent = groqData.choices[0].message.content;
        const commandsObject = JSON.parse(parsedContent);
        console.log("✅ Commands Object:", commandsObject);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Transcript parsed successfully",
            commands: commandsObject.commands
        });
    } catch (error) {
        console.error("💥 Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to parse transcript",
            details: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__eec39c12._.js.map