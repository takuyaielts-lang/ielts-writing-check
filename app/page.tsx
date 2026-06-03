"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  task1Questions,
  task2Questions,
  Task1Question,
  Task2Question,
} from "@/lib/questions";

// ─── Types ───────────────────────────────────────────────────────────────────

type TaskType = "task1" | "task2";
type AppState = "home" | "writing" | "result";

interface ScoreResult {
  scores: {
    ta: number;
    cc: number;
    lr: number;
    gra: number;
    band: number;
  };
  strengths: string[];
  improvements: string[];
  detailed_feedback: string;
}

// ─── Line Chart ──────────────────────────────────────────────────────────────

function LineChart({ question }: { question: Task1Question }) {
  const W = 540;
  const H = 260;
  const pad = { top: 24, right: 40, bottom: 44, left: 56 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;

  const { xLabels, yMin, yMax, series, yUnit } = question;
  const xSteps = xLabels.length - 1;

  const xPos = (i: number) => pad.left + (i / xSteps) * cW;
  const yPos = (v: number) =>
    pad.top + cH - ((v - yMin) / (yMax - yMin)) * cH;

  const yTicks = 5;
  const yStep = (yMax - yMin) / yTicks;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{ maxWidth: "540px" }}
    >
      {/* Grid lines */}
      {Array.from({ length: yTicks + 1 }, (_, i) => {
        const v = yMin + i * yStep;
        const y = yPos(v);
        return (
          <g key={i}>
            <line
              x1={pad.left}
              y1={y}
              x2={pad.left + cW}
              y2={y}
              stroke="#1f3d2b"
              strokeWidth="1"
            />
            <text
              x={pad.left - 8}
              y={y + 4}
              textAnchor="end"
              fill="#9dd4b0"
              fontSize="11"
              fontFamily="DM Sans, sans-serif"
            >
              {v % 1 === 0 ? v : v.toFixed(1)}
              {i === yTicks ? yUnit : ""}
            </text>
          </g>
        );
      })}

      {/* X axis labels */}
      {xLabels.map((label, i) => (
        <text
          key={i}
          x={xPos(i)}
          y={H - pad.bottom + 18}
          textAnchor="middle"
          fill="#9dd4b0"
          fontSize="11"
          fontFamily="DM Sans, sans-serif"
        >
          {label}
        </text>
      ))}

      {/* Axes */}
      <line
        x1={pad.left}
        y1={pad.top}
        x2={pad.left}
        y2={pad.top + cH}
        stroke="#2e6044"
        strokeWidth="1.5"
      />
      <line
        x1={pad.left}
        y1={pad.top + cH}
        x2={pad.left + cW}
        y2={pad.top + cH}
        stroke="#2e6044"
        strokeWidth="1.5"
      />

      {/* Series */}
      {series.map((s) => {
        const points = s.data
          .map((v, i) => `${xPos(i)},${yPos(v)}`)
          .join(" ");
        return (
          <g key={s.name}>
            <polyline
              points={points}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {s.data.map((v, i) => (
              <circle
                key={i}
                cx={xPos(i)}
                cy={yPos(v)}
                r="4"
                fill={s.color}
                stroke="#0d1a10"
                strokeWidth="1.5"
              />
            ))}
          </g>
        );
      })}

      {/* Legend */}
      {series.map((s, i) => (
        <g key={s.name} transform={`translate(${pad.left + i * 150}, ${H - 6})`}>
          <line
            x1="0"
            y1="-4"
            x2="16"
            y2="-4"
            stroke={s.color}
            strokeWidth="2.5"
          />
          <circle cx="8" cy="-4" r="3" fill={s.color} />
          <text
            x="22"
            y="0"
            fill="#9dd4b0"
            fontSize="11"
            fontFamily="DM Sans, sans-serif"
          >
            {s.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── Score Ring ───────────────────────────────────────────────────────────────

function ScoreRing({
  label,
  score,
  color,
}: {
  label: string;
  score: number;
  color: string;
}) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const pct = score / 9;
  const dash = pct * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="96" height="96" viewBox="0 0 96 96">
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#1a3323"
          strokeWidth="8"
        />
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ - dash}`}
          strokeLinecap="round"
          transform="rotate(-90 48 48)"
        />
        <text
          x="48"
          y="44"
          textAnchor="middle"
          fill="#f0f7f2"
          fontSize="20"
          fontFamily="DM Serif Display, serif"
          fontWeight="400"
        >
          {score.toFixed(1)}
        </text>
        <text
          x="48"
          y="60"
          textAnchor="middle"
          fill="#6ab98a"
          fontSize="10"
          fontFamily="DM Sans, sans-serif"
        >
          / 9.0
        </text>
      </svg>
      <span className="text-xs font-semibold tracking-widest text-forest-200 uppercase">
        {label}
      </span>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [appState, setAppState] = useState<AppState>("home");
  const [taskType, setTaskType] = useState<TaskType>("task1");
  const [currentQ1, setCurrentQ1] = useState<Task1Question | null>(null);
  const [currentQ2, setCurrentQ2] = useState<Task2Question | null>(null);
  const [essay, setEssay] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const TASK_TIME = { task1: 20 * 60, task2: 30 * 60 };

  const startTimer = useCallback((type: TaskType) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const secs = TASK_TIME[type];
    setTimeLeft(secs);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); return 0; }
        return t - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const wordCount = essay
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;

  const pickRandom = useCallback((type: TaskType) => {
    if (type === "task1") {
      const q =
        task1Questions[Math.floor(Math.random() * task1Questions.length)];
      setCurrentQ1(q);
      setCurrentQ2(null);
    } else {
      const q =
        task2Questions[Math.floor(Math.random() * task2Questions.length)];
      setCurrentQ2(q);
      setCurrentQ1(null);
    }
    setEssay("");
    setResult(null);
    setError("");
    setAppState("writing");
    startTimer(type);
  }, [startTimer]);

  const handleStart = (type: TaskType) => {
    setTaskType(type);
    pickRandom(type);
  };

  const handleNewQuestion = () => {
    pickRandom(taskType);
  };

  const handleSubmit = async () => {
    if (essay.trim().length < 1) {
      setError("英文を入力してから採点してください。");
      return;
    }
    setLoading(true);
    setError("");

    const questionText =
      taskType === "task1" ? currentQ1?.prompt : currentQ2?.prompt;
    const questionId =
      taskType === "task1" ? currentQ1?.id : currentQ2?.id;

    try {
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskType,
          questionId,
          questionText,
          essay,
          wordCount,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "採点に失敗しました。");
      }

      const data = await res.json();
      setResult(data);
      setAppState("result");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setAppState("home");
    setEssay("");
    setResult(null);
    setError("");
  };

  const handleRetry = () => {
    setResult(null);
    setAppState("writing");
  };

  // ── Home ──────────────────────────────────────────────────────────────────

  if (appState === "home") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0d1a10" }}>
        {/* Header */}
        <header className="border-b border-forest-800 px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded"
              style={{ background: "linear-gradient(135deg, #2e6044, #6ab98a)" }}
            />
            <span
              className="font-serif text-xl text-cream tracking-wide"
              style={{ fontFamily: "DM Serif Display, serif" }}
            >
              IELTS Writing Level Check
            </span>
          </div>
          <a
            href="/admin"
            className="text-xs text-forest-300 hover:text-forest-100 transition-colors tracking-widest uppercase"
          >
            Admin
          </a>
        </header>

        {/* Hero */}
        <main className="flex-1 flex flex-col items-center justify-center px-10 py-20">
          <p className="text-forest-300 text-sm tracking-widest uppercase mb-4">
            AI-Powered Assessment
          </p>
          <h1
            className="text-center mb-6 leading-tight"
            style={{
              fontFamily: "DM Serif Display, serif",
              fontSize: "52px",
              color: "#f0f7f2",
            }}
          >
            IELTS Writing
            <br />
            <span style={{ color: "#6ab98a" }}>Level Check</span>
          </h1>
          <p className="text-forest-200 text-base text-center max-w-lg mb-14 leading-relaxed">
            4軸スコア（TA / CC / LR / GRA）とバンドスコアを即時算出。
            <br />
            強みと改善点を日本語でフィードバックします。
          </p>

          <div className="flex gap-6">
            {/* Task 1 Card */}
            <button
              onClick={() => handleStart("task1")}
              className="group relative w-72 rounded-2xl p-8 text-left transition-all duration-200 border"
              style={{
                background: "#111f15",
                borderColor: "#1f3d2b",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#4d9970";
                (e.currentTarget as HTMLButtonElement).style.background = "#152a1c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1f3d2b";
                (e.currentTarget as HTMLButtonElement).style.background = "#111f15";
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#c9a84c" }}
                >
                  Task 1
                </span>
                <span className="text-forest-400 text-xs">80 words · 20分</span>
              </div>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "DM Serif Display, serif", color: "#f0f7f2" }}
              >
                Data Description
              </h2>
              <p className="text-forest-200 text-sm leading-relaxed mb-6">
                折れ線グラフを分析し、主な特徴と傾向を英語で記述する問題です。
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  3問
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  グラフ付き
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  20分
                </span>
              </div>
            </button>

            {/* Task 2 Card */}
            <button
              onClick={() => handleStart("task2")}
              className="group relative w-72 rounded-2xl p-8 text-left transition-all duration-200 border"
              style={{
                background: "#111f15",
                borderColor: "#1f3d2b",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#4d9970";
                (e.currentTarget as HTMLButtonElement).style.background = "#152a1c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#1f3d2b";
                (e.currentTarget as HTMLButtonElement).style.background = "#111f15";
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#c9a84c" }}
                >
                  Task 2
                </span>
                <span className="text-forest-400 text-xs">150 words · 30分</span>
              </div>
              <h2
                className="text-xl mb-3"
                style={{ fontFamily: "DM Serif Display, serif", color: "#f0f7f2" }}
              >
                Essay Writing
              </h2>
              <p className="text-forest-200 text-sm leading-relaxed mb-6">
                社会的なトピックに対して自分の意見や論点を英語で論述する問題です。
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  5問
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  ランダム出題
                </span>
                <span className="text-xs px-2 py-1 rounded" style={{ background: "#1a3323", color: "#6ab98a" }}>
                  30分
                </span>
              </div>
            </button>
          </div>

          {/* Criteria */}
          <div className="mt-16 flex gap-8">
            {[
              { code: "TA", name: "Task Achievement" },
              { code: "CC", name: "Coherence & Cohesion" },
              { code: "LR", name: "Lexical Resource" },
              { code: "GRA", name: "Grammatical Range" },
            ].map((c) => (
              <div key={c.code} className="flex flex-col items-center gap-1">
                <span
                  className="text-lg font-semibold"
                  style={{ fontFamily: "DM Serif Display, serif", color: "#4d9970" }}
                >
                  {c.code}
                </span>
                <span className="text-xs text-forest-300">{c.name}</span>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-forest-800 py-4 text-center text-forest-500 text-xs">
          Band 1–9 scoring · Powered by Claude AI
        </footer>
      </div>
    );
  }

  // ── Writing ───────────────────────────────────────────────────────────────

  if (appState === "writing") {
    const q1 = currentQ1;
    const q2 = currentQ2;
    const targetWords = taskType === "task1" ? 80 : 150;
    const wordOk = wordCount >= targetWords;
    const totalTime = TASK_TIME[taskType];
    const timePct = timeLeft / totalTime;
    const timerWarning = timeLeft <= 60 && timeLeft > 0;
    const timerExpired = timeLeft === 0;

    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0d1a10" }}>
        {/* Header */}
        <header className="border-b border-forest-800 px-10 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-forest-300 hover:text-cream transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ホームへ戻る
          </button>
          {/* Timer */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-semibold"
              style={{
                background: timerExpired ? "#1a1010" : timerWarning ? "#2a1a0a" : "#152a1c",
                border: `1px solid ${timerExpired ? "#7f1d1d" : timerWarning ? "#92400e" : "#1f3d2b"}`,
                color: timerExpired ? "#f87171" : timerWarning ? "#fbbf24" : "#6ab98a",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {timerExpired ? "時間切れ" : formatTime(timeLeft)}
            </div>
            <button
              onClick={handleNewQuestion}
              className="text-xs text-forest-300 hover:text-forest-100 transition-colors border border-forest-700 px-3 py-1.5 rounded-lg"
            >
              別の問題
            </button>
          </div>
        </header>

        <main className="flex-1 flex gap-0 overflow-hidden" style={{ height: "calc(100vh - 65px)" }}>
          {/* Left: Question */}
          <div
            className="w-1/2 flex flex-col border-r border-forest-800 overflow-y-auto"
            style={{ background: "#111f15" }}
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-semibold tracking-widest px-3 py-1 rounded-full uppercase"
                  style={{ background: "#1a3323", color: "#c9a84c" }}
                >
                  {taskType === "task1" ? "Task 1" : "Task 2"}
                </span>
                {taskType === "task2" && q2 && (
                  <span className="text-xs text-forest-300 border border-forest-700 px-2 py-1 rounded-full">
                    {q2.type}
                  </span>
                )}
                {taskType === "task1" && q1 && (
                  <span className="text-xs text-forest-300">{q1.title}</span>
                )}
              </div>

              {/* Line chart for Task 1 */}
              {taskType === "task1" && q1 && (
                <div
                  className="mb-6 p-4 rounded-xl"
                  style={{ background: "#0d1a10", border: "1px solid #1f3d2b" }}
                >
                  <LineChart question={q1} />
                </div>
              )}

              {/* Question text */}
              <div className="text-sm leading-7 text-forest-100 whitespace-pre-line">
                {taskType === "task1" ? q1?.prompt : q2?.prompt}
              </div>

              {/* Word target reminder */}
              <div className="mt-6 p-3 rounded-lg" style={{ background: "#152a1c" }}>
                <p className="text-xs text-forest-300">
                  目安語数: <strong className="text-cream">{targetWords}語以上</strong>
                  　· 採点基準: TA / CC / LR / GRA
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editor */}
          <div className="w-1/2 flex flex-col" style={{ background: "#0d1a10" }}>
            <div className="flex-1 p-8 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-forest-400 uppercase tracking-widest">
                  Your Essay
                </span>
                <span
                  className={`text-xs font-medium ${
                    wordOk ? "text-forest-200" : "text-forest-400"
                  }`}
                >
                  {wordCount} / {targetWords} words
                  {wordOk && (
                    <span className="ml-2 text-forest-300">✓</span>
                  )}
                </span>
              </div>

              <textarea
                className="flex-1 w-full resize-none rounded-xl p-5 text-sm leading-7 text-cream"
                style={{
                  background: "#111f15",
                  border: "1px solid #1f3d2b",
                  fontFamily: "DM Sans, sans-serif",
                  caretColor: "#6ab98a",
                }}
                placeholder="ここに英文エッセイを入力してください..."
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#2e6044";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#1f3d2b";
                }}
              />

              {error && (
                <p className="mt-3 text-sm" style={{ color: "#f87171" }}>
                  {error}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between">
                <div className="h-1.5 flex-1 mr-6 rounded-full overflow-hidden" style={{ background: "#1a3323" }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min((wordCount / targetWords) * 100, 100)}%`,
                      background: wordOk ? "#4d9970" : "#2e6044",
                    }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading || essay.trim().length < 1}
                  className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: loading || essay.trim().length < 1 ? "#1a3323" : "linear-gradient(135deg, #2e6044, #4d9970)",
                    color: "#f0f7f2",
                    minWidth: "120px",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      採点中...
                    </span>
                  ) : (
                    "採点する →"
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ── Result ─────────────────────────────────────────────────────────────────

  if (appState === "result" && result) {
    const { scores, strengths, improvements, detailed_feedback } = result;
    const bandColor =
      scores.band >= 7.5
        ? "#6ab98a"
        : scores.band >= 6
        ? "#c9a84c"
        : "#f87171";

    return (
      <div className="min-h-screen flex flex-col" style={{ background: "#0d1a10" }}>
        {/* Header */}
        <header className="border-b border-forest-800 px-10 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-forest-300 hover:text-cream transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            ホームへ戻る
          </button>
          <span
            className="font-serif text-lg text-cream"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            IELTS Writing Level Check
          </span>
          <button
            onClick={handleRetry}
            className="text-xs text-forest-300 hover:text-forest-100 transition-colors border border-forest-700 px-3 py-1.5 rounded-lg"
          >
            同じ問題で再挑戦
          </button>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-10">

            {/* Band Score Hero */}
            <div
              className="rounded-2xl p-8 mb-8 flex items-center justify-between"
              style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
            >
              <div>
                <p className="text-xs text-forest-300 tracking-widest uppercase mb-2">
                  Overall Band Score
                </p>
                <div className="flex items-baseline gap-3">
                  <span
                    style={{
                      fontFamily: "DM Serif Display, serif",
                      fontSize: "72px",
                      lineHeight: 1,
                      color: bandColor,
                    }}
                  >
                    {scores.band.toFixed(1)}
                  </span>
                  <span className="text-forest-300 text-lg">/ 9.0</span>
                </div>
                <p className="text-forest-300 text-sm mt-2">
                  {taskType === "task1" ? "IELTS Task 1" : "IELTS Task 2"} · {wordCount} words
                </p>
              </div>

              {/* 4 rings */}
              <div className="flex gap-6">
                <ScoreRing label="TA" score={scores.ta} color="#6ab98a" />
                <ScoreRing label="CC" score={scores.cc} color="#7ba7d0" />
                <ScoreRing label="LR" score={scores.lr} color="#c9a84c" />
                <ScoreRing label="GRA" score={scores.gra} color="#b08fda" />
              </div>
            </div>

            {/* Strengths & Improvements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div
                className="rounded-2xl p-6"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <h3
                  className="text-base mb-4 flex items-center gap-2"
                  style={{ fontFamily: "DM Serif Display, serif", color: "#f0f7f2" }}
                >
                  <span className="text-lg">✦</span> 強み
                </h3>
                <ul className="space-y-3">
                  {strengths.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-forest-100 leading-relaxed">
                      <span className="mt-0.5 shrink-0" style={{ color: "#6ab98a" }}>●</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-6"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <h3
                  className="text-base mb-4 flex items-center gap-2"
                  style={{ fontFamily: "DM Serif Display, serif", color: "#f0f7f2" }}
                >
                  <span className="text-lg">◈</span> 改善点
                </h3>
                <ul className="space-y-3">
                  {improvements.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-forest-100 leading-relaxed">
                      <span className="mt-0.5 shrink-0" style={{ color: "#c9a84c" }}>●</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div
              className="rounded-2xl p-6 mb-8"
              style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
            >
              <h3
                className="text-base mb-4"
                style={{ fontFamily: "DM Serif Display, serif", color: "#f0f7f2" }}
              >
                詳細フィードバック
              </h3>
              <p className="text-sm text-forest-100 leading-8 whitespace-pre-line">
                {detailed_feedback}
              </p>
            </div>

            {/* Essay submitted */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
            >
              <h3
                className="text-base mb-4 text-forest-300"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                提出したエッセイ
              </h3>
              <p className="text-sm text-forest-200 leading-7 whitespace-pre-wrap">
                {essay}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8 justify-center">
              <button
                onClick={handleNewQuestion}
                className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #2e6044, #4d9970)", color: "#f0f7f2" }}
              >
                新しい問題に挑戦
              </button>
              <button
                onClick={handleRetry}
                className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border border-forest-700 text-forest-200 hover:border-forest-500"
              >
                同じ問題で再挑戦
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
