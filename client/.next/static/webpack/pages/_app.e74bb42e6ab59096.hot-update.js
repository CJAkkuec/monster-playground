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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Fredoka_One\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"fredoka\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Fredoka_One\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"fredoka\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"pages/_app.js\",\"import\":\"Covered_By_Your_Grace\",\"arguments\":[{\"weight\":\"400\",\"subsets\":[\"latin\"]}],\"variableName\":\"yourGrace\"} */ \"./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"pages/_app.js\\\",\\\"import\\\":\\\"Covered_By_Your_Grace\\\",\\\"arguments\\\":[{\\\"weight\\\":\\\"400\\\",\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"yourGrace\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/es/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const fontFredoka = (_next_font_google_target_css_path_pages_app_js_import_Fredoka_One_arguments_weight_400_subsets_latin_variableName_fredoka___WEBPACK_IMPORTED_MODULE_5___default().className);\n    const fontYourGrace = (_next_font_google_target_css_path_pages_app_js_import_Covered_By_Your_Grace_arguments_weight_400_subsets_latin_variableName_yourGrace___WEBPACK_IMPORTED_MODULE_6___default().className);\n    const focusRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const [myMonster, setMyMonster] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"myMonster\", {\n        defaultValue: null\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleRandomizeMonster() {\n        setMyMonster((0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    }\n    function handleSubmitId(event) {\n        event.preventDefault();\n        console.log(event);\n        const id = (0,nanoid__WEBPACK_IMPORTED_MODULE_8__.nanoid)();\n        setMyMonster({\n            ...myMonster,\n            userId: id\n        });\n        router.push(\"/playground\");\n    }\n    function handleClick(action) {\n        setMyMonster({\n            ...myMonster,\n            emote: action\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/client/pages/_app.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                onRandomizeMonster: handleRandomizeMonster,\n                onSubmitId: handleSubmitId,\n                onClick: handleClick,\n                myMonster: myMonster,\n                fontFredoka: fontFredoka,\n                fontYourGrace: fontYourGrace,\n                focusRef: focusRef\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/client/pages/_app.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"71gBcoHTY6MRJohIU0Ihw4s4gdA=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQVdNQTtBQUNBQztBQVprQztBQUVKO0FBQ3VCO0FBQ1Y7QUFDUjtBQUlUO0FBS2pCLFNBQVNRLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsY0FBY1osNktBQWlCO0lBQ3JDLE1BQU1jLGdCQUFnQmIseUxBQW1CO0lBRXpDLE1BQU1jLFdBQVdSLDZDQUFNQSxDQUFDLElBQUk7SUFDNUIsTUFBTSxDQUFDUyxXQUFXQyxhQUFhLEdBQUdiLG1FQUFvQkEsQ0FBQyxhQUFhO1FBQ2xFYyxjQUFjLElBQUk7SUFDcEI7SUFFQSxNQUFNQyxTQUFTakIsc0RBQVNBO0lBRXhCLFNBQVNrQix5QkFBeUI7UUFDaENILGFBQWFaLCtEQUFZQTtJQUMzQjtJQUVBLFNBQVNnQixlQUFlQyxLQUFLLEVBQUU7UUFDN0JBLE1BQU1DLGNBQWM7UUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixNQUFNSSxLQUFLbEIsOENBQU1BO1FBQ2pCUyxhQUFhO1lBQUUsR0FBR0QsU0FBUztZQUFFVyxRQUFRRDtRQUFHO1FBRXhDUCxPQUFPUyxJQUFJLENBQUM7SUFDZDtJQUVBLFNBQVNDLFlBQVlDLE1BQU0sRUFBRTtRQUMzQmIsYUFBYTtZQUFFLEdBQUdELFNBQVM7WUFBRWUsT0FBT0Q7UUFBTztRQUMzQ0UsV0FBVyxJQUFNO1lBQ2ZmLGFBQWE7Z0JBQUUsR0FBR0QsU0FBUztnQkFBRWUsT0FBTyxJQUFJO1lBQUM7UUFDM0MsR0FBRztRQUNIaEIsU0FBU2tCLE9BQU8sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQy9CLCtDQUFXQTs7Ozs7MEJBQ1osOERBQUNPO2dCQUNFLEdBQUdDLFNBQVM7Z0JBQ2J3QixvQkFBb0JmO2dCQUNwQmdCLFlBQVlmO2dCQUNaZ0IsU0FBU1I7Z0JBQ1RiLFdBQVdBO2dCQUNYSixhQUFhQTtnQkFDYkUsZUFBZUE7Z0JBQ2ZDLFVBQVVBOzs7Ozs7OztBQUlsQixDQUFDO0dBL0N1Qk47O1FBS1lMLCtEQUFvQkE7UUFJdkNGLGtEQUFTQTs7O0tBVEZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGVcIjtcbmltcG9ydCBtb25zdGVyTWFrZXIgZnJvbSBcIi4uL3V0aWxzL21vbnN0ZXJNYWtlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBGcmVkb2thX09uZSB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgQ292ZXJlZF9CeV9Zb3VyX0dyYWNlIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XG5cbmNvbnN0IGZyZWRva2EgPSBGcmVkb2thX09uZSh7IHdlaWdodDogXCI0MDBcIiwgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5jb25zdCB5b3VyR3JhY2UgPSBDb3ZlcmVkX0J5X1lvdXJfR3JhY2UoeyB3ZWlnaHQ6IFwiNDAwXCIsIHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGZvbnRGcmVkb2thID0gZnJlZG9rYS5jbGFzc05hbWU7XG4gIGNvbnN0IGZvbnRZb3VyR3JhY2UgPSB5b3VyR3JhY2UuY2xhc3NOYW1lO1xuXG4gIGNvbnN0IGZvY3VzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbXlNb25zdGVyLCBzZXRNeU1vbnN0ZXJdID0gdXNlTG9jYWxTdG9yYWdlU3RhdGUoXCJteU1vbnN0ZXJcIiwge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgfSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmFuZG9taXplTW9uc3RlcigpIHtcbiAgICBzZXRNeU1vbnN0ZXIobW9uc3Rlck1ha2VyKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0SWQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjb25zdCBpZCA9IG5hbm9pZCgpO1xuICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgdXNlcklkOiBpZCB9KTtcblxuICAgIHJvdXRlci5wdXNoKFwiL3BsYXlncm91bmRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhhY3Rpb24pIHtcbiAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBhY3Rpb24gfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIGVtb3RlOiBudWxsIH0pO1xuICAgIH0sIDMwMDApO1xuICAgIGZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICBvblJhbmRvbWl6ZU1vbnN0ZXI9e2hhbmRsZVJhbmRvbWl6ZU1vbnN0ZXJ9XG4gICAgICAgIG9uU3VibWl0SWQ9e2hhbmRsZVN1Ym1pdElkfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgbXlNb25zdGVyPXtteU1vbnN0ZXJ9XG4gICAgICAgIGZvbnRGcmVkb2thPXtmb250RnJlZG9rYX1cbiAgICAgICAgZm9udFlvdXJHcmFjZT17Zm9udFlvdXJHcmFjZX1cbiAgICAgICAgZm9jdXNSZWY9e2ZvY3VzUmVmfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmcmVkb2thIiwieW91ckdyYWNlIiwidXNlUm91dGVyIiwiR2xvYmFsU3R5bGUiLCJ1c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIm1vbnN0ZXJNYWtlciIsInVzZVN0YXRlIiwidXNlUmVmIiwibmFub2lkIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZm9udEZyZWRva2EiLCJjbGFzc05hbWUiLCJmb250WW91ckdyYWNlIiwiZm9jdXNSZWYiLCJteU1vbnN0ZXIiLCJzZXRNeU1vbnN0ZXIiLCJkZWZhdWx0VmFsdWUiLCJyb3V0ZXIiLCJoYW5kbGVSYW5kb21pemVNb25zdGVyIiwiaGFuZGxlU3VibWl0SWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImlkIiwidXNlcklkIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiYWN0aW9uIiwiZW1vdGUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImZvY3VzIiwib25SYW5kb21pemVNb25zdGVyIiwib25TdWJtaXRJZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});