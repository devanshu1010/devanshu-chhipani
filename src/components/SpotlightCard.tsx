import React, { useRef, useState } from 'react';
import { usePersona } from '../context/PersonaContext';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  innerClassName = ''
}) => {
  const { persona } = usePersona();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-1.5 sm:p-2 rounded-[2rem] transition-all duration-300 ${
        persona === 'se'
          ? 'bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-emerald-500/40 shadow-xl'
          : 'bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 hover:border-cyan-500/40 shadow-2xl'
      } ${className}`}
    >
      {/* AI Mode: Cursor Spotlight Glow (aaabadcode reference) */}
      {persona === 'ai' && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-70 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.18), transparent 80%)`,
          }}
        />
      )}

      {/* SE Mode: Subtle Circuit Hover Aura */}
      {persona === 'se' && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-60 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 75%)`,
          }}
        />
      )}

      {/* Inner Core Container */}
      <div
        className={`rounded-[calc(2rem-0.5rem)] bg-white dark:bg-[#0c0c0c] border border-black/[0.06] dark:border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] overflow-hidden transition-colors ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;

