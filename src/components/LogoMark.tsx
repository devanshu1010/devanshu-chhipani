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
      className={`relative grid place-items-center ${rounded} ${s} ${animated ? "logo-animated" : ""}`}
      aria-hidden="true"
    >
      <img
        src="/dac-loader-mark.svg"
        alt="Devanshu Chhipani logo"
        className="relative z-10 h-full w-full object-contain select-none dark:invert"
        draggable={false}
      />
    </span>
  );
};

export default LogoMark;
