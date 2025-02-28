(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_common_CustomCursor_tsx_f6ba7b._.js", {

"[project]/src/components/common/CustomCursor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
const CursorDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 8px;
  height: 8px;
  background-color: #C0C0C0; 
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
  transform: ${(props)=>props.$cursorStyle === "pointer" ? "scale(1.5)" : props.$cursorStyle === "text" ? "scale(0.8)" : "scale(1)"};
`;
_c = CursorDot;
const CursorCircle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 40px;
  height: 40px;
  border: 2px solid #C0C0C0; 
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transition: all 0.2s ease-out;
  transform: ${(props)=>props.$cursorStyle === "pointer" ? "scale(1.5)" : props.$cursorStyle === "text" ? "scale(1.8)" : props.$cursorStyle === "drag" ? "scale(2)" : "scale(1)"};
  opacity: ${(props)=>props.$cursorStyle === "pointer" ? "0.7" : props.$cursorStyle === "text" ? "0.6" : props.$cursorStyle === "drag" ? "0.25" : "0.4"}; 
  background-color: ${(props)=>props.$cursorStyle === "drag" ? "#C0C0C0" : "transparent"}; 
  border-color: ${(props)=>props.$cursorStyle === "drag" ? "#C0C0C0" : "#C0C0C0"}; 

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 8px;
    height: 2px;
    background-color: #C0C0C0; 
    display: ${(props)=>props.$cursorStyle === "drag" ? "block" : "none"};
  }

  &::before {
    left: 4px;
    transform: translateY(-50%) rotate(135deg);
  }

  &::after {
    right: 4px;
    transform: translateY(-50%) rotate(-135deg);
  }
`;
_c1 = CursorCircle;
const CustomCursor = ()=>{
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isTouchDevice, setIsTouchDevice] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [cursorStyle, setCursorStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("default");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const checkTouchDevice = {
                "CustomCursor.useEffect.checkTouchDevice": ()=>{
                    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0 || "msMaxTouchPoints" in navigator);
                }
            }["CustomCursor.useEffect.checkTouchDevice"];
            checkTouchDevice();
            window.addEventListener("resize", checkTouchDevice);
            if (!isTouchDevice) {
                const moveCursor = {
                    "CustomCursor.useEffect.moveCursor": (e)=>{
                        if (dotRef.current && circleRef.current) {
                            dotRef.current.style.left = `${e.clientX - 4}px`;
                            dotRef.current.style.top = `${e.clientY - 4}px`;
                            requestAnimationFrame({
                                "CustomCursor.useEffect.moveCursor": ()=>{
                                    if (circleRef.current) {
                                        circleRef.current.style.left = `${e.clientX - 20}px`;
                                        circleRef.current.style.top = `${e.clientY - 20}px`;
                                    }
                                }
                            }["CustomCursor.useEffect.moveCursor"]);
                        }
                    }
                }["CustomCursor.useEffect.moveCursor"];
                const handleMouseOver = {
                    "CustomCursor.useEffect.handleMouseOver": (e)=>{
                        const target = e.target;
                        if (target.closest(".carousel-card") || target.closest(".embla__container")) {
                            setCursorStyle("drag");
                        } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.getAttribute("contenteditable") === "true" || target.tagName === "P" || /^H[1-6]$/.test(target.tagName) || target.closest('[contenteditable="true"]') || target.classList.contains("cursor-text")) {
                            setCursorStyle("text");
                        } else if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a") || target.classList.contains("cursor-pointer") || target.role === "button") {
                            setCursorStyle("pointer");
                        } else {
                            setCursorStyle("default");
                        }
                    }
                }["CustomCursor.useEffect.handleMouseOver"];
                document.addEventListener("mousemove", moveCursor);
                document.addEventListener("mouseover", handleMouseOver);
                return ({
                    "CustomCursor.useEffect": ()=>{
                        document.removeEventListener("mousemove", moveCursor);
                        document.removeEventListener("mouseover", handleMouseOver);
                        window.removeEventListener("resize", checkTouchDevice);
                    }
                })["CustomCursor.useEffect"];
            }
        }
    }["CustomCursor.useEffect"], [
        isTouchDevice
    ]);
    if (isTouchDevice) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorDot, {
                ref: dotRef,
                $isCursorHovering: false,
                $cursorStyle: cursorStyle
            }, void 0, false, {
                fileName: "[project]/src/components/common/CustomCursor.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorCircle, {
                ref: circleRef,
                $isCursorHovering: false,
                $cursorStyle: cursorStyle
            }, void 0, false, {
                fileName: "[project]/src/components/common/CustomCursor.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(CustomCursor, "yiMXjxAp2lmQT/nPbe2Ar/OJTL8=");
_c2 = CustomCursor;
const __TURBOPACK__default__export__ = CustomCursor;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "CursorDot");
__turbopack_refresh__.register(_c1, "CursorCircle");
__turbopack_refresh__.register(_c2, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_common_CustomCursor_tsx_f6ba7b._.js.map