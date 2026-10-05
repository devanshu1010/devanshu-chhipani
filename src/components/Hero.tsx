import { useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20 px-4"
    >
      {/* 240px Gradient Orb with subtle circuit emblem */}
      <div 
        className="w-[240px] h-[240px] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-[80px] opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="relative w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 shadow-[0_0_80px_rgba(59,130,246,0.25)] mb-10 flex items-center justify-center p-[2px] transition-transform duration-500 hover:scale-[1.02]">
        <div className="w-full h-full rounded-full bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md flex flex-col items-center justify-center text-zinc-900 dark:text-white/90 relative overflow-hidden group">
          {/* Subtle circuit overlay echoing the loader */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none" />
          <img
            src="/dac-loader-mark.svg"
            alt="Devanshu Chhipani identity mark"
            className="w-16 h-16 select-none filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:invert"
            draggable={false}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 mt-2 font-medium">
            AI / Systems
          </span>
        </div>
      </div>

      {/* Main Title matching wireframe: text-[64px] font-semibold tracking-[-0.035em] */}
      <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-[-0.035em] leading-tight mb-4 text-zinc-950 dark:text-zinc-50">
        Devanshu Chhipani
      </h1>

      {/* Role subhead matching wireframe */}
      <h2 className="text-[17px] sm:text-[18px] text-zinc-500 dark:text-zinc-400 mb-4 font-normal">
        Software Engineer <span className="mx-2 text-zinc-400 dark:text-zinc-600">·</span> AI Practitioner
      </h2>

      {/* Tagline matching wireframe */}
      <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 font-normal mb-10 max-w-lg leading-relaxed">
        Building interfaces that think clearly.
      </p>

      {/* CTAs matching wireframe */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => scrollToSection('work')}
          className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-sm shadow-blue-500/20 active:scale-[0.98]"
        >
          View Work
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2.5 rounded-full bg-transparent border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
