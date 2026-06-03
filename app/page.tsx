"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  task1Questions,
  task2Questions,
  Task1Question,
} from "@/lib/questions";
import { BAND_TABLE, roundHalf } from "@/lib/constants";

// ─── Types ───────────────────────────────────────────────────────────────────

type MainStep = "home" | "listening" | "reading" | "writing" | "speaking" | "results";
type WritingSub = "t1-write" | "t1-scoring" | "t1-done" | "t2-write" | "t2-scoring" | "t2-done";
type RecordState = "idle" | "recording" | "recorded" | "uploading" | "uploaded";

interface WritingResult {
  scores: { ta: number; cc: number; lr: number; gra: number; band: number };
  strengths: string[];
  improvements: string[];
  detailed_feedback: string;
}

// ─── LineChart ────────────────────────────────────────────────────────────────

function LineChart({ question }: { question: Task1Question }) {
  const W = 520, H = 250;
  const pad = { top: 20, right: 36, bottom: 44, left: 52 };
  const cW = W - pad.left - pad.right;
  const cH = H - pad.top - pad.bottom;
  const { xLabels, yMin, yMax, series, yUnit } = question;
  const xSteps = xLabels.length - 1;
  const xPos = (i: number) => pad.left + (i / xSteps) * cW;
  const yPos = (v: number) => pad.top + cH - ((v - yMin) / (yMax - yMin)) * cH;
  const yTicks = 5;
  const yStep = (yMax - yMin) / yTicks;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: 520 }}>
      {Array.from({ length: yTicks + 1 }, (_, i) => {
        const v = yMin + i * yStep;
        const y = yPos(v);
        return (
          <g key={i}>
            <line x1={pad.left} y1={y} x2={pad.left + cW} y2={y} stroke="#1f3d2b" strokeWidth="1" />
            <text x={pad.left - 7} y={y + 4} textAnchor="end" fill="#9dd4b0" fontSize="10" fontFamily="DM Sans,sans-serif">
              {v % 1 === 0 ? v : v.toFixed(1)}{i === yTicks ? yUnit : ""}
            </text>
          </g>
        );
      })}
      {xLabels.map((label, i) => (
        <text key={i} x={xPos(i)} y={H - pad.bottom + 16} textAnchor="middle" fill="#9dd4b0" fontSize="10" fontFamily="DM Sans,sans-serif">{label}</text>
      ))}
      <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + cH} stroke="#2e6044" strokeWidth="1.5" />
      <line x1={pad.left} y1={pad.top + cH} x2={pad.left + cW} y2={pad.top + cH} stroke="#2e6044" strokeWidth="1.5" />
      {series.map((s) => (
        <g key={s.name}>
          <polyline points={s.data.map((v, i) => `${xPos(i)},${yPos(v)}`).join(" ")} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          {s.data.map((v, i) => <circle key={i} cx={xPos(i)} cy={yPos(v)} r="4" fill={s.color} stroke="#0d1a10" strokeWidth="1.5" />)}
        </g>
      ))}
      {series.map((s, i) => (
        <g key={s.name} transform={`translate(${pad.left + i * 150},${H - 6})`}>
          <line x1="0" y1="-4" x2="16" y2="-4" stroke={s.color} strokeWidth="2.5" />
          <circle cx="8" cy="-4" r="3" fill={s.color} />
          <text x="22" y="0" fill="#9dd4b0" fontSize="10" fontFamily="DM Sans,sans-serif">{s.name}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── ScoreRing ────────────────────────────────────────────────────────────────

function ScoreRing({ label, score, color }: { label: string; score: number; color: string }) {
  const r = 34;
  const circ = 2 * Math.PI * r;
  const dash = (score / 9) * circ;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} fill="none" stroke="#1a3323" strokeWidth="7" />
        <circle cx="44" cy="44" r={r} fill="none" stroke={color} strokeWidth="7"
          strokeDasharray={`${dash} ${circ - dash}`} strokeLinecap="round" transform="rotate(-90 44 44)" />
        <text x="44" y="40" textAnchor="middle" fill="#f0f7f2" fontSize="18" fontFamily="DM Serif Display,serif">{score.toFixed(1)}</text>
        <text x="44" y="55" textAnchor="middle" fill="#6ab98a" fontSize="9" fontFamily="DM Sans,sans-serif">/ 9.0</text>
      </svg>
      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#9dd4b0" }}>{label}</span>
    </div>
  );
}

// ─── StepIndicator ───────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
  const steps = ["Listening", "Reading", "Writing", "Speaking"];
  return (
    <div className="flex items-center">
      {steps.map((s, i) => {
        const n = i + 1;
        const active = n === current;
        const done = n < current;
        return (
          <div key={s} className="flex items-center">
            <div className="flex items-center gap-2 px-3 py-1.5">
              <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold"
                style={{ background: active ? "#4d9970" : done ? "#2e6044" : "#1a3323", color: active || done ? "#f0f7f2" : "#4d6b57" }}>
                {done ? "✓" : n}
              </span>
              <span className="text-sm" style={{ color: active ? "#f0f7f2" : done ? "#6ab98a" : "#4d6b57" }}>{s}</span>
            </div>
            {i < 3 && <div className="w-8 h-px" style={{ background: done ? "#2e6044" : "#1a3323" }} />}
          </div>
        );
      })}
    </div>
  );
}

