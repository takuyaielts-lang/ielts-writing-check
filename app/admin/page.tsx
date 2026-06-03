"use client";

import { useState } from "react";
import { SETUP_SQL } from "@/lib/constants";
import { roundHalf } from "@/lib/constants";

interface Submission {
  id: string;
  created_at: string;
  name: string;
  listening_correct: number | null;
  listening_band: number | null;
  reading_correct: number | null;
  reading_band: number | null;
  writing_t1_question: string | null;
  writing_t1_essay: string | null;
  writing_t1_ta: number | null;
  writing_t1_cc: number | null;
  writing_t1_lr: number | null;
  writing_t1_gra: number | null;
  writing_t1_band: number | null;
  writing_t2_question: string | null;
  writing_t2_essay: string | null;
  writing_t2_ta: number | null;
  writing_t2_cc: number | null;
  writing_t2_lr: number | null;
  writing_t2_gra: number | null;
  writing_t2_band: number | null;
  writing_band: number | null;
  speaking_recording_url: string | null;
  speaking_band: number | null;
  overall_band: number | null;
}

const BG = "#0d1a10";
const CARD = "#111f15";
const BORDER = "#1f3d2b";

const bandColor = (b: number | null) =>
  !b ? "#4d6b57" : b >= 7.5 ? "#6ab98a" : b >= 6.0 ? "#c9a84c" : "#f87171";

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("ja-JP", { timeZone: "Asia/Tokyo", hour12: false });

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [storedPw, setStoredPw] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);
  const [showSql, setShowSql] = useState(false);

  // Speaking score edit
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editBand, setEditBand] = useState("");
  const [saving, setSaving] = useState(false);

  const BANDS = ["3.0","3.5","4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0"];

  const fetchSubmissions = async (pw: string) => {
    setLoading(true);
    setFetchError("");
    try {
      const res = await fetch("/api/admin/submissions", { headers: { "x-admin-password": pw } });
      if (res.status === 401) { setAuthError("パスワードが正しくありません。"); return false; }
      const data = await res.json();
      if (!res.ok) { setFetchError(data.error || "取得エラー"); return true; }
      setSubmissions(data.submissions || []);
      return true;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setAuthError("");
    const ok = await fetchSubmissions(password);
    if (ok) { setStoredPw(password); setAuthed(true); }
  };

  const saveSpeakingBand = async (sub: Submission) => {
    if (!editBand) return;
    setSaving(true);
    const spBand = parseFloat(editBand);
    const bands = [sub.listening_band, sub.reading_band, sub.writing_band, spBand].filter((b): b is number => b !== null);
    const overall = bands.length === 4 ? roundHalf(bands.reduce((a, b) => a + b, 0) / 4) : null;

    try {
      await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-password": storedPw },
        body: JSON.stringify({ id: sub.id, speaking_band: spBand, overall_band: overall }),
      });
      // Update local state
      setSubmissions((prev) =>
        prev.map((s) => s.id === sub.id ? { ...s, speaking_band: spBand, overall_band: overall } : s)
      );
      if (selected?.id === sub.id) setSelected({ ...sub, speaking_band: spBand, overall_band: overall });
      setEditingId(null);
      setEditBand("");
    } finally {
      setSaving(false);
    }
  };

  // ── Login ──────────────────────────────────────────────────────────────────

  if (!authed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: BG }}>
        <div className="w-96 rounded-2xl p-8" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
          <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: 28, color: "#f0f7f2", marginBottom: 4 }}>Admin</h1>
          <p className="text-sm mb-6" style={{ color: "#4d6b57" }}>IELTS Level Check 管理画面</p>
          <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#4d6b57" }}>Password</label>
          <input
            type="password"
            className="w-full rounded-xl px-4 py-3 text-sm mb-4"
            style={{ background: "#152a1c", border: `1px solid ${BORDER}`, color: "#f0f7f2", fontFamily: "DM Sans, sans-serif", outline: "none" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="パスワードを入力"
            autoFocus
          />
          {authError && <p className="text-sm mb-3" style={{ color: "#f87171" }}>{authError}</p>}
          <button onClick={handleLogin} disabled={loading || !password}
            className="w-full py-3 rounded-xl font-semibold text-sm disabled:opacity-40"
            style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}>
            {loading ? "認証中..." : "ログイン"}
          </button>
          <a href="/" className="block text-center text-xs mt-4 transition-colors"
            style={{ color: "#4d6b57" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#9dd4b0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4d6b57")}>
            ← ホームへ戻る
          </a>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────

  const avgOverall = submissions.filter((s) => s.overall_band).length > 0
    ? (submissions.filter((s) => s.overall_band).reduce((a, s) => a + (s.overall_band ?? 0), 0) / submissions.filter((s) => s.overall_band).length).toFixed(2)
    : "—";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG }}>
      {/* Header */}
      <header className="border-b px-8 py-4 flex items-center justify-between" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-4">
          <a href="/" className="text-sm transition-colors" style={{ color: "#4d6b57" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#9dd4b0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4d6b57")}>← ホーム</a>
          <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 18, color: "#f0f7f2" }}>Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowSql(!showSql)}
            className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
            style={{ borderColor: BORDER, color: "#4d6b57" }}>
            {showSql ? "SQLを隠す" : "DB Setup SQL"}
          </button>
          <button onClick={() => fetchSubmissions(storedPw)} disabled={loading}
            className="text-xs px-3 py-1.5 rounded-lg border transition-colors"
            style={{ borderColor: BORDER, color: "#9dd4b0" }}>
            {loading ? "読込中..." : "更新"}
          </button>
        </div>
      </header>

      {showSql && (
        <div className="mx-6 mt-4 rounded-xl p-4 text-xs font-mono overflow-x-auto"
          style={{ background: CARD, border: `1px solid ${BORDER}`, color: "#9dd4b0" }}>
          <p className="font-sans mb-2" style={{ color: "#4d6b57" }}>Supabase SQL Editor で実行してください：</p>
          <pre>{SETUP_SQL}</pre>
        </div>
      )}

      <main className="flex-1 flex overflow-hidden" style={{ height: "calc(100vh - 65px)" }}>
        {/* List panel */}
        <div className="w-[420px] shrink-0 flex flex-col border-r overflow-hidden" style={{ background: CARD, borderColor: BORDER }}>
          {/* Stats */}
          <div className="px-5 py-4 border-b flex items-center gap-6" style={{ borderColor: BORDER }}>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#4d6b57" }}>受験者数</p>
              <p style={{ fontFamily: "DM Serif Display, serif", fontSize: 28, color: "#f0f7f2" }}>{submissions.length}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#4d6b57" }}>平均Overall</p>
              <p style={{ fontFamily: "DM Serif Display, serif", fontSize: 28, color: "#f0f7f2" }}>{avgOverall}</p>
            </div>
          </div>

          {fetchError && (
            <div className="mx-4 mt-3 p-3 rounded-lg text-xs" style={{ background: "#1a1010", color: "#f87171" }}>
              {fetchError}　※ DB Setup SQLを実行してください
            </div>
          )}

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {submissions.length === 0 ? (
              <div className="flex items-center justify-center h-full text-sm" style={{ color: "#4d6b57" }}>データなし</div>
            ) : (
              submissions.map((s) => (
                <button key={s.id} onClick={() => setSelected(s)}
                  className="w-full text-left px-5 py-4 border-b transition-colors"
                  style={{ background: selected?.id === s.id ? "#152a1c" : "transparent", borderColor: BORDER }}
                  onMouseEnter={(e) => { if (selected?.id !== s.id) (e.currentTarget as HTMLButtonElement).style.background = "#131f17"; }}
                  onMouseLeave={(e) => { if (selected?.id !== s.id) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm" style={{ color: "#f0f7f2" }}>{s.name}</span>
                    <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 22, color: bandColor(s.overall_band) }}>
                      {s.overall_band ? s.overall_band.toFixed(1) : "—"}
                    </span>
                  </div>
                  <div className="flex gap-3 text-xs" style={{ color: "#4d6b57" }}>
                    <span>L: <strong style={{ color: bandColor(s.listening_band) }}>{s.listening_band?.toFixed(1) ?? "—"}</strong></span>
                    <span>R: <strong style={{ color: bandColor(s.reading_band) }}>{s.reading_band?.toFixed(1) ?? "—"}</strong></span>
                    <span>W: <strong style={{ color: bandColor(s.writing_band) }}>{s.writing_band?.toFixed(1) ?? "—"}</strong></span>
                    <span>S: <strong style={{ color: bandColor(s.speaking_band) }}>{s.speaking_band?.toFixed(1) ?? "採点待"}</strong></span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: "#2e6044" }}>{fmt(s.created_at)}</p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ background: BG }}>
          {!selected ? (
            <div className="flex-1 flex items-center justify-center text-sm" style={{ color: "#4d6b57" }}>
              受験者を選択してください
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: 24, color: "#f0f7f2" }}>{selected.name}</h2>
                  <p className="text-xs mt-1" style={{ color: "#4d6b57" }}>{fmt(selected.created_at)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#4d6b57" }}>Overall</p>
                  <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 48, color: bandColor(selected.overall_band) }}>
                    {selected.overall_band ? selected.overall_band.toFixed(1) : "—"}
                  </span>
                </div>
              </div>

              {/* 4 Skills summary */}
              <div className="grid grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Listening", band: selected.listening_band, sub: `${selected.listening_correct ?? "—"}/10` },
                  { label: "Reading", band: selected.reading_band, sub: `${selected.reading_correct ?? "—"}/10` },
                  { label: "Writing", band: selected.writing_band, sub: `T1:${selected.writing_t1_band?.toFixed(1) ?? "—"} T2:${selected.writing_t2_band?.toFixed(1) ?? "—"}` },
                  { label: "Speaking", band: selected.speaking_band, sub: selected.speaking_recording_url ? "録音あり" : "録音なし" },
                ].map((sk) => (
                  <div key={sk.label} className="rounded-xl p-4 text-center" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#4d6b57" }}>{sk.label}</p>
                    <p style={{ fontFamily: "DM Serif Display, serif", fontSize: 32, color: bandColor(sk.band) }}>
                      {sk.band?.toFixed(1) ?? "—"}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#2e6044" }}>{sk.sub}</p>
                  </div>
                ))}
              </div>

              {/* Speaking section */}
              <div className="rounded-xl p-5 mb-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#4d6b57" }}>Speaking</p>
                {selected.speaking_recording_url ? (
                  <audio src={selected.speaking_recording_url} controls className="w-full mb-3" />
                ) : (
                  <p className="text-sm mb-3" style={{ color: "#2e6044" }}>録音なし</p>
                )}
                {/* Band score edit */}
                {editingId === selected.id ? (
                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-13 gap-1.5">
                      {BANDS.map((v) => (
                        <button key={v} onClick={() => setEditBand(v)}
                          className="py-1.5 rounded-lg text-xs font-semibold transition-all"
                          style={{ background: editBand === v ? "#4d9970" : "#152a1c", border: `1px solid ${editBand === v ? "#4d9970" : BORDER}`, color: editBand === v ? "#0d1a10" : "#9dd4b0" }}>
                          {v}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => saveSpeakingBand(selected)} disabled={!editBand || saving}
                        className="flex-1 py-2 rounded-lg text-sm font-semibold disabled:opacity-40"
                        style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}>
                        {saving ? "保存中..." : "スコアを保存"}
                      </button>
                      <button onClick={() => { setEditingId(null); setEditBand(""); }}
                        className="px-4 py-2 rounded-lg text-sm border"
                        style={{ borderColor: BORDER, color: "#9dd4b0" }}>
                        キャンセル
                      </button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => { setEditingId(selected.id); setEditBand(selected.speaking_band?.toString() ?? ""); }}
                    className="px-4 py-2 rounded-lg text-sm border transition-colors"
                    style={{ borderColor: BORDER, color: "#9dd4b0" }}>
                    {selected.speaking_band ? `Speaking Band: ${selected.speaking_band.toFixed(1)} ✎ 変更` : "Speakingスコアを入力"}
                  </button>
                )}
              </div>

              {/* Writing details */}
              {(selected.writing_t1_essay || selected.writing_t2_essay) && (
                <div className="rounded-xl p-5 mb-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4d6b57" }}>Writing 詳細</p>
                  {[
                    { label: "Task 1", essay: selected.writing_t1_essay, band: selected.writing_t1_band, ta: selected.writing_t1_ta, cc: selected.writing_t1_cc, lr: selected.writing_t1_lr, gra: selected.writing_t1_gra },
                    { label: "Task 2", essay: selected.writing_t2_essay, band: selected.writing_t2_band, ta: selected.writing_t2_ta, cc: selected.writing_t2_cc, lr: selected.writing_t2_lr, gra: selected.writing_t2_gra },
                  ].map((t) => t.essay && (
                    <div key={t.label} className="mb-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold" style={{ color: "#c9a84c" }}>{t.label}</span>
                        <div className="flex gap-3 text-xs" style={{ color: "#9dd4b0" }}>
                          <span>TA: {t.ta?.toFixed(1) ?? "—"}</span>
                          <span>CC: {t.cc?.toFixed(1) ?? "—"}</span>
                          <span>LR: {t.lr?.toFixed(1) ?? "—"}</span>
                          <span>GRA: {t.gra?.toFixed(1) ?? "—"}</span>
                          <span className="font-semibold" style={{ color: bandColor(t.band) }}>Band {t.band?.toFixed(1) ?? "—"}</span>
                        </div>
                      </div>
                      <p className="text-xs leading-6 whitespace-pre-wrap p-3 rounded-lg" style={{ background: "#0d1a10", color: "#9dd4b0" }}>{t.essay}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
