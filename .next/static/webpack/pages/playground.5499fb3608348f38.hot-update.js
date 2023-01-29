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

/***/ "./pages/playground.js":
/*!*****************************!*\
  !*** ./pages/playground.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Playground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Playground */ \"./components/Playground/index.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_MessageForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MessageForm */ \"./components/MessageForm/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  gap: 20px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"playground__ButtonWrapper\",\n    componentId: \"sc-58361aef-0\"\n})(_templateObject());\n_c = ButtonWrapper;\nasync function getServerSideProps() {\n    ;\n    ;\n    return {\n        props: {\n            initialMyMonster,\n            initialOtherMonsters\n        }\n    };\n}\nfunction PlaygroundPage() {\n    _s();\n    const [otherMonsters, setOtherMonsters] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialOtherMonsters);\n    const [myMonster, setMyMonster] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialMyMonster);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const focusRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // For Prototyping Purposes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const intervalId = setInterval(()=>{\n            pseudoMovement();\n        }, 1000);\n        return ()=>{\n            clearInterval(intervalId);\n        };\n    }, []);\n    function pseudoMovement() {\n        const updatedMonsters = otherMonsters.map((monster)=>{\n            let updatedMonster = {\n                ...monster,\n                x: Math.floor(Math.random() * 900),\n                y: Math.floor(Math.random() * 900)\n            };\n            return updatedMonster;\n        });\n        setOtherMonsters(updatedMonsters);\n    }\n    // For Prototyping Purposes\n    function handleClick(action) {\n        setMyMonster({\n            ...myMonster,\n            emote: action\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        setMyMonster({\n            ...myMonster,\n            message: value\n        });\n        setValue(\"\");\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                message: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleChange(inputValue) {\n        setValue(inputValue);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        focusRef.current.focus();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Playground__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                focusRef: focusRef,\n                myMonster: myMonster,\n                otherMonsters: otherMonsters\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        action: \"happy\",\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        action: \"heart\",\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        action: \"star\",\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MessageForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onSubmit: handleSubmit,\n                onChange: handleChange,\n                message: myMonster.message,\n                value: value\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cerenakkuec/monster-playground/pages/playground.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(PlaygroundPage, \"zEURRORYCgBNzMAoIIWHwulAya0=\");\n_c1 = PlaygroundPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaygroundPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"ButtonWrapper\");\n$RefreshReg$(_c1, \"PlaygroundPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MzFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9uc3Rlck1ha2VyIGZyb20gXCIuLi91dGlscy9tb25zdGVyTWFrZXJcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQbGF5Z3JvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL1BsYXlncm91bmRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgTWVzc2FnZUZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZUZvcm1cIjtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbmA7XG5cbmNvbnN0IHVzZXJzID0gW3sgdXNlcjogMSB9LCB7IHVzZXI6IDIgfSwgeyB1c2VyOiAzIH1dO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGluaXRpYWxNeU1vbnN0ZXIgPSBtb25zdGVyTWFrZXIoKTtcbiAgY29uc3QgaW5pdGlhbE90aGVyTW9uc3RlcnMgPSB1c2Vycy5tYXAoKHVzZXIpID0+IG1vbnN0ZXJNYWtlcigpKTtcblxuICByZXR1cm4geyBwcm9wczogeyBpbml0aWFsTXlNb25zdGVyLCBpbml0aWFsT3RoZXJNb25zdGVycyB9IH07XG59XG5cbmZ1bmN0aW9uIFBsYXlncm91bmRQYWdlKCkge1xuICBjb25zdCBbb3RoZXJNb25zdGVycywgc2V0T3RoZXJNb25zdGVyc10gPSB1c2VTdGF0ZShpbml0aWFsT3RoZXJNb25zdGVycyk7XG5cbiAgY29uc3QgW215TW9uc3Rlciwgc2V0TXlNb25zdGVyXSA9IHVzZVN0YXRlKGluaXRpYWxNeU1vbnN0ZXIpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBmb2N1c1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBGb3IgUHJvdG90eXBpbmcgUHVycG9zZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgcHNldWRvTW92ZW1lbnQoKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gcHNldWRvTW92ZW1lbnQoKSB7XG4gICAgY29uc3QgdXBkYXRlZE1vbnN0ZXJzID0gb3RoZXJNb25zdGVycy5tYXAoKG1vbnN0ZXIpID0+IHtcbiAgICAgIGxldCB1cGRhdGVkTW9uc3RlciA9IHtcbiAgICAgICAgLi4ubW9uc3RlcixcbiAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwKSxcbiAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB1cGRhdGVkTW9uc3RlcjtcbiAgICB9KTtcblxuICAgIHNldE90aGVyTW9uc3RlcnModXBkYXRlZE1vbnN0ZXJzKTtcbiAgfVxuICAvLyBGb3IgUHJvdG90eXBpbmcgUHVycG9zZXNcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhhY3Rpb24pIHtcbiAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBhY3Rpb24gfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBudWxsIH0pO1xuICAgIH0sIDMwMDApO1xuICAgIGZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBtZXNzYWdlOiB2YWx1ZSB9KTtcbiAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgbWVzc2FnZTogbnVsbCB9KTtcbiAgICB9LCAzMDAwKTtcbiAgICBmb2N1c1JlZi5jdXJyZW50LmZvY3VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoaW5wdXRWYWx1ZSkge1xuICAgIHNldFZhbHVlKGlucHV0VmFsdWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb2N1c1JlZi5jdXJyZW50LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGxheWdyb3VuZFxuICAgICAgICBmb2N1c1JlZj17Zm9jdXNSZWZ9XG4gICAgICAgIG15TW9uc3Rlcj17bXlNb25zdGVyfVxuICAgICAgICBvdGhlck1vbnN0ZXJzPXtvdGhlck1vbnN0ZXJzfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIGFjdGlvbj1cImhhcHB5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgIDxCdXR0b24gYWN0aW9uPVwiaGVhcnRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgPEJ1dHRvbiBhY3Rpb249XCJzdGFyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICA8TWVzc2FnZUZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgbWVzc2FnZT17bXlNb25zdGVyLm1lc3NhZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlncm91bmRQYWdlO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiTGF5b3V0IiwiUGxheWdyb3VuZCIsIkJ1dHRvbiIsIk1lc3NhZ2VGb3JtIiwiQnV0dG9uV3JhcHBlciIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIiwiaW5pdGlhbE15TW9uc3RlciIsImluaXRpYWxPdGhlck1vbnN0ZXJzIiwiUGxheWdyb3VuZFBhZ2UiLCJvdGhlck1vbnN0ZXJzIiwic2V0T3RoZXJNb25zdGVycyIsIm15TW9uc3RlciIsInNldE15TW9uc3RlciIsInZhbHVlIiwic2V0VmFsdWUiLCJmb2N1c1JlZiIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInBzZXVkb01vdmVtZW50IiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZWRNb25zdGVycyIsIm1hcCIsIm1vbnN0ZXIiLCJ1cGRhdGVkTW9uc3RlciIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwiaGFuZGxlQ2xpY2siLCJhY3Rpb24iLCJlbW90ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImlucHV0VmFsdWUiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/playground.js\n"));

/***/ })

});