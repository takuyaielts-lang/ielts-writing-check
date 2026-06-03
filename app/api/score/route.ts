import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { taskType, questionId, questionText, essay, wordCount } =
      await req.json();

    if (!essay || essay.trim().length < 10) {
      return NextResponse.json({ error: "エッセイが短すぎます。" }, { status: 400 });
    }

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

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = (message.content[0] as { type: string; text: string }).text.trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Invalid JSON from AI");
      parsed = JSON.parse(match[0]);
    }

    // Save to Supabase (non-blocking, best-effort)
    try {
      await supabaseAdmin.from("submissions").insert({
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
    } catch (dbErr) {
      console.error("Supabase insert error:", dbErr);
    }

    return NextResponse.json(parsed);
  } catch (err: unknown) {
    console.error("Score API error:", err);
    return NextResponse.json(
      { error: "採点中にエラーが発生しました。しばらくしてから再試行してください。" },
      { status: 500 }
    );
  }
}
