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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles.js\");\n/* harmony import */ var use_local_storage_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-local-storage-state */ \"./node_modules/use-local-storage-state/es/index.js\");\n/* harmony import */ var _utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/monsterMaker */ \"./utils/monsterMaker.js\");\n/* harmony import */ var _utils_useMonsterMovement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useMonsterMovement */ \"./utils/useMonsterMovement.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [myMonster, setMyMonster] = (0,use_local_storage_state__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"myMonster\", {\n        defaultValue: null\n    });\n    function handleRandomizeMonster() {\n        setMyMonster((0,_utils_monsterMaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    }\n    function handleClick(action) {\n        setMyMonster({\n            ...myMonster,\n            emote: action\n        });\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                emote: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        setMyMonster({\n            ...myMonster,\n            message: value\n        });\n        setValue(\"\");\n        setTimeout(()=>{\n            setMyMonster({\n                ...myMonster,\n                message: null\n            });\n        }, 3000);\n        focusRef.current.focus();\n    }\n    if (myMonster !== null) {\n        const [iceCreamPosition1, setIceCreamPosition] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n            x: -1000,\n            y: -1000\n        });\n        const playgroundWidth = 1000;\n        const playgroundHeight = 1000;\n        const monsterWidth = myMonster.width;\n        const monsterHeight = myMonster.height;\n        const { monsterPosition: monsterPosition1 , handleKeyDown: handleKeyDown1  } = (0,_utils_useMonsterMovement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(myMonster, monsterWidth, monsterHeight, playgroundWidth, playgroundHeight);\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n            let intervalId;\n            const timeoutId = setTimeout(()=>{\n                setIceCreamPosition({\n                    x: Math.floor(Math.random() * 900),\n                    y: Math.floor(Math.random() * 900)\n                });\n                intervalId = setInterval(()=>{\n                    setIceCreamPosition({\n                        x: -1000,\n                        y: -1000\n                    });\n                    setTimeout(()=>{\n                        setIceCreamPosition({\n                            x: Math.floor(Math.random() * 900),\n                            y: Math.floor(Math.random() * 900)\n                        });\n                    }, 10000);\n                }, 20000);\n            }, 10000);\n            return ()=>{\n                clearTimeout(timeoutId);\n                clearInterval(intervalId);\n            };\n        }, []);\n        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n            if (monsterPosition1.x >= iceCreamPosition1.x - 60 && monsterPosition1.x <= iceCreamPosition1.x + 60 && monsterPosition1.y >= iceCreamPosition1.y - 60 && monsterPosition1.y <= iceCreamPosition1.y + 60) {\n                setIceCreamPosition({\n                    x: -1000,\n                    y: -1000\n                });\n                setCounter(counter + 1);\n            }\n        }, [\n            monsterPosition1,\n            iceCreamPosition1,\n            myMonster.iceCream\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                onRandomizeMonster: handleRandomizeMonster,\n                onSubmit: handleSubmit,\n                onClick: handleClick,\n                myMonster: myMonster,\n                onKeyDown: handleKeyDown,\n                monsterPosition: monsterPosition,\n                iceCreamPosition: iceCreamPosition\n            }, void 0, false, {\n                fileName: \"/Users/cerenakkuec/monster-playground/pages/_app.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(App, \"IGhhjPte3O3iffWrhFS8ou2P744=\", false, function() {\n    return [\n        use_local_storage_state__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQlY7WUFBa0JqQixVQUFVdUMsUUFBUTtTQUFDO0lBQzVELENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNoRCwrQ0FBV0E7Ozs7OzBCQUNaLDhEQUFDTztnQkFDRSxHQUFHQyxTQUFTO2dCQUNieUMsb0JBQW9CckM7Z0JBQ3BCc0MsVUFBVTlCO2dCQUNWK0IsU0FBU3RDO2dCQUNUSixXQUFXQTtnQkFDWDJDLFdBQVdmO2dCQUNYRCxpQkFBaUJBO2dCQUNqQlYsa0JBQWtCQTs7Ozs7Ozs7QUFJMUIsQ0FBQztHQWpHdUJwQjs7UUFDWUwsK0RBQW9CQTs7O0tBRGhDSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2Utc3RhdGVcIjtcbmltcG9ydCBtb25zdGVyTWFrZXIgZnJvbSBcIi4uL3V0aWxzL21vbnN0ZXJNYWtlclwiO1xuaW1wb3J0IHVzZU1vbnN0ZXJNb3ZlbWVudCBmcm9tIFwiLi4vdXRpbHMvdXNlTW9uc3Rlck1vdmVtZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW215TW9uc3Rlciwgc2V0TXlNb25zdGVyXSA9IHVzZUxvY2FsU3RvcmFnZVN0YXRlKFwibXlNb25zdGVyXCIsIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVJhbmRvbWl6ZU1vbnN0ZXIoKSB7XG4gICAgc2V0TXlNb25zdGVyKG1vbnN0ZXJNYWtlcigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGFjdGlvbikge1xuICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IGFjdGlvbiB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE15TW9uc3Rlcih7IC4uLm15TW9uc3RlciwgZW1vdGU6IG51bGwgfSk7XG4gICAgfSwgMzAwMCk7XG4gICAgZm9jdXNSZWYuY3VycmVudC5mb2N1cygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRNeU1vbnN0ZXIoeyAuLi5teU1vbnN0ZXIsIG1lc3NhZ2U6IHZhbHVlIH0pO1xuICAgIHNldFZhbHVlKFwiXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TXlNb25zdGVyKHsgLi4ubXlNb25zdGVyLCBtZXNzYWdlOiBudWxsIH0pO1xuICAgIH0sIDMwMDApO1xuICAgIGZvY3VzUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGlmIChteU1vbnN0ZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCBbaWNlQ3JlYW1Qb3NpdGlvbiwgc2V0SWNlQ3JlYW1Qb3NpdGlvbl0gPSB1c2VTdGF0ZSh7XG4gICAgICB4OiAtMTAwMCxcbiAgICAgIHk6IC0xMDAwLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGxheWdyb3VuZFdpZHRoID0gMTAwMDtcbiAgICBjb25zdCBwbGF5Z3JvdW5kSGVpZ2h0ID0gMTAwMDtcbiAgICBjb25zdCBtb25zdGVyV2lkdGggPSBteU1vbnN0ZXIud2lkdGg7XG4gICAgY29uc3QgbW9uc3RlckhlaWdodCA9IG15TW9uc3Rlci5oZWlnaHQ7XG5cbiAgICBjb25zdCB7IG1vbnN0ZXJQb3NpdGlvbiwgaGFuZGxlS2V5RG93biB9ID0gdXNlTW9uc3Rlck1vdmVtZW50KFxuICAgICAgbXlNb25zdGVyLFxuICAgICAgbW9uc3RlcldpZHRoLFxuICAgICAgbW9uc3RlckhlaWdodCxcbiAgICAgIHBsYXlncm91bmRXaWR0aCxcbiAgICAgIHBsYXlncm91bmRIZWlnaHRcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBpbnRlcnZhbElkO1xuICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldEljZUNyZWFtUG9zaXRpb24oe1xuICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCksXG4gICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgc2V0SWNlQ3JlYW1Qb3NpdGlvbih7IHg6IC0xMDAwLCB5OiAtMTAwMCB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldEljZUNyZWFtUG9zaXRpb24oe1xuICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDApLFxuICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDApLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMTAwMDApO1xuICAgICAgICB9LCAyMDAwMCk7XG4gICAgICB9LCAxMDAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgbW9uc3RlclBvc2l0aW9uLnggPj0gaWNlQ3JlYW1Qb3NpdGlvbi54IC0gNjAgJiZcbiAgICAgICAgbW9uc3RlclBvc2l0aW9uLnggPD0gaWNlQ3JlYW1Qb3NpdGlvbi54ICsgNjAgJiZcbiAgICAgICAgbW9uc3RlclBvc2l0aW9uLnkgPj0gaWNlQ3JlYW1Qb3NpdGlvbi55IC0gNjAgJiZcbiAgICAgICAgbW9uc3RlclBvc2l0aW9uLnkgPD0gaWNlQ3JlYW1Qb3NpdGlvbi55ICsgNjBcbiAgICAgICkge1xuICAgICAgICBzZXRJY2VDcmVhbVBvc2l0aW9uKHsgeDogLTEwMDAsIHk6IC0xMDAwIH0pO1xuICAgICAgICBzZXRDb3VudGVyKGNvdW50ZXIgKyAxKTtcbiAgICAgIH1cbiAgICB9LCBbbW9uc3RlclBvc2l0aW9uLCBpY2VDcmVhbVBvc2l0aW9uLCBteU1vbnN0ZXIuaWNlQ3JlYW1dKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICBvblJhbmRvbWl6ZU1vbnN0ZXI9e2hhbmRsZVJhbmRvbWl6ZU1vbnN0ZXJ9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICBteU1vbnN0ZXI9e215TW9uc3Rlcn1cbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICBtb25zdGVyUG9zaXRpb249e21vbnN0ZXJQb3NpdGlvbn1cbiAgICAgICAgaWNlQ3JlYW1Qb3NpdGlvbj17aWNlQ3JlYW1Qb3NpdGlvbn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJ1c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIm1vbnN0ZXJNYWtlciIsInVzZU1vbnN0ZXJNb3ZlbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibXlNb25zdGVyIiwic2V0TXlNb25zdGVyIiwiZGVmYXVsdFZhbHVlIiwiaGFuZGxlUmFuZG9taXplTW9uc3RlciIsImhhbmRsZUNsaWNrIiwiYWN0aW9uIiwiZW1vdGUiLCJzZXRUaW1lb3V0IiwiZm9jdXNSZWYiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInZhbHVlIiwic2V0VmFsdWUiLCJpY2VDcmVhbVBvc2l0aW9uIiwic2V0SWNlQ3JlYW1Qb3NpdGlvbiIsIngiLCJ5IiwicGxheWdyb3VuZFdpZHRoIiwicGxheWdyb3VuZEhlaWdodCIsIm1vbnN0ZXJXaWR0aCIsIndpZHRoIiwibW9uc3RlckhlaWdodCIsImhlaWdodCIsIm1vbnN0ZXJQb3NpdGlvbiIsImhhbmRsZUtleURvd24iLCJpbnRlcnZhbElkIiwidGltZW91dElkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwic2V0Q291bnRlciIsImNvdW50ZXIiLCJpY2VDcmVhbSIsIm9uUmFuZG9taXplTW9uc3RlciIsIm9uU3VibWl0Iiwib25DbGljayIsIm9uS2V5RG93biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});