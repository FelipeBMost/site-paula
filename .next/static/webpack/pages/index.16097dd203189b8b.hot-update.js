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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_Receita__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Receita */ \"./component/Receita.js\");\n/* harmony import */ var _component_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Nav */ \"./component/Nav.js\");\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\site-paula\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Receita__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                receitas: receitas\n            }, void 0, false, {\n                fileName: \"C:\\\\site-paula\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\site-paula\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar receitas = [\n    {\n        titulo: \"Ursinho Kuma\",\n        imagem: \"url(/Kuma.jpeg)\",\n        src: \"./Kuma.jpeg\",\n        texto: {\n            quantidade: 500,\n            tamanho: 10,\n            valor: 15\n        }\n    },\n    {\n        titulo: \"Ursinha V\\xeanus\",\n        imagem: \"url(/venus.png)\",\n        src: \"./venus.png\",\n        texto: {\n            quantidade: 700,\n            tamanho: 20,\n            valor: 25\n        }\n    },\n    {\n        titulo: \"Coelhinho\",\n        imagem: \"url(/icone1.png)\",\n        src: \"./icone1.png\",\n        texto: {\n            quantidade: 900,\n            tamanho: 30,\n            valor: 40\n        }\n    }, \n];\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTBDO0FBQ0k7QUFDWjtBQUVuQixTQUFTRyxJQUFJLEdBQUc7SUFDN0IscUJBQ0UsOERBQUNDLE1BQUk7OzBCQUNILDhEQUFDRixzREFBRzs7OztvQkFBRzswQkFDUCw4REFBQ0YsMERBQU87Z0JBQUNLLFFBQVEsRUFBRUEsUUFBUTs7Ozs7b0JBQUc7Ozs7OztZQUN6QixDQUNSO0NBQ0Y7QUFQdUJGLEtBQUFBLElBQUk7QUFTNUIsSUFBTUUsUUFBUSxHQUFHO0lBQ2Y7UUFDRUMsTUFBTSxFQUFFLGNBQWM7UUFDdEJDLE1BQU0sRUFBRyxpQkFBZTtRQUN4QkMsR0FBRyxFQUFFLGFBQWE7UUFDbEJDLEtBQUssRUFBRTtZQUFDQyxVQUFVLEVBQUUsR0FBRztZQUFFQyxPQUFPLEVBQUUsRUFBRTtZQUFFQyxLQUFLLEVBQUUsRUFBRTtTQUFDO0tBQ2pEO0lBQ0Q7UUFDRU4sTUFBTSxFQUFFLGtCQUFlO1FBQ3ZCQyxNQUFNLEVBQUcsaUJBQWU7UUFDeEJDLEdBQUcsRUFBRSxhQUFhO1FBQ2xCQyxLQUFLLEVBQUU7WUFBQ0MsVUFBVSxFQUFFLEdBQUc7WUFBRUMsT0FBTyxFQUFFLEVBQUU7WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBQztLQUNqRDtJQUNEO1FBQ0VOLE1BQU0sRUFBRSxXQUFXO1FBQ25CQyxNQUFNLEVBQUcsa0JBQWdCO1FBQ3pCQyxHQUFHLEVBQUUsY0FBYztRQUNuQkMsS0FBSyxFQUFFO1lBQUNDLFVBQVUsRUFBRSxHQUFHO1lBQUVDLE9BQU8sRUFBRSxFQUFFO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUM7S0FDakQ7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWNlaXRhIGZyb20gJy4uL2NvbXBvbmVudC9SZWNlaXRhJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50L05hdidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxSZWNlaXRhIHJlY2VpdGFzPXtyZWNlaXRhc30vPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgcmVjZWl0YXMgPSBbXHJcbiAge1xyXG4gICAgdGl0dWxvOiAnVXJzaW5obyBLdW1hJyxcclxuICAgIGltYWdlbTogYHVybCgvS3VtYS5qcGVnKWAsXHJcbiAgICBzcmM6ICcuL0t1bWEuanBlZycsXHJcbiAgICB0ZXh0bzoge3F1YW50aWRhZGU6IDUwMCwgdGFtYW5obzogMTAsIHZhbG9yOiAxNX1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdHVsbzogJ1Vyc2luaGEgVsOqbnVzJyxcclxuICAgIGltYWdlbTogYHVybCgvdmVudXMucG5nKWAsXHJcbiAgICBzcmM6ICcuL3ZlbnVzLnBuZycsXHJcbiAgICB0ZXh0bzoge3F1YW50aWRhZGU6IDcwMCwgdGFtYW5obzogMjAsIHZhbG9yOiAyNX1cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdHVsbzogJ0NvZWxoaW5obycsXHJcbiAgICBpbWFnZW06IGB1cmwoL2ljb25lMS5wbmcpYCxcclxuICAgIHNyYzogJy4vaWNvbmUxLnBuZycsXHJcbiAgICB0ZXh0bzoge3F1YW50aWRhZGU6IDkwMCwgdGFtYW5obzogMzAsIHZhbG9yOiA0MH1cclxuICB9LFxyXG5dO1xyXG4iXSwibmFtZXMiOlsiUmVjZWl0YSIsInN0eWxlcyIsIk5hdiIsIkhvbWUiLCJtYWluIiwicmVjZWl0YXMiLCJ0aXR1bG8iLCJpbWFnZW0iLCJzcmMiLCJ0ZXh0byIsInF1YW50aWRhZGUiLCJ0YW1hbmhvIiwidmFsb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});