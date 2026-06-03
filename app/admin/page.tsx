"use client";

import { useState } from "react";
import { SETUP_SQL } from "@/lib/constants";

interface Submission {
  id: string;
  created_at: string;
  task_type: string;
  question_id: number;
  question_text: string;
  user_essay: string;
  word_count: number;
  score_ta: number;
  score_cc: number;
  score_lr: number;
  score_gra: number;
  band_score: number;
  strengths: string[];
  improvements: string[];
  detailed_feedback: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<"all" | "task1" | "task2">("all");
  const [showSql, setShowSql] = useState(false);
  const [storedPassword, setStoredPassword] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/submissions", {
        headers: { "x-admin-password": password },
      });
      if (res.status === 401) {
        setAuthError("パスワードが正しくありません。");
        return;
      }
      if (!res.ok) {
        const d = await res.json();
        setFetchError(d.error || "エラーが発生しました。");
        setAuthed(true);
        setStoredPassword(password);
        return;
      }
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setStoredPassword(password);
      setAuthed(true);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const res = await fetch("/api/admin/submissions", {
        headers: { "x-admin-password": storedPassword },
      });
      const data = await res.json();
      if (!res.ok) {
        setFetchError(data.error || "取得に失敗しました。");
      } else {
        setSubmissions(data.submissions || []);
      }
    } finally {
      setLoading(false);
    }
  };

  const filtered =
    filter === "all"
      ? submissions
      : submissions.filter((s) => s.task_type === filter);

  const avgBand =
    filtered.length > 0
      ? (filtered.reduce((a, s) => a + s.band_score, 0) / filtered.length).toFixed(2)
      : "—";

  const bandColor = (b: number) =>
    b >= 7.5 ? "#6ab98a" : b >= 6 ? "#c9a84c" : "#f87171";

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo", hour12: false });
  };

  if (!authed) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "#0d1a10" }}
      >
        <div
          className="w-96 rounded-2xl p-8"
          style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
        >
          <h1
            className="text-2xl mb-2 text-cream"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Admin
          </h1>
          <p className="text-forest-300 text-sm mb-6">
            IELTS Writing Level Check 管理画面
          </p>

          <label className="block text-xs text-forest-400 uppercase tracking-widest mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-xl px-4 py-3 text-sm text-cream mb-4"
            style={{
              background: "#152a1c",
              border: "1px solid #2e6044",
              fontFamily: "DM Sans, sans-serif",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="パスワードを入力"
            autoFocus
          />
          {authError && (
            <p className="text-sm mb-4" style={{ color: "#f87171" }}>
              {authError}
            </p>
          )}
          <button
            onClick={handleLogin}
            disabled={loading || !password}
            className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-40"
            style={{
              background: "linear-gradient(135deg, #2e6044, #4d9970)",
              color: "#f0f7f2",
            }}
          >
            {loading ? "認証中..." : "ログイン"}
          </button>

          <a
            href="/"
            className="block text-center text-xs text-forest-400 hover:text-forest-200 transition-colors mt-4"
          >
            ← ホームへ戻る
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d1a10" }}>
      {/* Header */}
      <header className="border-b border-forest-800 px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-sm text-forest-300 hover:text-cream transition-colors"
          >
            ← ホーム
          </a>
          <span
            className="text-lg text-cream"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Admin Dashboard
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSql(!showSql)}
            className="text-xs text-forest-400 border border-forest-700 px-3 py-1.5 rounded-lg hover:text-forest-200 transition-colors"
          >
            {showSql ? "SQLを隠す" : "DB Setup SQL"}
          </button>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="text-xs text-forest-300 border border-forest-700 px-3 py-1.5 rounded-lg hover:text-forest-100 transition-colors"
          >
            {loading ? "読込中..." : "更新"}
          </button>
        </div>
      </header>

      {showSql && (
        <div
          className="mx-8 mt-4 rounded-xl p-4 text-xs font-mono text-forest-200 overflow-x-auto"
          style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
        >
          <p className="text-forest-400 mb-2 font-sans">
            SupabaseのSQL Editorで実行してください：
          </p>
          <pre>{SETUP_SQL}</pre>
        </div>
      )}

      <main className="flex-1 flex overflow-hidden" style={{ height: "calc(100vh - 65px)" }}>
        {/* List panel */}
        <div
          className="w-1/2 flex flex-col border-r border-forest-800 overflow-hidden"
          style={{ background: "#111f15" }}
        >
          {/* Stats */}
          <div className="px-6 py-4 border-b border-forest-800 flex items-center gap-6">
            <div>
              <p className="text-xs text-forest-400 uppercase tracking-widest">
                総提出数
              </p>
              <p
                className="text-2xl text-cream"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                {filtered.length}
              </p>
            </div>
            <div>
              <p className="text-xs text-forest-400 uppercase tracking-widest">
                平均バンド
              </p>
              <p
                className="text-2xl text-cream"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                {avgBand}
              </p>
            </div>
            <div className="flex-1" />
            {/* Filter */}
            <div className="flex gap-1">
              {(["all", "task1", "task2"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="text-xs px-3 py-1.5 rounded-lg transition-all"
                  style={{
                    background: filter === f ? "#2e6044" : "#1a3323",
                    color: filter === f ? "#f0f7f2" : "#6ab98a",
                  }}
                >
                  {f === "all" ? "全て" : f === "task1" ? "Task 1" : "Task 2"}
                </button>
              ))}
            </div>
          </div>

          {fetchError && (
            <div className="mx-4 mt-3 p-3 rounded-lg text-sm" style={{ background: "#1a1010", color: "#f87171" }}>
              {fetchError}
              <br />
              <span className="text-xs text-forest-400">
                ※ Supabaseのテーブルが作成されていない可能性があります。「DB Setup SQL」ボタンのSQLを実行してください。
              </span>
            </div>
          )}

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-forest-500 text-sm">
                <p>提出データがありません</p>
              </div>
            ) : (
              filtered.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className="w-full text-left px-6 py-4 border-b border-forest-800 transition-colors"
                  style={{
                    background: selected?.id === s.id ? "#152a1c" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (selected?.id !== s.id)
                      (e.currentTarget as HTMLButtonElement).style.background = "#131f17";
                  }}
                  onMouseLeave={(e) => {
                    if (selected?.id !== s.id)
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ background: "#1a3323", color: "#c9a84c" }}
                      >
                        {s.task_type === "task1" ? "Task 1" : "Task 2"}
                      </span>
                      <span className="text-xs text-forest-400">
                        {s.word_count} words
                      </span>
                    </div>
                    <span
                      className="font-semibold text-base"
                      style={{
                        fontFamily: "DM Serif Display, serif",
                        color: bandColor(s.band_score),
                      }}
                    >
                      Band {s.band_score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs text-forest-300 truncate mb-1">
                    {s.question_text.slice(0, 80)}...
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-forest-500">
                      {formatDate(s.created_at)}
                    </span>
                    <div className="flex gap-3 text-xs text-forest-400">
                      <span>TA {s.score_ta}</span>
                      <span>CC {s.score_cc}</span>
                      <span>LR {s.score_lr}</span>
                      <span>GRA {s.score_gra}</span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Detail panel */}
        <div className="w-1/2 flex flex-col overflow-hidden" style={{ background: "#0d1a10" }}>
          {!selected ? (
            <div className="flex-1 flex items-center justify-center text-forest-500 text-sm">
              提出データを選択してください
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ background: "#1a3323", color: "#c9a84c" }}
                  >
                    {selected.task_type === "task1" ? "Task 1" : "Task 2"}
                  </span>
                  <span className="text-xs text-forest-400">
                    {formatDate(selected.created_at)}
                  </span>
                </div>
                <span
                  className="text-3xl"
                  style={{
                    fontFamily: "DM Serif Display, serif",
                    color: bandColor(selected.band_score),
                  }}
                >
                  Band {selected.band_score.toFixed(1)}
                </span>
              </div>

              {/* Scores row */}
              <div
                className="grid grid-cols-4 gap-3 mb-4 p-3 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                {[
                  { label: "TA", val: selected.score_ta, color: "#6ab98a" },
                  { label: "CC", val: selected.score_cc, color: "#7ba7d0" },
                  { label: "LR", val: selected.score_lr, color: "#c9a84c" },
                  { label: "GRA", val: selected.score_gra, color: "#b08fda" },
                ].map((c) => (
                  <div key={c.label} className="text-center py-2">
                    <p className="text-xs text-forest-400 mb-1">{c.label}</p>
                    <p
                      className="text-xl font-semibold"
                      style={{ fontFamily: "DM Serif Display, serif", color: c.color }}
                    >
                      {c.val.toFixed(1)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Question */}
              <div
                className="mb-4 p-4 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <p className="text-xs text-forest-400 uppercase tracking-widest mb-2">
                  問題文
                </p>
                <p className="text-xs text-forest-200 leading-6 whitespace-pre-line">
                  {selected.question_text}
                </p>
              </div>

              {/* Essay */}
              <div
                className="mb-4 p-4 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <p className="text-xs text-forest-400 uppercase tracking-widest mb-2">
                  提出エッセイ ({selected.word_count} words)
                </p>
                <p className="text-xs text-forest-200 leading-6 whitespace-pre-wrap">
                  {selected.user_essay}
                </p>
              </div>

              {/* Strengths */}
              <div
                className="mb-4 p-4 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <p className="text-xs text-forest-400 uppercase tracking-widest mb-2">
                  強み
                </p>
                {(selected.strengths as unknown as string[]).map((s, i) => (
                  <p key={i} className="text-xs text-forest-200 leading-6 mb-1">
                    <span style={{ color: "#6ab98a" }}>● </span>{s}
                  </p>
                ))}
              </div>

              {/* Improvements */}
              <div
                className="mb-4 p-4 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <p className="text-xs text-forest-400 uppercase tracking-widest mb-2">
                  改善点
                </p>
                {(selected.improvements as unknown as string[]).map((s, i) => (
                  <p key={i} className="text-xs text-forest-200 leading-6 mb-1">
                    <span style={{ color: "#c9a84c" }}>● </span>{s}
                  </p>
                ))}
              </div>

              {/* Feedback */}
              <div
                className="p-4 rounded-xl"
                style={{ background: "#111f15", border: "1px solid #1f3d2b" }}
              >
                <p className="text-xs text-forest-400 uppercase tracking-widest mb-2">
                  詳細フィードバック
                </p>
                <p className="text-xs text-forest-200 leading-6 whitespace-pre-line">
                  {selected.detailed_feedback}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
