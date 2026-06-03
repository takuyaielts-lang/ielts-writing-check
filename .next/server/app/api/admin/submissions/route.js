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
exports.id = "app/api/admin/submissions/route";
exports.ids = ["app/api/admin/submissions/route"];
exports.modules = {

/***/ "(rsc)/./app/api/admin/submissions/route.ts":
/*!********************************************!*\
  !*** ./app/api/admin/submissions/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./lib/supabase.ts\");\n\n\nasync function GET(req) {\n    const password = req.headers.get(\"x-admin-password\");\n    if (password !== process.env.ADMIN_PASSWORD) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    try {\n        const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabaseAdmin.from(\"submissions\").select(\"*\").order(\"created_at\", {\n            ascending: false\n        }).limit(200);\n        if (error) throw error;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            submissions: data || []\n        });\n    } catch (err) {\n        console.error(\"Admin API error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"データの取得に失敗しました。\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL3N1Ym1pc3Npb25zL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNUO0FBRXhDLGVBQWVFLElBQUlDLEdBQWdCO0lBQ3hDLE1BQU1DLFdBQVdELElBQUlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0lBRWpDLElBQUlGLGFBQWFHLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO1FBQzNDLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BFO0lBRUEsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFRixLQUFLLEVBQUUsR0FBRyxNQUFNVix3REFBYUEsQ0FDeENhLElBQUksQ0FBQyxlQUNMQyxNQUFNLENBQUMsS0FDUEMsS0FBSyxDQUFDLGNBQWM7WUFBRUMsV0FBVztRQUFNLEdBQ3ZDQyxLQUFLLENBQUM7UUFFVCxJQUFJUCxPQUFPLE1BQU1BO1FBRWpCLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRVMsYUFBYU4sUUFBUSxFQUFFO1FBQUM7SUFDckQsRUFBRSxPQUFPTyxLQUFjO1FBQ3JCQyxRQUFRVixLQUFLLENBQUMsb0JBQW9CUztRQUNsQyxPQUFPcEIscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUFpQixHQUMxQjtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2hhc2hpbW90b3Rha3V5YS9EZXNrdG9wL2llbHRzLXdyaXRpbmctY2hlY2svYXBwL2FwaS9hZG1pbi9zdWJtaXNzaW9ucy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBzdXBhYmFzZUFkbWluIH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBwYXNzd29yZCA9IHJlcS5oZWFkZXJzLmdldChcIngtYWRtaW4tcGFzc3dvcmRcIik7XG5cbiAgaWYgKHBhc3N3b3JkICE9PSBwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlQWRtaW5cbiAgICAgIC5mcm9tKFwic3VibWlzc2lvbnNcIilcbiAgICAgIC5zZWxlY3QoXCIqXCIpXG4gICAgICAub3JkZXIoXCJjcmVhdGVkX2F0XCIsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KVxuICAgICAgLmxpbWl0KDIwMCk7XG5cbiAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VibWlzc2lvbnM6IGRhdGEgfHwgW10gfSk7XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBZG1pbiBBUEkgZXJyb3I6XCIsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCLjg4fjg7zjgr/jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInN1cGFiYXNlQWRtaW4iLCJHRVQiLCJyZXEiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fUEFTU1dPUkQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwibGltaXQiLCJzdWJtaXNzaW9ucyIsImVyciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/submissions/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase.ts":
/*!*************************!*\
  !*** ./lib/supabase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabaseAdmin: () => (/* binding */ supabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\nconst supabaseUrl = process.env.SUPABASE_URL;\nconst supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;\nconst supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;\nconst noopStorage = {\n    getItem: ()=>null,\n    setItem: ()=>{},\n    removeItem: ()=>{}\n};\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabasePublishableKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        storage: noopStorage\n    }\n});\nconst supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseSecretKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        storage: noopStorage\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUM1QyxNQUFNQyx5QkFBeUJILFFBQVFDLEdBQUcsQ0FBQ0csd0JBQXdCO0FBQ25FLE1BQU1DLG9CQUFvQkwsUUFBUUMsR0FBRyxDQUFDSyxtQkFBbUI7QUFFekQsTUFBTUMsY0FBYztJQUNsQkMsU0FBUyxJQUFNO0lBQ2ZDLFNBQVMsS0FBTztJQUNoQkMsWUFBWSxLQUFPO0FBQ3JCO0FBRU8sTUFBTUMsV0FBV2IsbUVBQVlBLENBQUNDLGFBQWFJLHdCQUF3QjtJQUN4RVMsTUFBTTtRQUFFQyxnQkFBZ0I7UUFBT0Msa0JBQWtCO1FBQU9DLFNBQVNSO0lBQVk7QUFDL0UsR0FBRztBQUNJLE1BQU1TLGdCQUFnQmxCLG1FQUFZQSxDQUFDQyxhQUFhTSxtQkFBbUI7SUFDeEVPLE1BQU07UUFBRUMsZ0JBQWdCO1FBQU9DLGtCQUFrQjtRQUFPQyxTQUFTUjtJQUFZO0FBQy9FLEdBQUciLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXNoaW1vdG90YWt1eWEvRGVza3RvcC9pZWx0cy13cml0aW5nLWNoZWNrL2xpYi9zdXBhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMITtcbmNvbnN0IHN1cGFiYXNlUHVibGlzaGFibGVLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVkhO1xuY29uc3Qgc3VwYWJhc2VTZWNyZXRLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRUNSRVRfS0VZITtcblxuY29uc3Qgbm9vcFN0b3JhZ2UgPSB7XG4gIGdldEl0ZW06ICgpID0+IG51bGwsXG4gIHNldEl0ZW06ICgpID0+IHt9LFxuICByZW1vdmVJdGVtOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VQdWJsaXNoYWJsZUtleSwge1xuICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSwgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsIHN0b3JhZ2U6IG5vb3BTdG9yYWdlIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZVNlY3JldEtleSwge1xuICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSwgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsIHN0b3JhZ2U6IG5vb3BTdG9yYWdlIH0sXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXNzaW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XG4gIHRhc2tfdHlwZTogc3RyaW5nO1xuICBxdWVzdGlvbl9pZDogbnVtYmVyO1xuICBxdWVzdGlvbl90ZXh0OiBzdHJpbmc7XG4gIHVzZXJfZXNzYXk6IHN0cmluZztcbiAgd29yZF9jb3VudDogbnVtYmVyO1xuICBzY29yZV90YTogbnVtYmVyO1xuICBzY29yZV9jYzogbnVtYmVyO1xuICBzY29yZV9scjogbnVtYmVyO1xuICBzY29yZV9ncmE6IG51bWJlcjtcbiAgYmFuZF9zY29yZTogbnVtYmVyO1xuICBzdHJlbmd0aHM6IHN0cmluZ1tdO1xuICBpbXByb3ZlbWVudHM6IHN0cmluZ1tdO1xuICBkZXRhaWxlZF9mZWVkYmFjazogc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VQdWJsaXNoYWJsZUtleSIsIlNVUEFCQVNFX1BVQkxJU0hBQkxFX0tFWSIsInN1cGFiYXNlU2VjcmV0S2V5IiwiU1VQQUJBU0VfU0VDUkVUX0tFWSIsIm5vb3BTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwic3VwYWJhc2UiLCJhdXRoIiwicGVyc2lzdFNlc3Npb24iLCJhdXRvUmVmcmVzaFRva2VuIiwic3RvcmFnZSIsInN1cGFiYXNlQWRtaW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fsubmissions%2Froute&page=%2Fapi%2Fadmin%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fsubmissions%2Froute&page=%2Fapi%2Fadmin%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hashimototakuya_Desktop_ielts_writing_check_app_api_admin_submissions_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/submissions/route.ts */ \"(rsc)/./app/api/admin/submissions/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/submissions/route\",\n        pathname: \"/api/admin/submissions\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/submissions/route\"\n    },\n    resolvedPagePath: \"/Users/hashimototakuya/Desktop/ielts-writing-check/app/api/admin/submissions/route.ts\",\n    nextConfigOutput,\n    userland: _Users_hashimototakuya_Desktop_ielts_writing_check_app_api_admin_submissions_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnN1Ym1pc3Npb25zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnN1Ym1pc3Npb25zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZzdWJtaXNzaW9ucyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhc2hpbW90b3Rha3V5YSUyRkRlc2t0b3AlMkZpZWx0cy13cml0aW5nLWNoZWNrJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhc2hpbW90b3Rha3V5YSUyRkRlc2t0b3AlMkZpZWx0cy13cml0aW5nLWNoZWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQztBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2hhc2hpbW90b3Rha3V5YS9EZXNrdG9wL2llbHRzLXdyaXRpbmctY2hlY2svYXBwL2FwaS9hZG1pbi9zdWJtaXNzaW9ucy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vc3VibWlzc2lvbnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi9zdWJtaXNzaW9uc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vc3VibWlzc2lvbnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFzaGltb3RvdGFrdXlhL0Rlc2t0b3AvaWVsdHMtd3JpdGluZy1jaGVjay9hcHAvYXBpL2FkbWluL3N1Ym1pc3Npb25zL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fsubmissions%2Froute&page=%2Fapi%2Fadmin%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fadmin%2Fsubmissions%2Froute&page=%2Fapi%2Fadmin%2Fsubmissions%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fsubmissions%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();