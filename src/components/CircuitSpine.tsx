import React, { useEffect, useState } from 'react';
import { usePersona } from '../context/PersonaContext';
import { useLenis } from 'lenis/react';

const sections = [
  { id: 'home', label: '01 Ingress', stageSE: 'STAGE 01: INGRESS', stageAI: 'STAGE 01: LATENT' },
  { id: 'about', label: '02 Architecture', stageSE: 'STAGE 02: KERNEL', stageAI: 'STAGE 02: MANIFOLD' },
  { id: 'work', label: '03 Pipeline', stageSE: 'STAGE 03: ENGINE', stageAI: 'STAGE 03: INFERENCE' },
  { id: 'stack', label: '04 Infrastructure', stageSE: 'STAGE 04: TOOLCHAIN', stageAI: 'STAGE 04: COMPUTE' },
  { id: 'contact', label: '05 Handshake', stageSE: 'STAGE 05: RPC', stageAI: 'STAGE 05: DISPATCH' },
];

export const CircuitSpine: React.FC = () => {
  const { persona } = usePersona();
  const [activeSection, setActiveSection] = useState<string>('home');
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 0.9 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Pipeline navigation spine"
      className="hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none pointer-events-auto"
    >
      <div className="relative flex flex-col items-center gap-6 py-4 px-2 rounded-full bg-white/70 dark:bg-[#0c0c0c]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl">
        {/* Track Line */}
        <div
          className={`absolute top-4 bottom-4 w-px ${
            persona === 'se' ? 'bg-emerald-500/20' : 'bg-cyan-500/20'
          }`}
        />

        {sections.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          const stageBadge = persona === 'se' ? sec.stageSE : sec.stageAI;

          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              aria-label={`Scroll to ${sec.label}`}
            >
              {/* Node Indicator */}
              <div
                className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? persona === 'se'
                      ? 'bg-emerald-500 scale-125 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                      : 'bg-cyan-500 scale-125 shadow-[0_0_12px_rgba(6,182,212,0.8)]'
                    : 'bg-zinc-300 dark:bg-zinc-700 hover:scale-110'
                }`}
              />

              {/* Tooltip on Hover / Active */}
              <div className="absolute left-7 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap pl-2">
                <div className="px-2.5 py-1 rounded-md bg-zinc-900/90 dark:bg-black/90 text-white border border-white/10 text-[10px] font-mono shadow-xl flex items-center gap-1.5">
                  <span className={persona === 'se' ? 'text-emerald-400' : 'text-cyan-400'}>
                    0{idx + 1}
                  </span>
                  <span>{stageBadge}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default CircuitSpine;

