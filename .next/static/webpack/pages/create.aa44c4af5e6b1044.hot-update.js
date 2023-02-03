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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Monster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Monster */ \"./components/Monster/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CreatePage() {\n    _s();\n    const [randomizedMonster, setRandomizedMonster] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create your monster\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            randomizedMonster && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Monster__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                monster: randomizedMonster\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 14,\n                columnNumber: 29\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: ()=>{\n                    const newRandomizedMonster = (0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                    setRandomizedMonster(newRandomizedMonster);\n                },\n                children: \"Randomize\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(CreatePage, \"MQ96LpRaTfKIcTyf+m5nNFHLCeg=\");\n_c = CreatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePage);\nvar _c;\n$RefreshReg$(_c, \"CreatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBRVM7QUFDQTtBQUNFO0FBQ0s7QUFFakQsU0FBU0ssYUFBYTs7SUFDcEIsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRS9ELHFCQUNFLDhEQUFDRSwwREFBTUE7OzBCQUNMLDhEQUFDTTswQkFBRzs7Ozs7O1lBQ0hGLG1DQUFxQiw4REFBQ0gsMkRBQU9BO2dCQUFDTSxTQUFTSDs7Ozs7OzBCQUN4Qyw4REFBQ0wsMERBQU1BO2dCQUNMUyxTQUFTLElBQU07b0JBQ2IsTUFBTUMsdUJBQXVCUCwrREFBWUE7b0JBQ3pDRyxxQkFBcUJJO2dCQUN2QjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0FqQlNOO0tBQUFBO0FBbUJULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS5qcz8yMmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IE1vbnN0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9uc3RlclwiO1xuaW1wb3J0IG1vbnN0ZXJNYWtlciBmcm9tIFwiLi4vdXRpbHMvbW9uc3Rlck1ha2VyXCI7XG5cbmZ1bmN0aW9uIENyZWF0ZVBhZ2UoKSB7XG4gIGNvbnN0IFtyYW5kb21pemVkTW9uc3Rlciwgc2V0UmFuZG9taXplZE1vbnN0ZXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPkNyZWF0ZSB5b3VyIG1vbnN0ZXI8L2gxPlxuICAgICAge3JhbmRvbWl6ZWRNb25zdGVyICYmIDxNb25zdGVyIG1vbnN0ZXI9e3JhbmRvbWl6ZWRNb25zdGVyfSAvPn1cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1JhbmRvbWl6ZWRNb25zdGVyID0gbW9uc3Rlck1ha2VyKCk7XG4gICAgICAgICAgc2V0UmFuZG9taXplZE1vbnN0ZXIobmV3UmFuZG9taXplZE1vbnN0ZXIpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBSYW5kb21pemVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiTGF5b3V0IiwiTW9uc3RlciIsIm1vbnN0ZXJNYWtlciIsIkNyZWF0ZVBhZ2UiLCJyYW5kb21pemVkTW9uc3RlciIsInNldFJhbmRvbWl6ZWRNb25zdGVyIiwiaDEiLCJtb25zdGVyIiwib25DbGljayIsIm5ld1JhbmRvbWl6ZWRNb25zdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create.js\n"));

/***/ })

});