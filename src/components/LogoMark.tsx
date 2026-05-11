interface LogoMarkProps {
  compact?: boolean;
  large?: boolean;
  animated?: boolean;
}

const LogoMark = ({ compact = false, large = false, animated = false }: LogoMarkProps) => {
  const s = large ? "h-32 w-40 md:h-36 md:w-44" : compact ? "h-8 w-8" : "h-12 w-12";
  const stroke = large ? 7 : compact ? 9 : 8;
  const trace = large ? 1.8 : compact ? 2.4 : 2;
  const node = large ? 2.4 : compact ? 3 : 2.6;
  const rounded = large ? "rounded-2xl" : "rounded-[7px]";

  return (
    <span
      className={`relative grid place-items-center overflow-hidden ${rounded} ${s} ${animated ? "logo-animated" : ""}
        border border-zinc-800
        bg-zinc-950 text-[#f6f7ef]
        shadow-[3px_3px_0_rgba(16,185,129,0.24),inset_0_0_0_1px_rgba(255,255,255,0.05)]
        dark:border-zinc-300/70
        dark:bg-[#f0f1e8] dark:text-zinc-900
        dark:shadow-[3px_3px_0_rgba(251,191,36,0.22),inset_0_0_0_1px_rgba(0,0,0,0.05)]`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_58%,rgba(251,191,36,0.12)_100%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,transparent_58%,rgba(251,191,36,0.12)_100%)]" />
      <svg viewBox="0 0 120 100" className="relative z-10 h-[86%] w-[86%]" role="img" aria-label="Devanshu Chhipani circuit DC logo">
        {/* D letter — bold outline */}
        <path
          d="M12 14H44C62 14 74 30 74 50S62 86 44 86H12Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
        {/* C letter — bold open arc */}
        <path
          d="M114 26C108 18 99 14 90 14C72 14 60 30 60 50S72 86 90 86C99 86 108 82 114 74"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Emerald circuit traces — sparse, deliberate */}
        <g className="text-emerald-400 dark:text-emerald-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={trace}>
          <path className="logo-trace" d="M24 30H36L42 36" />
          <path className="logo-trace" d="M24 50H40" />
          <path className="logo-trace" d="M24 70H36L42 64" />
          <path className="logo-trace" d="M76 32L84 40H94" />
          <path className="logo-trace" d="M74 50H86" />
          <path className="logo-trace" d="M76 68L84 60H94" />
        </g>

        {/* Amber connection nodes — fewer, larger */}
        <g className="text-amber-300 dark:text-amber-600" fill="currentColor">
          <circle className="logo-node" cx="24" cy="30" r={node} />
          <circle className="logo-node" cx="42" cy="36" r={node} />
          <circle className="logo-node" cx="40" cy="50" r={node} />
          <circle className="logo-node" cx="24" cy="70" r={node} />
          <circle className="logo-node" cx="42" cy="64" r={node} />
          <circle className="logo-node" cx="84" cy="40" r={node} />
          <circle className="logo-node" cx="86" cy="50" r={node} />
          <circle className="logo-node" cx="84" cy="60" r={node} />
        </g>
      </svg>
    </span>
  );
};

export default LogoMark;
