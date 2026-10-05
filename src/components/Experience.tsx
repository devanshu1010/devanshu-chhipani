import React from "react";

interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  technologies: string;
  summary: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "2025 — Present",
    company: "Silver Touch Technologies Ltd",
    role: "Software Engineer",
    technologies: "ASP.NET Core, Entity Framework Core, PostgreSQL, SignalR, React, Next.js, Tailwind CSS",
    summary: "Engineering low-code form generation, sub-workflow automation pipelines with circular dependency checks, route/action-level RBAC, and SignalR real-time vendor notification engines."
  },
  {
    period: "2024",
    company: "Swaroop.ai",
    role: "Full Stack Intern",
    technologies: "Next.js, Node.js, FastAPI, Clerk Authentication, WebSockets",
    summary: "Reduced network overhead and latency by ~40% by migrating repeated HTTP polling into real-time duplex WebSockets. Developed foundational Node.js & FastAPI endpoints."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-12">
          Experience
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="py-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-sm"
            >
              <div className="w-36 text-zinc-500 dark:text-zinc-400 text-sm font-mono shrink-0">
                {exp.period}
              </div>
              <div className="flex-1">
                <div className="text-[17px] sm:text-[18px] font-medium text-zinc-950 dark:text-zinc-100 mb-1">
                  {exp.company} <span className="text-zinc-400 dark:text-zinc-600 font-normal mx-1">·</span> {exp.role}
                </div>
                <div className="text-[13px] text-blue-600 dark:text-blue-400 font-mono mb-2">
                  {exp.technologies}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                  {exp.summary}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border on last item */}
          <div className="border-b border-black/[0.08] dark:border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
};

export default Experience;