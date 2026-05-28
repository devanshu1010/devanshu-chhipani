import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Computer Engineer",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=128&q=80",
    start: "Nov 25, 2024",
    end: "",
    present: true,
    description:
      "Developed and maintained dynamic, user-centric web apps for top organizations and government agencies using React, TypeScript, and modern development practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    company: "Paydestal",
    position: "Computer Engineer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "Jan 8, 2025",
    present: false,
    description:
      "Built fintech dashboards, integrated APIs, and optimized product journeys for usability, security, and compliance-minded workflows.",
    technologies: ["React", "Next.js", "TailwindCSS", "REST APIs"],
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=128&q=80",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description:
      "Created interactive and practical guides on Next.js, TypeScript, and React for thousands of developers worldwide.",
    technologies: ["Next.js", "TypeScript", "React", "Technical Writing"],
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=128&q=80",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description:
      "Wrote technical articles on JavaScript frameworks for a global audience, reaching over 100k readers monthly.",
    technologies: ["JavaScript", "React", "Vue.js", "Content Creation"],
  },
];

function formatDate(str: string) {
  if (!str) return "";
  const d = new Date(str);
  if (Number.isNaN(d.getTime())) return str.toUpperCase();

  return d
    .toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/,/g, "");
}

interface ExperienceCardProps {
  exp: (typeof experienceData)[0];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative mb-10 sm:mb-14 md:mb-16">
      <div className="absolute left-0 top-6 z-10">
        <div className="h-3 w-3 border-2 border-zinc-950 bg-cyan-600 dark:border-white dark:bg-cyan-400"></div>
        <div className="absolute left-1/2 top-3 h-28 w-px -translate-x-px bg-zinc-950/20 dark:bg-white/20 sm:h-36"></div>
      </div>

      <div className="ml-9 sm:ml-11">
        <div className="group flex w-full flex-col rounded-lg border border-black/10 bg-[#ffffff]/85 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-indigo-400/30 sm:p-5 md:p-6">
          <div className="mb-3 flex items-start gap-3">
            <div className="relative flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="h-11 w-11 rounded-md border border-zinc-950/15 object-cover dark:border-white/10"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-bold text-zinc-950 dark:text-white">{exp.company}</h3>
                  <p className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300">{exp.position}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400">0{index + 1}</span>
              </div>

              <p className="font-mono text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                {formatDate(exp.start)} -{" "}
                {exp.present ? (
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">PRESENT</span>
                ) : (
                  formatDate(exp.end)
                )}
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className={`overflow-hidden text-sm leading-relaxed text-zinc-700 transition-all duration-300 ease-in-out dark:text-zinc-300 ${
                isExpanded ? "max-h-72" : "max-h-16"
              }`}
            >
              <p>{exp.description}</p>
            </div>

            {!isExpanded && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#ffffff] to-transparent dark:from-[#151716]"></div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center gap-1 font-mono text-xs font-medium uppercase text-indigo-600 transition-colors duration-200 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {isExpanded ? "Show less" : "Read more"}
              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-black/8 bg-[#fafafa] px-2 py-1 font-mono text-[10px] font-medium uppercase text-zinc-700 transition-colors group-hover:border-indigo-500/25 group-hover:bg-indigo-500/[0.06] dark:border-white/10 dark:bg-white/10 dark:text-zinc-300 dark:group-hover:border-indigo-400/30 dark:group-hover:bg-indigo-400/[0.06] sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section-y relative overflow-hidden">
      <div className="container-page relative">
        <div className="mb-12 grid gap-5 md:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="font-mono text-xs uppercase text-indigo-600 dark:text-indigo-400">Work log</p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl">
            Built in teams where interfaces have to <span className="text-indigo-600 dark:text-indigo-400">earn trust.</span>
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            A timeline of computer engineering work, technical writing, and developer education across AI, fintech, and learning platforms.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              {experienceData.map((exp, index) => (index % 2 === 0 ? <ExperienceCard key={exp.company} exp={exp} index={index} /> : null))}
            </div>
            <div className="lg:mt-32">
              {experienceData.map((exp, index) => (index % 2 === 1 ? <ExperienceCard key={exp.company} exp={exp} index={index} /> : null))}
            </div>
          </div>
        </div>

        <div className="space-y-6 md:hidden">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;