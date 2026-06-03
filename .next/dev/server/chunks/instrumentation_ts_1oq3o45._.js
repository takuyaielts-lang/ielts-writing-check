module.exports = [
"[project]/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if (typeof globalThis.localStorage !== "undefined") {
        const store = {};
        globalThis.localStorage = {
            getItem: (k)=>store[k] ?? null,
            setItem: (k, v)=>{
                store[k] = v;
            },
            removeItem: (k)=>{
                delete store[k];
            },
            clear: ()=>{
                Object.keys(store).forEach((k)=>delete store[k]);
            },
            key: (i)=>Object.keys(store)[i] ?? null,
            get length () {
                return Object.keys(store).length;
            }
        };
    }
}
}),
];

//# sourceMappingURL=instrumentation_ts_1oq3o45._.js.map