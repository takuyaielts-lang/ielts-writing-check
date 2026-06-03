(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "task1Questions",
    ()=>task1Questions,
    "task2Questions",
    ()=>task2Questions
]);
const task1Questions = [
    {
        id: 1,
        title: "Internet Usage Rates",
        prompt: "The graph below shows the percentage of households with internet access in three countries between 2005 and 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
        xLabels: [
            "2005",
            "2008",
            "2011",
            "2014",
            "2017",
            "2020",
            "2022"
        ],
        yMin: 0,
        yMax: 100,
        yUnit: "%",
        series: [
            {
                name: "South Korea",
                color: "#6ab98a",
                data: [
                    72,
                    80,
                    87,
                    92,
                    95,
                    97,
                    98
                ]
            },
            {
                name: "Brazil",
                color: "#c9a84c",
                data: [
                    21,
                    34,
                    45,
                    55,
                    65,
                    74,
                    81
                ]
            },
            {
                name: "Nigeria",
                color: "#7ba7d0",
                data: [
                    4,
                    9,
                    18,
                    28,
                    40,
                    53,
                    62
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Average Monthly Temperatures",
        prompt: "The graph below shows the average monthly temperatures (in °C) in two cities—London and Sydney—over the course of one year. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
        xLabels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        yMin: -5,
        yMax: 30,
        yUnit: "°C",
        series: [
            {
                name: "London",
                color: "#6ab98a",
                data: [
                    5,
                    5,
                    8,
                    11,
                    15,
                    18,
                    20,
                    20,
                    16,
                    12,
                    8,
                    5
                ]
            },
            {
                name: "Sydney",
                color: "#c9a84c",
                data: [
                    26,
                    26,
                    24,
                    21,
                    17,
                    14,
                    13,
                    14,
                    17,
                    20,
                    23,
                    25
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Annual Visitor Numbers",
        prompt: "The graph below shows the number of visitors (in thousands) to three national museums in a European country between 2010 and 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 80 words.",
        xLabels: [
            "2010",
            "2012",
            "2014",
            "2016",
            "2018",
            "2020",
            "2022",
            "2023"
        ],
        yMin: 0,
        yMax: 1200,
        yUnit: "k",
        series: [
            {
                name: "National Art Museum",
                color: "#6ab98a",
                data: [
                    850,
                    900,
                    970,
                    1020,
                    1100,
                    480,
                    890,
                    1050
                ]
            },
            {
                name: "Science Museum",
                color: "#c9a84c",
                data: [
                    600,
                    650,
                    710,
                    780,
                    820,
                    350,
                    700,
                    810
                ]
            },
            {
                name: "History Museum",
                color: "#7ba7d0",
                data: [
                    400,
                    420,
                    460,
                    510,
                    540,
                    210,
                    490,
                    560
                ]
            }
        ]
    }
];
const task2Questions = [
    {
        id: 1,
        type: "Opinion",
        prompt: "Some people believe that technology has made modern life more complicated and stressful, while others argue that it has made life easier and more convenient.\n\nTo what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words."
    },
    {
        id: 2,
        type: "Problem & Solution",
        prompt: "In many countries, a significant number of young people are choosing to leave rural areas to live and work in large cities.\n\nWhat are the main reasons for this trend? What problems does it cause for both urban and rural areas?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words."
    },
    {
        id: 3,
        type: "Discussion",
        prompt: "Some people believe that universities should focus primarily on providing academic and theoretical knowledge. Others argue that the main purpose of a university education should be to prepare students for their future careers.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words."
    },
    {
        id: 4,
        type: "Opinion",
        prompt: "Many people argue that international tourism causes serious damage to local cultures and natural environments, and that these negative effects outweigh any economic benefits.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words."
    },
    {
        id: 5,
        type: "Opinion",
        prompt: "Governments should invest significantly more money in public transportation infrastructure rather than spending it on building new roads and expanding highways.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 150 words."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Listening / Reading 正答数 → バンドスコア換算表 */ __turbopack_context__.s([
    "BAND_TABLE",
    ()=>BAND_TABLE,
    "SETUP_SQL",
    ()=>SETUP_SQL,
    "roundHalf",
    ()=>roundHalf
]);
const BAND_TABLE = {
    10: 9.0,
    9: 8.5,
    8: 8.0,
    7: 7.5,
    6: 7.0,
    5: 6.0,
    4: 5.5,
    3: 5.0,
    2: 4.0,
    1: 3.5,
    0: 3.0
};
const roundHalf = (n)=>Math.round(n * 2) / 2;
const SETUP_SQL = `-- ① submissions テーブルを作成
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  listening_correct INTEGER,
  listening_band NUMERIC(3,1),
  reading_correct INTEGER,
  reading_band NUMERIC(3,1),
  writing_t1_question TEXT,
  writing_t1_essay TEXT,
  writing_t1_ta NUMERIC(3,1),
  writing_t1_cc NUMERIC(3,1),
  writing_t1_lr NUMERIC(3,1),
  writing_t1_gra NUMERIC(3,1),
  writing_t1_band NUMERIC(3,1),
  writing_t2_question TEXT,
  writing_t2_essay TEXT,
  writing_t2_ta NUMERIC(3,1),
  writing_t2_cc NUMERIC(3,1),
  writing_t2_lr NUMERIC(3,1),
  writing_t2_gra NUMERIC(3,1),
  writing_t2_band NUMERIC(3,1),
  writing_band NUMERIC(3,1),
  speaking_recording_url TEXT,
  speaking_band NUMERIC(3,1),
  overall_band NUMERIC(3,1)
);

-- ② speaking-recordings バケットを作成（Storage → New bucket）
--    名前: speaking-recordings
--    Public: ON（再生URLを公開するため）
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ─── LineChart ────────────────────────────────────────────────────────────────
function LineChart({ question }) {
    const W = 520, H = 250;
    const pad = {
        top: 20,
        right: 36,
        bottom: 44,
        left: 52
    };
    const cW = W - pad.left - pad.right;
    const cH = H - pad.top - pad.bottom;
    const { xLabels, yMin, yMax, series, yUnit } = question;
    const xSteps = xLabels.length - 1;
    const xPos = (i)=>pad.left + i / xSteps * cW;
    const yPos = (v)=>pad.top + cH - (v - yMin) / (yMax - yMin) * cH;
    const yTicks = 5;
    const yStep = (yMax - yMin) / yTicks;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${W} ${H}`,
        className: "w-full",
        style: {
            maxWidth: 520
        },
        children: [
            Array.from({
                length: yTicks + 1
            }, (_, i)=>{
                const v = yMin + i * yStep;
                const y = yPos(v);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: pad.left,
                            y1: y,
                            x2: pad.left + cW,
                            y2: y,
                            stroke: "#1f3d2b",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: pad.left - 7,
                            y: y + 4,
                            textAnchor: "end",
                            fill: "#9dd4b0",
                            fontSize: "10",
                            fontFamily: "DM Sans,sans-serif",
                            children: [
                                v % 1 === 0 ? v : v.toFixed(1),
                                i === yTicks ? yUnit : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this);
            }),
            xLabels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: xPos(i),
                    y: H - pad.bottom + 16,
                    textAnchor: "middle",
                    fill: "#9dd4b0",
                    fontSize: "10",
                    fontFamily: "DM Sans,sans-serif",
                    children: label
                }, i, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: pad.left,
                y1: pad.top,
                x2: pad.left,
                y2: pad.top + cH,
                stroke: "#2e6044",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: pad.left,
                y1: pad.top + cH,
                x2: pad.left + cW,
                y2: pad.top + cH,
                stroke: "#2e6044",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            series.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: s.data.map((v, i)=>`${xPos(i)},${yPos(v)}`).join(" "),
                            fill: "none",
                            stroke: s.color,
                            strokeWidth: "2.5",
                            strokeLinejoin: "round",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        s.data.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: xPos(i),
                                cy: yPos(v),
                                r: "4",
                                fill: s.color,
                                stroke: "#0d1a10",
                                strokeWidth: "1.5"
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 33
                            }, this))
                    ]
                }, s.name, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)),
            series.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: `translate(${pad.left + i * 150},${H - 6})`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "-4",
                            x2: "16",
                            y2: "-4",
                            stroke: s.color,
                            strokeWidth: "2.5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "8",
                            cy: "-4",
                            r: "3",
                            fill: s.color
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "22",
                            y: "0",
                            fill: "#9dd4b0",
                            fontSize: "10",
                            fontFamily: "DM Sans,sans-serif",
                            children: s.name
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, s.name, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = LineChart;
// ─── ScoreRing ────────────────────────────────────────────────────────────────
function ScoreRing({ label, score, color }) {
    const r = 34;
    const circ = 2 * Math.PI * r;
    const dash = score / 9 * circ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "88",
                height: "88",
                viewBox: "0 0 88 88",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "44",
                        cy: "44",
                        r: r,
                        fill: "none",
                        stroke: "#1a3323",
                        strokeWidth: "7"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "44",
                        cy: "44",
                        r: r,
                        fill: "none",
                        stroke: color,
                        strokeWidth: "7",
                        strokeDasharray: `${dash} ${circ - dash}`,
                        strokeLinecap: "round",
                        transform: "rotate(-90 44 44)"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "44",
                        y: "40",
                        textAnchor: "middle",
                        fill: "#f0f7f2",
                        fontSize: "18",
                        fontFamily: "DM Serif Display,serif",
                        children: score.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "44",
                        y: "55",
                        textAnchor: "middle",
                        fill: "#6ab98a",
                        fontSize: "9",
                        fontFamily: "DM Sans,sans-serif",
                        children: "/ 9.0"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-semibold tracking-widest uppercase",
                style: {
                    color: "#9dd4b0"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = ScoreRing;
// ─── StepIndicator ───────────────────────────────────────────────────────────
function StepIndicator({ current }) {
    const steps = [
        "Listening",
        "Reading",
        "Writing",
        "Speaking"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center",
        children: steps.map((s, i)=>{
            const n = i + 1;
            const active = n === current;
            const done = n < current;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-3 py-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold",
                                style: {
                                    background: active ? "#4d9970" : done ? "#2e6044" : "#1a3323",
                                    color: active || done ? "#f0f7f2" : "#4d6b57"
                                },
                                children: done ? "✓" : n
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                style: {
                                    color: active ? "#f0f7f2" : done ? "#6ab98a" : "#4d6b57"
                                },
                                children: s
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    i < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-px",
                        style: {
                            background: done ? "#2e6044" : "#1a3323"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 113,
                        columnNumber: 23
                    }, this)
                ]
            }, s, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 105,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c2 = StepIndicator;
// ─── BandDisplay ─────────────────────────────────────────────────────────────
function BandDisplay({ band, label }) {
    const color = band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-forest-400 uppercase tracking-widest",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "DM Serif Display, serif",
                    fontSize: 48,
                    color,
                    lineHeight: 1
                },
                children: band.toFixed(1)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c3 = BandDisplay;
// ─── ScoreCard (Listening/Reading result) ────────────────────────────────────
function ScoreCard({ correct, band, skill }) {
    const color = band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-6 flex items-center gap-6",
        style: {
            background: "#111f15",
            border: "1px solid #1f3d2b"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1 w-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-forest-400 uppercase tracking-widest",
                        children: skill
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "DM Serif Display, serif",
                            fontSize: 52,
                            color,
                            lineHeight: 1
                        },
                        children: band.toFixed(1)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-forest-400",
                        children: "Band Score"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-forest-400",
                                children: "正答数"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-cream font-semibold",
                                children: [
                                    correct,
                                    " / 10"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 rounded-full overflow-hidden",
                        style: {
                            background: "#1a3323"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full",
                            style: {
                                width: `${correct / 10 * 100}%`,
                                background: color
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-11 gap-0.5",
                        children: Array.from({
                            length: 11
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 rounded flex items-center justify-center text-xs font-mono",
                                style: {
                                    background: i === correct ? color : "#1a3323",
                                    color: i === correct ? "#0d1a10" : "#4d6b57"
                                },
                                children: i
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 grid grid-cols-11 gap-0.5",
                        children: Array.from({
                            length: 11
                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                style: {
                                    fontSize: 9,
                                    color: "#4d6b57"
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BAND_TABLE"][i]
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c4 = ScoreCard;
function Home() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Listening
    const [listenCorrect, setListenCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const listenBand = listenCorrect !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BAND_TABLE"][listenCorrect] : null;
    // Reading
    const [readCorrect, setReadCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const readBand = readCorrect !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BAND_TABLE"][readCorrect] : null;
    // Writing
    const [writingSub, setWritingSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("t1-write");
    const [q1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["task1Questions"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["task1Questions"].length)]
    }["Home.useState"]);
    const [q2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Home.useState": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["task2Questions"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["task2Questions"].length)]
    }["Home.useState"]);
    const [t1Essay, setT1Essay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [t2Essay, setT2Essay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [t1Result, setT1Result] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [t2Result, setT2Result] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [writingError, setWritingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const writingBand = t1Result && t2Result ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundHalf"])((t1Result.scores.band + t2Result.scores.band) / 2) : null;
    // Timer
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const TASK_TIME = {
        t1: 20 * 60,
        t2: 30 * 60
    };
    const startTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[startTimer]": (task)=>{
            if (timerRef.current) clearInterval(timerRef.current);
            const secs = TASK_TIME[task];
            setTimeLeft(secs);
            timerRef.current = setInterval({
                "Home.useCallback[startTimer]": ()=>{
                    setTimeLeft({
                        "Home.useCallback[startTimer]": (t)=>{
                            if (t <= 1) {
                                clearInterval(timerRef.current);
                                return 0;
                            }
                            return t - 1;
                        }
                    }["Home.useCallback[startTimer]"]);
                }
            }["Home.useCallback[startTimer]"], 1000);
        }
    }["Home.useCallback[startTimer]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>({
                "Home.useEffect": ()=>{
                    if (timerRef.current) clearInterval(timerRef.current);
                }
            })["Home.useEffect"]
    }["Home.useEffect"], []);
    const fmtTime = (s)=>`${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
    // Speaking
    const [recordState, setRecordState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [speakingBand, setSpeakingBand] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [speakingUrl, setSpeakingUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localAudioUrl, setLocalAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [speakingError, setSpeakingError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const audioBlobRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recordingTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [recordSecs, setRecordSecs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Submission
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // ── Handlers ────────────────────────────────────────────────────────────────
    const goToListening = ()=>{
        if (name.trim()) setStep("listening");
    };
    const goToReading = ()=>{
        if (listenCorrect !== null) setStep("reading");
    };
    const goToWriting = ()=>{
        if (readCorrect !== null) {
            setStep("writing");
            setWritingSub("t1-write");
            startTimer("t1");
        }
    };
    const submitT1 = async ()=>{
        if (!t1Essay.trim()) return;
        if (timerRef.current) clearInterval(timerRef.current);
        setWritingSub("t1-scoring");
        setWritingError("");
        try {
            const wc = t1Essay.trim().split(/\s+/).filter(Boolean).length;
            const res = await fetch("/api/score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    taskType: "task1",
                    questionId: q1.id,
                    questionText: q1.prompt,
                    essay: t1Essay,
                    wordCount: wc
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.detail || data.error || "採点エラー");
            setT1Result(data);
            setWritingSub("t1-done");
        } catch (e) {
            setWritingError(e instanceof Error ? e.message : "エラーが発生しました");
            setWritingSub("t1-write");
        }
    };
    const goToT2 = ()=>{
        setWritingSub("t2-write");
        startTimer("t2");
    };
    const submitT2 = async ()=>{
        if (!t2Essay.trim()) return;
        if (timerRef.current) clearInterval(timerRef.current);
        setWritingSub("t2-scoring");
        setWritingError("");
        try {
            const wc = t2Essay.trim().split(/\s+/).filter(Boolean).length;
            const res = await fetch("/api/score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    taskType: "task2",
                    questionId: q2.id,
                    questionText: q2.prompt,
                    essay: t2Essay,
                    wordCount: wc
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.detail || data.error || "採点エラー");
            setT2Result(data);
            setWritingSub("t2-done");
        } catch (e) {
            setWritingError(e instanceof Error ? e.message : "エラーが発生しました");
            setWritingSub("t2-write");
        }
    };
    const goToSpeaking = ()=>setStep("speaking");
    const startRecording = async ()=>{
        setSpeakingError("");
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            chunksRef.current = [];
            const recorder = new MediaRecorder(stream);
            recorder.ondataavailable = (e)=>{
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };
            recorder.onstop = ()=>{
                const blob = new Blob(chunksRef.current, {
                    type: "audio/webm"
                });
                audioBlobRef.current = blob;
                const url = URL.createObjectURL(blob);
                setLocalAudioUrl(url);
                setRecordState("recorded");
                stream.getTracks().forEach((t)=>t.stop());
                if (recordingTimer.current) clearInterval(recordingTimer.current);
            };
            mediaRecorderRef.current = recorder;
            recorder.start();
            setRecordSecs(0);
            recordingTimer.current = setInterval(()=>setRecordSecs((s)=>s + 1), 1000);
            setRecordState("recording");
        } catch  {
            setSpeakingError("マイクへのアクセスが許可されていません。ブラウザの設定を確認してください。");
        }
    };
    const stopRecording = ()=>{
        mediaRecorderRef.current?.stop();
        if (recordingTimer.current) clearInterval(recordingTimer.current);
    };
    const uploadRecording = async ()=>{
        if (!audioBlobRef.current) return;
        setRecordState("uploading");
        setSpeakingError("");
        try {
            const fd = new FormData();
            fd.append("audio", audioBlobRef.current, `speaking.webm`);
            fd.append("name", name);
            const res = await fetch("/api/speaking/upload", {
                method: "POST",
                body: fd
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "アップロード失敗");
            setSpeakingUrl(data.url);
            setRecordState("uploaded");
        } catch (e) {
            setSpeakingError(e instanceof Error ? e.message : "アップロードエラー");
            setRecordState("recorded");
        }
    };
    const goToResults = async ()=>{
        setSubmitting(true);
        setSubmitError("");
        try {
            const spBand = speakingBand !== "" ? parseFloat(speakingBand) : null;
            const bands = [
                listenBand,
                readBand,
                writingBand,
                spBand
            ].filter((b)=>b !== null);
            const overall = bands.length === 4 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundHalf"])(bands.reduce((a, b)=>a + b, 0) / 4) : null;
            await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    listening_correct: listenCorrect,
                    listening_band: listenBand,
                    reading_correct: readCorrect,
                    reading_band: readBand,
                    writing_t1_question: q1.prompt,
                    writing_t1_essay: t1Essay,
                    writing_t1_ta: t1Result?.scores.ta ?? null,
                    writing_t1_cc: t1Result?.scores.cc ?? null,
                    writing_t1_lr: t1Result?.scores.lr ?? null,
                    writing_t1_gra: t1Result?.scores.gra ?? null,
                    writing_t1_band: t1Result?.scores.band ?? null,
                    writing_t2_question: q2.prompt,
                    writing_t2_essay: t2Essay,
                    writing_t2_ta: t2Result?.scores.ta ?? null,
                    writing_t2_cc: t2Result?.scores.cc ?? null,
                    writing_t2_lr: t2Result?.scores.lr ?? null,
                    writing_t2_gra: t2Result?.scores.gra ?? null,
                    writing_t2_band: t2Result?.scores.band ?? null,
                    writing_band: writingBand,
                    speaking_recording_url: speakingUrl,
                    speaking_band: spBand,
                    overall_band: overall
                })
            });
        } catch  {
            // 保存失敗しても結果は表示する
            setSubmitError("データの保存に失敗しましたが、結果は表示できます。");
        }
        setSubmitting(false);
        setStep("results");
    };
    const wordCount = (text)=>text.trim().split(/\s+/).filter(Boolean).length;
    // ── Render ───────────────────────────────────────────────────────────────────
    const BG = "#0d1a10";
    const CARD = "#111f15";
    const BORDER = "#1f3d2b";
    // Header shared
    const Header = ({ stepNum })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "border-b px-10 py-4 flex items-center justify-between shrink-0",
            style: {
                borderColor: BORDER
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "DM Serif Display, serif",
                        fontSize: 18,
                        color: "#f0f7f2"
                    },
                    children: "IELTS Level Check"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 402,
                    columnNumber: 7
                }, this),
                stepNum && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                    current: stepNum
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 405,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/admin",
                    className: "text-xs tracking-widest uppercase transition-colors",
                    style: {
                        color: "#4d6b57"
                    },
                    onMouseEnter: (e)=>e.currentTarget.style.color = "#9dd4b0",
                    onMouseLeave: (e)=>e.currentTarget.style.color = "#4d6b57",
                    children: "Admin"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 406,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 401,
            columnNumber: 5
        }, this);
    // ── HOME ────────────────────────────────────────────────────────────────────
    if (step === "home") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center gap-10 px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs tracking-widest uppercase mb-3",
                                    style: {
                                        color: "#4d9970"
                                    },
                                    children: "4 Skills Assessment"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "DM Serif Display, serif",
                                        fontSize: 56,
                                        color: "#f0f7f2",
                                        lineHeight: 1.1
                                    },
                                    children: [
                                        "IELTS",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#6ab98a"
                                            },
                                            children: "Level Check"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 424,
                                            columnNumber: 26
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm leading-7",
                                    style: {
                                        color: "#6ab98a"
                                    },
                                    children: [
                                        "Listening · Reading · Writing · Speaking",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 55
                                        }, this),
                                        "4技能を総合評価してバンドスコアを算出します"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#4d6b57"
                                    },
                                    children: "氏名"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "例：山田 太郎",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value),
                                    onKeyDown: (e)=>e.key === "Enter" && goToListening(),
                                    className: "w-full rounded-xl px-4 py-3 text-sm",
                                    style: {
                                        background: CARD,
                                        border: `1px solid ${BORDER}`,
                                        color: "#f0f7f2",
                                        fontFamily: "DM Sans, sans-serif",
                                        outline: "none"
                                    },
                                    onFocus: (e)=>e.currentTarget.style.borderColor = "#2e6044",
                                    onBlur: (e)=>e.currentTarget.style.borderColor = BORDER,
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: goToListening,
                                    disabled: !name.trim(),
                                    className: "mt-4 w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                                    style: {
                                        background: name.trim() ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323",
                                        color: "#f0f7f2"
                                    },
                                    children: "テストを開始する →"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                {
                                    n: 1,
                                    name: "Listening",
                                    desc: "正答数入力"
                                },
                                {
                                    n: 2,
                                    name: "Reading",
                                    desc: "正答数入力"
                                },
                                {
                                    n: 3,
                                    name: "Writing",
                                    desc: "AI自動採点"
                                },
                                {
                                    n: 4,
                                    name: "Speaking",
                                    desc: "録音・採点"
                                }
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-44 rounded-xl p-4",
                                    style: {
                                        background: CARD,
                                        border: `1px solid ${BORDER}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold tracking-widest",
                                            style: {
                                                color: "#c9a84c"
                                            },
                                            children: [
                                                "Step ",
                                                s.n
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold mt-1",
                                            style: {
                                                color: "#f0f7f2",
                                                fontFamily: "DM Serif Display, serif"
                                            },
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-0.5",
                                            style: {
                                                color: "#4d6b57"
                                            },
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.n, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this);
    }
    // ── LISTENING ───────────────────────────────────────────────────────────────
    if (step === "listening") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                    stepNum: 1
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center gap-8 px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#c9a84c"
                                    },
                                    children: "Step 1"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "DM Serif Display, serif",
                                        fontSize: 40,
                                        color: "#f0f7f2"
                                    },
                                    children: "Listening"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mt-2",
                                    style: {
                                        color: "#6ab98a"
                                    },
                                    children: "10問中の正答数を入力してください"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 486,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-11 gap-2",
                            children: Array.from({
                                length: 11
                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setListenCorrect(i),
                                    className: "w-12 h-12 rounded-xl font-semibold text-sm transition-all",
                                    style: {
                                        background: listenCorrect === i ? "#4d9970" : "#111f15",
                                        border: `1px solid ${listenCorrect === i ? "#4d9970" : "#1f3d2b"}`,
                                        color: listenCorrect === i ? "#0d1a10" : "#9dd4b0"
                                    },
                                    children: i
                                }, i, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 492,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        listenCorrect !== null && listenBand !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreCard, {
                                correct: listenCorrect,
                                band: listenBand,
                                skill: "Listening"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 508,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToReading,
                            disabled: listenCorrect === null,
                            className: "px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                            style: {
                                background: listenCorrect !== null ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323",
                                color: "#f0f7f2"
                            },
                            children: "次へ → Reading"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 480,
            columnNumber: 7
        }, this);
    }
    // ── READING ──────────────────────────────────────────────────────────────────
    if (step === "reading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                    stepNum: 2
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center gap-8 px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#c9a84c"
                                    },
                                    children: "Step 2"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "DM Serif Display, serif",
                                        fontSize: 40,
                                        color: "#f0f7f2"
                                    },
                                    children: "Reading"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mt-2",
                                    style: {
                                        color: "#6ab98a"
                                    },
                                    children: "10問中の正答数を入力してください"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-11 gap-2",
                            children: Array.from({
                                length: 11
                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setReadCorrect(i),
                                    className: "w-12 h-12 rounded-xl font-semibold text-sm transition-all",
                                    style: {
                                        background: readCorrect === i ? "#4d9970" : "#111f15",
                                        border: `1px solid ${readCorrect === i ? "#4d9970" : "#1f3d2b"}`,
                                        color: readCorrect === i ? "#0d1a10" : "#9dd4b0"
                                    },
                                    children: i
                                }, i, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 540,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this),
                        readCorrect !== null && readBand !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-in",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreCard, {
                                correct: readCorrect,
                                band: readBand,
                                skill: "Reading"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 554,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToWriting,
                            disabled: readCorrect === null,
                            className: "px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                            style: {
                                background: readCorrect !== null ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323",
                                color: "#f0f7f2"
                            },
                            children: "次へ → Writing"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 531,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 529,
            columnNumber: 7
        }, this);
    }
    // ── WRITING ──────────────────────────────────────────────────────────────────
    if (step === "writing") {
        const isT1 = writingSub === "t1-write" || writingSub === "t1-scoring" || writingSub === "t1-done";
        const taskLabel = isT1 ? "Task 1" : "Task 2";
        const essay = isT1 ? t1Essay : t2Essay;
        const setEssay = isT1 ? setT1Essay : setT2Essay;
        const targetWords = isT1 ? 80 : 150;
        const wc = wordCount(essay);
        const wordOk = wc >= targetWords;
        const isScoring = writingSub === "t1-scoring" || writingSub === "t2-scoring";
        const isDone = writingSub === "t1-done" || writingSub === "t2-done";
        const result = isT1 ? t1Result : t2Result;
        const timerWarn = timeLeft <= 60 && timeLeft > 0;
        const timerExp = timeLeft === 0;
        const totalTime = isT1 ? TASK_TIME.t1 : TASK_TIME.t2;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "border-b px-8 py-3 flex items-center justify-between shrink-0",
                    style: {
                        borderColor: BORDER
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                            current: 3
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "DM Serif Display, serif",
                                fontSize: 16,
                                color: "#f0f7f2"
                            },
                            children: [
                                "IELTS Level Check — Writing ",
                                taskLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 594,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: !isDone && !isScoring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm font-semibold",
                                style: {
                                    background: timerExp ? "#1a1010" : timerWarn ? "#2a1a0a" : "#152a1c",
                                    border: `1px solid ${timerExp ? "#7f1d1d" : timerWarn ? "#92400e" : "#1f3d2b"}`,
                                    color: timerExp ? "#f87171" : timerWarn ? "#fbbf24" : "#6ab98a"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "13",
                                        height: "13",
                                        viewBox: "0 0 13 13",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "6.5",
                                                cy: "6.5",
                                                r: "5.5",
                                                stroke: "currentColor",
                                                strokeWidth: "1.2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6.5 3.5v3l1.8 1.4",
                                                stroke: "currentColor",
                                                strokeWidth: "1.2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 17
                                    }, this),
                                    timerExp ? "時間切れ" : fmtTime(timeLeft)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 599,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this),
                isScoring && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "animate-spin",
                            width: "36",
                            height: "36",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "#1a3323",
                                    strokeWidth: "3"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2a10 10 0 0 1 10 10",
                                    stroke: "#4d9970",
                                    strokeWidth: "3",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 618,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "#6ab98a"
                            },
                            children: "AI採点中..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 622,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 617,
                    columnNumber: 11
                }, this),
                isDone && result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto px-8 py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-6 mb-6 flex items-center justify-between",
                                style: {
                                    background: CARD,
                                    border: `1px solid ${BORDER}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-1",
                                                style: {
                                                    color: "#4d6b57"
                                                },
                                                children: [
                                                    taskLabel,
                                                    " Band Score"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "DM Serif Display, serif",
                                                    fontSize: 64,
                                                    lineHeight: 1,
                                                    color: result.scores.band >= 7 ? "#6ab98a" : result.scores.band >= 6 ? "#c9a84c" : "#f87171"
                                                },
                                                children: result.scores.band.toFixed(1)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                label: "TA",
                                                score: result.scores.ta,
                                                color: "#6ab98a"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                label: "CC",
                                                score: result.scores.cc,
                                                color: "#7ba7d0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                label: "LR",
                                                score: result.scores.lr,
                                                color: "#c9a84c"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                label: "GRA",
                                                score: result.scores.gra,
                                                color: "#b08fda"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 631,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl p-5",
                                        style: {
                                            background: CARD,
                                            border: `1px solid ${BORDER}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-3",
                                                style: {
                                                    color: "#4d6b57"
                                                },
                                                children: "強み"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 648,
                                                columnNumber: 19
                                            }, this),
                                            result.strengths.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-6 mb-2",
                                                    style: {
                                                        color: "#d0ead9"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#6ab98a"
                                                            },
                                                            children: "● "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 23
                                                        }, this),
                                                        s
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 647,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl p-5",
                                        style: {
                                            background: CARD,
                                            border: `1px solid ${BORDER}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-widest mb-3",
                                                style: {
                                                    color: "#4d6b57"
                                                },
                                                children: "改善点"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 656,
                                                columnNumber: 19
                                            }, this),
                                            result.improvements.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm leading-6 mb-2",
                                                    style: {
                                                        color: "#d0ead9"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: "#c9a84c"
                                                            },
                                                            children: "● "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 23
                                                        }, this),
                                                        s
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 655,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 646,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-5 mb-6",
                                style: {
                                    background: CARD,
                                    border: `1px solid ${BORDER}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-widest mb-3",
                                        style: {
                                            color: "#4d6b57"
                                        },
                                        children: "詳細フィードバック"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 666,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-7 whitespace-pre-line",
                                        style: {
                                            color: "#d0ead9"
                                        },
                                        children: result.detailed_feedback
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 665,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: writingSub === "t1-done" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: goToT2,
                                    className: "px-10 py-3 rounded-xl font-semibold text-sm",
                                    style: {
                                        background: "linear-gradient(135deg,#2e6044,#4d9970)",
                                        color: "#f0f7f2"
                                    },
                                    children: "Task 2 へ進む →"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 672,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-2",
                                    children: [
                                        writingBand !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: "#9dd4b0"
                                            },
                                            children: [
                                                "Writing Band Score（T1+T2平均）: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "#6ab98a"
                                                    },
                                                    children: writingBand.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 54
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToSpeaking,
                                            className: "px-10 py-3 rounded-xl font-semibold text-sm",
                                            style: {
                                                background: "linear-gradient(135deg,#2e6044,#4d9970)",
                                                color: "#f0f7f2"
                                            },
                                            children: "次へ → Speaking"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 677,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 670,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 629,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 628,
                    columnNumber: 11
                }, this),
                !isScoring && !isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex overflow-hidden",
                    style: {
                        height: "calc(100vh - 57px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 flex flex-col border-r overflow-y-auto",
                            style: {
                                background: CARD,
                                borderColor: BORDER
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold tracking-widest px-3 py-1 rounded-full uppercase",
                                                style: {
                                                    background: "#1a3323",
                                                    color: "#c9a84c"
                                                },
                                                children: taskLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 701,
                                                columnNumber: 19
                                            }, this),
                                            !isT1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs px-2 py-1 rounded-full",
                                                style: {
                                                    border: `1px solid ${BORDER}`,
                                                    color: "#6ab98a"
                                                },
                                                children: q2.type
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 703,
                                                columnNumber: 29
                                            }, this),
                                            isT1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                style: {
                                                    color: "#4d6b57"
                                                },
                                                children: q1.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 704,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 700,
                                        columnNumber: 17
                                    }, this),
                                    isT1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-5 p-3 rounded-xl",
                                        style: {
                                            background: BG,
                                            border: `1px solid ${BORDER}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LineChart, {
                                            question: q1
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 707,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm leading-7 whitespace-pre-line",
                                        style: {
                                            color: "#d0ead9"
                                        },
                                        children: isT1 ? q1.prompt : q2.prompt
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 p-3 rounded-lg",
                                        style: {
                                            background: "#152a1c"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            style: {
                                                color: "#4d6b57"
                                            },
                                            children: [
                                                "目安語数: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "#f0f7f2"
                                                    },
                                                    children: [
                                                        targetWords,
                                                        "語以上"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 27
                                                }, this),
                                                "　· 採点基準: TA / CC / LR / GRA"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 714,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 699,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 698,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 flex flex-col",
                            style: {
                                background: BG
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-7 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs uppercase tracking-widest",
                                                style: {
                                                    color: "#4d6b57"
                                                },
                                                children: "Your Essay"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium",
                                                style: {
                                                    color: wordOk ? "#9dd4b0" : "#4d6b57"
                                                },
                                                children: [
                                                    wc,
                                                    " / ",
                                                    targetWords,
                                                    " words ",
                                                    wordOk && "✓"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 726,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 724,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "flex-1 w-full resize-none rounded-xl p-5 text-sm leading-7",
                                        style: {
                                            background: CARD,
                                            border: `1px solid ${BORDER}`,
                                            color: "#f0f7f2",
                                            fontFamily: "DM Sans, sans-serif",
                                            caretColor: "#6ab98a",
                                            outline: "none"
                                        },
                                        placeholder: "ここに英文を入力してください...",
                                        value: essay,
                                        onChange: (e)=>setEssay(e.target.value),
                                        onFocus: (e)=>e.currentTarget.style.borderColor = "#2e6044",
                                        onBlur: (e)=>e.currentTarget.style.borderColor = BORDER
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 730,
                                        columnNumber: 17
                                    }, this),
                                    writingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm",
                                        style: {
                                            color: "#f87171"
                                        },
                                        children: writingError
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 flex-1 rounded-full overflow-hidden",
                                                style: {
                                                    background: "#1a3323"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full transition-all duration-300",
                                                    style: {
                                                        width: `${Math.min(wc / targetWords * 100, 100)}%`,
                                                        background: wordOk ? "#4d9970" : "#2e6044"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: isT1 ? submitT1 : submitT2,
                                                disabled: !essay.trim(),
                                                className: "px-7 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed",
                                                style: {
                                                    background: essay.trim() ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323",
                                                    color: "#f0f7f2",
                                                    minWidth: 110
                                                },
                                                children: "採点する →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 745,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 h-0.5 rounded-full overflow-hidden",
                                        style: {
                                            background: "#1a3323"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full rounded-full transition-all duration-1000",
                                            style: {
                                                width: `${timeLeft / totalTime * 100}%`,
                                                background: timerWarn ? "#fbbf24" : timerExp ? "#f87171" : "#2e6044"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 756,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 723,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 722,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 696,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 590,
            columnNumber: 7
        }, this);
    }
    // ── SPEAKING ─────────────────────────────────────────────────────────────────
    if (step === "speaking") {
        const spBandNum = speakingBand !== "" ? parseFloat(speakingBand) : null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                    stepNum: 4
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 774,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center gap-8 px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#c9a84c"
                                    },
                                    children: "Step 4"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 777,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "DM Serif Display, serif",
                                        fontSize: 40,
                                        color: "#f0f7f2"
                                    },
                                    children: "Speaking"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 778,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm mt-2",
                                    style: {
                                        color: "#6ab98a"
                                    },
                                    children: "音声を録音してアップロードしてください"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 779,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 776,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[520px] rounded-2xl p-7",
                            style: {
                                background: CARD,
                                border: `1px solid ${BORDER}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-4 mb-6",
                                    children: [
                                        recordState === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: startRecording,
                                            className: "w-20 h-20 rounded-full flex items-center justify-center transition-all",
                                            style: {
                                                background: "linear-gradient(135deg,#2e6044,#4d9970)",
                                                boxShadow: "0 0 0 4px #1a3323"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 24 24",
                                                fill: "#f0f7f2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 10v2a7 7 0 0 1-14 0v-2",
                                                        stroke: "#f0f7f2",
                                                        strokeWidth: "1.5",
                                                        fill: "none",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "19",
                                                        x2: "12",
                                                        y2: "23",
                                                        stroke: "#f0f7f2",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 789,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 786,
                                            columnNumber: 17
                                        }, this),
                                        recordState === "recording" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2.5 h-2.5 rounded-full animate-pulse",
                                                            style: {
                                                                background: "#f87171"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 800,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-sm",
                                                            style: {
                                                                color: "#f87171"
                                                            },
                                                            children: [
                                                                "REC ",
                                                                fmtTime(recordSecs)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: stopRecording,
                                                    className: "w-16 h-16 rounded-full flex items-center justify-center",
                                                    style: {
                                                        background: "#7f1d1d",
                                                        border: "2px solid #f87171"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-5 h-5 rounded",
                                                        style: {
                                                            background: "#f87171"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "#4d6b57"
                                                    },
                                                    children: "停止ボタンを押して録音を終了"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 798,
                                            columnNumber: 17
                                        }, this),
                                        (recordState === "recorded" || recordState === "uploading" || recordState === "uploaded") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full",
                                                            style: {
                                                                background: "#6ab98a"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            style: {
                                                                color: "#6ab98a"
                                                            },
                                                            children: [
                                                                "録音完了 (",
                                                                fmtTime(recordSecs),
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 19
                                                }, this),
                                                localAudioUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                    src: localAudioUrl,
                                                    controls: true,
                                                    className: "w-full",
                                                    style: {
                                                        height: 36
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        recordState !== "uploaded" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: startRecording,
                                                                    disabled: recordState === "uploading",
                                                                    className: "flex-1 py-2 rounded-lg text-sm transition-all",
                                                                    style: {
                                                                        background: "#152a1c",
                                                                        border: `1px solid ${BORDER}`,
                                                                        color: "#9dd4b0"
                                                                    },
                                                                    children: "録り直す"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 824,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: uploadRecording,
                                                                    disabled: recordState === "uploading",
                                                                    className: "flex-1 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-50",
                                                                    style: {
                                                                        background: "linear-gradient(135deg,#2e6044,#4d9970)",
                                                                        color: "#f0f7f2"
                                                                    },
                                                                    children: recordState === "uploading" ? "アップロード中..." : "アップロード ↑"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 829,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        recordState === "uploaded" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 py-2 rounded-lg text-sm text-center",
                                                            style: {
                                                                background: "#0f2a1a",
                                                                border: "1px solid #2e6044",
                                                                color: "#6ab98a"
                                                            },
                                                            children: "✓ アップロード完了"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 837,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this),
                                        speakingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: "#f87171"
                                            },
                                            children: speakingError
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 845,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 784,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-5",
                                    style: {
                                        borderColor: BORDER
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-widest mb-3",
                                            style: {
                                                color: "#4d6b57"
                                            },
                                            children: "スコア入力（任意・後でAdminから入力も可）"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 850,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-10 gap-1.5",
                                            children: [
                                                "3.0",
                                                "3.5",
                                                "4.0",
                                                "4.5",
                                                "5.0",
                                                "5.5",
                                                "6.0",
                                                "6.5",
                                                "7.0",
                                                "7.5",
                                                "8.0",
                                                "8.5",
                                                "9.0"
                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSpeakingBand(v),
                                                    className: "py-2 rounded-lg text-xs font-semibold transition-all",
                                                    style: {
                                                        background: speakingBand === v ? "#4d9970" : "#152a1c",
                                                        border: `1px solid ${speakingBand === v ? "#4d9970" : BORDER}`,
                                                        color: speakingBand === v ? "#0d1a10" : "#9dd4b0"
                                                    },
                                                    children: v
                                                }, v, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 853,
                                            columnNumber: 15
                                        }, this),
                                        spBandNum !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-center text-sm",
                                            style: {
                                                color: "#9dd4b0"
                                            },
                                            children: [
                                                "Speaking Band: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "#6ab98a",
                                                        fontFamily: "DM Serif Display, serif",
                                                        fontSize: 20
                                                    },
                                                    children: spBandNum.toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 865,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 849,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 782,
                            columnNumber: 11
                        }, this),
                        submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            style: {
                                color: "#f87171"
                            },
                            children: submitError
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 872,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToResults,
                            disabled: submitting,
                            className: "px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50",
                            style: {
                                background: "linear-gradient(135deg,#2e6044,#4d9970)",
                                color: "#f0f7f2"
                            },
                            children: submitting ? "保存中..." : "結果を見る →"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 874,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            style: {
                                color: "#4d6b57"
                            },
                            children: "録音・スコア未入力でも結果を確認できます"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 882,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 775,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 773,
            columnNumber: 7
        }, this);
    }
    // ── RESULTS ──────────────────────────────────────────────────────────────────
    if (step === "results") {
        const spBandNum = speakingBand !== "" ? parseFloat(speakingBand) : null;
        const bands = [
            listenBand,
            readBand,
            writingBand,
            spBandNum
        ].filter((b)=>b !== null);
        const overallBand = bands.length === 4 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundHalf"])(bands.reduce((a, b)=>a + b, 0) / 4) : null;
        const SkillRow = ({ label, band, sub })=>{
            const color = band ? band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171" : "#4d6b57";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between py-4 border-b",
                style: {
                    borderColor: BORDER
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                style: {
                                    color: "#f0f7f2",
                                    fontFamily: "DM Serif Display, serif",
                                    fontSize: 18
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this),
                            sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-0.5",
                                style: {
                                    color: "#4d6b57"
                                },
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 901,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 899,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "DM Serif Display, serif",
                            fontSize: 40,
                            color
                        },
                        children: band !== null ? band.toFixed(1) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 16,
                                color: "#4d6b57"
                            },
                            children: "採点待ち"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 904,
                            columnNumber: 48
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 903,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 898,
                columnNumber: 9
            }, this);
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col",
            style: {
                background: BG
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 912,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col items-center justify-center px-10 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-6",
                            style: {
                                color: "#4d6b57"
                            },
                            children: [
                                "受験者：",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#f0f7f2"
                                    },
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 915,
                                    columnNumber: 72
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 915,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest mb-2",
                                    style: {
                                        color: "#c9a84c"
                                    },
                                    children: "Overall Band Score"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 919,
                                    columnNumber: 13
                                }, this),
                                overallBand !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "DM Serif Display, serif",
                                        fontSize: 96,
                                        lineHeight: 1,
                                        color: overallBand >= 7.5 ? "#6ab98a" : overallBand >= 6.0 ? "#c9a84c" : "#f87171"
                                    },
                                    children: overallBand.toFixed(1)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 921,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "DM Serif Display, serif",
                                                fontSize: 40,
                                                color: "#4d6b57"
                                            },
                                            children: bands.length > 0 ? `${(bands.reduce((a, b)=>a + b, 0) / bands.length).toFixed(1)}*` : "—"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs mt-1",
                                            style: {
                                                color: "#4d6b57"
                                            },
                                            children: "*Speakingスコア入力後に確定します"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 929,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 918,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[480px] rounded-2xl px-8 py-2",
                            style: {
                                background: CARD,
                                border: `1px solid ${BORDER}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillRow, {
                                    label: "Listening",
                                    band: listenBand,
                                    sub: `正答数 ${listenCorrect}/10`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 936,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillRow, {
                                    label: "Reading",
                                    band: readBand,
                                    sub: `正答数 ${readCorrect}/10`
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 937,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillRow, {
                                    label: "Writing",
                                    band: writingBand,
                                    sub: t1Result && t2Result ? `T1: ${t1Result.scores.band.toFixed(1)} / T2: ${t2Result.scores.band.toFixed(1)}` : ""
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillRow, {
                                    label: "Speaking",
                                    band: spBandNum,
                                    sub: speakingUrl ? "録音あり" : "録音なし"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 935,
                            columnNumber: 11
                        }, this),
                        (t1Result || t2Result) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 w-[480px] rounded-2xl p-6",
                            style: {
                                background: CARD,
                                border: `1px solid ${BORDER}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs uppercase tracking-widest mb-4",
                                    style: {
                                        color: "#4d6b57"
                                    },
                                    children: "Writing 詳細"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-around",
                                    children: [
                                        t1Result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mb-2",
                                                    style: {
                                                        color: "#c9a84c"
                                                    },
                                                    children: "Task 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        [
                                                            "TA",
                                                            t1Result.scores.ta,
                                                            "#6ab98a"
                                                        ],
                                                        [
                                                            "CC",
                                                            t1Result.scores.cc,
                                                            "#7ba7d0"
                                                        ],
                                                        [
                                                            "LR",
                                                            t1Result.scores.lr,
                                                            "#c9a84c"
                                                        ],
                                                        [
                                                            "GRA",
                                                            t1Result.scores.gra,
                                                            "#b08fda"
                                                        ]
                                                    ].map(([l, s, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                            label: String(l),
                                                            score: Number(s),
                                                            color: String(c)
                                                        }, String(l), false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 948,
                                            columnNumber: 19
                                        }, this),
                                        t2Result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs mb-2",
                                                    style: {
                                                        color: "#c9a84c"
                                                    },
                                                    children: "Task 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        [
                                                            "TA",
                                                            t2Result.scores.ta,
                                                            "#6ab98a"
                                                        ],
                                                        [
                                                            "CC",
                                                            t2Result.scores.cc,
                                                            "#7ba7d0"
                                                        ],
                                                        [
                                                            "LR",
                                                            t2Result.scores.lr,
                                                            "#c9a84c"
                                                        ],
                                                        [
                                                            "GRA",
                                                            t2Result.scores.gra,
                                                            "#b08fda"
                                                        ]
                                                    ].map(([l, s, c])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreRing, {
                                                            label: String(l),
                                                            score: Number(s),
                                                            color: String(c)
                                                        }, String(l), false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 958,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 946,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 944,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setStep("home");
                                setName("");
                                setListenCorrect(null);
                                setReadCorrect(null);
                                setT1Essay("");
                                setT2Essay("");
                                setT1Result(null);
                                setT2Result(null);
                                setSpeakingBand("");
                                setSpeakingUrl(null);
                                setLocalAudioUrl(null);
                                setRecordState("idle");
                                setWritingSub("t1-write");
                            },
                            className: "mt-8 px-8 py-3 rounded-xl text-sm border transition-all",
                            style: {
                                borderColor: BORDER,
                                color: "#9dd4b0"
                            },
                            children: "最初からやり直す"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 971,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 913,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 911,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(Home, "rWIsSlYwkipC31PgKyEpKcLCoOY=");
_c5 = Home;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "LineChart");
__turbopack_context__.k.register(_c1, "ScoreRing");
__turbopack_context__.k.register(_c2, "StepIndicator");
__turbopack_context__.k.register(_c3, "BandDisplay");
__turbopack_context__.k.register(_c4, "ScoreCard");
__turbopack_context__.k.register(_c5, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1q9r93x._.js.map