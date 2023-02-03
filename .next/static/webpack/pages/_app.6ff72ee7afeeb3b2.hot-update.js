"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Fredoka_One\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"fredoka\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Fredoka_One\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"fredoka\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Covered_By_Your_Grace\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"yourGrace\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Covered_By_Your_Grace\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"yourGrace\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/es/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const fontFredoka = (_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4___default().className);\n    const fontYourGrace = (_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5___default().className);\n    const focusRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [myMonster, setMyMonster] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"myMonster\", {\n        defaultValue: null\n    });\n    function handleRandomizeMonster() {\n        setMyMonster((0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    }\n    function handleClick(action) {\n        setMyMonster({\n            ...myMonster,\n            emote: action\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        setMyMonster({\n            ...myMonster,\n            message: value\n        });\n        setValue(\"\");\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                message: null\n            });\n        }, 3000);\n    }\n    function handleAddIceCream() {\n        setMyMonster({\n            ...myMonster,\n            iceCream: myMonster.iceCream + 1\n        });\n        setMyMonster({\n            ...myMonster,\n            emote: \"get\"\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                onRandomizeMonster: handleRandomizeMonster,\n                onSubmit: handleSubmit,\n                onClick: handleClick,\n                myMonster: myMonster,\n                handleAddIceCream: handleAddIceCream,\n                fontFredoka: fontFredoka,\n                fontYourGrace: fontYourGrace,\n                focusRef: focusRef\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"l3TWZGSZgwe3TAQ/xAbzAOUcTCQ=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVFNQTtBQUNBQztBQVQ4QjtBQUN1QjtBQUNWO0FBQ2xCO0FBUWhCLFNBQVNLLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsY0FBY1QsNktBQWlCO0lBQ3JDLE1BQU1XLGdCQUFnQlYseUxBQW1CO0lBRXpDLE1BQU1XLFdBQVdQLDZDQUFNQSxDQUFDLElBQUk7SUFDNUIsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdYLG1FQUFvQkEsQ0FBQyxhQUFhO1FBQ2xFWSxjQUFjLElBQUk7SUFDcEI7SUFFQSxTQUFTQyx5QkFBeUI7UUFDaENGLGFBQWFWLCtEQUFZQTtJQUMzQjtJQUVBLFNBQVNhLFlBQVlDLE1BQU0sRUFBRTtRQUMzQkosYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRU0sT0FBT0Q7UUFBTztRQUMzQ0UsV0FBVyxJQUFNO1lBQ2ZOLGFBQWE7Z0JBQUUsR0FBR0QsU0FBUztnQkFBRU0sT0FBTyxJQUFJO1lBQUM7UUFDM0MsR0FBRztRQUNIUCxTQUFTUyxPQUFPLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxTQUFTQyxhQUFhQyxLQUFLLEVBQUU7UUFDM0JBLE1BQU1DLGNBQWM7UUFDcEJYLGFBQWE7WUFBRSxHQUFHRCxTQUFTO1lBQUVhLFNBQVNDO1FBQU07UUFDNUNDLFNBQVM7UUFDVFIsV0FBVyxJQUFNO1lBQ2ZOLGFBQWE7Z0JBQUUsR0FBR0QsU0FBUztnQkFBRWEsU0FBUyxJQUFJO1lBQUM7UUFDN0MsR0FBRztJQUNMO0lBRUEsU0FBU0csb0JBQW9CO1FBQzNCZixhQUFhO1lBQUUsR0FBR0QsU0FBUztZQUFFaUIsVUFBVWpCLFVBQVVpQixRQUFRLEdBQUc7UUFBRTtRQUM5RGhCLGFBQWE7WUFBRSxHQUFHRCxTQUFTO1lBQUVNLE9BQU87UUFBTTtRQUMxQ0MsV0FBVyxJQUFNO1lBQ2ZOLGFBQWE7Z0JBQUUsR0FBR0QsU0FBUztnQkFBRU0sT0FBTyxJQUFJO1lBQUM7UUFDM0MsR0FBRztJQUNMO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDakIsK0NBQVdBOzs7OzswQkFDWiw4REFBQ0s7Z0JBQ0UsR0FBR0MsU0FBUztnQkFDYnVCLG9CQUFvQmY7Z0JBQ3BCZ0IsVUFBVVQ7Z0JBQ1ZVLFNBQVNoQjtnQkFDVEosV0FBV0E7Z0JBQ1hnQixtQkFBbUJBO2dCQUNuQnBCLGFBQWFBO2dCQUNiRSxlQUFlQTtnQkFDZkMsVUFBVUE7Ozs7Ozs7O0FBSWxCLENBQUM7R0F0RHVCTjs7UUFLWUgsK0RBQW9CQTs7O0tBTGhDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGVcIjtcbmltcG9ydCBtb25zdGVyTWFrZXIgZnJvbSBcIi4uL3V0aWxzL21vbnN0ZXJNYWtlclwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEZyZWRva2FfT25lIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBDb3ZlcmVkX0J5X1lvdXJfR3JhY2UgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcblxuY29uc3QgZnJlZG9rYSA9IEZyZWRva2FfT25lKHsgd2VpZ2h0OiBcIjQwMFwiLCBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcbmNvbnN0IHlvdXJHcmFjZSA9IENvdmVyZWRfQnlfWW91cl9HcmFjZSh7IHdlaWdodDogXCI0MDBcIiwgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgZm9udEZyZWRva2EgPSBmcmVkb2thLmNsYXNzTmFtZTtcbiAgY29uc3QgZm9udFlvdXJHcmFjZSA9IHlvdXJHcmFjZS5jbGFzc05hbWU7XG5cbiAgY29uc3QgZm9jdXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtteU1vbnN0ZXIsIHNldE15TW9uc3Rlcl0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShcIm15TW9uc3RlclwiLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVSYW5kb21pemVNb25zdGVyKCkge1xuICAgIHNldE15TW9uc3Rlcihtb25zdGVyTWFrZXIoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhhY3Rpb24pIHtcbiAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBhY3Rpb24gfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBudWxsIH0pO1xuICAgIH0sIDMwMDApO1xuICAgIGZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBtZXNzYWdlOiB2YWx1ZSB9KTtcbiAgICBzZXRWYWx1ZShcIlwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgbWVzc2FnZTogbnVsbCB9KTtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZEljZUNyZWFtKCkge1xuICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgaWNlQ3JlYW06IG15TW9uc3Rlci5pY2VDcmVhbSArIDEgfSk7XG4gICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBlbW90ZTogXCJnZXRcIiB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IG51bGwgfSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgb25SYW5kb21pemVNb25zdGVyPXtoYW5kbGVSYW5kb21pemVNb25zdGVyfVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgbXlNb25zdGVyPXtteU1vbnN0ZXJ9XG4gICAgICAgIGhhbmRsZUFkZEljZUNyZWFtPXtoYW5kbGVBZGRJY2VDcmVhbX1cbiAgICAgICAgZm9udEZyZWRva2E9e2ZvbnRGcmVkb2thfVxuICAgICAgICBmb250WW91ckdyYWNlPXtmb250WW91ckdyYWNlfVxuICAgICAgICBmb2N1c1JlZj17Zm9jdXNSZWZ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImZyZWRva2EiLCJ5b3VyR3JhY2UiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwibW9uc3Rlck1ha2VyIiwidXNlUmVmIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZm9udEZyZWRva2EiLCJjbGFzc05hbWUiLCJmb250WW91ckdyYWNlIiwiZm9jdXNSZWYiLCJteU1vbnN0ZXIiLCJzZXRNeU1vbnN0ZXIiLCJkZWZhdWx0VmFsdWUiLCJoYW5kbGVSYW5kb21pemVNb25zdGVyIiwiaGFuZGxlQ2xpY2siLCJhY3Rpb24iLCJlbW90ZSIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVBZGRJY2VDcmVhbSIsImljZUNyZWFtIiwib25SYW5kb21pemVNb25zdGVyIiwib25TdWJtaXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});