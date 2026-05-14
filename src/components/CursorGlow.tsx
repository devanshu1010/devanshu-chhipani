import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (raf.current === null) raf.current = requestAnimationFrame(tick);
    };
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 180}px, ${current.current.y - 180}px, 0)`;
      }
      if (Math.abs(target.current.x - current.current.x) > 0.3 || Math.abs(target.current.y - current.current.y) > 0.3) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = null;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-3xl lg:block dark:bg-emerald-400/10"
      style={{ willChange: "transform", transform: "translate3d(-1000px,-1000px,0)" }}
    />
  );
};

export default CursorGlow;
