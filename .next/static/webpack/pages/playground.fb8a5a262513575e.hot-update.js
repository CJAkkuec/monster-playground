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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction iceCreamCollisionCheck(myMonsterBox, iceCreamBox) {\n    console.log(\"monster\", myMonsterBox);\n    console.log(\"ice\", iceCreamBox);\n    if (iceCreamBox.left > 0 && iceCreamBox.right <= 1000) {\n        console.log(iceCreamBox.left === myMonsterBox.left && iceCreamBox.top === myMonsterBox.top || iceCreamBox.right === myMonsterBox.right && iceCreamBox.bottom === myMonsterBox.bottom);\n    }\n}\n//-----ice\n//-----mon\n/* harmony default export */ __webpack_exports__[\"default\"] = (iceCreamCollisionCheck);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9pY2VDcmVhbUNvbGxpc2lvbkNoZWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxTQUFTQSx1QkFBdUJDLFlBQVksRUFBRUMsV0FBVyxFQUFFO0lBQ3pEQyxRQUFRQyxHQUFHLENBQUMsV0FBV0g7SUFDdkJFLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRjtJQUVuQixJQUFJQSxZQUFZRyxJQUFJLEdBQUcsS0FBS0gsWUFBWUksS0FBSyxJQUFJLE1BQU07UUFDckRILFFBQVFDLEdBQUcsQ0FDVCxZQUFhQyxJQUFJLEtBQUtKLGFBQWFJLElBQUksSUFDckNILFlBQVlLLEdBQUcsS0FBS04sYUFBYU0sR0FBRyxJQUNuQ0wsWUFBWUksS0FBSyxLQUFLTCxhQUFhSyxLQUFLLElBQ3ZDSixZQUFZTSxNQUFNLEtBQUtQLGFBQWFPLE1BQU07SUFFbEQsQ0FBQztBQUNIO0FBRUEsVUFBVTtBQUNWLFVBQVU7QUFFViwrREFBZVIsc0JBQXNCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2ljZUNyZWFtQ29sbGlzaW9uQ2hlY2suanM/M2FkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpY2VDcmVhbUNvbGxpc2lvbkNoZWNrKG15TW9uc3RlckJveCwgaWNlQ3JlYW1Cb3gpIHtcbiAgY29uc29sZS5sb2coXCJtb25zdGVyXCIsIG15TW9uc3RlckJveCk7XG4gIGNvbnNvbGUubG9nKFwiaWNlXCIsIGljZUNyZWFtQm94KTtcblxuICBpZiAoaWNlQ3JlYW1Cb3gubGVmdCA+IDAgJiYgaWNlQ3JlYW1Cb3gucmlnaHQgPD0gMTAwMCkge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgKGljZUNyZWFtQm94LmxlZnQgPT09IG15TW9uc3RlckJveC5sZWZ0ICYmXG4gICAgICAgIGljZUNyZWFtQm94LnRvcCA9PT0gbXlNb25zdGVyQm94LnRvcCkgfHxcbiAgICAgICAgKGljZUNyZWFtQm94LnJpZ2h0ID09PSBteU1vbnN0ZXJCb3gucmlnaHQgJiZcbiAgICAgICAgICBpY2VDcmVhbUJveC5ib3R0b20gPT09IG15TW9uc3RlckJveC5ib3R0b20pXG4gICAgKTtcbiAgfVxufVxuXG4vLy0tLS0taWNlXG4vLy0tLS0tbW9uXG5cbmV4cG9ydCBkZWZhdWx0IGljZUNyZWFtQ29sbGlzaW9uQ2hlY2s7XG4iXSwibmFtZXMiOlsiaWNlQ3JlYW1Db2xsaXNpb25DaGVjayIsIm15TW9uc3RlckJveCIsImljZUNyZWFtQm94IiwiY29uc29sZSIsImxvZyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/iceCreamCollisionCheck.js\n"));

/***/ })

});