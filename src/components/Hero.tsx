
import { ArrowDown, CircuitBoard, Github, Linkedin, Mail, Terminal } from 'lucide-react';
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
      className="relative min-h-screen overflow-hidden pt-30"
    >
      <div className="container-page relative z-10 grid min-h-[calc(100vh-120px)] items-center gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="max-w-[880px] space-y-8">
          <div className="inline-flex items-center gap-3 rounded-md border border-black/10 bg-[#ffffff] px-3 py-2 font-mono text-xs uppercase text-zinc-600 dark:border-white/10 dark:bg-black/30 dark:text-zinc-300">
            <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-400"></span>
            Available for selected computer engineering work
          </div>

          <div className="space-y-6">
            <p className="flex items-center gap-2 font-mono text-sm uppercase text-indigo-600 dark:text-indigo-400">
              <CircuitBoard className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              Systems-minded product engineering
            </p>

            <h1 className="text-5xl font-black leading-[0.94] tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              Devanshu Chhipani builds software with engineering logic inside.
            </h1>

            <p className="max-w-[640px] text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Computer Engineer focused on React, TypeScript, dashboards, APIs, and practical AI-era product experiences. I design systems that feel precise, fast, and human enough to trust.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center">
            <button 
              onClick={() => scrollToSection('experience')}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-950 px-6 py-4 text-base font-semibold text-[#ffffff] transition-transform duration-200 hover:-translate-y-0.5 hover:text-indigo-300 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:text-indigo-600"
            >
              View work log
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="rounded-md border border-zinc-950/20 bg-transparent px-6 py-4 text-base font-semibold text-zinc-950 transition-colors duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/[0.06] dark:border-white/20 dark:text-white dark:hover:border-indigo-400/40 dark:hover:bg-indigo-400/[0.06]">
              Download CV
            </button>
          </div>

          <div className="flex gap-3 pt-2">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="grid h-11 w-11 place-items-center rounded-md border border-black/10 bg-[#ffffff]/70 text-zinc-700 transition-colors duration-200 hover:border-indigo-500/40 hover:bg-zinc-950 hover:text-indigo-300 dark:border-white/10 dark:bg-black/25 dark:text-zinc-300 dark:hover:border-indigo-400/40 dark:hover:bg-white dark:hover:text-indigo-600"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative pb-16 lg:pb-0">
          <div className="rounded-2xl border border-black/[0.06] bg-zinc-950 text-[#ffffff] dark:border-white/[0.08] dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-zinc-400">
                <Terminal className="h-4 w-4 text-indigo-400" />
                devanshu.ai-context
              </div>
              <span className="font-mono text-xs text-cyan-400">online</span>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <pre className="overflow-hidden rounded-lg border border-white/10 bg-black/35 p-5 text-left font-mono text-xs leading-7 text-zinc-300 sm:text-sm">
{`const developer = {
  name: "Devanshu Chhipani",
  stack: ["React", "TypeScript", "Next.js"],
  mode: "computer engineering + AI workflows",
  output: "interfaces people can operate"
};`}
              </pre>

              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                <div>
                  <span className="block text-2xl font-semibold text-white">40%</span>
                  faster loads
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-white">5+</span>
                  teams
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-white">100k</span>
                  readers
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
