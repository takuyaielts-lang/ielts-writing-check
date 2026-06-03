"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "instrumentation";
exports.ids = ["instrumentation"];
exports.modules = {

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nasync function register() {\n    if (typeof globalThis.localStorage !== \"undefined\") {\n        const store = {};\n        globalThis.localStorage = {\n            getItem: (k)=>store[k] ?? null,\n            setItem: (k, v)=>{\n                store[k] = v;\n            },\n            removeItem: (k)=>{\n                delete store[k];\n            },\n            clear: ()=>{\n                Object.keys(store).forEach((k)=>delete store[k]);\n            },\n            key: (i)=>Object.keys(store)[i] ?? null,\n            get length () {\n                return Object.keys(store).length;\n            }\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQTtJQUNwQixJQUFJLE9BQU9DLFdBQVdDLFlBQVksS0FBSyxhQUFhO1FBQ2xELE1BQU1DLFFBQWdDLENBQUM7UUFDdkNGLFdBQVdDLFlBQVksR0FBRztZQUN4QkUsU0FBUyxDQUFDQyxJQUFjRixLQUFLLENBQUNFLEVBQUUsSUFBSTtZQUNwQ0MsU0FBUyxDQUFDRCxHQUFXRTtnQkFBZ0JKLEtBQUssQ0FBQ0UsRUFBRSxHQUFHRTtZQUFHO1lBQ25EQyxZQUFZLENBQUNIO2dCQUFnQixPQUFPRixLQUFLLENBQUNFLEVBQUU7WUFBRTtZQUM5Q0ksT0FBTztnQkFBUUMsT0FBT0MsSUFBSSxDQUFDUixPQUFPUyxPQUFPLENBQUMsQ0FBQ1AsSUFBTSxPQUFPRixLQUFLLENBQUNFLEVBQUU7WUFBRztZQUNuRVEsS0FBSyxDQUFDQyxJQUFjSixPQUFPQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1csRUFBRSxJQUFJO1lBQzdDLElBQUlDLFVBQVM7Z0JBQUUsT0FBT0wsT0FBT0MsSUFBSSxDQUFDUixPQUFPWSxNQUFNO1lBQUU7UUFDbkQ7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvaGFzaGltb3RvdGFrdXlhL0Rlc2t0b3AvaWVsdHMtd3JpdGluZy1jaGVjay9pbnN0cnVtZW50YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3Qgc3RvcmU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZSA9IHtcbiAgICAgIGdldEl0ZW06IChrOiBzdHJpbmcpID0+IHN0b3JlW2tdID8/IG51bGwsXG4gICAgICBzZXRJdGVtOiAoazogc3RyaW5nLCB2OiBzdHJpbmcpID0+IHsgc3RvcmVba10gPSB2OyB9LFxuICAgICAgcmVtb3ZlSXRlbTogKGs6IHN0cmluZykgPT4geyBkZWxldGUgc3RvcmVba107IH0sXG4gICAgICBjbGVhcjogKCkgPT4geyBPYmplY3Qua2V5cyhzdG9yZSkuZm9yRWFjaCgoaykgPT4gZGVsZXRlIHN0b3JlW2tdKTsgfSxcbiAgICAgIGtleTogKGk6IG51bWJlcikgPT4gT2JqZWN0LmtleXMoc3RvcmUpW2ldID8/IG51bGwsXG4gICAgICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gT2JqZWN0LmtleXMoc3RvcmUpLmxlbmd0aDsgfSxcbiAgICB9IGFzIHVua25vd24gYXMgU3RvcmFnZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsInN0b3JlIiwiZ2V0SXRlbSIsImsiLCJzZXRJdGVtIiwidiIsInJlbW92ZUl0ZW0iLCJjbGVhciIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaSIsImxlbmd0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
module.exports = __webpack_exports__;

})();