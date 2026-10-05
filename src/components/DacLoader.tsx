import React, { useEffect, useState } from "react";

type Phase = "enter" | "run" | "exit" | "done";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("enter");
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    obs.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setPhase("run"), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "run") return;

    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 1.8, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("exit"), 250);
        }
        return next;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;

    const t = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 420);

    return () => clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  const isEnter = phase === "enter";
  const isExit = phase === "exit";
  const pct = Math.floor(progress);

  const bg = isDark ? "#0a0a0a" : "#fafafa";
  const textColor = isDark ? "#a1a1a1" : "#525252";
  const trackColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const fillColor = "#3b82f6"; // Refined blue accent

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden"
      style={{
        backgroundColor: bg,
        color: isDark ? "#ededed" : "#171717",
        opacity: isExit ? 0 : 1,
        transition: isExit ? "opacity 0.4s ease" : undefined,
      }}
    >
      {/* Subtle ambient glow matching the hero orb */}
      <div 
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-blue-500/15 blur-[90px] -z-10"
        aria-hidden="true"
      />

      <div
        className="relative flex w-[min(70vw,340px)] flex-col items-center"
        style={{
          opacity: isEnter ? 0 : 1,
          transform: isEnter ? "scale(0.96)" : "scale(1)",
          transition: "opacity 0.48s ease, transform 0.64s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <img
          src="/dac-loader-mark.svg"
          alt="Devanshu Chhipani circuit identity mark"
          className={`block h-auto w-full select-none ${isDark ? "invert" : ""}`}
          draggable={false}
        />

        <div
          className="mt-6 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em]"
          style={{ color: textColor }}
        >
          <span>Initializing</span>
          <span
            className="h-[2px] w-20 overflow-hidden rounded-full"
            style={{ backgroundColor: trackColor }}
          >
            <span
              className="block h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: fillColor,
                boxShadow: "0 0 8px rgba(59,130,246,0.6)",
                transition: "width 0.06s linear",
              }}
            />
          </span>
          <span className="w-10 tabular-nums text-right font-medium" style={{ color: isDark ? "#ededed" : "#171717" }}>
            {String(pct).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DacLoader;
