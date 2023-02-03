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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Fredoka_One\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"fredoka\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Fredoka_One\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"fredoka\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Covered_By_Your_Grace\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"yourGrace\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Covered_By_Your_Grace\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"yourGrace\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/es/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const fontFredoka = (_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_4___default().className);\n    const fontYourGrace = (_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_5___default().className);\n    const focusRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [myMonster, setMyMonster] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"myMonster\", {\n        defaultValue: null\n    });\n    const [value, setValue] = useState(\"\");\n    function handleChange(inputValue) {\n        setValue(inputValue);\n    }\n    function handleRandomizeMonster() {\n        setMyMonster((0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    }\n    function handleClick(action) {\n        setMyMonster({\n            ...myMonster,\n            emote: action\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        setMyMonster({\n            ...myMonster,\n            message: value\n        });\n        setValue(\"\");\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                message: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleAddIceCream() {\n        setMyMonster({\n            ...myMonster,\n            iceCream: myMonster.iceCream + 1\n        });\n        setMyMonster({\n            ...myMonster,\n            emote: \"get\"\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                onRandomizeMonster: handleRandomizeMonster,\n                onSubmit: handleSubmit,\n                onClick: handleClick,\n                myMonster: myMonster,\n                handleAddIceCream: handleAddIceCream,\n                fontFredoka: fontFredoka,\n                fontYourGrace: fontYourGrace,\n                focusRef: focusRef,\n                handleChange: handleChange,\n                value: value\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"IOWyk7GqcyHLFk4j7rKl//Z5q94=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVFNQTtBQUNBQztBQVQ4QjtBQUN1QjtBQUNWO0FBQ2xCO0FBUWhCLFNBQVNLLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsY0FBY1QsNktBQWlCO0lBQ3JDLE1BQU1XLGdCQUFnQlYseUxBQW1CO0lBRXpDLE1BQU1XLFdBQVdQLDZDQUFNQSxDQUFDLElBQUk7SUFDNUIsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdYLG1FQUFvQkEsQ0FBQyxhQUFhO1FBQ2xFWSxjQUFjLElBQUk7SUFDcEI7SUFDQSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBUztJQUVuQyxTQUFTQyxhQUFhQyxVQUFVLEVBQUU7UUFDaENILFNBQVNHO0lBQ1g7SUFFQSxTQUFTQyx5QkFBeUI7UUFDaENQLGFBQWFWLCtEQUFZQTtJQUMzQjtJQUVBLFNBQVNrQixZQUFZQyxNQUFNLEVBQUU7UUFDM0JULGFBQWE7WUFBRSxHQUFHRCxTQUFTO1lBQUVXLE9BQU9EO1FBQU87UUFDM0NFLFdBQVcsSUFBTTtZQUNmWCxhQUFhO2dCQUFFLEdBQUdELFNBQVM7Z0JBQUVXLE9BQU8sSUFBSTtZQUFDO1FBQzNDLEdBQUc7UUFDSFosU0FBU2MsT0FBTyxDQUFDQyxLQUFLO0lBQ3hCO0lBRUEsU0FBU0MsYUFBYUMsS0FBSyxFQUFFO1FBQzNCQSxNQUFNQyxjQUFjO1FBQ3BCaEIsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRWtCLFNBQVNmO1FBQU07UUFDNUNDLFNBQVM7UUFDVFEsV0FBVyxJQUFNO1lBQ2ZYLGFBQWE7Z0JBQUUsR0FBR0QsU0FBUztnQkFBRWtCLFNBQVMsSUFBSTtZQUFDO1FBQzdDLEdBQUc7UUFDSG5CLFNBQVNjLE9BQU8sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLFNBQVNLLG9CQUFvQjtRQUMzQmxCLGFBQWE7WUFBRSxHQUFHRCxTQUFTO1lBQUVvQixVQUFVcEIsVUFBVW9CLFFBQVEsR0FBRztRQUFFO1FBQzlEbkIsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRVcsT0FBTztRQUFNO1FBQzFDQyxXQUFXLElBQU07WUFDZlgsYUFBYTtnQkFBRSxHQUFHRCxTQUFTO2dCQUFFVyxPQUFPLElBQUk7WUFBQztRQUMzQyxHQUFHO0lBQ0w7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN0QiwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDSztnQkFDRSxHQUFHQyxTQUFTO2dCQUNiMEIsb0JBQW9CYjtnQkFDcEJjLFVBQVVQO2dCQUNWUSxTQUFTZDtnQkFDVFQsV0FBV0E7Z0JBQ1htQixtQkFBbUJBO2dCQUNuQnZCLGFBQWFBO2dCQUNiRSxlQUFlQTtnQkFDZkMsVUFBVUE7Z0JBQ1ZPLGNBQWNBO2dCQUNkSCxPQUFPQTs7Ozs7Ozs7QUFJZixDQUFDO0dBOUR1QlY7O1FBS1lILCtEQUFvQkE7OztLQUxoQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSBcInVzZS1sb2NhbC1zdG9yYWdlLXN0YXRlXCI7XG5pbXBvcnQgbW9uc3Rlck1ha2VyIGZyb20gXCIuLi91dGlscy9tb25zdGVyTWFrZXJcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBGcmVkb2thX09uZSB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgQ292ZXJlZF9CeV9Zb3VyX0dyYWNlIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IGZyZWRva2EgPSBGcmVkb2thX09uZSh7IHdlaWdodDogXCI0MDBcIiwgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5jb25zdCB5b3VyR3JhY2UgPSBDb3ZlcmVkX0J5X1lvdXJfR3JhY2UoeyB3ZWlnaHQ6IFwiNDAwXCIsIHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGZvbnRGcmVkb2thID0gZnJlZG9rYS5jbGFzc05hbWU7XG4gIGNvbnN0IGZvbnRZb3VyR3JhY2UgPSB5b3VyR3JhY2UuY2xhc3NOYW1lO1xuXG4gIGNvbnN0IGZvY3VzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbXlNb25zdGVyLCBzZXRNeU1vbnN0ZXJdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXCJteU1vbnN0ZXJcIiwge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgfSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGlucHV0VmFsdWUpIHtcbiAgICBzZXRWYWx1ZShpbnB1dFZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJhbmRvbWl6ZU1vbnN0ZXIoKSB7XG4gICAgc2V0TXlNb25zdGVyKG1vbnN0ZXJNYWtlcigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGFjdGlvbikge1xuICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IGFjdGlvbiB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IG51bGwgfSk7XG4gICAgfSwgMzAwMCk7XG4gICAgZm9jdXNSZWYuY3VycmVudC5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIG1lc3NhZ2U6IHZhbHVlIH0pO1xuICAgIHNldFZhbHVlKFwiXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBtZXNzYWdlOiBudWxsIH0pO1xuICAgIH0sIDMwMDApO1xuICAgIGZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZEljZUNyZWFtKCkge1xuICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgaWNlQ3JlYW06IG15TW9uc3Rlci5pY2VDcmVhbSArIDEgfSk7XG4gICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBlbW90ZTogXCJnZXRcIiB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IG51bGwgfSk7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAgb25SYW5kb21pemVNb25zdGVyPXtoYW5kbGVSYW5kb21pemVNb25zdGVyfVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgbXlNb25zdGVyPXtteU1vbnN0ZXJ9XG4gICAgICAgIGhhbmRsZUFkZEljZUNyZWFtPXtoYW5kbGVBZGRJY2VDcmVhbX1cbiAgICAgICAgZm9udEZyZWRva2E9e2ZvbnRGcmVkb2thfVxuICAgICAgICBmb250WW91ckdyYWNlPXtmb250WW91ckdyYWNlfVxuICAgICAgICBmb2N1c1JlZj17Zm9jdXNSZWZ9XG4gICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImZyZWRva2EiLCJ5b3VyR3JhY2UiLCJHbG9iYWxTdHlsZSIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwibW9uc3Rlck1ha2VyIiwidXNlUmVmIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZm9udEZyZWRva2EiLCJjbGFzc05hbWUiLCJmb250WW91ckdyYWNlIiwiZm9jdXNSZWYiLCJteU1vbnN0ZXIiLCJzZXRNeU1vbnN0ZXIiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJpbnB1dFZhbHVlIiwiaGFuZGxlUmFuZG9taXplTW9uc3RlciIsImhhbmRsZUNsaWNrIiwiYWN0aW9uIiwiZW1vdGUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJoYW5kbGVBZGRJY2VDcmVhbSIsImljZUNyZWFtIiwib25SYW5kb21pemVNb25zdGVyIiwib25TdWJtaXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});