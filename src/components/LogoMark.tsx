interface LogoMarkProps {
  compact?: boolean;
}

const LogoMark = ({ compact = false }: LogoMarkProps) => {
  const s = compact ? "h-8 w-8" : "h-12 w-12";
  const stroke = compact ? 10 : 8;
  const node = compact ? 4.6 : 4.1;

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
      <svg viewBox="0 0 100 100" className="relative z-10 h-[82%] w-[82%]" role="img" aria-label="Devanshu Chhipani circuit logo">
        <path
          d="M15 18H49C69 18 83 31 83 50S69 82 49 82H15V61H38C47 61 54 57 54 50S47 39 38 39H15Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
        />
        <path
          d="M85 18H51C31 18 17 31 17 50S31 82 51 82H85V61H62C53 61 46 57 46 50S53 39 62 39H85Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinejoin="round"
          opacity="0.86"
        />
        <g className="text-emerald-400 dark:text-emerald-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
          <path d="M22 28H35L42 35H53" />
          <path d="M22 72H35L44 63H56" />
          <path d="M78 28H66L57 37H48" />
          <path d="M78 72H66L57 63H46" />
          <path d="M50 18V31" />
          <path d="M50 69V82" />
        </g>
        <g className="text-amber-300 dark:text-amber-600" fill="currentColor">
          <circle cx="22" cy="28" r={node} />
          <circle cx="53" cy="35" r={node} />
          <circle cx="78" cy="28" r={node} />
          <circle cx="22" cy="72" r={node} />
          <circle cx="78" cy="72" r={node} />
          <circle cx="50" cy="50" r={node + 0.6} />
        </g>
      </svg>
    </span>
  );
};

export default LogoMark;
