interface LogoMarkProps {
  compact?: boolean;
  large?: boolean;
  animated?: boolean;
}

const LogoMark = ({ compact = false, large = false, animated = false }: LogoMarkProps) => {
  const s = large ? "h-32 w-40 md:h-36 md:w-44" : compact ? "h-8 w-10" : "h-12 w-14";
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
      <img
        src="/dac-loader-mark.svg"
        alt="Devanshu Chhipani logo"
        className="relative z-10 h-[82%] w-[88%] object-contain select-none invert dark:invert-0"
        draggable={false}
      />
    </span>
  );
};

export default LogoMark;
