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

/***/ "./utils/iceCreamCollisionCheck.js":
/*!*****************************************!*\
  !*** ./utils/iceCreamCollisionCheck.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction iceCreamCollisionCheck(myMonsterBox, iceCreamBox) {\n    if (iceCreamBox.left > 0 && iceCreamBox.right <= 1000) {\n        return myMonsterBox.left > iceCreamBox.left - 100 && myMonsterBox.left < iceCreamBox.left + 100 && myMonsterBox.top + 150 > iceCreamBox.top - 100 && myMonsterBox.top < iceCreamBox.top + 100;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (iceCreamCollisionCheck);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9pY2VDcmVhbUNvbGxpc2lvbkNoZWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSx1QkFBdUJDLFlBQVksRUFBRUMsV0FBVyxFQUFFO0lBQ3pELElBQUlBLFlBQVlDLElBQUksR0FBRyxLQUFLRCxZQUFZRSxLQUFLLElBQUksTUFBTTtRQUNyRCxPQUNFSCxhQUFhRSxJQUFJLEdBQUdELFlBQVlDLElBQUksR0FBRyxPQUN2Q0YsYUFBYUUsSUFBSSxHQUFHRCxZQUFZQyxJQUFJLEdBQUcsT0FDdkNGLGFBQWFJLEdBQUcsR0FBRyxNQUFNSCxZQUFZRyxHQUFHLEdBQUcsT0FDM0NKLGFBQWFJLEdBQUcsR0FBR0gsWUFBWUcsR0FBRyxHQUFHO0lBRXpDLENBQUM7QUFDSDtBQUVBLCtEQUFlTCxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaWNlQ3JlYW1Db2xsaXNpb25DaGVjay5qcz8zYWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGljZUNyZWFtQ29sbGlzaW9uQ2hlY2sobXlNb25zdGVyQm94LCBpY2VDcmVhbUJveCkge1xuICBpZiAoaWNlQ3JlYW1Cb3gubGVmdCA+IDAgJiYgaWNlQ3JlYW1Cb3gucmlnaHQgPD0gMTAwMCkge1xuICAgIHJldHVybiAoXG4gICAgICBteU1vbnN0ZXJCb3gubGVmdCA+IGljZUNyZWFtQm94LmxlZnQgLSAxMDAgJiZcbiAgICAgIG15TW9uc3RlckJveC5sZWZ0IDwgaWNlQ3JlYW1Cb3gubGVmdCArIDEwMCAmJlxuICAgICAgbXlNb25zdGVyQm94LnRvcCArIDE1MCA+IGljZUNyZWFtQm94LnRvcCAtIDEwMCAmJlxuICAgICAgbXlNb25zdGVyQm94LnRvcCA8IGljZUNyZWFtQm94LnRvcCArIDEwMFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNlQ3JlYW1Db2xsaXNpb25DaGVjaztcbiJdLCJuYW1lcyI6WyJpY2VDcmVhbUNvbGxpc2lvbkNoZWNrIiwibXlNb25zdGVyQm94IiwiaWNlQ3JlYW1Cb3giLCJsZWZ0IiwicmlnaHQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/iceCreamCollisionCheck.js\n"));

/***/ })

});