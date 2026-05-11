import { Activity, Braces, Code, Database, Layers, Radio, Wrench } from "lucide-react";
import { useState } from "react";

const techCategories = [
  {
    category: "Interface Engineering",
    icon: Code,
    technologies: [
      { name: "React", signal: "UI", proficiency: "Expert" },
      { name: "TypeScript", signal: "TS", proficiency: "Advanced" },
      { name: "Next.js", signal: "SSR", proficiency: "Advanced" },
      { name: "Tailwind CSS", signal: "CSS", proficiency: "Expert" },
      { name: "Vue.js", signal: "MV", proficiency: "Intermediate" },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    technologies: [
      { name: "Node.js", signal: "JS", proficiency: "Advanced" },
      { name: "Express", signal: "API", proficiency: "Advanced" },
      { name: "Python", signal: "PY", proficiency: "Intermediate" },
      { name: "PostgreSQL", signal: "SQL", proficiency: "Advanced" },
      { name: "MongoDB", signal: "DB", proficiency: "Intermediate" },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: Wrench,
    technologies: [
      { name: "Git", signal: "VC", proficiency: "Expert" },
      { name: "Docker", signal: "CI", proficiency: "Intermediate" },
      { name: "AWS", signal: "CL", proficiency: "Intermediate" },
      { name: "Vercel", signal: "CD", proficiency: "Advanced" },
      { name: "Figma", signal: "DX", proficiency: "Advanced" },
    ],
  },
];

const getProficiencyLevel = (proficiency: string) => {
  const levels = {
    Expert: 5,
    Advanced: 4,
    Intermediate: 3,
    Beginner: 2,
  };

  return levels[proficiency as keyof typeof levels] || 3;
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const activeCategory = techCategories[selectedCategory];
  const ActiveIcon = activeCategory.icon;

  return (
    <section id="tech" className="relative overflow-hidden border-y border-zinc-950/10 px-4 py-20 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(24,24,27,0.05)_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(90deg,rgba(56,189,248,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute right-[10%] top-14 h-24 w-px bg-amber-400/35 dark:bg-amber-300/25" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="inline-flex w-fit items-center gap-2 rounded-md border border-zinc-950/15 px-3 py-2 font-mono text-xs uppercase text-zinc-600 dark:border-white/15 dark:text-zinc-400">
            <Layers className="h-4 w-4 text-emerald-700 dark:text-sky-300" />
            Stack map
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl">
            Tools chosen for shipping, <span className="text-amber-600 dark:text-amber-300">wired into</span> one product system.
          </h2>

          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A compact view of the technologies I use to turn ambiguous product ideas into stable interfaces, APIs, and deployment flows.
          </p>
        </div>

        <div className="mb-8 flex overflow-x-auto">
          <div className="inline-flex rounded-lg border border-emerald-950/15 bg-[#e9f4ec]/70 p-1 shadow-[8px_8px_0_rgba(251,191,36,0.12)] dark:border-white/15 dark:bg-white/[0.04] dark:shadow-[8px_8px_0_rgba(251,191,36,0.07)]">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 rounded-md px-5 py-3 font-semibold transition-colors duration-200 ${
                    selectedCategory === index
                      ? "bg-zinc-950 text-[#f6f7ef] shadow-[inset_0_-2px_0_rgba(251,191,36,0.75)] dark:bg-white dark:text-zinc-950"
                      : "text-zinc-700 hover:bg-amber-300/20 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-amber-300/10 dark:hover:text-white"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="relative overflow-hidden rounded-lg border border-emerald-950/15 bg-zinc-950 p-6 text-[#f6f7ef] shadow-[14px_14px_0_rgba(16,185,129,0.12)] dark:border-white/15 dark:bg-[#101211] dark:shadow-[14px_14px_0_rgba(56,189,248,0.06)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),transparent_45%,rgba(251,191,36,0.1))]" />
            <div className="relative">
              <div className="mb-8 flex items-start justify-between">
                <Braces className="h-9 w-9 text-sky-300" />
                <span className="rounded-sm border border-amber-300/30 px-2 py-1 font-mono text-[10px] uppercase text-amber-200">
                  live node
                </span>
              </div>
              <p className="font-mono text-xs uppercase text-zinc-400">Current layer</p>
              <h3 className="mt-3 text-3xl font-black tracking-normal">{activeCategory.category}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Proficiency here means how confidently I can design, debug, and explain decisions with that tool in a real product codebase.
              </p>
              <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-emerald-300">
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div className="h-px bg-gradient-to-r from-emerald-400 via-sky-300 to-amber-300" />
                <span className="col-span-2 flex items-center gap-2 font-mono text-[11px] uppercase text-zinc-400">
                  <Radio className="h-3.5 w-3.5 text-amber-300" />
                  connected across interface, data, and deployment decisions
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg border border-emerald-950/15 bg-[#fbfbf2]/80 p-4 dark:border-white/15 dark:bg-white/[0.04] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-zinc-950/10 pb-4 dark:border-white/10">
              <div>
                <p className="font-mono text-xs uppercase text-amber-700 dark:text-amber-300">signal strength</p>
                <h3 className="mt-1 text-2xl font-black text-zinc-950 dark:text-white">{activeCategory.category} tools</h3>
              </div>
              <Activity className="h-6 w-6 text-emerald-700 dark:text-sky-300" />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {activeCategory.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative overflow-hidden rounded-md border border-emerald-950/10 bg-[#f6f7ef] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/55 hover:shadow-[8px_8px_0_rgba(251,191,36,0.12)] dark:border-white/10 dark:bg-black/20 dark:hover:border-amber-300/45 dark:hover:shadow-[8px_8px_0_rgba(251,191,36,0.07)]"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/35 to-transparent dark:via-sky-300/35" />
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-zinc-950 font-mono text-xs font-bold text-[#f6f7ef] shadow-[inset_0_-2px_0_rgba(251,191,36,0.72)] dark:bg-white dark:text-zinc-950">
                        {tech.signal}
                      </span>
                      <span className="text-lg font-bold text-zinc-950 dark:text-white">{tech.name}</span>
                    </div>
                    <span className="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                      {tech.proficiency}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(5)].map((_, levelIndex) => (
                      <span
                        key={levelIndex}
                        className={`h-2 rounded-sm ${
                          levelIndex < getProficiencyLevel(tech.proficiency)
                            ? levelIndex === getProficiencyLevel(tech.proficiency) - 1
                              ? "bg-amber-500 dark:bg-amber-300"
                              : "bg-emerald-700 dark:bg-sky-300"
                            : "bg-zinc-950/10 dark:bg-white/10"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
