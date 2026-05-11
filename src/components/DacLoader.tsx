import React, { useEffect, useMemo, useState } from "react";

type Phase = "enter" | "run" | "exit" | "done";

const TRACE_PATHS = [
  "M76 82H116L132 96H178",
  "M75 112V92H108L123 106H156",
  "M76 142H118L142 118H196",
  "M76 172H118L146 148H216",
  "M116 82V62H156L182 88H222",
  "M150 184H208L238 154",
  "M190 70H234L270 106V134",
  "M222 92H260L292 124",
  "M232 168H278L306 142",
  "M286 94L328 132L286 170",
  "M474 94L432 132L474 170",
  "M538 70H582L608 44H652",
  "M500 92H548L584 60H632",
  "M486 118H558L584 94H676",
  "M485 144H552L584 170H680",
  "M502 170H548L584 204H636",
  "M538 192H590L616 178H684",
  "M620 82H682L704 104",
  "M620 178H682L704 156",
  "M410 112V82H434",
  "M350 112V82H326",
  "M340 154H318L292 190H242",
  "M420 154H442L468 190H520",
];

const NODE_POINTS = [
  [76, 82],
  [116, 82],
  [178, 96],
  [75, 112],
  [108, 92],
  [156, 106],
  [76, 142],
  [142, 118],
  [196, 118],
  [76, 172],
  [146, 148],
  [216, 148],
  [116, 62],
  [182, 88],
  [222, 88],
  [150, 184],
  [238, 154],
  [270, 106],
  [270, 134],
  [292, 124],
  [306, 142],
  [328, 132],
  [432, 132],
  [474, 94],
  [474, 170],
  [538, 70],
  [608, 44],
  [652, 44],
  [500, 92],
  [584, 60],
  [632, 60],
  [486, 118],
  [584, 94],
  [676, 94],
  [485, 144],
  [584, 170],
  [680, 170],
  [502, 170],
  [584, 204],
  [636, 204],
  [538, 192],
  [616, 178],
  [684, 178],
  [620, 82],
  [704, 104],
  [620, 178],
  [704, 156],
  [410, 82],
  [350, 82],
  [292, 190],
  [468, 190],
] as const;

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<Phase>("enter");
  const [progress, setProgress] = useState(0);

  const traceOffsets = useMemo(
    () => TRACE_PATHS.map((_, index) => `${(index % 8) * 0.09}s`),
    []
  );

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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75),rgba(226,226,219,0.34)_58%,rgba(210,210,204,0.52))]" />
      <div
        className="relative flex w-[min(78vw,760px)] flex-col items-center"
        style={{
          opacity: isEnter ? 0 : 1,
          transform: isEnter ? "scale(0.96)" : "scale(1)",
          transition:
            "opacity 0.52s ease, transform 0.72s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <svg
          viewBox="0 62 760 158"
          className="dac-chain-loader block h-auto w-full max-h-[clamp(9rem,24vw,14.5rem)]"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Loading Devanshu Chhipani portfolio"
        >
          <defs>
            <filter id="dacPaperShadow" x="-10%" y="-18%" width="120%" height="136%">
              <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.18" />
            </filter>
            <clipPath id="dacChainClip">
              <path d="M38 72H266C326 72 374 98 382 128C386 142 386 154 382 168C374 198 326 210 266 210H38V144H122V163H261C286 163 301 152 301 132C301 111 286 100 261 100H122V118H38Z" />
              <path d="M722 72H494C434 72 386 98 378 128C374 142 374 154 378 168C386 198 434 210 494 210H722V144H638V163H499C474 163 459 152 459 132C459 111 474 100 499 100H638V118H722Z" />
            </clipPath>
          </defs>

          <g filter="url(#dacPaperShadow)">
            <path
              className="dac-chain-outline"
              d="M38 72H266C326 72 374 98 382 128C386 142 386 154 382 168C374 198 326 210 266 210H38V144H122V163H261C286 163 301 152 301 132C301 111 286 100 261 100H122V118H38Z"
            />
            <path
              className="dac-chain-outline"
              d="M722 72H494C434 72 386 98 378 128C374 142 374 154 378 168C386 198 434 210 494 210H722V144H638V163H499C474 163 459 152 459 132C459 111 474 100 499 100H638V118H722Z"
            />
          </g>

          <g clipPath="url(#dacChainClip)">
            <g className="dac-chain-traces">
              {TRACE_PATHS.map((d, index) => (
                <path
                  key={d}
                  className="dac-chain-trace"
                  d={d}
                  style={{ animationDelay: traceOffsets[index] }}
                />
              ))}
            </g>

            <g className="dac-chain-nodes">
              {NODE_POINTS.map(([cx, cy], index) => (
                <circle
                  key={`${cx}-${cy}-${index}`}
                  className="dac-chain-node"
                  cx={cx}
                  cy={cy}
                  r="5.5"
                  style={{ animationDelay: `${(index % 9) * 0.11}s` }}
                />
              ))}
            </g>

            <path
              className="dac-chain-current"
              d="M76 82H116L132 96H178M286 94L328 132L286 170M474 94L432 132L474 170M538 70H582L608 44H652"
            />
          </g>
        </svg>

        <div className="mt-6 flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          <span>Loading</span>
          <span className="h-px w-20 overflow-hidden rounded-full bg-zinc-300">
            <span
              className="block h-full rounded-full bg-zinc-950"
              style={{
                width: `${progress}%`,
                transition: "width 0.08s linear",
              }}
            />
          </span>
          <span className="w-10 tabular-nums text-zinc-700">
            {String(pct).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DacLoader;
