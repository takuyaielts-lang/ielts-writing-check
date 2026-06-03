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
exports.id = "app/api/score/route";
exports.ids = ["app/api/score/route"];
exports.modules = {

/***/ "(rsc)/./app/api/score/route.ts":
/*!********************************!*\
  !*** ./app/api/score/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _anthropic_ai_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @anthropic-ai/sdk */ \"(rsc)/./node_modules/@anthropic-ai/sdk/index.mjs\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./lib/supabase.ts\");\n\n\n\nconst client = new _anthropic_ai_sdk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    apiKey: process.env.ANTHROPIC_API_KEY\n});\nasync function POST(req) {\n    try {\n        const { taskType, questionId, questionText, essay, wordCount } = await req.json();\n        if (!essay || essay.trim().length < 10) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"エッセイが短すぎます。\"\n            }, {\n                status: 400\n            });\n        }\n        const criterionName = taskType === \"task1\" ? \"Task Achievement (TA)\" : \"Task Response (TR)\";\n        const prompt = `You are a highly experienced IELTS examiner with over 15 years of marking experience. Score the following IELTS Writing ${taskType === \"task1\" ? \"Task 1\" : \"Task 2\"} essay strictly according to official IELTS marking criteria.\n\nTASK QUESTION:\n${questionText}\n\nCANDIDATE'S ESSAY (${wordCount} words):\n${essay}\n\nEvaluate the essay on the following four criteria using the official IELTS 9-band scale. You may award scores in 0.5 increments (e.g., 5.0, 5.5, 6.0, 6.5, 7.0).\n\n1. ${criterionName} — Does the response address all parts of the task? Is there a clear overview/position? Are key features selected and highlighted?\n2. Coherence and Cohesion (CC) — Is the essay logically organised? Are cohesive devices used appropriately?\n3. Lexical Resource (LR) — Is there a wide range of vocabulary? Is it used accurately and appropriately?\n4. Grammatical Range and Accuracy (GRA) — Is there a wide range of sentence structures? Is grammar accurate?\n\nCalculate the overall Band Score as the average of the four criteria scores, rounded to the nearest 0.5.\n\nRespond ONLY with valid JSON in exactly this format (no markdown, no code blocks, just raw JSON):\n{\n  \"scores\": {\n    \"ta\": <number 1-9>,\n    \"cc\": <number 1-9>,\n    \"lr\": <number 1-9>,\n    \"gra\": <number 1-9>,\n    \"band\": <number 1-9>\n  },\n  \"strengths\": [\n    \"<strength 1 in Japanese, 1-2 sentences>\",\n    \"<strength 2 in Japanese, 1-2 sentences>\",\n    \"<strength 3 in Japanese, 1-2 sentences>\"\n  ],\n  \"improvements\": [\n    \"<improvement 1 in Japanese, 1-2 sentences with specific suggestion>\",\n    \"<improvement 2 in Japanese, 1-2 sentences with specific suggestion>\",\n    \"<improvement 3 in Japanese, 1-2 sentences with specific suggestion>\"\n  ],\n  \"detailed_feedback\": \"<Detailed feedback in Japanese, 3-4 paragraphs covering all four criteria. Be specific, cite examples from the essay where possible. Use \\\\n between paragraphs.>\"\n}`;\n        const message = await client.messages.create({\n            model: \"claude-sonnet-4-6\",\n            max_tokens: 1500,\n            messages: [\n                {\n                    role: \"user\",\n                    content: prompt\n                }\n            ]\n        });\n        const raw = message.content[0].text.trim();\n        let parsed;\n        try {\n            parsed = JSON.parse(raw);\n        } catch  {\n            const match = raw.match(/\\{[\\s\\S]*\\}/);\n            if (!match) throw new Error(\"Invalid JSON from AI\");\n            parsed = JSON.parse(match[0]);\n        }\n        // Save to Supabase (non-blocking, best-effort)\n        try {\n            await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabaseAdmin.from(\"submissions\").insert({\n                task_type: taskType,\n                question_id: questionId,\n                question_text: questionText,\n                user_essay: essay,\n                word_count: wordCount,\n                score_ta: parsed.scores.ta,\n                score_cc: parsed.scores.cc,\n                score_lr: parsed.scores.lr,\n                score_gra: parsed.scores.gra,\n                band_score: parsed.scores.band,\n                strengths: parsed.strengths,\n                improvements: parsed.improvements,\n                detailed_feedback: parsed.detailed_feedback\n            });\n        } catch (dbErr) {\n            console.error(\"Supabase insert error:\", dbErr);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(parsed);\n    } catch (err) {\n        console.error(\"Score API error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"採点中にエラーが発生しました。しばらくしてから再試行してください。\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Njb3JlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDZDtBQUNLO0FBRS9DLE1BQU1HLFNBQVMsSUFBSUYseURBQVNBLENBQUM7SUFBRUcsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFBQztBQUU5RCxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUM1RCxNQUFNTCxJQUFJTSxJQUFJO1FBRWhCLElBQUksQ0FBQ0YsU0FBU0EsTUFBTUcsSUFBSSxHQUFHQyxNQUFNLEdBQUcsSUFBSTtZQUN0QyxPQUFPakIscURBQVlBLENBQUNlLElBQUksQ0FBQztnQkFBRUcsT0FBTztZQUFjLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNuRTtRQUVBLE1BQU1DLGdCQUFnQlYsYUFBYSxVQUFVLDBCQUEwQjtRQUV2RSxNQUFNVyxTQUFTLENBQUMsd0hBQXdILEVBQUVYLGFBQWEsVUFBVSxXQUFXLFNBQVM7OztBQUd6TCxFQUFFRSxhQUFhOzttQkFFSSxFQUFFRSxVQUFVO0FBQy9CLEVBQUVELE1BQU07Ozs7R0FJTCxFQUFFTyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQmxCLENBQUM7UUFFRSxNQUFNRSxVQUFVLE1BQU1uQixPQUFPb0IsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDM0NDLE9BQU87WUFDUEMsWUFBWTtZQUNaSCxVQUFVO2dCQUFDO29CQUFFSSxNQUFNO29CQUFRQyxTQUFTUDtnQkFBTzthQUFFO1FBQy9DO1FBRUEsTUFBTVEsTUFBTSxRQUFTRCxPQUFPLENBQUMsRUFBRSxDQUFvQ0UsSUFBSSxDQUFDZCxJQUFJO1FBRTVFLElBQUllO1FBQ0osSUFBSTtZQUNGQSxTQUFTQyxLQUFLQyxLQUFLLENBQUNKO1FBQ3RCLEVBQUUsT0FBTTtZQUNOLE1BQU1LLFFBQVFMLElBQUlLLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUNBLE9BQU8sTUFBTSxJQUFJQyxNQUFNO1lBQzVCSixTQUFTQyxLQUFLQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzlCO1FBRUEsK0NBQStDO1FBQy9DLElBQUk7WUFDRixNQUFNaEMsd0RBQWFBLENBQUNrQyxJQUFJLENBQUMsZUFBZUMsTUFBTSxDQUFDO2dCQUM3Q0MsV0FBVzVCO2dCQUNYNkIsYUFBYTVCO2dCQUNiNkIsZUFBZTVCO2dCQUNmNkIsWUFBWTVCO2dCQUNaNkIsWUFBWTVCO2dCQUNaNkIsVUFBVVosT0FBT2EsTUFBTSxDQUFDQyxFQUFFO2dCQUMxQkMsVUFBVWYsT0FBT2EsTUFBTSxDQUFDRyxFQUFFO2dCQUMxQkMsVUFBVWpCLE9BQU9hLE1BQU0sQ0FBQ0ssRUFBRTtnQkFDMUJDLFdBQVduQixPQUFPYSxNQUFNLENBQUNPLEdBQUc7Z0JBQzVCQyxZQUFZckIsT0FBT2EsTUFBTSxDQUFDUyxJQUFJO2dCQUM5QkMsV0FBV3ZCLE9BQU91QixTQUFTO2dCQUMzQkMsY0FBY3hCLE9BQU93QixZQUFZO2dCQUNqQ0MsbUJBQW1CekIsT0FBT3lCLGlCQUFpQjtZQUM3QztRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFReEMsS0FBSyxDQUFDLDBCQUEwQnVDO1FBQzFDO1FBRUEsT0FBT3pELHFEQUFZQSxDQUFDZSxJQUFJLENBQUNnQjtJQUMzQixFQUFFLE9BQU80QixLQUFjO1FBQ3JCRCxRQUFReEMsS0FBSyxDQUFDLG9CQUFvQnlDO1FBQ2xDLE9BQU8zRCxxREFBWUEsQ0FBQ2UsSUFBSSxDQUN0QjtZQUFFRyxPQUFPO1FBQW9DLEdBQzdDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvaGFzaGltb3RvdGFrdXlhL0Rlc2t0b3AvaWVsdHMtd3JpdGluZy1jaGVjay9hcHAvYXBpL3Njb3JlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBBbnRocm9waWMgZnJvbSBcIkBhbnRocm9waWMtYWkvc2RrXCI7XG5pbXBvcnQgeyBzdXBhYmFzZUFkbWluIH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlXCI7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBbnRocm9waWMoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFOVEhST1BJQ19BUElfS0VZIH0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0YXNrVHlwZSwgcXVlc3Rpb25JZCwgcXVlc3Rpb25UZXh0LCBlc3NheSwgd29yZENvdW50IH0gPVxuICAgICAgYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGlmICghZXNzYXkgfHwgZXNzYXkudHJpbSgpLmxlbmd0aCA8IDEwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCLjgqjjg4PjgrvjgqTjgYznn63jgZnjgY7jgb7jgZnjgIJcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyaXRlcmlvbk5hbWUgPSB0YXNrVHlwZSA9PT0gXCJ0YXNrMVwiID8gXCJUYXNrIEFjaGlldmVtZW50IChUQSlcIiA6IFwiVGFzayBSZXNwb25zZSAoVFIpXCI7XG5cbiAgICBjb25zdCBwcm9tcHQgPSBgWW91IGFyZSBhIGhpZ2hseSBleHBlcmllbmNlZCBJRUxUUyBleGFtaW5lciB3aXRoIG92ZXIgMTUgeWVhcnMgb2YgbWFya2luZyBleHBlcmllbmNlLiBTY29yZSB0aGUgZm9sbG93aW5nIElFTFRTIFdyaXRpbmcgJHt0YXNrVHlwZSA9PT0gXCJ0YXNrMVwiID8gXCJUYXNrIDFcIiA6IFwiVGFzayAyXCJ9IGVzc2F5IHN0cmljdGx5IGFjY29yZGluZyB0byBvZmZpY2lhbCBJRUxUUyBtYXJraW5nIGNyaXRlcmlhLlxuXG5UQVNLIFFVRVNUSU9OOlxuJHtxdWVzdGlvblRleHR9XG5cbkNBTkRJREFURSdTIEVTU0FZICgke3dvcmRDb3VudH0gd29yZHMpOlxuJHtlc3NheX1cblxuRXZhbHVhdGUgdGhlIGVzc2F5IG9uIHRoZSBmb2xsb3dpbmcgZm91ciBjcml0ZXJpYSB1c2luZyB0aGUgb2ZmaWNpYWwgSUVMVFMgOS1iYW5kIHNjYWxlLiBZb3UgbWF5IGF3YXJkIHNjb3JlcyBpbiAwLjUgaW5jcmVtZW50cyAoZS5nLiwgNS4wLCA1LjUsIDYuMCwgNi41LCA3LjApLlxuXG4xLiAke2NyaXRlcmlvbk5hbWV9IOKAlCBEb2VzIHRoZSByZXNwb25zZSBhZGRyZXNzIGFsbCBwYXJ0cyBvZiB0aGUgdGFzaz8gSXMgdGhlcmUgYSBjbGVhciBvdmVydmlldy9wb3NpdGlvbj8gQXJlIGtleSBmZWF0dXJlcyBzZWxlY3RlZCBhbmQgaGlnaGxpZ2h0ZWQ/XG4yLiBDb2hlcmVuY2UgYW5kIENvaGVzaW9uIChDQykg4oCUIElzIHRoZSBlc3NheSBsb2dpY2FsbHkgb3JnYW5pc2VkPyBBcmUgY29oZXNpdmUgZGV2aWNlcyB1c2VkIGFwcHJvcHJpYXRlbHk/XG4zLiBMZXhpY2FsIFJlc291cmNlIChMUikg4oCUIElzIHRoZXJlIGEgd2lkZSByYW5nZSBvZiB2b2NhYnVsYXJ5PyBJcyBpdCB1c2VkIGFjY3VyYXRlbHkgYW5kIGFwcHJvcHJpYXRlbHk/XG40LiBHcmFtbWF0aWNhbCBSYW5nZSBhbmQgQWNjdXJhY3kgKEdSQSkg4oCUIElzIHRoZXJlIGEgd2lkZSByYW5nZSBvZiBzZW50ZW5jZSBzdHJ1Y3R1cmVzPyBJcyBncmFtbWFyIGFjY3VyYXRlP1xuXG5DYWxjdWxhdGUgdGhlIG92ZXJhbGwgQmFuZCBTY29yZSBhcyB0aGUgYXZlcmFnZSBvZiB0aGUgZm91ciBjcml0ZXJpYSBzY29yZXMsIHJvdW5kZWQgdG8gdGhlIG5lYXJlc3QgMC41LlxuXG5SZXNwb25kIE9OTFkgd2l0aCB2YWxpZCBKU09OIGluIGV4YWN0bHkgdGhpcyBmb3JtYXQgKG5vIG1hcmtkb3duLCBubyBjb2RlIGJsb2NrcywganVzdCByYXcgSlNPTik6XG57XG4gIFwic2NvcmVzXCI6IHtcbiAgICBcInRhXCI6IDxudW1iZXIgMS05PixcbiAgICBcImNjXCI6IDxudW1iZXIgMS05PixcbiAgICBcImxyXCI6IDxudW1iZXIgMS05PixcbiAgICBcImdyYVwiOiA8bnVtYmVyIDEtOT4sXG4gICAgXCJiYW5kXCI6IDxudW1iZXIgMS05PlxuICB9LFxuICBcInN0cmVuZ3Roc1wiOiBbXG4gICAgXCI8c3RyZW5ndGggMSBpbiBKYXBhbmVzZSwgMS0yIHNlbnRlbmNlcz5cIixcbiAgICBcIjxzdHJlbmd0aCAyIGluIEphcGFuZXNlLCAxLTIgc2VudGVuY2VzPlwiLFxuICAgIFwiPHN0cmVuZ3RoIDMgaW4gSmFwYW5lc2UsIDEtMiBzZW50ZW5jZXM+XCJcbiAgXSxcbiAgXCJpbXByb3ZlbWVudHNcIjogW1xuICAgIFwiPGltcHJvdmVtZW50IDEgaW4gSmFwYW5lc2UsIDEtMiBzZW50ZW5jZXMgd2l0aCBzcGVjaWZpYyBzdWdnZXN0aW9uPlwiLFxuICAgIFwiPGltcHJvdmVtZW50IDIgaW4gSmFwYW5lc2UsIDEtMiBzZW50ZW5jZXMgd2l0aCBzcGVjaWZpYyBzdWdnZXN0aW9uPlwiLFxuICAgIFwiPGltcHJvdmVtZW50IDMgaW4gSmFwYW5lc2UsIDEtMiBzZW50ZW5jZXMgd2l0aCBzcGVjaWZpYyBzdWdnZXN0aW9uPlwiXG4gIF0sXG4gIFwiZGV0YWlsZWRfZmVlZGJhY2tcIjogXCI8RGV0YWlsZWQgZmVlZGJhY2sgaW4gSmFwYW5lc2UsIDMtNCBwYXJhZ3JhcGhzIGNvdmVyaW5nIGFsbCBmb3VyIGNyaXRlcmlhLiBCZSBzcGVjaWZpYywgY2l0ZSBleGFtcGxlcyBmcm9tIHRoZSBlc3NheSB3aGVyZSBwb3NzaWJsZS4gVXNlIFxcXFxuIGJldHdlZW4gcGFyYWdyYXBocy4+XCJcbn1gO1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGNsaWVudC5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgbW9kZWw6IFwiY2xhdWRlLXNvbm5ldC00LTZcIixcbiAgICAgIG1heF90b2tlbnM6IDE1MDAsXG4gICAgICBtZXNzYWdlczogW3sgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHByb21wdCB9XSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJhdyA9IChtZXNzYWdlLmNvbnRlbnRbMF0gYXMgeyB0eXBlOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9KS50ZXh0LnRyaW0oKTtcblxuICAgIGxldCBwYXJzZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gcmF3Lm1hdGNoKC9cXHtbXFxzXFxTXSpcXH0vKTtcbiAgICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSlNPTiBmcm9tIEFJXCIpO1xuICAgICAgcGFyc2VkID0gSlNPTi5wYXJzZShtYXRjaFswXSk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0byBTdXBhYmFzZSAobm9uLWJsb2NraW5nLCBiZXN0LWVmZm9ydClcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3VwYWJhc2VBZG1pbi5mcm9tKFwic3VibWlzc2lvbnNcIikuaW5zZXJ0KHtcbiAgICAgICAgdGFza190eXBlOiB0YXNrVHlwZSxcbiAgICAgICAgcXVlc3Rpb25faWQ6IHF1ZXN0aW9uSWQsXG4gICAgICAgIHF1ZXN0aW9uX3RleHQ6IHF1ZXN0aW9uVGV4dCxcbiAgICAgICAgdXNlcl9lc3NheTogZXNzYXksXG4gICAgICAgIHdvcmRfY291bnQ6IHdvcmRDb3VudCxcbiAgICAgICAgc2NvcmVfdGE6IHBhcnNlZC5zY29yZXMudGEsXG4gICAgICAgIHNjb3JlX2NjOiBwYXJzZWQuc2NvcmVzLmNjLFxuICAgICAgICBzY29yZV9scjogcGFyc2VkLnNjb3Jlcy5scixcbiAgICAgICAgc2NvcmVfZ3JhOiBwYXJzZWQuc2NvcmVzLmdyYSxcbiAgICAgICAgYmFuZF9zY29yZTogcGFyc2VkLnNjb3Jlcy5iYW5kLFxuICAgICAgICBzdHJlbmd0aHM6IHBhcnNlZC5zdHJlbmd0aHMsXG4gICAgICAgIGltcHJvdmVtZW50czogcGFyc2VkLmltcHJvdmVtZW50cyxcbiAgICAgICAgZGV0YWlsZWRfZmVlZGJhY2s6IHBhcnNlZC5kZXRhaWxlZF9mZWVkYmFjayxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGRiRXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU3VwYWJhc2UgaW5zZXJ0IGVycm9yOlwiLCBkYkVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHBhcnNlZCk7XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTY29yZSBBUEkgZXJyb3I6XCIsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCLmjqHngrnkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgZfjgbDjgonjgY/jgZfjgabjgYvjgonlho3oqabooYzjgZfjgabjgY/jgaDjgZXjgYTjgIJcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIkFudGhyb3BpYyIsInN1cGFiYXNlQWRtaW4iLCJjbGllbnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiQU5USFJPUElDX0FQSV9LRVkiLCJQT1NUIiwicmVxIiwidGFza1R5cGUiLCJxdWVzdGlvbklkIiwicXVlc3Rpb25UZXh0IiwiZXNzYXkiLCJ3b3JkQ291bnQiLCJqc29uIiwidHJpbSIsImxlbmd0aCIsImVycm9yIiwic3RhdHVzIiwiY3JpdGVyaW9uTmFtZSIsInByb21wdCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImNyZWF0ZSIsIm1vZGVsIiwibWF4X3Rva2VucyIsInJvbGUiLCJjb250ZW50IiwicmF3IiwidGV4dCIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsIm1hdGNoIiwiRXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwidGFza190eXBlIiwicXVlc3Rpb25faWQiLCJxdWVzdGlvbl90ZXh0IiwidXNlcl9lc3NheSIsIndvcmRfY291bnQiLCJzY29yZV90YSIsInNjb3JlcyIsInRhIiwic2NvcmVfY2MiLCJjYyIsInNjb3JlX2xyIiwibHIiLCJzY29yZV9ncmEiLCJncmEiLCJiYW5kX3Njb3JlIiwiYmFuZCIsInN0cmVuZ3RocyIsImltcHJvdmVtZW50cyIsImRldGFpbGVkX2ZlZWRiYWNrIiwiZGJFcnIiLCJjb25zb2xlIiwiZXJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/score/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase.ts":
/*!*************************!*\
  !*** ./lib/supabase.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabaseAdmin: () => (/* binding */ supabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/index.mjs\");\n\nconst supabaseUrl = process.env.SUPABASE_URL;\nconst supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;\nconst supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;\nconst noopStorage = {\n    getItem: ()=>null,\n    setItem: ()=>{},\n    removeItem: ()=>{}\n};\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabasePublishableKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        storage: noopStorage\n    }\n});\nconst supabaseAdmin = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseSecretKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        storage: noopStorage\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUM1QyxNQUFNQyx5QkFBeUJILFFBQVFDLEdBQUcsQ0FBQ0csd0JBQXdCO0FBQ25FLE1BQU1DLG9CQUFvQkwsUUFBUUMsR0FBRyxDQUFDSyxtQkFBbUI7QUFFekQsTUFBTUMsY0FBYztJQUNsQkMsU0FBUyxJQUFNO0lBQ2ZDLFNBQVMsS0FBTztJQUNoQkMsWUFBWSxLQUFPO0FBQ3JCO0FBRU8sTUFBTUMsV0FBV2IsbUVBQVlBLENBQUNDLGFBQWFJLHdCQUF3QjtJQUN4RVMsTUFBTTtRQUFFQyxnQkFBZ0I7UUFBT0Msa0JBQWtCO1FBQU9DLFNBQVNSO0lBQVk7QUFDL0UsR0FBRztBQUNJLE1BQU1TLGdCQUFnQmxCLG1FQUFZQSxDQUFDQyxhQUFhTSxtQkFBbUI7SUFDeEVPLE1BQU07UUFBRUMsZ0JBQWdCO1FBQU9DLGtCQUFrQjtRQUFPQyxTQUFTUjtJQUFZO0FBQy9FLEdBQUciLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXNoaW1vdG90YWt1eWEvRGVza3RvcC9pZWx0cy13cml0aW5nLWNoZWNrL2xpYi9zdXBhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfVVJMITtcbmNvbnN0IHN1cGFiYXNlUHVibGlzaGFibGVLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVkhO1xuY29uc3Qgc3VwYWJhc2VTZWNyZXRLZXkgPSBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRUNSRVRfS0VZITtcblxuY29uc3Qgbm9vcFN0b3JhZ2UgPSB7XG4gIGdldEl0ZW06ICgpID0+IG51bGwsXG4gIHNldEl0ZW06ICgpID0+IHt9LFxuICByZW1vdmVJdGVtOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VQdWJsaXNoYWJsZUtleSwge1xuICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSwgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsIHN0b3JhZ2U6IG5vb3BTdG9yYWdlIH0sXG59KTtcbmV4cG9ydCBjb25zdCBzdXBhYmFzZUFkbWluID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZVNlY3JldEtleSwge1xuICBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSwgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsIHN0b3JhZ2U6IG5vb3BTdG9yYWdlIH0sXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXNzaW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XG4gIHRhc2tfdHlwZTogc3RyaW5nO1xuICBxdWVzdGlvbl9pZDogbnVtYmVyO1xuICBxdWVzdGlvbl90ZXh0OiBzdHJpbmc7XG4gIHVzZXJfZXNzYXk6IHN0cmluZztcbiAgd29yZF9jb3VudDogbnVtYmVyO1xuICBzY29yZV90YTogbnVtYmVyO1xuICBzY29yZV9jYzogbnVtYmVyO1xuICBzY29yZV9scjogbnVtYmVyO1xuICBzY29yZV9ncmE6IG51bWJlcjtcbiAgYmFuZF9zY29yZTogbnVtYmVyO1xuICBzdHJlbmd0aHM6IHN0cmluZ1tdO1xuICBpbXByb3ZlbWVudHM6IHN0cmluZ1tdO1xuICBkZXRhaWxlZF9mZWVkYmFjazogc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VQdWJsaXNoYWJsZUtleSIsIlNVUEFCQVNFX1BVQkxJU0hBQkxFX0tFWSIsInN1cGFiYXNlU2VjcmV0S2V5IiwiU1VQQUJBU0VfU0VDUkVUX0tFWSIsIm5vb3BTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwic3VwYWJhc2UiLCJhdXRoIiwicGVyc2lzdFNlc3Npb24iLCJhdXRvUmVmcmVzaFRva2VuIiwic3RvcmFnZSIsInN1cGFiYXNlQWRtaW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fscore%2Froute&page=%2Fapi%2Fscore%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscore%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fscore%2Froute&page=%2Fapi%2Fscore%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscore%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_hashimototakuya_Desktop_ielts_writing_check_app_api_score_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/score/route.ts */ \"(rsc)/./app/api/score/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/score/route\",\n        pathname: \"/api/score\",\n        filename: \"route\",\n        bundlePath: \"app/api/score/route\"\n    },\n    resolvedPagePath: \"/Users/hashimototakuya/Desktop/ielts-writing-check/app/api/score/route.ts\",\n    nextConfigOutput,\n    userland: _Users_hashimototakuya_Desktop_ielts_writing_check_app_api_score_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzY29yZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc2NvcmUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzY29yZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhc2hpbW90b3Rha3V5YSUyRkRlc2t0b3AlMkZpZWx0cy13cml0aW5nLWNoZWNrJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhc2hpbW90b3Rha3V5YSUyRkRlc2t0b3AlMkZpZWx0cy13cml0aW5nLWNoZWNrJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5QjtBQUN0RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2hhc2hpbW90b3Rha3V5YS9EZXNrdG9wL2llbHRzLXdyaXRpbmctY2hlY2svYXBwL2FwaS9zY29yZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc2NvcmUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zY29yZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2NvcmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFzaGltb3RvdGFrdXlhL0Rlc2t0b3AvaWVsdHMtd3JpdGluZy1jaGVjay9hcHAvYXBpL3Njb3JlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fscore%2Froute&page=%2Fapi%2Fscore%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscore%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/@supabase","vendor-chunks/@anthropic-ai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/tslib","vendor-chunks/node-fetch","vendor-chunks/iceberg-js","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fscore%2Froute&page=%2Fapi%2Fscore%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fscore%2Froute.ts&appDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fhashimototakuya%2FDesktop%2Fielts-writing-check&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();