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

/***/ "./components/Monster/index.js":
/*!*************************************!*\
  !*** ./components/Monster/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Emote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Emote */ \"./components/Emote/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: calc(\",\n        \"px - 100px);\\n  left: \",\n        \"px;\\n  display: flex;\\n  flex-direction: column-reverse;\\n  align-items: center;\\n  gap: 10px;\\n  width: 100px;\\n  height: 120px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: \",\n        \"px;\\n  left: \",\n        \"px;\\n  width: 100px;\\n  height: 100px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: var(--dark-choc);\\n  font-size: 0.8rem;\\n  background: var(--butter);\\n  padding: 2px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: var(--cream);\\n  color: var(--dark-choc);\\n  border-radius: 10px;\\n  padding: 4px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst UserBox = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Monster__UserBox\",\n    componentId: \"sc-113aa0a1-0\"\n})(_templateObject(), (props)=>props.top, (props)=>props.left);\n_c = UserBox;\nconst UserMonster = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n    displayName: \"Monster__UserMonster\",\n    componentId: \"sc-113aa0a1-1\"\n})(_templateObject1(), (props)=>props.top, (props)=>props.left);\n_c1 = UserMonster;\nconst UserName = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.withConfig({\n    displayName: \"Monster__UserName\",\n    componentId: \"sc-113aa0a1-2\"\n})(_templateObject2());\n_c2 = UserName;\nconst UserMessage = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.withConfig({\n    displayName: \"Monster__UserMessage\",\n    componentId: \"sc-113aa0a1-3\"\n})(_templateObject3());\n_c3 = UserMessage;\nfunction Monster(param) {\n    let { top , left , monster , randomizeMode  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserBox, {\n                top: top,\n                left: left,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserName, {\n                        children: [\n                            monster.name,\n                            \": \",\n                            monster.iceCream\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/components/Monster/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Emote__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        emote: monster.emote\n                    }, void 0, false, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/components/Monster/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    monster.message !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserMessage, {\n                        children: monster.message\n                    }, void 0, false, {\n                        fileName: \"/Users/cerenakkuec/monster-playground/components/Monster/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cerenakkuec/monster-playground/components/Monster/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserMonster, {\n                src: monster.img,\n                top: top,\n                left: left\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/components/Monster/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c4 = Monster;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Monster);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"UserBox\");\n$RefreshReg$(_c1, \"UserMonster\");\n$RefreshReg$(_c2, \"UserName\");\n$RefreshReg$(_c3, \"UserMessage\");\n$RefreshReg$(_c4, \"Monster\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vbnN0ZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNWO0FBRTdCLE1BQU1FLFVBQVVGLHdFQUFVOzs7c0JBRVosQ0FBQ0ksUUFBVUEsTUFBTUMsR0FBRyxFQUN4QixDQUFDRCxRQUFVQSxNQUFNRSxJQUFJO0tBSHpCSjtBQVlOLE1BQU1LLGNBQWNQLHdFQUFVOzs7dUJBRXJCLENBQUNJLFFBQVVBLE1BQU1DLEdBQUcsRUFDbkIsQ0FBQ0QsUUFBVUEsTUFBTUUsSUFBSTtNQUh6QkM7QUFRTixNQUFNRSxXQUFXVCx5RUFBVzs7OztNQUF0QlM7QUFPTixNQUFNRSxjQUFjWCx5RUFBVzs7OztNQUF6Qlc7QUFPTixTQUFTQyxRQUFRLEtBQXFDLEVBQUU7UUFBdkMsRUFBRVAsSUFBRyxFQUFFQyxLQUFJLEVBQUVPLFFBQU8sRUFBRUMsY0FBYSxFQUFFLEdBQXJDO0lBQ2YscUJBQ0U7OzBCQUNFLDhEQUFDWjtnQkFBUUcsS0FBS0E7Z0JBQUtDLE1BQU1BOztrQ0FDdkIsOERBQUNHOzs0QkFDRUksUUFBUUUsSUFBSTs0QkFBQzs0QkFBR0YsUUFBUUcsUUFBUTs7Ozs7OztrQ0FFbkMsOERBQUNmLDhDQUFLQTt3QkFBQ2dCLE9BQU9KLFFBQVFJLEtBQUs7Ozs7OztvQkFDMUJKLFFBQVFLLE9BQU8sS0FBSyxJQUFJLGtCQUN2Qiw4REFBQ1A7a0NBQWFFLFFBQVFLLE9BQU87Ozs7Ozs7Ozs7OzswQkFHakMsOERBQUNYO2dCQUFZWSxLQUFLTixRQUFRTCxHQUFHO2dCQUFFSCxLQUFLQTtnQkFBS0MsTUFBTUE7Ozs7Ozs7O0FBR3JEO01BZlNNO0FBaUJULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9uc3Rlci9pbmRleC5qcz9iNDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRW1vdGUgZnJvbSBcIi4uL0Vtb3RlXCI7XG5cbmNvbnN0IFVzZXJCb3ggPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygkeyhwcm9wcykgPT4gcHJvcHMudG9wfXB4IC0gMTAwcHgpO1xuICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMubGVmdH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbmA7XG5cbmNvbnN0IFVzZXJNb25zdGVyID0gc3R5bGVkLmltZ2BcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7KHByb3BzKSA9PiBwcm9wcy50b3B9cHg7XG4gIGxlZnQ6ICR7KHByb3BzKSA9PiBwcm9wcy5sZWZ0fXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG5gO1xuXG5jb25zdCBVc2VyTmFtZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogdmFyKC0tZGFyay1jaG9jKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRlcik7XG4gIHBhZGRpbmc6IDJweDtcbmA7XG5cbmNvbnN0IFVzZXJNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IHZhcigtLWNyZWFtKTtcbiAgY29sb3I6IHZhcigtLWRhcmstY2hvYyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDRweDtcbmA7XG5cbmZ1bmN0aW9uIE1vbnN0ZXIoeyB0b3AsIGxlZnQsIG1vbnN0ZXIsIHJhbmRvbWl6ZU1vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VXNlckJveCB0b3A9e3RvcH0gbGVmdD17bGVmdH0+XG4gICAgICAgIDxVc2VyTmFtZT5cbiAgICAgICAgICB7bW9uc3Rlci5uYW1lfToge21vbnN0ZXIuaWNlQ3JlYW19XG4gICAgICAgIDwvVXNlck5hbWU+XG4gICAgICAgIDxFbW90ZSBlbW90ZT17bW9uc3Rlci5lbW90ZX0gLz5cbiAgICAgICAge21vbnN0ZXIubWVzc2FnZSAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPFVzZXJNZXNzYWdlPnttb25zdGVyLm1lc3NhZ2V9PC9Vc2VyTWVzc2FnZT5cbiAgICAgICAgKX1cbiAgICAgIDwvVXNlckJveD5cbiAgICAgIDxVc2VyTW9uc3RlciBzcmM9e21vbnN0ZXIuaW1nfSB0b3A9e3RvcH0gbGVmdD17bGVmdH0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9uc3RlcjtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJFbW90ZSIsIlVzZXJCb3giLCJkaXYiLCJwcm9wcyIsInRvcCIsImxlZnQiLCJVc2VyTW9uc3RlciIsImltZyIsIlVzZXJOYW1lIiwic3BhbiIsIlVzZXJNZXNzYWdlIiwiTW9uc3RlciIsIm1vbnN0ZXIiLCJyYW5kb21pemVNb2RlIiwibmFtZSIsImljZUNyZWFtIiwiZW1vdGUiLCJtZXNzYWdlIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Monster/index.js\n"));

/***/ })

});