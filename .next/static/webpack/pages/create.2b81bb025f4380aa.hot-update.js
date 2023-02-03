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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _components_Monster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Monster */ \"./components/Monster/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction CreatePage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initialRandomizedMonster1 = (0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    }, []);\n    const [randomizedMonster, setRandomizedMonster] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialRandomizedMonster);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create your monster\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Monster__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                monster: randomizedMonster\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onClick: ()=>{\n                    const newRandomizedMonster = (0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                    setRandomizedMonster(newRandomizedMonster);\n                },\n                children: \"Randomize\"\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cerenakkuec/monster-playground/pages/create.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(CreatePage, \"H0N9vYTvthKPkUF9GZ+aL5NM1i4=\");\n_c = CreatePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePage);\nvar _c;\n$RefreshReg$(_c, \"CreatePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBRUY7QUFDQTtBQUNFO0FBQ0s7QUFFakQsU0FBU00sYUFBYTs7SUFDcEJOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyw0QkFBMkJGLCtEQUFZQTtJQUMvQyxHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNHLG1CQUFtQkMscUJBQXFCLEdBQUdSLCtDQUFRQSxDQUN4RE07SUFHRixxQkFDRSw4REFBQ0osMERBQU1BOzswQkFDTCw4REFBQ087MEJBQUc7Ozs7OzswQkFDSiw4REFBQ04sMkRBQU9BO2dCQUFDTyxTQUFTSDs7Ozs7OzBCQUNsQiw4REFBQ04sMERBQU1BO2dCQUNMVSxTQUFTLElBQU07b0JBQ2IsTUFBTUMsdUJBQXVCUiwrREFBWUE7b0JBQ3pDSSxxQkFBcUJJO2dCQUN2QjswQkFDRDs7Ozs7Ozs7Ozs7O0FBS1A7R0F2QlNQO0tBQUFBO0FBeUJULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS5qcz8yMmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb25zdGVyXCI7XG5pbXBvcnQgbW9uc3Rlck1ha2VyIGZyb20gXCIuLi91dGlscy9tb25zdGVyTWFrZXJcIjtcblxuZnVuY3Rpb24gQ3JlYXRlUGFnZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsUmFuZG9taXplZE1vbnN0ZXIgPSBtb25zdGVyTWFrZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtyYW5kb21pemVkTW9uc3Rlciwgc2V0UmFuZG9taXplZE1vbnN0ZXJdID0gdXNlU3RhdGUoXG4gICAgaW5pdGlhbFJhbmRvbWl6ZWRNb25zdGVyXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPkNyZWF0ZSB5b3VyIG1vbnN0ZXI8L2gxPlxuICAgICAgPE1vbnN0ZXIgbW9uc3Rlcj17cmFuZG9taXplZE1vbnN0ZXJ9IC8+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdSYW5kb21pemVkTW9uc3RlciA9IG1vbnN0ZXJNYWtlcigpO1xuICAgICAgICAgIHNldFJhbmRvbWl6ZWRNb25zdGVyKG5ld1JhbmRvbWl6ZWRNb25zdGVyKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgUmFuZG9taXplXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkxheW91dCIsIk1vbnN0ZXIiLCJtb25zdGVyTWFrZXIiLCJDcmVhdGVQYWdlIiwiaW5pdGlhbFJhbmRvbWl6ZWRNb25zdGVyIiwicmFuZG9taXplZE1vbnN0ZXIiLCJzZXRSYW5kb21pemVkTW9uc3RlciIsImgxIiwibW9uc3RlciIsIm9uQ2xpY2siLCJuZXdSYW5kb21pemVkTW9uc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create.js\n"));

/***/ })

});