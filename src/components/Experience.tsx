import React from "react";
import { usePersona } from "../context/PersonaContext";
import { Server, GraduationCap, Briefcase, Zap } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  technologies: string;
  summary: string;
  stats: string;
}

const seExperiences: ExperienceItem[] = [
  {
    period: "2025 - Present",
    company: "Silver Touch Technologies Ltd",
    role: "Software Engineer",
    technologies: "ASP.NET Core 8, EF Core, PostgreSQL, SignalR, React, Next.js, Tailwind CSS",
    summary: "Engineering low-code form generation, sub-workflow automation pipelines with Kahn DAG circular dependency checks, route/action-level RBAC, and SignalR real-time vendor notification engines.",
    stats: "100+ schemas · sub-30ms p99"
  },
  {
    period: "2024",
    company: "Swaroop.ai",
    role: "Full Stack Intern",
    technologies: "Next.js, Node.js, FastAPI, Clerk Authentication, WebSockets",
    summary: "Reduced network overhead and latency by ~40% by migrating repeated HTTP polling into real-time duplex WebSockets. Developed foundational Node.js and FastAPI endpoints.",
    stats: "~40% latency reduction"
  }
];

const aiExperiences: ExperienceItem[] = [
  {
    period: "2024 - Present",
    company: "BITS Pilani",
    role: "M.Tech AI/ML Researcher",
    technologies: "PyTorch, ChromaDB, FastAPI, Groq LPU, BM25, CUDA, Python",
    summary: "Conducting post-graduate research on dense vector representations, hybrid lexical-semantic retrieval architectures, and evaluation benchmarks for LLM alignment.",
    stats: "0.94 Recall@5 · 45ms latency"
  },
  {
    period: "2024",
    company: "Swaroop.ai",
    role: "AI & Full Stack Intern",
    technologies: "FastAPI, Vector Pipelines, WebSockets, Python, Next.js",
    summary: "Engineered streaming API endpoints for conversational responses, orchestrating prompt parsing pipelines and asynchronous real-time client socket feeds.",
    stats: "Real-time streaming pipeline"
  }
];

const Experience: React.FC = () => {
  const { persona } = usePersona();
  const experiences = persona === 'se' ? seExperiences : aiExperiences;

  return (
    <section id="experience" className="relative py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-left">
        <div className="flex flex-col mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-400 font-semibold mb-2">
            {persona === 'se' ? 'STAGE 05: PRODUCTION TRACE & INCIDENTS LOG' : 'STAGE 05: TRAINING MILESTONES & RESEARCH TRACK'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
            {persona === 'se' ? 'Engineering Track Record' : 'Research Milestones & Experience'}
          </h2>
        </div>

        {/* Outer Double-Bezel Shell with Spotlight */}
        <SpotlightCard innerClassName="p-6 sm:p-8">
            <div className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8"
                >
                  <div className="w-36 text-zinc-500 dark:text-zinc-400 text-xs font-mono shrink-0">
                    <span className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 inline-block">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <div className="text-[17px] font-semibold text-zinc-950 dark:text-zinc-50">
                        {exp.company} <span className="text-zinc-400 dark:text-zinc-600 font-normal mx-1">/</span> <span className="font-medium text-zinc-700 dark:text-zinc-300">{exp.role}</span>
                      </div>
                      <span className={`text-[11px] font-mono font-medium ${persona === 'se' ? 'text-emerald-600 dark:text-emerald-400' : 'text-cyan-600 dark:text-cyan-400'}`}>
                        {exp.stats}
                      </span>
                    </div>

                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-2">
                      {exp.technologies}
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl font-normal">
                      {exp.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Experience;