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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction iceCreamCollisionCheck(myMonsterBox, iceCreamBox) {\n    return iceCreamBox.left > 0 && iceCreamBox.left > myMonsterBox.left + 20 || iceCreamBox.right > 0 && iceCreamBox.right > myMonsterBox.right + 20 || iceCreamBox.top > 0 && iceCreamBox.top > myMonsterBox.top + 20 || iceCreamBox.bottom > 0 && iceCreamBox.bottom > myMonsterBox.bottom + 20;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (iceCreamCollisionCheck);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9pY2VDcmVhbUNvbGxpc2lvbkNoZWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSx1QkFBdUJDLFlBQVksRUFBRUMsV0FBVyxFQUFFO0lBQ3pELE9BQ0UsWUFBYUMsSUFBSSxHQUFHLEtBQUtELFlBQVlDLElBQUksR0FBR0YsYUFBYUUsSUFBSSxHQUFHLE1BQy9ERCxZQUFZRSxLQUFLLEdBQUcsS0FBS0YsWUFBWUUsS0FBSyxHQUFHSCxhQUFhRyxLQUFLLEdBQUcsTUFDbEVGLFlBQVlHLEdBQUcsR0FBRyxLQUFLSCxZQUFZRyxHQUFHLEdBQUdKLGFBQWFJLEdBQUcsR0FBRyxNQUM1REgsWUFBWUksTUFBTSxHQUFHLEtBQUtKLFlBQVlJLE1BQU0sR0FBR0wsYUFBYUssTUFBTSxHQUFHO0FBRTFFO0FBRUEsK0RBQWVOLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9pY2VDcmVhbUNvbGxpc2lvbkNoZWNrLmpzPzNhZDYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaWNlQ3JlYW1Db2xsaXNpb25DaGVjayhteU1vbnN0ZXJCb3gsIGljZUNyZWFtQm94KSB7XG4gIHJldHVybiAoXG4gICAgKGljZUNyZWFtQm94LmxlZnQgPiAwICYmIGljZUNyZWFtQm94LmxlZnQgPiBteU1vbnN0ZXJCb3gubGVmdCArIDIwKSB8fFxuICAgIChpY2VDcmVhbUJveC5yaWdodCA+IDAgJiYgaWNlQ3JlYW1Cb3gucmlnaHQgPiBteU1vbnN0ZXJCb3gucmlnaHQgKyAyMCkgfHxcbiAgICAoaWNlQ3JlYW1Cb3gudG9wID4gMCAmJiBpY2VDcmVhbUJveC50b3AgPiBteU1vbnN0ZXJCb3gudG9wICsgMjApIHx8XG4gICAgKGljZUNyZWFtQm94LmJvdHRvbSA+IDAgJiYgaWNlQ3JlYW1Cb3guYm90dG9tID4gbXlNb25zdGVyQm94LmJvdHRvbSArIDIwKVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpY2VDcmVhbUNvbGxpc2lvbkNoZWNrO1xuIl0sIm5hbWVzIjpbImljZUNyZWFtQ29sbGlzaW9uQ2hlY2siLCJteU1vbnN0ZXJCb3giLCJpY2VDcmVhbUJveCIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/iceCreamCollisionCheck.js\n"));

/***/ })

});