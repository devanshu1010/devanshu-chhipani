import { Activity, Code, Database, Layers, Wrench } from "lucide-react";
import { useState } from "react";

const techCategories = [
  {
    category: "Interface Engineering",
    icon: Code,
    blurb: "How I shape what users actually touch — components, state, motion, and accessibility.",
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
    blurb: "Servers, schemas, and APIs designed for clear contracts and predictable failure modes.",
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
    blurb: "Pipelines, environments, and design tooling that keep shipping calm and repeatable.",
    technologies: [
      { name: "Git", signal: "VC", proficiency: "Expert" },
      { name: "Docker", signal: "CI", proficiency: "Intermediate" },
      { name: "AWS", signal: "CL", proficiency: "Intermediate" },
      { name: "Vercel", signal: "CD", proficiency: "Advanced" },
      { name: "Figma", signal: "DX", proficiency: "Advanced" },
    ],
  },
];

const proficiencyMap: Record<string, number> = {
  Expert: 5,
  Advanced: 4,
  Intermediate: 3,
  Beginner: 2,
};

const TechStack = () => {
  const [selected, setSelected] = useState(0);
  const active = techCategories[selected];

  return (
    <section
      id="tech"
      className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/[0.05] px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-indigo-600 dark:border-indigo-400/25 dark:bg-indigo-400/[0.05] dark:text-indigo-400">
            <Layers className="h-3.5 w-3.5" />
            Stack map
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Tools chosen for shipping,
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">wired into one system.</span>
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300 lg:col-start-2">
            A compact view of the technologies I reach for to turn ambiguous product ideas into stable interfaces, APIs, and deployment flows.
          </p>
        </div>

        {/* Layout: left rail tabs + right canvas */}
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          {/* Tab rail */}
          <div className="flex flex-col gap-2">
            {techCategories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = selected === i;
              return (
                <button
                  key={cat.category}
                  onClick={() => setSelected(i)}
                  className={`group flex items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-indigo-500/35 bg-indigo-500/[0.05] dark:border-indigo-400/35 dark:bg-indigo-400/[0.05]"
                      : "border-black/8 bg-transparent hover:border-indigo-500/20 hover:bg-indigo-500/[0.03] dark:border-white/8 dark:hover:border-indigo-400/20 dark:hover:bg-indigo-400/[0.03]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-zinc-950"
                          : "bg-black/5 text-zinc-700 group-hover:bg-indigo-500/12 group-hover:text-indigo-600 dark:bg-white/5 dark:text-zinc-300 dark:group-hover:bg-indigo-400/12 dark:group-hover:text-indigo-400"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">{cat.category}</span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        {cat.technologies.length} tools
                      </span>
                    </span>
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      isActive ? "bg-indigo-500 dark:bg-indigo-400" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Canvas */}
          <div className="relative rounded-2xl border border-black/8 bg-white/40 p-6 dark:border-white/8 dark:bg-white/[0.02] sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-black/8 pb-6 dark:border-white/8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Active layer
                </p>
                <h3 className="mt-1 text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                  {active.category}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600 dark:text-zinc-400">{active.blurb}</p>
              </div>
              <span className="hidden items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.05] px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-600 dark:border-cyan-400/25 dark:bg-cyan-400/[0.05] dark:text-cyan-400 sm:inline-flex">
                <Activity className="h-3 w-3" />
                live
              </span>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {active.technologies.map((tech) => {
                const level = proficiencyMap[tech.proficiency] ?? 3;
                return (
                  <li
                    key={tech.name}
                    className="group/item relative flex flex-col gap-4 rounded-xl border border-black/6 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/30 dark:border-white/8 dark:bg-white/[0.03] dark:hover:border-indigo-400/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 font-mono text-[10px] font-bold text-white dark:bg-white dark:text-zinc-950">
                          {tech.signal}
                        </span>
                        <span className="text-base font-semibold text-zinc-950 dark:text-white">{tech.name}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        {tech.proficiency}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            i < level
                              ? "bg-indigo-500 dark:bg-indigo-400"
                              : "bg-black/8 dark:bg-white/8"
                          }`}
                        />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
