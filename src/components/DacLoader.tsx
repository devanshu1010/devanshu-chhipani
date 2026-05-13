import React, { useEffect, useState } from "react";

type Phase = "enter" | "run" | "exit" | "done";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setPhase("run"), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "run") return;

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 1.35, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("exit"), 360);
        }
        return next;
      });
    }, 22);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const t = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 460);

    return () => clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  const isEnter = phase === "enter";
  const isExit = phase === "exit";
  const pct = Math.floor(progress);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#f7f7f3] text-zinc-950"
      style={{
        opacity: isExit ? 0 : 1,
        transition: isExit ? "opacity 0.42s ease" : undefined,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.78),rgba(226,226,219,0.34)_58%,rgba(210,210,204,0.5))]" />
      <div
        className="relative flex w-[min(82vw,620px)] flex-col items-center"
        style={{
          opacity: isEnter ? 0 : 1,
          transform: isEnter ? "scale(0.96)" : "scale(1)",
          transition:
            "opacity 0.52s ease, transform 0.72s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <img
          src="/dac-loader-mark.svg"
          alt="Devanshu Chhipani loading mark"
          className="block h-auto w-full select-none"
          draggable={false}
        />

        <div className="mt-3 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
          <span>Loading</span>
          <span className="h-px w-16 overflow-hidden rounded-full bg-zinc-300/70">
            <span
              className="block h-full rounded-full bg-zinc-500"
              style={{
                width: `${progress}%`,
                transition: "width 0.08s linear",
              }}
            />
          </span>
          <span className="w-10 tabular-nums text-zinc-400">
            {String(pct).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DacLoader;
