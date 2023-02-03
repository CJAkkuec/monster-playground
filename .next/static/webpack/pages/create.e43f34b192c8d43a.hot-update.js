"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Monster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Monster */ \"./components/Monster/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  text-decoration: none;\\n  font-size: 2rem;\\n  color: var(--cream);\\n  background: var(--gum);\\n  box-shadow: 5px 5px 0px #bd4656;\\n  padding: 1rem 2rem;\\n  width: fit-content;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nconst StyledLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_5___default())).withConfig({\n    displayName: \"create__StyledLink\",\n    componentId: \"sc-a6fb2c4d-0\"\n})(_templateObject());\n_c = StyledLink;\nfunction CreatePage(param) {\n    let { handleRandomizeMonster , randomizedMonster  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Create your monster\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            randomizedMonster && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Monster__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                monster: randomizedMonster,\n                randomizeMode: true\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: handleRandomizeMonster,\n                action: \"Get\",\n                children: \"GET\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledLink, {\n                href: \"/create\",\n                children: \"Play\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c1 = CreatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledLink\");\n$RefreshReg$(_c1, \"CreatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQUEwQztBQUNBO0FBQ0U7QUFDZjtBQUNVO0FBRXZDLE1BQU1LLGFBQWFELDZEQUFNQSxDQUFDRCxrREFBSUE7Ozs7S0FBeEJFO0FBVU4sU0FBU0MsV0FBVyxLQUE2QyxFQUFFO1FBQS9DLEVBQUVDLHVCQUFzQixFQUFFQyxrQkFBaUIsRUFBRSxHQUE3QztJQUNsQixxQkFDRSw4REFBQ1AsMERBQU1BOzswQkFDTCw4REFBQ1E7MEJBQUc7Ozs7OztZQUNIRCxtQ0FDQyw4REFBQ04sMkRBQU9BO2dCQUFDUSxTQUFTRjtnQkFBbUJHLGFBQWE7Ozs7OzswQkFFcEQsOERBQUNYLDBEQUFNQTtnQkFBQ1ksU0FBU0w7Z0JBQXdCTSxRQUFROzBCQUFPOzs7Ozs7MEJBR3hELDhEQUFDUjtnQkFBV1MsTUFBSzswQkFBVTs7Ozs7Ozs7Ozs7O0FBR2pDO01BYlNSO0FBZVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzPzIyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb25zdGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHZhcigtLWNyZWFtKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3VtKTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwcHggI2JkNDY1NjtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5gO1xuXG5mdW5jdGlvbiBDcmVhdGVQYWdlKHsgaGFuZGxlUmFuZG9taXplTW9uc3RlciwgcmFuZG9taXplZE1vbnN0ZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+Q3JlYXRlIHlvdXIgbW9uc3RlcjwvaDE+XG4gICAgICB7cmFuZG9taXplZE1vbnN0ZXIgJiYgKFxuICAgICAgICA8TW9uc3RlciBtb25zdGVyPXtyYW5kb21pemVkTW9uc3Rlcn0gcmFuZG9taXplTW9kZSAvPlxuICAgICAgKX1cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmFuZG9taXplTW9uc3Rlcn0gYWN0aW9uPXtcIkdldFwifT5cbiAgICAgICAgR0VUXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxTdHlsZWRMaW5rIGhyZWY9XCIvY3JlYXRlXCI+UGxheTwvU3R5bGVkTGluaz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUGFnZTtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJMYXlvdXQiLCJNb25zdGVyIiwiTGluayIsInN0eWxlZCIsIlN0eWxlZExpbmsiLCJDcmVhdGVQYWdlIiwiaGFuZGxlUmFuZG9taXplTW9uc3RlciIsInJhbmRvbWl6ZWRNb25zdGVyIiwiaDEiLCJtb25zdGVyIiwicmFuZG9taXplTW9kZSIsIm9uQ2xpY2siLCJhY3Rpb24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create.js\n"));

/***/ })

});