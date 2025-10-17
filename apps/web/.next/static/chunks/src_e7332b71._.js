(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/types/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BoxComponentProps": ()=>BoxComponentProps,
    "ButtonComponentProps": ()=>ButtonComponentProps,
    "COMPONENT_TYPE": ()=>COMPONENT_TYPE,
    "MESSAGE_TYPES": ()=>MESSAGE_TYPES,
    "TextComponentProps": ()=>TextComponentProps
});
const COMPONENT_TYPE = {
    Box: "Box",
    Text: "Text",
    Button: "Button"
};
var TextComponentProps = /*#__PURE__*/ function(TextComponentProps) {
    TextComponentProps["Text"] = "text";
    TextComponentProps["Color"] = "color";
    TextComponentProps["FontSize"] = "fontSize";
    TextComponentProps["FontWeight"] = "fontWeight";
    return TextComponentProps;
}({});
var BoxComponentProps = /*#__PURE__*/ function(BoxComponentProps) {
    BoxComponentProps["BackgroundColor"] = "backgroundColor";
    BoxComponentProps["Padding"] = "padding";
    BoxComponentProps["Width"] = "width";
    return BoxComponentProps;
}({});
var ButtonComponentProps = /*#__PURE__*/ function(ButtonComponentProps) {
    ButtonComponentProps["BackgroundColor"] = "backgroundColor";
    ButtonComponentProps["Text"] = "text";
    return ButtonComponentProps;
}({});
const MESSAGE_TYPES = {
    HOST_READY: "HOST_READY",
    UPDATE_COMPONENTS: "UPDATE_COMPONENTS",
    COMPONENT_POSITIONS: "COMPONENT_POSITIONS"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pageRenderer/library/sample-data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SAMPLE_DATA": ()=>SAMPLE_DATA
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
const createKey = ()=>{
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    return {
        key,
        alias: key.substring(0, 4)
    };
};
const SAMPLE_DATA = (()=>{
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
    return {
        key,
        alias: key.substring(0, 4),
        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box,
        props: {
            backgroundColor: "#c4f9edff",
            padding: 50,
            children: [
                (()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    return {
                        key,
                        alias: key.substring(0, 4),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text,
                        props: {
                            color: "#3980eaff",
                            fontSize: 48,
                            fontWeight: 900,
                            text: "Speak commands, and watch it appear live"
                        }
                    };
                })(),
                (()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    return {
                        key,
                        alias: key.substring(0, 4),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text,
                        props: {
                            color: "black",
                            fontSize: 20,
                            fontWeight: 500,
                            text: "Voice input with the Web Speech API (toggle mic on/off)."
                        }
                    };
                })(),
                (()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    return {
                        key,
                        alias: key.substring(0, 4),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box,
                        props: {
                            padding: 16,
                            width: 200,
                            backgroundColor: "#4e39eaff",
                            children: [
                                (()=>{
                                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                                    return {
                                        key,
                                        alias: key.substring(0, 4),
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text,
                                        props: {
                                            color: "white",
                                            text: "SIGN UP FREE"
                                        }
                                    };
                                })()
                            ]
                        }
                    };
                })(),
                (()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    return {
                        key,
                        alias: key.substring(0, 4),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box,
                        props: {
                            padding: 16,
                            width: 200,
                            backgroundColor: "black",
                            children: [
                                (()=>{
                                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                                    return {
                                        key,
                                        alias: key.substring(0, 4),
                                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text,
                                        props: {
                                            color: "white",
                                            text: "REQUEST A DEMO"
                                        }
                                    };
                                })()
                            ]
                        }
                    };
                })(),
                (()=>{
                    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                    return {
                        key,
                        alias: key.substring(0, 4),
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Button,
                        props: {
                            text: "LEARN MORE",
                            backgroundColor: "gray"
                        }
                    };
                })()
            ]
        }
    };
})();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BuiderHeader": ()=>BuiderHeader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BuiderHeader = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "8c62f47e0c96aec0f65ef7aea0a25b6eef4f5a254284a69461b1fd6951d3c1b6") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c62f47e0c96aec0f65ef7aea0a25b6eef4f5a254284a69461b1fd6951d3c1b6";
    }
    const { debouncedComponentTree } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] !== debouncedComponentTree) {
        t1 = ()=>{
            const encodedData = encodeURIComponent(JSON.stringify(debouncedComponentTree));
            window.open("/preview?componentTree=".concat(encodedData), "_blank");
        };
        $[1] = debouncedComponentTree;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const openPreviewInNewTab = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title-font font-medium text-white mb-4 md:mb-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/sayBuilder",
                className: "ml-3 text-xl",
                children: "SayBuild"
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
                lineNumber: 32,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "mr-5 hover:text-white",
            children: "Home"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== openPreviewInNewTab || $[6] !== pathname) {
        t4 = pathname === "/sayBuilder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: openPreviewInNewTab,
            className: "mr-5 hover:text-white cursor-pointer",
            children: "Preview"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
            lineNumber: 46,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = openPreviewInNewTab;
        $[6] = pathname;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto flex flex-wrap pt-4 pl-5 pb-4 pl-5 flex-col md:flex-row items-center",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center",
                        children: [
                            t3,
                            t4
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
                        lineNumber: 55,
                        columnNumber: 150
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
                lineNumber: 55,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
};
_s(BuiderHeader, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BuiderHeader;
var _c;
__turbopack_context__.k.register(_c, "BuiderHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/componentOverlay/ComponentOverlay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ComponentOverlay": ()=>ComponentOverlay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ComponentOverlay = (param)=>{
    let { componentPositions, iframeRef, onComponentClick } = param;
    var _iframeRef_current;
    _s();
    const [selectedComponentKey, setSelectedComponentKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const iframeRect = (iframeRef === null || iframeRef === void 0 ? void 0 : (_iframeRef_current = iframeRef.current) === null || _iframeRef_current === void 0 ? void 0 : _iframeRef_current.getBoundingClientRect()) || {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none",
        children: componentPositions.map((pos)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("group absolute pointer-events-auto cursor-pointer border-2", selectedComponentKey === pos.key ? "border-green-500" : "border-transparent hover:border-red-500"),
                style: {
                    left: pos.x + iframeRect.left,
                    top: pos.y + iframeRect.top + 1,
                    width: pos.width + 1,
                    height: pos.height + 1,
                    zIndex: 1000
                },
                onClick: (e)=>{
                    e.stopPropagation();
                    setSelectedComponentKey(pos.key);
                    if (onComponentClick) {
                        onComponentClick(pos.key);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white text-sm text-black inline-flex",
                    children: pos.alias
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/componentOverlay/ComponentOverlay.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, pos.key, false, {
                fileName: "[project]/src/app/sayBuilder/components/componentOverlay/ComponentOverlay.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/sayBuilder/components/componentOverlay/ComponentOverlay.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ComponentOverlay, "WWoItRJgYkHezkESYZpKW/T9Co8=");
_c = ComponentOverlay;
var _c;
__turbopack_context__.k.register(_c, "ComponentOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/findComponent.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "findComponent": ()=>findComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/index.ts [app-client] (ecmascript)");
;
const findComponent = (current, componentKey)=>{
    if (current.key === componentKey) return current;
    if (current.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box && current.props.children) {
        for (const child of current.props.children){
            const found = findComponent(child, componentKey);
            if (found) return found;
        }
    }
    return null;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/updateComponent.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "updateComponent": ()=>updateComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/index.ts [app-client] (ecmascript)");
;
const updateComponent = (componentTree, componentKey, propName, value)=>{
    const updateRecursive = (component)=>{
        // Found the target component
        if (component.key === componentKey) {
            if (component.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box) {
                return {
                    ...component,
                    props: {
                        ...component.props,
                        [propName]: value
                    }
                };
            } else if (component.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text) {
                return {
                    ...component,
                    props: {
                        ...component.props,
                        [propName]: value
                    }
                };
            } else if (component.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Button) {
                return {
                    ...component,
                    props: {
                        ...component.props,
                        [propName]: value
                    }
                };
            }
            return component;
        }
        // Recursively update children if they exist
        if (component.type === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box && component.props.children) {
            return {
                ...component,
                props: {
                    ...component.props,
                    children: component.props.children.map(updateRecursive)
                }
            };
        }
        return component;
    };
    return updateRecursive(componentTree);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useDebouncer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useDebouncer": ()=>useDebouncer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useDebouncer(value, delay) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "e00f6fba89bc38bf751b6cefa3133c336fb33ddcb47bc24f8348f2ce523898f7") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e00f6fba89bc38bf751b6cefa3133c336fb33ddcb47bc24f8348f2ce523898f7";
    }
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    let t0;
    let t1;
    if ($[1] !== delay || $[2] !== value) {
        t0 = ()=>{
            const handler = setTimeout(()=>{
                setDebouncedValue(value);
            }, delay);
            return ()=>{
                clearTimeout(handler);
            };
        };
        t1 = [
            value,
            delay
        ];
        $[1] = delay;
        $[2] = value;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return debouncedValue;
}
_s(useDebouncer, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/propertiesPanel/TextInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextInput": ()=>TextInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebouncer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TextInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "6b2c39e36e868c1ee7f89d1eb6cc4abecb03ede8ff392e46904e845b73f097f5") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b2c39e36e868c1ee7f89d1eb6cc4abecb03ede8ff392e46904e845b73f097f5";
    }
    const { label, value, onChange } = t0;
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value !== null && value !== void 0 ? value : "");
    const debouncedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"])(inputValue, 500);
    const isUserInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== value) {
        t1 = ()=>{
            if (!isUserInput.current) {
                setInputValue(value !== null && value !== void 0 ? value : "");
            }
        };
        t2 = [
            value
        ];
        $[1] = value;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== debouncedValue || $[5] !== onChange) {
        t3 = ()=>{
            if (isUserInput.current) {
                onChange === null || onChange === void 0 ? void 0 : onChange(debouncedValue);
                isUserInput.current = false;
            }
        };
        t4 = [
            debouncedValue,
            onChange
        ];
        $[4] = debouncedValue;
        $[5] = onChange;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== label) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/TextInput.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = label;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e)=>{
            isUserInput.current = true;
            setInputValue(e.target.value);
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== inputValue) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: inputValue,
            onChange: t6,
            autoComplete: "off",
            "data-1p-ignore": true,
            className: "w-full rounded bg-[#f6f7fb] px-3 py-2 text-blue-700 text-xs"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/TextInput.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = inputValue;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col gap-1",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/TextInput.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(TextInput, "hi8wfX8xitfNiJ0h1uJf1YSrlUc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"]
    ];
});
_c = TextInput;
var _c;
__turbopack_context__.k.register(_c, "TextInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/propertiesPanel/NumberInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NumberInput": ()=>NumberInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebouncer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NumberInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "83c75499be766cd47c8ae9bb9a5b2a552c641f3bfb98dba36a6aa7131127f724") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "83c75499be766cd47c8ae9bb9a5b2a552c641f3bfb98dba36a6aa7131127f724";
    }
    const { label, value, onChange } = t0;
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value !== null && value !== void 0 ? value : 0);
    const debouncedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"])(inputValue, 500);
    const isUserInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t1;
    let t2;
    if ($[1] !== value) {
        t1 = ()=>{
            if (!isUserInput.current) {
                setInputValue(value !== null && value !== void 0 ? value : 0);
            }
        };
        t2 = [
            value
        ];
        $[1] = value;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== debouncedValue || $[5] !== onChange) {
        t3 = ()=>{
            if (isUserInput.current) {
                onChange === null || onChange === void 0 ? void 0 : onChange(debouncedValue);
                isUserInput.current = false;
            }
        };
        t4 = [
            debouncedValue,
            onChange
        ];
        $[4] = debouncedValue;
        $[5] = onChange;
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[8] !== label) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-gray-500",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/NumberInput.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = label;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e)=>{
            isUserInput.current = true;
            setInputValue(Number(e.target.value));
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== inputValue) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            value: inputValue,
            onChange: t6,
            autoComplete: "off",
            "data-1p-ignore": true,
            className: "w-full rounded bg-[#f6f7fb] px-3 py-2 text-xs text-blue-700"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/NumberInput.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[11] = inputValue;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-col gap-1",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/NumberInput.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    return t8;
}
_s(NumberInput, "5EL2oVSIN2X6Ns0CTMcblpMqScE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"]
    ];
});
_c = NumberInput;
var _c;
__turbopack_context__.k.register(_c, "NumberInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PropertiesPanel": ()=>PropertiesPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/propertiesPanel/TextInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/propertiesPanel/NumberInput.tsx [app-client] (ecmascript)");
;
;
;
;
;
const PropertiesPanel = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "aac221ccd31ac726a754f856d8275a8e4147fbdfd1fc90a59365885f426def6c") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aac221ccd31ac726a754f856d8275a8e4147fbdfd1fc90a59365885f426def6c";
    }
    const { selectedComponent, onChange } = t0;
    const t1 = selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.type;
    let t2;
    if ($[1] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-100 p-3 border-b border-gray-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-md text-gray-500",
                children: t1
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                lineNumber: 20,
                columnNumber: 68
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== onChange || $[4] !== selectedComponent) {
        var _selectedComponent_props_text, _selectedComponent_props_color, _selectedComponent_props_fontSize, _selectedComponent_props_fontWeight;
        t3 = (selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.type) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    label: "Text",
                    value: (_selectedComponent_props_text = selectedComponent.props.text) !== null && _selectedComponent_props_text !== void 0 ? _selectedComponent_props_text : "",
                    onChange: (value)=>{
                        onChange(value, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextComponentProps"].Text, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 28,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    label: "Color",
                    value: (_selectedComponent_props_color = selectedComponent.props.color) !== null && _selectedComponent_props_color !== void 0 ? _selectedComponent_props_color : "",
                    onChange: (value_0)=>{
                        onChange(value_0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextComponentProps"].Color, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 30,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    label: "Font size",
                    value: (_selectedComponent_props_fontSize = selectedComponent.props.fontSize) !== null && _selectedComponent_props_fontSize !== void 0 ? _selectedComponent_props_fontSize : 16,
                    onChange: (value_1)=>{
                        onChange(value_1, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextComponentProps"].FontSize, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 32,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    label: "Font weight",
                    value: (_selectedComponent_props_fontWeight = selectedComponent.props.fontWeight) !== null && _selectedComponent_props_fontWeight !== void 0 ? _selectedComponent_props_fontWeight : 400,
                    onChange: (value_2)=>{
                        onChange(value_2, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextComponentProps"].FontWeight, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 34,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[3] = onChange;
        $[4] = selectedComponent;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onChange || $[7] !== selectedComponent) {
        var _selectedComponent_props_backgroundColor, _selectedComponent_props_padding, _selectedComponent_props_width;
        t4 = (selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.type) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Box && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    label: "Color",
                    value: (_selectedComponent_props_backgroundColor = selectedComponent.props.backgroundColor) !== null && _selectedComponent_props_backgroundColor !== void 0 ? _selectedComponent_props_backgroundColor : "",
                    onChange: (value_3)=>{
                        onChange(value_3, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxComponentProps"].BackgroundColor, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 45,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    label: "Padding",
                    value: (_selectedComponent_props_padding = selectedComponent.props.padding) !== null && _selectedComponent_props_padding !== void 0 ? _selectedComponent_props_padding : 16,
                    onChange: (value_4)=>{
                        onChange(value_4, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxComponentProps"].Padding, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 47,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$NumberInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    label: "Width",
                    value: (_selectedComponent_props_width = selectedComponent.props.width) !== null && _selectedComponent_props_width !== void 0 ? _selectedComponent_props_width : 200,
                    onChange: (value_5)=>{
                        onChange(value_5, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxComponentProps"].Width, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 49,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[6] = onChange;
        $[7] = selectedComponent;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== onChange || $[10] !== selectedComponent) {
        var _selectedComponent_props_backgroundColor1, _selectedComponent_props_text1;
        t5 = (selectedComponent === null || selectedComponent === void 0 ? void 0 : selectedComponent.type) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPONENT_TYPE"].Button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    label: "Color",
                    value: (_selectedComponent_props_backgroundColor1 = selectedComponent.props.backgroundColor) !== null && _selectedComponent_props_backgroundColor1 !== void 0 ? _selectedComponent_props_backgroundColor1 : "",
                    onChange: (value_6)=>{
                        onChange(value_6, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonComponentProps"].BackgroundColor, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 60,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$TextInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    label: "Text",
                    value: (_selectedComponent_props_text1 = selectedComponent.props.text) !== null && _selectedComponent_props_text1 !== void 0 ? _selectedComponent_props_text1 : "",
                    onChange: (value_7)=>{
                        onChange(value_7, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonComponentProps"].Text, selectedComponent.key);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
                    lineNumber: 62,
                    columnNumber: 12
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[9] = onChange;
        $[10] = selectedComponent;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t3 || $[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 p-3",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t2 || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-72 border-gray-300",
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t2;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    return t7;
};
_c = PropertiesPanel;
var _c;
__turbopack_context__.k.register(_c, "PropertiesPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "VoicePanel": ()=>VoicePanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-icons@5.5.0_react@19.1.0/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const VoicePanel = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "57e85508c6c7169db3566775d6748820891451f960a3cd258744e500bffdf405") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "57e85508c6c7169db3566775d6748820891451f960a3cd258744e500bffdf405";
    }
    const { onTranscriptChange } = t0;
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    let t1;
    let t2;
    if ($[1] !== isListening || $[2] !== onTranscriptChange) {
        t1 = ()=>{
            if (!isListening && finalRef.current.trim()) {
                onTranscriptChange === null || onTranscriptChange === void 0 ? void 0 : onTranscriptChange(finalRef.current);
            }
        };
        t2 = [
            isListening,
            onTranscriptChange
        ];
        $[1] = isListening;
        $[2] = onTranscriptChange;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== isListening) {
        t3 = ()=>{
            if (!("webkitSpeechRecognition" in window)) {
                setTranscript("Speech recognition not supported in this browser.");
                return;
            }
            if (isListening) {
                var _recognitionRef_current;
                (_recognitionRef_current = recognitionRef.current) === null || _recognitionRef_current === void 0 ? void 0 : _recognitionRef_current.stop();
                recognitionRef.current = null;
                setIsListening(false);
                return;
            }
            const rec = new window.webkitSpeechRecognition();
            rec.continuous = true;
            rec.interimResults = true;
            rec.lang = "en-US";
            rec.onresult = (event)=>{
                let newFinals = "";
                let interim = "";
                for(let i = event.resultIndex; i < event.results.length; i++){
                    const r = event.results[i];
                    if (r.isFinal) {
                        newFinals = newFinals + r[0].transcript;
                    } else {
                        interim = interim + r[0].transcript;
                    }
                }
                if (newFinals) {
                    finalRef.current = finalRef.current + newFinals;
                }
                setTranscript(finalRef.current + interim);
            };
            rec.onend = ()=>{
                setIsListening(false);
            };
            recognitionRef.current = rec;
            rec.start();
            setIsListening(true);
            finalRef.current = "";
            setTranscript("");
        };
        $[5] = isListening;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const toggle = t3;
    const t4 = isListening ? "bg-red-500 border-red-500" : "bg-green-200 border-gray-300 hover:bg-gray-50";
    let t5;
    if ($[7] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("border p-4 cursor-pointer rounded-full transition-colors flex flex-row items-center justify-center gap-4", t4);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const t6 = isListening ? "text-white" : "text-gray-900";
    let t7;
    if ($[9] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t6);
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$icons$40$5$2e$5$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMicrophone"], {
            className: t7,
            size: "2.5rem"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const t9 = isListening ? "text-white" : "text-gray-800";
    let t10;
    if ($[13] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-xl font-medium", t9);
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    const t11 = isListening ? "Listening..." : "Start Voice Command";
    let t12;
    if ($[15] !== t10 || $[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: t10,
                children: t11
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
                lineNumber: 126,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12 || $[19] !== t5 || $[20] !== t8 || $[21] !== toggle) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            onClick: toggle,
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t12;
        $[19] = t5;
        $[20] = t8;
        $[21] = toggle;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600 mb-2",
            children: "Transcript:"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== transcript) {
        t15 = transcript || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-400 italic",
            children: "Your voice command will appear here..."
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 153,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = transcript;
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "m-4 bg-gray-50 border border-gray-200 rounded-lg p-4",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-800",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
                    lineNumber: 161,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t13 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t13,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t13;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    return t17;
};
_s(VoicePanel, "+0Kith9VQnumgDEVFup0/TJOjwk=");
_c = VoicePanel;
var _c;
__turbopack_context__.k.register(_c, "VoicePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ComponentsPanel": ()=>ComponentsPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentsPanel$2f$VoicePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/componentsPanel/VoicePanel.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function ComponentsPanel(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "42cf0d6ef83e21b71586b650634022af7b1a960e608daf6042d198d3d0529a8c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "42cf0d6ef83e21b71586b650634022af7b1a960e608daf6042d198d3d0529a8c";
    }
    const { onTranscriptChange } = t0;
    let t1;
    if ($[1] !== onTranscriptChange) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentsPanel$2f$VoicePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoicePanel"], {
            onTranscriptChange: onTranscriptChange
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = onTranscriptChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg text-gray-800 mb-4 flex items-center font-semibold justify-center",
            children: "Available Components"
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-4 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm",
                        children: "1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-800 mb-1",
                                children: "Button"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 251
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "With customizable text and background color."
                            }, void 0, false, {
                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                lineNumber: 33,
                                columnNumber: 311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                        lineNumber: 33,
                        columnNumber: 246
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                lineNumber: 33,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-4 shadow-sm hover:shadow-md transition-shadow",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm",
                        children: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 124
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-800 mb-1",
                                children: "Text"
                            }, void 0, false, {
                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 253
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: "With customizable content, font size, font weight, and color."
                            }, void 0, false, {
                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 248
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                lineNumber: 40,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t3,
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 shadow-sm hover:shadow-md transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm",
                                        children: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 146
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-800 mb-1",
                                                children: "Box"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                                lineNumber: 47,
                                                columnNumber: 277
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: "With customizable background color, padding, width, and support for child components."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                                lineNumber: 47,
                                                columnNumber: 334
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                        lineNumber: 47,
                                        columnNumber: 272
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                                lineNumber: 47,
                                columnNumber: 106
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                            lineNumber: 47,
                            columnNumber: 32
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
                    lineNumber: 47,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t1) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-6",
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    return t6;
}
_c = ComponentsPanel;
var _c;
__turbopack_context__.k.register(_c, "ComponentsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/parseTranscript.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseTranscipt": ()=>parseTranscipt
});
const VERB = [
    "add",
    "create",
    "put",
    "insert"
];
const NOUN = [
    "button",
    "text",
    "box",
    "image"
];
const COLOR = [
    "blue",
    "red",
    "green",
    "black",
    "white",
    "gray"
];
const PREPOSITION = [
    "under",
    "above",
    "below",
    "inside",
    "next to"
];
const ARTICLE = [
    "the",
    "a",
    "an"
];
function parseTranscipt(transcript) {
    const words = transcript.toLowerCase().split(" ").filter((word)=>!ARTICLE.includes(word));
    const wordcount = words.length;
    if (wordcount === 0) return {};
    if (wordcount > 5) {
        return callLLMToParseTranscript(transcript);
    } else {
        const verb = words.find((word)=>VERB.includes(word));
        const noun = words.find((word)=>NOUN.includes(word));
        const color = words.find((word)=>COLOR.includes(word));
        const preposition = words.find((word)=>PREPOSITION.includes(word));
        const target = findTarget(words, preposition);
        return {
            verb,
            noun,
            color,
            preposition,
            target
        };
    }
}
function findTarget(words, preposition) {
    if (preposition) {
        const prepositionIndex = words.indexOf(preposition);
        const afterPreposition = words.slice(prepositionIndex + 1);
        const target = afterPreposition.join(" ");
        return target || null;
    }
    return null;
}
function callLLMToParseTranscript(transcript) {
    throw new Error("Function not implemented.");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/sayBuilder/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SayBuilderPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.4.5_babel-plugin-react-compiler@19.1.0-rc.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pageRenderer$2f$library$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/pageRenderer/library/sample-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$builderHeader$2f$BuiderHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/builderHeader/BuiderHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentOverlay$2f$ComponentOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/componentOverlay/ComponentOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$findComponent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/findComponent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$updateComponent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/updateComponent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/propertiesPanel/PropertiesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentsPanel$2f$ComponentsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sayBuilder/components/componentsPanel/ComponentsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebouncer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$parseTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/parseTranscript.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function SayBuilderPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "990645e833721282ed7dbb306a9b0b0642a4c16b7e9e0a8d21bc43bc18ff6b1b") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "990645e833721282ed7dbb306a9b0b0642a4c16b7e9e0a8d21bc43bc18ff6b1b";
    }
    const [componentTree, setComponentTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pageRenderer$2f$library$2f$sample$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAMPLE_DATA"]);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [componentPositions, setComponentPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [selectedComponentKey, setSelectedComponentKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(componentTree.key);
    let t1;
    if ($[2] !== componentTree || $[3] !== selectedComponentKey) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$findComponent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findComponent"])(componentTree, selectedComponentKey);
        $[2] = componentTree;
        $[3] = selectedComponentKey;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const selectedComponent = t1;
    const iframeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const debouncedComponentTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"])(componentTree, 300);
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (message)=>{
            var _iframeRef_current;
            if ((_iframeRef_current = iframeRef.current) === null || _iframeRef_current === void 0 ? void 0 : _iframeRef_current.contentWindow) {
                iframeRef.current.contentWindow.postMessage(message, "http://localhost:3000");
            }
        };
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const sendMessageToHost = t2;
    let t3;
    if ($[6] !== componentTree) {
        t3 = (value, propName, componentKeyToUpdate)=>{
            const updatedTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$updateComponent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateComponent"])(componentTree, componentKeyToUpdate, propName, value);
            setComponentTree(updatedTree);
        };
        $[6] = componentTree;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleOnChange = t3;
    const handleTranscriptChange = _temp;
    let t4;
    let t5;
    if ($[8] !== debouncedComponentTree) {
        t4 = ()=>{
            const handleMessage = (e)=>{
                if (e.origin !== "http://localhost:3000") {
                    return;
                }
                bb15: switch(e.data.type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_TYPES"].HOST_READY:
                        {
                            sendMessageToHost({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_TYPES"].UPDATE_COMPONENTS,
                                components: debouncedComponentTree
                            });
                            break bb15;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_TYPES"].COMPONENT_POSITIONS:
                        {
                            setComponentPositions(e.data.positions);
                            break bb15;
                        }
                    default:
                }
            };
            window.addEventListener("message", handleMessage);
            return ()=>{
                window.removeEventListener("message", handleMessage);
            };
        };
        t5 = [
            debouncedComponentTree
        ];
        $[8] = debouncedComponentTree;
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[11] !== debouncedComponentTree) {
        t6 = ()=>{
            sendMessageToHost({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_TYPES"].UPDATE_COMPONENTS,
                components: debouncedComponentTree
            });
        };
        t7 = [
            debouncedComponentTree,
            sendMessageToHost
        ];
        $[11] = debouncedComponentTree;
        $[12] = t6;
        $[13] = t7;
    } else {
        t6 = $[12];
        t7 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[14] !== debouncedComponentTree) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$builderHeader$2f$BuiderHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuiderHeader"], {
            debouncedComponentTree: debouncedComponentTree
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[14] = debouncedComponentTree;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-80 bg-white border-r",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentsPanel$2f$ComponentsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentsPanel"], {
                onTranscriptChange: handleTranscriptChange
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/page.tsx",
                lineNumber: 137,
                columnNumber: 52
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex-1 p-6 bg-gray-100 border-r border-gray-300 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                ref: iframeRef,
                src: "/pageRenderer",
                title: "Preview",
                className: "w-full h-full bg-white border border-gray-300 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/page.tsx",
                lineNumber: 144,
                columnNumber: 89
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = (key)=>{
            setSelectedComponentKey(key);
        };
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== componentPositions) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-1 border-t border-gray-300",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$componentOverlay$2f$ComponentOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentOverlay"], {
                    componentPositions: componentPositions,
                    iframeRef: iframeRef,
                    onComponentClick: t11
                }, void 0, false, {
                    fileName: "[project]/src/app/sayBuilder/page.tsx",
                    lineNumber: 160,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[19] = componentPositions;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== handleOnChange || $[22] !== selectedComponent) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "w-80 bg-white border-l",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sayBuilder$2f$components$2f$propertiesPanel$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {
                selectedComponent: selectedComponent,
                onChange: handleOnChange
            }, void 0, false, {
                fileName: "[project]/src/app/sayBuilder/page.tsx",
                lineNumber: 168,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[21] = handleOnChange;
        $[22] = selectedComponent;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== t12 || $[25] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex overflow-hidden",
            children: [
                t9,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[24] = t12;
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t14 || $[28] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$19$2e$1$2e$0$2d$rc$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen flex flex-col",
            children: [
                t8,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/sayBuilder/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t8;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    return t15;
}
_s(SayBuilderPage, "OzRBke8ZfIndB5yuM9rHPRq3p4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebouncer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncer"]
    ];
});
_c = SayBuilderPage;
function _temp(transcript) {
    const newNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$parseTranscript$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseTranscipt"])(transcript);
    console.log("Parsed Transcript:", newNode);
}
var _c;
__turbopack_context__.k.register(_c, "SayBuilderPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e7332b71._.js.map