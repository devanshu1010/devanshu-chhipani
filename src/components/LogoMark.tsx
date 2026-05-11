interface LogoMarkProps {
  compact?: boolean;
}

const LogoMark = ({ compact = false }: LogoMarkProps) => {
  const s = compact ? "h-8 w-8" : "h-12 w-12";
  const stroke = compact ? 7 : 6;
  const trace = compact ? 2 : 1.8;
  const node = compact ? 2.6 : 2.4;

  return (
    <span
      className={`relative grid place-items-center overflow-hidden rounded-[7px] ${s}
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
        {/* D letter outline (circuit-board style) */}
        <path
          d="M10 14H40C58 14 70 30 70 50S58 86 40 86H10V64H32C40 64 48 60 48 50S40 36 32 36H10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
        {/* C letter outline */}
        <path
          d="M112 26C106 18 96 14 86 14C68 14 56 30 56 50S68 86 86 86C96 86 106 82 112 74"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Emerald circuit traces inside letters */}
        <g className="text-emerald-400 dark:text-emerald-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={trace}>
          {/* D inner traces */}
          <path d="M16 22H28L33 27H44" />
          <path d="M16 30H22V40" />
          <path d="M28 22V32H38" />
          <path d="M16 78H30L36 72H46" />
          <path d="M22 70V78" />
          <path d="M16 50H26L32 56" />
          {/* C inner traces */}
          <path d="M86 22H94L100 28" />
          <path d="M68 30L74 36H82" />
          <path d="M64 50H74" />
          <path d="M68 70L74 64H84" />
          <path d="M86 78H96L102 72" />
        </g>

        {/* Amber connection nodes */}
        <g className="text-amber-300 dark:text-amber-600" fill="currentColor">
          <circle cx="16" cy="22" r={node} />
          <circle cx="28" cy="22" r={node} />
          <circle cx="44" cy="27" r={node} />
          <circle cx="22" cy="40" r={node} />
          <circle cx="38" cy="32" r={node} />
          <circle cx="26" cy="50" r={node} />
          <circle cx="16" cy="78" r={node} />
          <circle cx="30" cy="78" r={node} />
          <circle cx="46" cy="72" r={node} />
          <circle cx="86" cy="22" r={node} />
          <circle cx="100" cy="28" r={node} />
          <circle cx="82" cy="36" r={node} />
          <circle cx="74" cy="50" r={node} />
          <circle cx="84" cy="64" r={node} />
          <circle cx="96" cy="78" r={node} />
        </g>
      </svg>
    </span>
  );
};

export default LogoMark;
