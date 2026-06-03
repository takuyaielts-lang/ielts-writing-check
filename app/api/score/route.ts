import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";

// クライアントはリクエスト時に生成（環境変数の読み込みタイミング問題を回避）
function getClient() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is not set in environment variables");
  }
  return new Anthropic({ apiKey });
}

export async function POST(req: NextRequest) {
  // 環境変数の確認ログ（Vercelのログで確認可能）
  console.log("[score] ANTHROPIC_API_KEY present:", !!process.env.ANTHROPIC_API_KEY);
  console.log("[score] SUPABASE_URL present:", !!process.env.SUPABASE_URL);

  try {
    const body = await req.json();
    const { taskType, questionId, questionText, essay, wordCount } = body;

    console.log("[score] Request received:", { taskType, questionId, wordCount, essayLength: essay?.length });

    if (!essay || essay.trim().length < 1) {
      return NextResponse.json({ error: "エッセイが入力されていません。" }, { status: 400 });
    }

    const client = getClient();

    const criterionName = taskType === "task1" ? "Task Achievement (TA)" : "Task Response (TR)";

    const prompt = `You are a highly experienced IELTS examiner with over 15 years of marking experience. Score the following IELTS Writing ${taskType === "task1" ? "Task 1" : "Task 2"} essay strictly according to official IELTS marking criteria.

TASK QUESTION:
${questionText}

CANDIDATE'S ESSAY (${wordCount} words):
${essay}

Evaluate the essay on the following four criteria using the official IELTS 9-band scale. You may award scores in 0.5 increments (e.g., 5.0, 5.5, 6.0, 6.5, 7.0).

1. ${criterionName} — Does the response address all parts of the task? Is there a clear overview/position? Are key features selected and highlighted?
2. Coherence and Cohesion (CC) — Is the essay logically organised? Are cohesive devices used appropriately?
3. Lexical Resource (LR) — Is there a wide range of vocabulary? Is it used accurately and appropriately?
4. Grammatical Range and Accuracy (GRA) — Is there a wide range of sentence structures? Is grammar accurate?

Calculate the overall Band Score as the average of the four criteria scores, rounded to the nearest 0.5.

Respond ONLY with valid JSON in exactly this format (no markdown, no code blocks, just raw JSON):
{
  "scores": {
    "ta": <number 1-9>,
    "cc": <number 1-9>,
    "lr": <number 1-9>,
    "gra": <number 1-9>,
    "band": <number 1-9>
  },
  "strengths": [
    "<strength 1 in Japanese, 1-2 sentences>",
    "<strength 2 in Japanese, 1-2 sentences>",
    "<strength 3 in Japanese, 1-2 sentences>"
  ],
  "improvements": [
    "<improvement 1 in Japanese, 1-2 sentences with specific suggestion>",
    "<improvement 2 in Japanese, 1-2 sentences with specific suggestion>",
    "<improvement 3 in Japanese, 1-2 sentences with specific suggestion>"
  ],
  "detailed_feedback": "<Detailed feedback in Japanese, 3-4 paragraphs covering all four criteria. Be specific, cite examples from the essay where possible. Use \\n between paragraphs.>"
}`;

    console.log("[score] Calling Anthropic API...");

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }],
    });

    console.log("[score] Anthropic API responded. stop_reason:", message.stop_reason);

    const raw = (message.content[0] as { type: string; text: string }).text.trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      console.error("[score] JSON parse failed. Raw response:", raw.slice(0, 500));
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error(`Invalid JSON from AI. Raw: ${raw.slice(0, 200)}`);
      parsed = JSON.parse(match[0]);
    }

    console.log("[score] Parsed scores:", parsed.scores);

    // Save to Supabase (non-blocking, best-effort)
    try {
      const { error: dbError } = await supabaseAdmin.from("submissions").insert({
        task_type: taskType,
        question_id: questionId,
        question_text: questionText,
        user_essay: essay,
        word_count: wordCount,
        score_ta: parsed.scores.ta,
        score_cc: parsed.scores.cc,
        score_lr: parsed.scores.lr,
        score_gra: parsed.scores.gra,
        band_score: parsed.scores.band,
        strengths: parsed.strengths,
        improvements: parsed.improvements,
        detailed_feedback: parsed.detailed_feedback,
      });
      if (dbError) console.error("[score] Supabase insert error:", dbError);
      else console.log("[score] Supabase insert OK");
    } catch (dbErr) {
      console.error("[score] Supabase insert exception:", dbErr);
    }

    return NextResponse.json(parsed);

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error("[score] Fatal error:", message);
    if (stack) console.error("[score] Stack:", stack);

    // 開発時・デバッグ用に実際のエラーメッセージもレスポンスに含める
    return NextResponse.json(
      {
        error: "採点中にエラーが発生しました。しばらくしてから再試行してください。",
        detail: message, // Vercel ログ確認用
      },
      { status: 500 }
    );
  }
}
