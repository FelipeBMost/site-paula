"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/Nav.js":
/*!**************************!*\
  !*** ./component/Nav.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction nav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        id: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                id: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo),\n                src: \"/logo.png\"\n            }, void 0, false, {\n                fileName: \"C:\\\\site-paula\\\\component\\\\Nav.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().containerIcones),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().icones),\n                        src: \"./whatsapp.svg\",\n                        href: \"https://wa.me/55\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\site-paula\\\\component\\\\Nav.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_1___default().icones),\n                        src: \"./instagram.svg\",\n                        href: \"#\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\site-paula\\\\component\\\\Nav.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\site-paula\\\\component\\\\Nav.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\site-paula\\\\component\\\\Nav.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (nav);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvTmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFBNkM7QUFFN0MsU0FBU0MsR0FBRyxHQUFHO0lBQ2IscUJBQ0UsOERBQUNBLEtBQUc7UUFBQ0MsRUFBRSxFQUFFRixtRUFBVTs7MEJBQ2pCLDhEQUFDRyxLQUFHO2dCQUFDRCxFQUFFLEVBQUVGLG9FQUFXO2dCQUFFSyxHQUFHLEVBQUMsV0FBVzs7Ozs7b0JBQUU7MEJBQ3ZDLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVQLCtFQUFzQjs7a0NBQ3BDLDhEQUFDRyxLQUFHO3dCQUFDSSxTQUFTLEVBQUVQLHNFQUFhO3dCQUFFSyxHQUFHLEVBQUMsZ0JBQWdCO3dCQUFDSyxJQUFJLEVBQUMsa0JBQWtCOzs7Ozs0QkFBTztrQ0FDbEYsOERBQUNQLEtBQUc7d0JBQUNJLFNBQVMsRUFBRVAsc0VBQWE7d0JBQUVLLEdBQUcsRUFBQyxpQkFBaUI7d0JBQUNLLElBQUksRUFBQyxHQUFHOzs7Ozs0QkFBTzs7Ozs7O29CQUNoRTs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0FBRUQsK0RBQWVULEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L05hdi5qcz81OTVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL05hdi5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gbmF2KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGlkPXtzdHlsZXMubmF2fT5cclxuICAgICAgPGltZyBpZD17c3R5bGVzLmxvZ299IHNyYz0nL2xvZ28ucG5nJy8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVySWNvbmVzfT5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb25lc30gc3JjPScuL3doYXRzYXBwLnN2ZycgaHJlZj0naHR0cHM6Ly93YS5tZS81NSc+PC9pbWc+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29uZXN9IHNyYz0nLi9pbnN0YWdyYW0uc3ZnJyBocmVmPScjJz48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJuYXYiLCJpZCIsImltZyIsImxvZ28iLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXJJY29uZXMiLCJpY29uZXMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/Nav.js\n"));

/***/ })

});