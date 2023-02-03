"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playground",{

/***/ "./components/Playground/index.js":
/*!****************************************!*\
  !*** ./components/Playground/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Monster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Monster */ \"./components/Monster/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useMonsterMovement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/useMonsterMovement */ \"./utils/useMonsterMovement.js\");\n/* harmony import */ var _utils_getBoundingBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/getBoundingBox */ \"./utils/getBoundingBox.js\");\n/* harmony import */ var _utils_iceCreamCollisionCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/iceCreamCollisionCheck */ \"./utils/iceCreamCollisionCheck.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: relative;\\n  background-color: var(--fresh);\\n  outline: 10px double var(--fresh);\\n  width: 1000px;\\n  height: 1000px;\\n  box-shadow: inset 0px 5px 20px 5px var(--dark-choc);\\n\\n  &:focus {\\n    outline: 10px double var(--fresh);\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  background-image: url(./assets/graphics/carpet_fresh.png);\\n  width: 1000px;\\n  height: 1000px;\\n  top: 0;\\n  left: 0;\\n  opacity: 0.3;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: \",\n        \"px;\\n  left: \",\n        \"px;\\n  font-size: 3rem;\\n  width: 50px;\\n  height: 50px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MonsterPlayground = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"Playground__MonsterPlayground\",\n    componentId: \"sc-de5a293e-0\"\n})(_templateObject());\n_c = MonsterPlayground;\nconst MonsterWash = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"Playground__MonsterWash\",\n    componentId: \"sc-de5a293e-1\"\n})(_templateObject1());\n_c1 = MonsterWash;\nconst IceCream = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"Playground__IceCream\",\n    componentId: \"sc-de5a293e-2\"\n})(_templateObject2(), (param)=>{\n    let { top  } = param;\n    return top;\n}, (param)=>{\n    let { left  } = param;\n    return left;\n});\n_c2 = IceCream;\nfunction Playground(param) {\n    let { focusRef , myMonster , addIceCream  } = param;\n    _s();\n    const [iceCreamPosition, setIceCreamPosition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        x: -1000,\n        y: -1000\n    });\n    const playgroundWidth = 1000;\n    const playgroundHeight = 1000;\n    const monsterWidth = myMonster.width;\n    const monsterHeight = myMonster.height;\n    const iceCreamWidth = 50;\n    const iceCreamHeight = 50;\n    const { monsterPosition , handleKeyDown  } = (0,_utils_useMonsterMovement__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(myMonster, monsterWidth, monsterHeight, playgroundWidth, playgroundHeight);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        let intervalId;\n        const timeoutId = setTimeout(()=>{\n            setIceCreamPosition({\n                x: Math.floor(Math.random() * 900),\n                y: Math.floor(Math.random() * 900)\n            });\n            intervalId = setInterval(()=>{\n                setIceCreamPosition({\n                    x: -1000,\n                    y: -1000\n                });\n                setTimeout(()=>{\n                    setIceCreamPosition({\n                        x: Math.floor(Math.random() * 900),\n                        y: Math.floor(Math.random() * 900)\n                    });\n                }, 10000);\n            }, 20000);\n        }, 10000);\n        return ()=>{\n            clearTimeout(timeoutId);\n            clearInterval(intervalId);\n        };\n    }, []);\n    const myMonsterBox = (0,_utils_getBoundingBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(monsterPosition, monsterWidth, monsterHeight);\n    const iceCreamBox = (0,_utils_getBoundingBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(iceCreamPosition, iceCreamWidth, iceCreamHeight);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const check = (0,_utils_iceCreamCollisionCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(myMonsterBox, iceCreamBox, iceCreamWidth);\n        if (check) {\n            setIceCreamPosition({\n                x: -1000,\n                y: -1000\n            });\n            addIceCream();\n        }\n    }, [\n        monsterPosition,\n        iceCreamPosition\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MonsterPlayground, {\n        ref: focusRef,\n        onKeyDown: handleKeyDown,\n        tabIndex: \"0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MonsterWash, {}, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/components/Playground/index.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(IceCream, {\n                top: iceCreamPosition.y,\n                left: iceCreamPosition.x,\n                children: \"\\uD83C\\uDF66\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/components/Playground/index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Monster__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                top: monsterPosition.y,\n                left: monsterPosition.x,\n                myMonster: myMonster\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/components/Playground/index.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cerenakkuec/monster-playground/components/Playground/index.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s(Playground, \"3ECyFPsnwbcsp1RWO4sVRGzUXhE=\", false, function() {\n    return [\n        _utils_useMonsterMovement__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c3 = Playground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"MonsterPlayground\");\n$RefreshReg$(_c1, \"MonsterWash\");\n$RefreshReg$(_c2, \"IceCream\");\n$RefreshReg$(_c3, \"Playground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXlncm91bmQvaW5kZXguanM/MzYxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE1vbnN0ZXIgZnJvbSBcIi4uL01vbnN0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VNb25zdGVyTW92ZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL3VzZU1vbnN0ZXJNb3ZlbWVudFwiO1xuaW1wb3J0IGdldEJvdW5kaW5nQm94IGZyb20gXCIuLi8uLi91dGlscy9nZXRCb3VuZGluZ0JveFwiO1xuaW1wb3J0IGljZUNyZWFtQ29sbGlzaW9uQ2hlY2sgZnJvbSBcIi4uLy4uL3V0aWxzL2ljZUNyZWFtQ29sbGlzaW9uQ2hlY2tcIjtcblxuY29uc3QgTW9uc3RlclBsYXlncm91bmQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZyZXNoKTtcbiAgb3V0bGluZTogMTBweCBkb3VibGUgdmFyKC0tZnJlc2gpO1xuICB3aWR0aDogMTAwMHB4O1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCAyMHB4IDVweCB2YXIoLS1kYXJrLWNob2MpO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDEwcHggZG91YmxlIHZhcigtLWZyZXNoKTtcbiAgfVxuYDtcblxuY29uc3QgTW9uc3Rlcldhc2ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9ncmFwaGljcy9jYXJwZXRfZnJlc2gucG5nKTtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC4zO1xuYDtcblxuY29uc3QgSWNlQ3JlYW0gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHsoeyB0b3AgfSkgPT4gdG9wfXB4O1xuICBsZWZ0OiAkeyh7IGxlZnQgfSkgPT4gbGVmdH1weDtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuYDtcblxuZnVuY3Rpb24gUGxheWdyb3VuZCh7IGZvY3VzUmVmLCBteU1vbnN0ZXIsIGFkZEljZUNyZWFtIH0pIHtcbiAgY29uc3QgW2ljZUNyZWFtUG9zaXRpb24sIHNldEljZUNyZWFtUG9zaXRpb25dID0gdXNlU3RhdGUoe1xuICAgIHg6IC0xMDAwLFxuICAgIHk6IC0xMDAwLFxuICB9KTtcblxuICBjb25zdCBwbGF5Z3JvdW5kV2lkdGggPSAxMDAwO1xuICBjb25zdCBwbGF5Z3JvdW5kSGVpZ2h0ID0gMTAwMDtcbiAgY29uc3QgbW9uc3RlcldpZHRoID0gbXlNb25zdGVyLndpZHRoO1xuICBjb25zdCBtb25zdGVySGVpZ2h0ID0gbXlNb25zdGVyLmhlaWdodDtcbiAgY29uc3QgaWNlQ3JlYW1XaWR0aCA9IDUwO1xuICBjb25zdCBpY2VDcmVhbUhlaWdodCA9IDUwO1xuXG4gIGNvbnN0IHsgbW9uc3RlclBvc2l0aW9uLCBoYW5kbGVLZXlEb3duIH0gPSB1c2VNb25zdGVyTW92ZW1lbnQoXG4gICAgbXlNb25zdGVyLFxuICAgIG1vbnN0ZXJXaWR0aCxcbiAgICBtb25zdGVySGVpZ2h0LFxuICAgIHBsYXlncm91bmRXaWR0aCxcbiAgICBwbGF5Z3JvdW5kSGVpZ2h0XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWxJZDtcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEljZUNyZWFtUG9zaXRpb24oe1xuICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDApLFxuICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDApLFxuICAgICAgfSk7XG4gICAgICBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRJY2VDcmVhbVBvc2l0aW9uKHsgeDogLTEwMDAsIHk6IC0xMDAwIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRJY2VDcmVhbVBvc2l0aW9uKHtcbiAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCksXG4gICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDApLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgICB9LCAyMDAwMCk7XG4gICAgfSwgMTAwMDApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG15TW9uc3RlckJveCA9IGdldEJvdW5kaW5nQm94KFxuICAgIG1vbnN0ZXJQb3NpdGlvbixcbiAgICBtb25zdGVyV2lkdGgsXG4gICAgbW9uc3RlckhlaWdodFxuICApO1xuICBjb25zdCBpY2VDcmVhbUJveCA9IGdldEJvdW5kaW5nQm94KFxuICAgIGljZUNyZWFtUG9zaXRpb24sXG4gICAgaWNlQ3JlYW1XaWR0aCxcbiAgICBpY2VDcmVhbUhlaWdodFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2sgPSBpY2VDcmVhbUNvbGxpc2lvbkNoZWNrKFxuICAgICAgbXlNb25zdGVyQm94LFxuICAgICAgaWNlQ3JlYW1Cb3gsXG4gICAgICBpY2VDcmVhbVdpZHRoXG4gICAgKTtcblxuICAgIGlmIChjaGVjaykge1xuICAgICAgc2V0SWNlQ3JlYW1Qb3NpdGlvbih7IHg6IC0xMDAwLCB5OiAtMTAwMCB9KTtcbiAgICAgIGFkZEljZUNyZWFtKCk7XG4gICAgfVxuICB9LCBbbW9uc3RlclBvc2l0aW9uLCBpY2VDcmVhbVBvc2l0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9uc3RlclBsYXlncm91bmQgcmVmPXtmb2N1c1JlZn0gb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSB0YWJJbmRleD1cIjBcIj5cbiAgICAgIDxNb25zdGVyV2FzaCAvPlxuICAgICAgPEljZUNyZWFtIHRvcD17aWNlQ3JlYW1Qb3NpdGlvbi55fSBsZWZ0PXtpY2VDcmVhbVBvc2l0aW9uLnh9PlxuICAgICAgICDwn42mXG4gICAgICA8L0ljZUNyZWFtPlxuICAgICAgPE1vbnN0ZXJcbiAgICAgICAgdG9wPXttb25zdGVyUG9zaXRpb24ueX1cbiAgICAgICAgbGVmdD17bW9uc3RlclBvc2l0aW9uLnh9XG4gICAgICAgIG15TW9uc3Rlcj17bXlNb25zdGVyfVxuICAgICAgLz5cbiAgICA8L01vbnN0ZXJQbGF5Z3JvdW5kPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIk1vbnN0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1vbnN0ZXJNb3ZlbWVudCIsImdldEJvdW5kaW5nQm94IiwiaWNlQ3JlYW1Db2xsaXNpb25DaGVjayIsIk1vbnN0ZXJQbGF5Z3JvdW5kIiwiZGl2IiwiTW9uc3Rlcldhc2giLCJJY2VDcmVhbSIsInRvcCIsImxlZnQiLCJQbGF5Z3JvdW5kIiwiZm9jdXNSZWYiLCJteU1vbnN0ZXIiLCJhZGRJY2VDcmVhbSIsImljZUNyZWFtUG9zaXRpb24iLCJzZXRJY2VDcmVhbVBvc2l0aW9uIiwieCIsInkiLCJwbGF5Z3JvdW5kV2lkdGgiLCJwbGF5Z3JvdW5kSGVpZ2h0IiwibW9uc3RlcldpZHRoIiwid2lkdGgiLCJtb25zdGVySGVpZ2h0IiwiaGVpZ2h0IiwiaWNlQ3JlYW1XaWR0aCIsImljZUNyZWFtSGVpZ2h0IiwibW9uc3RlclBvc2l0aW9uIiwiaGFuZGxlS2V5RG93biIsImludGVydmFsSWQiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwibXlNb25zdGVyQm94IiwiaWNlQ3JlYW1Cb3giLCJjaGVjayIsInJlZiIsIm9uS2V5RG93biIsInRhYkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Playground/index.js\n"));

/***/ })

});