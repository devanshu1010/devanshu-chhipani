
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
      className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-36 h-px w-[84%] bg-zinc-950/20 dark:bg-white/15"></div>
        <div className="absolute bottom-28 left-[8%] h-px w-[84%] bg-zinc-950/10 dark:bg-white/10"></div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-md border border-black/10 bg-[#ffffff] px-3 py-2 font-mono text-xs uppercase text-zinc-600 dark:border-white/10 dark:bg-black/30 dark:text-zinc-300">
            <span className="h-2 w-2 bg-cyan-600 dark:bg-cyan-400"></span>
            Available for selected computer engineering work
          </div>

          <div className="space-y-6">
            <p className="flex items-center gap-2 font-mono text-sm uppercase text-indigo-600 dark:text-indigo-400">
              <CircuitBoard className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              Systems-minded product engineering
            </p>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-normal text-zinc-950 dark:text-zinc-50 sm:text-6xl lg:text-8xl">
              Devanshu Chhipani builds software with engineering logic inside.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
              Computer Engineer focused on React, TypeScript, dashboards, APIs, and practical AI-era product experiences. I design systems that feel precise, fast, and human enough to trust.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
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
          <div className="rounded-lg border border-black/10 bg-zinc-950 text-[#ffffff] shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase text-zinc-400">
                <Terminal className="h-4 w-4 text-indigo-400" />
                devanshu.ai-context
              </div>
              <span className="font-mono text-xs text-cyan-400">online</span>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              <div className="grid grid-cols-3 gap-3 font-mono text-xs text-zinc-400">
                <div className="border border-white/10 p-3">
                  <span className="block text-2xl font-bold text-white">40%</span>
                  faster loads
                </div>
                <div className="border border-white/10 p-3">
                  <span className="block text-2xl font-bold text-white">5+</span>
                  product teams
                </div>
                <div className="border border-white/10 p-3">
                  <span className="block text-2xl font-bold text-white">100k</span>
                  readers
                </div>
              </div>

              <pre className="overflow-hidden rounded-md border border-white/10 bg-black/35 p-4 text-left font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
{`const developer = {
  name: "Devanshu Chhipani",
  stack: ["React", "TypeScript", "Next.js"],
  mode: "computer engineering + AI workflows",
  output: "interfaces people can operate"
};`}
              </pre>

              <div className="grid gap-3">
                {["Designs UI states before decoration", "Builds APIs into calm product flows", "Writes so other developers can move faster"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-zinc-200">
                    <span className="h-2 w-2 bg-cyan-400"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('experience')}
          className="absolute bottom-6 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-md border border-black/10 bg-[#ffffff] text-zinc-700 transition-colors hover:border-indigo-500/40 hover:bg-zinc-950 hover:text-indigo-300 dark:border-white/10 dark:bg-black/30 dark:text-zinc-300 dark:hover:border-indigo-400/40 dark:hover:bg-white dark:hover:text-indigo-600"
          aria-label="Scroll to experience"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