// ─── BandDisplay ─────────────────────────────────────────────────────────────

function BandDisplay({ band, label }: { band: number; label: string }) {
  const color = band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171";
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-forest-400 uppercase tracking-widest">{label}</span>
      <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 48, color, lineHeight: 1 }}>{band.toFixed(1)}</span>
    </div>
  );
}

// ─── ScoreCard (Listening/Reading result) ────────────────────────────────────

function ScoreCard({ correct, band, skill }: { correct: number; band: number; skill: string }) {
  const color = band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171";
  return (
    <div className="rounded-2xl p-6 flex items-center gap-6" style={{ background: "#111f15", border: "1px solid #1f3d2b" }}>
      <div className="flex flex-col items-center gap-1 w-20">
        <span className="text-xs text-forest-400 uppercase tracking-widest">{skill}</span>
        <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 52, color, lineHeight: 1 }}>{band.toFixed(1)}</span>
        <span className="text-xs text-forest-400">Band Score</span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <span className="text-xs text-forest-400">正答数</span>
          <span className="text-sm text-cream font-semibold">{correct} / 10</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "#1a3323" }}>
          <div className="h-full rounded-full" style={{ width: `${(correct / 10) * 100}%`, background: color }} />
        </div>
        <div className="mt-3 grid grid-cols-11 gap-0.5">
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className="h-6 rounded flex items-center justify-center text-xs font-mono"
              style={{ background: i === correct ? color : "#1a3323", color: i === correct ? "#0d1a10" : "#4d6b57" }}>
              {i}
            </div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-11 gap-0.5">
          {Array.from({ length: 11 }, (_, i) => (
            <div key={i} className="text-center" style={{ fontSize: 9, color: "#4d6b57" }}>{BAND_TABLE[i]}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [step, setStep] = useState<MainStep>("home");
  const [name, setName] = useState("");

  // Listening
  const [listenCorrect, setListenCorrect] = useState<number | null>(null);
  const listenBand = listenCorrect !== null ? BAND_TABLE[listenCorrect] : null;

  // Reading
  const [readCorrect, setReadCorrect] = useState<number | null>(null);
  const readBand = readCorrect !== null ? BAND_TABLE[readCorrect] : null;

  // Writing
  const [writingSub, setWritingSub] = useState<WritingSub>("t1-write");
  const [q1] = useState(() => task1Questions[Math.floor(Math.random() * task1Questions.length)]);
  const [q2] = useState(() => task2Questions[Math.floor(Math.random() * task2Questions.length)]);
  const [t1Essay, setT1Essay] = useState("");
  const [t2Essay, setT2Essay] = useState("");
  const [t1Result, setT1Result] = useState<WritingResult | null>(null);
  const [t2Result, setT2Result] = useState<WritingResult | null>(null);
  const [writingError, setWritingError] = useState("");
  const writingBand =
    t1Result && t2Result ? roundHalf((t1Result.scores.band + t2Result.scores.band) / 2) : null;

  // Timer
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const TASK_TIME = { t1: 20 * 60, t2: 30 * 60 };

  const startTimer = useCallback((task: "t1" | "t2") => {
    if (timerRef.current) clearInterval(timerRef.current);
    const secs = TASK_TIME[task];
    setTimeLeft(secs);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => { if (t <= 1) { clearInterval(timerRef.current!); return 0; } return t - 1; });
    }, 1000);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  const fmtTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  // Speaking
  const [recordState, setRecordState] = useState<RecordState>("idle");
  const [speakingBand, setSpeakingBand] = useState<string>("");
  const [speakingUrl, setSpeakingUrl] = useState<string | null>(null);
  const [localAudioUrl, setLocalAudioUrl] = useState<string | null>(null);
  const [speakingError, setSpeakingError] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const audioBlobRef = useRef<Blob | null>(null);
  const recordingTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [recordSecs, setRecordSecs] = useState(0);

  // Submission
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ── Handlers ────────────────────────────────────────────────────────────────

  const goToListening = () => { if (name.trim()) setStep("listening"); };

  const goToReading = () => { if (listenCorrect !== null) setStep("reading"); };

  const goToWriting = () => {
    if (readCorrect !== null) {
      setStep("writing");
      setWritingSub("t1-write");
      startTimer("t1");
    }
  };

  const submitT1 = async () => {
    if (!t1Essay.trim()) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setWritingSub("t1-scoring");
    setWritingError("");
    try {
      const wc = t1Essay.trim().split(/\s+/).filter(Boolean).length;
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskType: "task1", questionId: q1.id, questionText: q1.prompt, essay: t1Essay, wordCount: wc }),
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

  const goToT2 = () => {
    setWritingSub("t2-write");
    startTimer("t2");
  };

  const submitT2 = async () => {
    if (!t2Essay.trim()) return;
    if (timerRef.current) clearInterval(timerRef.current);
    setWritingSub("t2-scoring");
    setWritingError("");
    try {
      const wc = t2Essay.trim().split(/\s+/).filter(Boolean).length;
      const res = await fetch("/api/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskType: "task2", questionId: q2.id, questionText: q2.prompt, essay: t2Essay, wordCount: wc }),
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

  const goToSpeaking = () => setStep("speaking");

  const startRecording = async () => {
    setSpeakingError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        audioBlobRef.current = blob;
        const url = URL.createObjectURL(blob);
        setLocalAudioUrl(url);
        setRecordState("recorded");
        stream.getTracks().forEach((t) => t.stop());
        if (recordingTimer.current) clearInterval(recordingTimer.current);
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setRecordSecs(0);
      recordingTimer.current = setInterval(() => setRecordSecs((s) => s + 1), 1000);
      setRecordState("recording");
    } catch {
      setSpeakingError("マイクへのアクセスが許可されていません。ブラウザの設定を確認してください。");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    if (recordingTimer.current) clearInterval(recordingTimer.current);
  };

  const uploadRecording = async () => {
    if (!audioBlobRef.current) return;
    setRecordState("uploading");
    setSpeakingError("");
    try {
      const fd = new FormData();
      fd.append("audio", audioBlobRef.current, `speaking.webm`);
      fd.append("name", name);
      const res = await fetch("/api/speaking/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "アップロード失敗");
      setSpeakingUrl(data.url);
      setRecordState("uploaded");
    } catch (e) {
      setSpeakingError(e instanceof Error ? e.message : "アップロードエラー");
      setRecordState("recorded");
    }
  };

  const goToResults = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const spBand = speakingBand !== "" ? parseFloat(speakingBand) : null;
      const bands = [listenBand, readBand, writingBand, spBand].filter((b): b is number => b !== null);
      const overall = bands.length === 4 ? roundHalf(bands.reduce((a, b) => a + b, 0) / 4) : null;

      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          overall_band: overall,
        }),
      });
    } catch {
      // 保存失敗しても結果は表示する
      setSubmitError("データの保存に失敗しましたが、結果は表示できます。");
    }
    setSubmitting(false);
    setStep("results");
  };

  const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

  // ── Render ───────────────────────────────────────────────────────────────────

  const BG = "#0d1a10";
  const CARD = "#111f15";
  const BORDER = "#1f3d2b";

  // Header shared
  const Header = ({ stepNum }: { stepNum?: number }) => (
    <header className="border-b px-10 py-4 flex items-center justify-between shrink-0" style={{ borderColor: BORDER }}>
      <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 18, color: "#f0f7f2" }}>
        IELTS Level Check
      </span>
      {stepNum && <StepIndicator current={stepNum} />}
      <a href="/admin" className="text-xs tracking-widest uppercase transition-colors" style={{ color: "#4d6b57" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#9dd4b0")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#4d6b57")}>
        Admin
      </a>
    </header>
  );

  // ── HOME ────────────────────────────────────────────────────────────────────

  if (step === "home") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center gap-10 px-10">
          <div className="text-center">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#4d9970" }}>4 Skills Assessment</p>
            <h1 style={{ fontFamily: "DM Serif Display, serif", fontSize: 56, color: "#f0f7f2", lineHeight: 1.1 }}>
              IELTS<br /><span style={{ color: "#6ab98a" }}>Level Check</span>
            </h1>
            <p className="mt-4 text-sm leading-7" style={{ color: "#6ab98a" }}>
              Listening · Reading · Writing · Speaking<br />
              4技能を総合評価してバンドスコアを算出します
            </p>
          </div>

          <div className="w-80">
            <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#4d6b57" }}>氏名</label>
            <input
              type="text"
              placeholder="例：山田 太郎"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && goToListening()}
              className="w-full rounded-xl px-4 py-3 text-sm"
              style={{ background: CARD, border: `1px solid ${BORDER}`, color: "#f0f7f2", fontFamily: "DM Sans, sans-serif", outline: "none" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#2e6044")}
              onBlur={(e) => (e.currentTarget.style.borderColor = BORDER)}
              autoFocus
            />
            <button
              onClick={goToListening}
              disabled={!name.trim()}
              className="mt-4 w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: name.trim() ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323", color: "#f0f7f2" }}
            >
              テストを開始する →
            </button>
          </div>

          {/* Step Overview */}
          <div className="flex gap-4">
            {[
              { n: 1, name: "Listening", desc: "正答数入力" },
              { n: 2, name: "Reading", desc: "正答数入力" },
              { n: 3, name: "Writing", desc: "AI自動採点" },
              { n: 4, name: "Speaking", desc: "録音・採点" },
            ].map((s) => (
              <div key={s.n} className="w-44 rounded-xl p-4" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <span className="text-xs font-semibold tracking-widest" style={{ color: "#c9a84c" }}>Step {s.n}</span>
                <p className="text-sm font-semibold mt-1" style={{ color: "#f0f7f2", fontFamily: "DM Serif Display, serif" }}>{s.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#4d6b57" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // ── LISTENING ───────────────────────────────────────────────────────────────

  if (step === "listening") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        <Header stepNum={1} />
        <main className="flex-1 flex flex-col items-center justify-center gap-8 px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Step 1</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: 40, color: "#f0f7f2" }}>Listening</h2>
            <p className="text-sm mt-2" style={{ color: "#6ab98a" }}>10問中の正答数を入力してください</p>
          </div>

          {/* Number picker */}
          <div className="grid grid-cols-11 gap-2">
            {Array.from({ length: 11 }, (_, i) => (
              <button
                key={i}
                onClick={() => setListenCorrect(i)}
                className="w-12 h-12 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: listenCorrect === i ? "#4d9970" : "#111f15",
                  border: `1px solid ${listenCorrect === i ? "#4d9970" : "#1f3d2b"}`,
                  color: listenCorrect === i ? "#0d1a10" : "#9dd4b0",
                }}
              >{i}</button>
            ))}
          </div>

          {/* Result */}
          {listenCorrect !== null && listenBand !== null && (
            <div className="animate-in">
              <ScoreCard correct={listenCorrect} band={listenBand} skill="Listening" />
            </div>
          )}

          <button
            onClick={goToReading}
            disabled={listenCorrect === null}
            className="px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: listenCorrect !== null ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323", color: "#f0f7f2" }}
          >
            次へ → Reading
          </button>
        </main>
      </div>
    );
  }

  // ── READING ──────────────────────────────────────────────────────────────────

  if (step === "reading") {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        <Header stepNum={2} />
        <main className="flex-1 flex flex-col items-center justify-center gap-8 px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Step 2</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: 40, color: "#f0f7f2" }}>Reading</h2>
            <p className="text-sm mt-2" style={{ color: "#6ab98a" }}>10問中の正答数を入力してください</p>
          </div>

          <div className="grid grid-cols-11 gap-2">
            {Array.from({ length: 11 }, (_, i) => (
              <button
                key={i}
                onClick={() => setReadCorrect(i)}
                className="w-12 h-12 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: readCorrect === i ? "#4d9970" : "#111f15",
                  border: `1px solid ${readCorrect === i ? "#4d9970" : "#1f3d2b"}`,
                  color: readCorrect === i ? "#0d1a10" : "#9dd4b0",
                }}
              >{i}</button>
            ))}
          </div>

          {readCorrect !== null && readBand !== null && (
            <div className="animate-in">
              <ScoreCard correct={readCorrect} band={readBand} skill="Reading" />
            </div>
          )}

          <button
            onClick={goToWriting}
            disabled={readCorrect === null}
            className="px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: readCorrect !== null ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323", color: "#f0f7f2" }}
          >
            次へ → Writing
          </button>
        </main>
      </div>
    );
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

    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        {/* Header */}
        <header className="border-b px-8 py-3 flex items-center justify-between shrink-0" style={{ borderColor: BORDER }}>
          <StepIndicator current={3} />
          <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 16, color: "#f0f7f2" }}>
            IELTS Level Check — Writing {taskLabel}
          </span>
          <div className="flex items-center gap-3">
            {!isDone && !isScoring && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm font-semibold"
                style={{
                  background: timerExp ? "#1a1010" : timerWarn ? "#2a1a0a" : "#152a1c",
                  border: `1px solid ${timerExp ? "#7f1d1d" : timerWarn ? "#92400e" : "#1f3d2b"}`,
                  color: timerExp ? "#f87171" : timerWarn ? "#fbbf24" : "#6ab98a",
                }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6.5 3.5v3l1.8 1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {timerExp ? "時間切れ" : fmtTime(timeLeft)}
              </div>
            )}
          </div>
        </header>

        {/* Scoring overlay */}
        {isScoring && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <svg className="animate-spin" width="36" height="36" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#1a3323" strokeWidth="3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="#4d9970" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p style={{ color: "#6ab98a" }}>AI採点中...</p>
          </div>
        )}

        {/* Result view */}
        {isDone && result && (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-8 py-8">
              {/* Band + rings */}
              <div className="rounded-2xl p-6 mb-6 flex items-center justify-between" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#4d6b57" }}>{taskLabel} Band Score</p>
                  <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 64, lineHeight: 1, color: result.scores.band >= 7 ? "#6ab98a" : result.scores.band >= 6 ? "#c9a84c" : "#f87171" }}>
                    {result.scores.band.toFixed(1)}
                  </span>
                </div>
                <div className="flex gap-5">
                  <ScoreRing label="TA" score={result.scores.ta} color="#6ab98a" />
                  <ScoreRing label="CC" score={result.scores.cc} color="#7ba7d0" />
                  <ScoreRing label="LR" score={result.scores.lr} color="#c9a84c" />
                  <ScoreRing label="GRA" score={result.scores.gra} color="#b08fda" />
                </div>
              </div>
              {/* Strengths / Improvements */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#4d6b57" }}>強み</p>
                  {result.strengths.map((s, i) => (
                    <p key={i} className="text-sm leading-6 mb-2" style={{ color: "#d0ead9" }}>
                      <span style={{ color: "#6ab98a" }}>● </span>{s}
                    </p>
                  ))}
                </div>
                <div className="rounded-xl p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#4d6b57" }}>改善点</p>
                  {result.improvements.map((s, i) => (
                    <p key={i} className="text-sm leading-6 mb-2" style={{ color: "#d0ead9" }}>
                      <span style={{ color: "#c9a84c" }}>● </span>{s}
                    </p>
                  ))}
                </div>
              </div>
              {/* Detailed feedback */}
              <div className="rounded-xl p-5 mb-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#4d6b57" }}>詳細フィードバック</p>
                <p className="text-sm leading-7 whitespace-pre-line" style={{ color: "#d0ead9" }}>{result.detailed_feedback}</p>
              </div>
              {/* Next */}
              <div className="flex justify-center">
                {writingSub === "t1-done" ? (
                  <button onClick={goToT2} className="px-10 py-3 rounded-xl font-semibold text-sm"
                    style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}>
                    Task 2 へ進む →
                  </button>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    {writingBand !== null && (
                      <p className="text-sm" style={{ color: "#9dd4b0" }}>
                        Writing Band Score（T1+T2平均）: <strong style={{ color: "#6ab98a" }}>{writingBand.toFixed(1)}</strong>
                      </p>
                    )}
                    <button onClick={goToSpeaking} className="px-10 py-3 rounded-xl font-semibold text-sm"
                      style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}>
                      次へ → Speaking
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Writing interface */}
        {!isScoring && !isDone && (
          <main className="flex-1 flex overflow-hidden" style={{ height: "calc(100vh - 57px)" }}>
            {/* Left: Question */}
            <div className="w-1/2 flex flex-col border-r overflow-y-auto" style={{ background: CARD, borderColor: BORDER }}>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-widest px-3 py-1 rounded-full uppercase"
                    style={{ background: "#1a3323", color: "#c9a84c" }}>{taskLabel}</span>
                  {!isT1 && <span className="text-xs px-2 py-1 rounded-full" style={{ border: `1px solid ${BORDER}`, color: "#6ab98a" }}>{q2.type}</span>}
                  {isT1 && <span className="text-xs" style={{ color: "#4d6b57" }}>{q1.title}</span>}
                </div>
                {isT1 && (
                  <div className="mb-5 p-3 rounded-xl" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                    <LineChart question={q1} />
                  </div>
                )}
                <div className="text-sm leading-7 whitespace-pre-line" style={{ color: "#d0ead9" }}>
                  {isT1 ? q1.prompt : q2.prompt}
                </div>
                <div className="mt-5 p-3 rounded-lg" style={{ background: "#152a1c" }}>
                  <p className="text-xs" style={{ color: "#4d6b57" }}>
                    目安語数: <strong style={{ color: "#f0f7f2" }}>{targetWords}語以上</strong>　· 採点基準: TA / CC / LR / GRA
                  </p>
                </div>
              </div>
            </div>
            {/* Right: Editor */}
            <div className="w-1/2 flex flex-col" style={{ background: BG }}>
              <div className="flex-1 p-7 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#4d6b57" }}>Your Essay</span>
                  <span className="text-xs font-medium" style={{ color: wordOk ? "#9dd4b0" : "#4d6b57" }}>
                    {wc} / {targetWords} words {wordOk && "✓"}
                  </span>
                </div>
                <textarea
                  className="flex-1 w-full resize-none rounded-xl p-5 text-sm leading-7"
                  style={{ background: CARD, border: `1px solid ${BORDER}`, color: "#f0f7f2", fontFamily: "DM Sans, sans-serif", caretColor: "#6ab98a", outline: "none" }}
                  placeholder="ここに英文を入力してください..."
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#2e6044")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = BORDER)}
                />
                {writingError && <p className="mt-2 text-sm" style={{ color: "#f87171" }}>{writingError}</p>}
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-1.5 flex-1 rounded-full overflow-hidden" style={{ background: "#1a3323" }}>
                    <div className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((wc / targetWords) * 100, 100)}%`, background: wordOk ? "#4d9970" : "#2e6044" }} />
                  </div>
                  <button
                    onClick={isT1 ? submitT1 : submitT2}
                    disabled={!essay.trim()}
                    className="px-7 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: essay.trim() ? "linear-gradient(135deg,#2e6044,#4d9970)" : "#1a3323", color: "#f0f7f2", minWidth: 110 }}
                  >
                    採点する →
                  </button>
                </div>
                {/* Progress bar for timer */}
                <div className="mt-2 h-0.5 rounded-full overflow-hidden" style={{ background: "#1a3323" }}>
                  <div className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${(timeLeft / totalTime) * 100}%`, background: timerWarn ? "#fbbf24" : timerExp ? "#f87171" : "#2e6044" }} />
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    );
  }

  // ── SPEAKING ─────────────────────────────────────────────────────────────────

  if (step === "speaking") {
    const spBandNum = speakingBand !== "" ? parseFloat(speakingBand) : null;

    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        <Header stepNum={4} />
        <main className="flex-1 flex flex-col items-center justify-center gap-8 px-10">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Step 4</p>
            <h2 style={{ fontFamily: "DM Serif Display, serif", fontSize: 40, color: "#f0f7f2" }}>Speaking</h2>
            <p className="text-sm mt-2" style={{ color: "#6ab98a" }}>音声を録音してアップロードしてください</p>
          </div>

          <div className="w-[520px] rounded-2xl p-7" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            {/* Recording controls */}
            <div className="flex flex-col items-center gap-4 mb-6">
              {recordState === "idle" && (
                <button onClick={startRecording}
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all"
                  style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", boxShadow: "0 0 0 4px #1a3323" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#f0f7f2">
                    <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#f0f7f2" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <line x1="12" y1="19" x2="12" y2="23" stroke="#f0f7f2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              )}

              {recordState === "recording" && (
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#f87171" }} />
                    <span className="font-mono text-sm" style={{ color: "#f87171" }}>REC {fmtTime(recordSecs)}</span>
                  </div>
                  <button onClick={stopRecording}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "#7f1d1d", border: "2px solid #f87171" }}>
                    <span className="w-5 h-5 rounded" style={{ background: "#f87171" }} />
                  </button>
                  <p className="text-xs" style={{ color: "#4d6b57" }}>停止ボタンを押して録音を終了</p>
                </div>
              )}

              {(recordState === "recorded" || recordState === "uploading" || recordState === "uploaded") && (
                <div className="w-full flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#6ab98a" }} />
                    <span className="text-xs" style={{ color: "#6ab98a" }}>録音完了 ({fmtTime(recordSecs)})</span>
                  </div>
                  {localAudioUrl && (
                    <audio src={localAudioUrl} controls className="w-full" style={{ height: 36 }} />
                  )}
                  <div className="flex gap-3">
                    {recordState !== "uploaded" && (
                      <>
                        <button onClick={startRecording} disabled={recordState === "uploading"}
                          className="flex-1 py-2 rounded-lg text-sm transition-all"
                          style={{ background: "#152a1c", border: `1px solid ${BORDER}`, color: "#9dd4b0" }}>
                          録り直す
                        </button>
                        <button onClick={uploadRecording} disabled={recordState === "uploading"}
                          className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-50"
                          style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}>
                          {recordState === "uploading" ? "アップロード中..." : "アップロード ↑"}
                        </button>
                      </>
                    )}
                    {recordState === "uploaded" && (
                      <div className="flex-1 py-2 rounded-lg text-sm text-center" style={{ background: "#0f2a1a", border: "1px solid #2e6044", color: "#6ab98a" }}>
                        ✓ アップロード完了
                      </div>
                    )}
                  </div>
                </div>
              )}

              {speakingError && <p className="text-sm" style={{ color: "#f87171" }}>{speakingError}</p>}
            </div>

            {/* Manual score input */}
            <div className="border-t pt-5" style={{ borderColor: BORDER }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#4d6b57" }}>
                スコア入力（任意・後でAdminから入力も可）
              </p>
              <div className="grid grid-cols-10 gap-1.5">
                {["3.0","3.5","4.0","4.5","5.0","5.5","6.0","6.5","7.0","7.5","8.0","8.5","9.0"].map((v) => (
                  <button key={v} onClick={() => setSpeakingBand(v)}
                    className="py-2 rounded-lg text-xs font-semibold transition-all"
                    style={{
                      background: speakingBand === v ? "#4d9970" : "#152a1c",
                      border: `1px solid ${speakingBand === v ? "#4d9970" : BORDER}`,
                      color: speakingBand === v ? "#0d1a10" : "#9dd4b0",
                    }}>{v}</button>
                ))}
              </div>
              {spBandNum !== null && (
                <p className="mt-3 text-center text-sm" style={{ color: "#9dd4b0" }}>
                  Speaking Band: <strong style={{ color: "#6ab98a", fontFamily: "DM Serif Display, serif", fontSize: 20 }}>{spBandNum.toFixed(1)}</strong>
                </p>
              )}
            </div>
          </div>

          {submitError && <p className="text-sm" style={{ color: "#f87171" }}>{submitError}</p>}

          <button
            onClick={goToResults}
            disabled={submitting}
            className="px-10 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#2e6044,#4d9970)", color: "#f0f7f2" }}
          >
            {submitting ? "保存中..." : "結果を見る →"}
          </button>
          <p className="text-xs" style={{ color: "#4d6b57" }}>録音・スコア未入力でも結果を確認できます</p>
        </main>
      </div>
    );
  }

  // ── RESULTS ──────────────────────────────────────────────────────────────────

  if (step === "results") {
    const spBandNum = speakingBand !== "" ? parseFloat(speakingBand) : null;
    const bands = [listenBand, readBand, writingBand, spBandNum].filter((b): b is number => b !== null);
    const overallBand = bands.length === 4 ? roundHalf(bands.reduce((a, b) => a + b, 0) / 4) : null;

    const SkillRow = ({ label, band, sub }: { label: string; band: number | null; sub?: string }) => {
      const color = band ? (band >= 7.5 ? "#6ab98a" : band >= 6.0 ? "#c9a84c" : "#f87171") : "#4d6b57";
      return (
        <div className="flex items-center justify-between py-4 border-b" style={{ borderColor: BORDER }}>
          <div>
            <p className="font-semibold" style={{ color: "#f0f7f2", fontFamily: "DM Serif Display, serif", fontSize: 18 }}>{label}</p>
            {sub && <p className="text-xs mt-0.5" style={{ color: "#4d6b57" }}>{sub}</p>}
          </div>
          <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 40, color }}>
            {band !== null ? band.toFixed(1) : <span style={{ fontSize: 16, color: "#4d6b57" }}>採点待ち</span>}
          </span>
        </div>
      );
    };

    return (
      <div className="min-h-screen flex flex-col" style={{ background: BG }}>
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-10 py-12">
          {/* Name */}
          <p className="text-sm mb-6" style={{ color: "#4d6b57" }}>受験者：<strong style={{ color: "#f0f7f2" }}>{name}</strong></p>

          {/* Overall */}
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>Overall Band Score</p>
            {overallBand !== null ? (
              <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 96, lineHeight: 1, color: overallBand >= 7.5 ? "#6ab98a" : overallBand >= 6.0 ? "#c9a84c" : "#f87171" }}>
                {overallBand.toFixed(1)}
              </span>
            ) : (
              <div>
                <span style={{ fontFamily: "DM Serif Display, serif", fontSize: 40, color: "#4d6b57" }}>
                  {bands.length > 0 ? `${(bands.reduce((a, b) => a + b, 0) / bands.length).toFixed(1)}*` : "—"}
                </span>
                <p className="text-xs mt-1" style={{ color: "#4d6b57" }}>*Speakingスコア入力後に確定します</p>
              </div>
            )}
          </div>

          {/* Skill breakdown */}
          <div className="w-[480px] rounded-2xl px-8 py-2" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
            <SkillRow label="Listening" band={listenBand} sub={`正答数 ${listenCorrect}/10`} />
            <SkillRow label="Reading" band={readBand} sub={`正答数 ${readCorrect}/10`} />
            <SkillRow label="Writing" band={writingBand} sub={t1Result && t2Result ? `T1: ${t1Result.scores.band.toFixed(1)} / T2: ${t2Result.scores.band.toFixed(1)}` : ""} />
            <SkillRow label="Speaking" band={spBandNum} sub={speakingUrl ? "録音あり" : "録音なし"} />
          </div>

          {/* Writing detail */}
          {(t1Result || t2Result) && (
            <div className="mt-6 w-[480px] rounded-2xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#4d6b57" }}>Writing 詳細</p>
              <div className="flex justify-around">
                {t1Result && (
                  <div className="text-center">
                    <p className="text-xs mb-2" style={{ color: "#c9a84c" }}>Task 1</p>
                    <div className="flex gap-3">
                      {[["TA", t1Result.scores.ta, "#6ab98a"], ["CC", t1Result.scores.cc, "#7ba7d0"], ["LR", t1Result.scores.lr, "#c9a84c"], ["GRA", t1Result.scores.gra, "#b08fda"]].map(([l, s, c]) => (
                        <ScoreRing key={String(l)} label={String(l)} score={Number(s)} color={String(c)} />
                      ))}
                    </div>
                  </div>
                )}
                {t2Result && (
                  <div className="text-center">
                    <p className="text-xs mb-2" style={{ color: "#c9a84c" }}>Task 2</p>
                    <div className="flex gap-3">
                      {[["TA", t2Result.scores.ta, "#6ab98a"], ["CC", t2Result.scores.cc, "#7ba7d0"], ["LR", t2Result.scores.lr, "#c9a84c"], ["GRA", t2Result.scores.gra, "#b08fda"]].map(([l, s, c]) => (
                        <ScoreRing key={String(l)} label={String(l)} score={Number(s)} color={String(c)} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <button
            onClick={() => { setStep("home"); setName(""); setListenCorrect(null); setReadCorrect(null); setT1Essay(""); setT2Essay(""); setT1Result(null); setT2Result(null); setSpeakingBand(""); setSpeakingUrl(null); setLocalAudioUrl(null); setRecordState("idle"); setWritingSub("t1-write"); }}
            className="mt-8 px-8 py-3 rounded-xl text-sm border transition-all"
            style={{ borderColor: BORDER, color: "#9dd4b0" }}
          >
            最初からやり直す
          </button>
        </main>
      </div>
    );
  }

  return null;
}
