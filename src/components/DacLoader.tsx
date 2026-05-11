import React, { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

type Phase = "enter" | "run" | "exit" | "done";

const LINES = [
  "Initializing runtime environment...",
  "Loading engineering modules...",
  "Compiling work experience data...",
  "Mounting portfolio context...",
  "Systems nominal. Launching profile.",
];

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("enter");
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setPhase("run"), 160);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "run") return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 1.1, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("exit"), 520);
        }
        return next;
      });
    }, 22);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    const count = Math.min(
      LINES.length,
      Math.floor((progress / 100) * (LINES.length + 1))
    );
    setVisibleLines(count);
  }, [progress]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 580);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  const isEnter = phase === "enter";
  const isExit = phase === "exit";
  const pct = Math.floor(progress);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0c0f0d]"
      style={{
        opacity: isExit ? 0 : 1,
        transition: isExit ? "opacity 0.52s ease" : undefined,
      }}
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(16,185,129,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.032)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_75%_85%,rgba(251,191,36,0.08),transparent)]" />
      </div>

      {/* Card */}
      <div
        className="relative z-10 w-[min(92vw,460px)] rounded-2xl border border-white/[0.07] bg-[#0e120f]/95 p-7"
        style={{
          boxShadow: "0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)",
          transform: isEnter
            ? "translateY(22px) scale(0.96)"
            : "translateY(0) scale(1)",
          opacity: isEnter ? 0 : 1,
          transition:
            "transform 0.58s cubic-bezier(0.16,1,0.3,1), opacity 0.46s ease",
        }}
      >
        {/* Top edge highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Header row */}
        <div className="mb-7 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            boot.sequence
          </span>
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{
                animation:
                  phase === "run"
                    ? "dacPulse 1.6s ease-in-out infinite"
                    : "none",
              }}
            />
              <span className="font-mono text-xs tabular-nums text-amber-300">
              {String(pct).padStart(3, "0")}%
            </span>
          </div>
        </div>

        {/* Identity block — large animated logo */}
        <div className="mb-7 flex flex-col items-center gap-3">
          <LogoMark large animated />
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-amber-400/55" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Devanshu Chhipani · Computer Engineer
            </span>
            <span className="h-px w-4 bg-amber-400/55" />
          </div>
        </div>

        {/* Terminal output */}
        <div className="mb-7 min-h-[5.8rem] rounded-lg border border-white/[0.05] bg-black/25 px-4 py-3 space-y-1.5">
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className="flex items-start gap-2 font-mono text-[11px] leading-relaxed"
              style={{
                opacity: i < visibleLines - 1 ? 0.38 : 1,
                animation:
                  i === visibleLines - 1 ? "dacFadeIn 0.28s ease forwards" : "none",
              }}
            >
              <span className="mt-px shrink-0 text-amber-400">&gt;</span>
              <span className="text-zinc-300">{line}</span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative h-[3px] overflow-visible rounded-full bg-white/[0.06]">
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #34d399 0%, #38bdf8 48%, #fbbf24 100%)",
              backgroundSize: "200% 100%",
              animation: "dacShimmer 2.2s linear infinite",
              transition: "width 0.08s linear",
            }}
          />
          {progress > 1 && progress < 100 && (
            <div
              className="absolute top-1/2 w-7 rounded-full bg-white/50 blur-[4px]"
              style={{
                height: "7px",
                transform: "translateY(-50%)",
                left: `calc(${progress}% - 14px)`,
                transition: "left 0.08s linear",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DacLoader;
