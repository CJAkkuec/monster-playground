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

/***/ "./utils/getBoundingBox.js":
/*!*********************************!*\
  !*** ./utils/getBoundingBox.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction getBoundingBox(entityPosition, entityWidth, entityHeight) {\n    return {\n        top: entityPosition.y,\n        left: entityPosition.x,\n        right: 1000 - entityPosition.x + entityWidth,\n        bottom: 1000 - entityPosition.y + entityHeight\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBoundingBox);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRCb3VuZGluZ0JveC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsU0FBU0EsZUFBZUMsY0FBYyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtJQUNqRSxPQUFPO1FBQ0xDLEtBQUtILGVBQWVJLENBQUM7UUFDckJDLE1BQU1MLGVBQWVNLENBQUM7UUFDdEJDLE9BQU8sT0FBT1AsZUFBZU0sQ0FBQyxHQUFHTDtRQUNqQ08sUUFBUSxPQUFPUixlQUFlSSxDQUFDLEdBQUdGO0lBQ3BDO0FBQ0Y7QUFFQSwrREFBZUgsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9nZXRCb3VuZGluZ0JveC5qcz80ZDM1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldEJvdW5kaW5nQm94KGVudGl0eVBvc2l0aW9uLCBlbnRpdHlXaWR0aCwgZW50aXR5SGVpZ2h0KSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiBlbnRpdHlQb3NpdGlvbi55LFxuICAgIGxlZnQ6IGVudGl0eVBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IDEwMDAgLSBlbnRpdHlQb3NpdGlvbi54ICsgZW50aXR5V2lkdGgsXG4gICAgYm90dG9tOiAxMDAwIC0gZW50aXR5UG9zaXRpb24ueSArIGVudGl0eUhlaWdodCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Qm91bmRpbmdCb3g7XG4iXSwibmFtZXMiOlsiZ2V0Qm91bmRpbmdCb3giLCJlbnRpdHlQb3NpdGlvbiIsImVudGl0eVdpZHRoIiwiZW50aXR5SGVpZ2h0IiwidG9wIiwieSIsImxlZnQiLCJ4IiwicmlnaHQiLCJib3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/getBoundingBox.js\n"));

/***/ })

});