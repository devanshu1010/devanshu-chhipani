import React from "react";
import { BookOpen, GraduationCap, Briefcase, Zap, Terminal } from "lucide-react";

const stats = [
  { value: "4+ Years", label: "Software Engineering", detail: "Enterprise & Modern Web" },
  { value: "M.Tech AI/ML", label: "BITS Pilani", detail: "Post-Graduate Research" },
  { value: "100+ Forms", label: "Dynamic Form Engine", detail: "Silver Touch Low-Code" },
  { value: "B.Tech CE", label: "DDU Nadiad", detail: "First Class with Distinction" }
];

const nowItems = [
  {
    icon: <Briefcase className="w-3.5 h-3.5 text-blue-500" />,
    label: "ENGINEERING",
    text: "Building dynamic form engines & RBAC authorization in ASP.NET Core & PostgreSQL at Silver Touch."
  },
  {
    icon: <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />,
    label: "RESEARCH",
    text: "M.Tech candidate in AI/ML at BITS Pilani, studying neural information retrieval, embeddings & deep learning."
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-amber-500" />,
    label: "PROJECT",
    text: "Benchmarking InsightMesh semantic retrieval engine using hybrid dense ChromaDB vectors + BM25."
  },
  {
    icon: <BookOpen className="w-3.5 h-3.5 text-purple-500" />,
    label: "READING",
    text: "Designing Data-Intensive Applications (Martin Kleppmann) & PostgreSQL Internals."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-[11px] uppercase font-mono text-blue-600 dark:text-blue-400 mb-3 tracking-[0.2em] font-medium">
          ENGINEERING BACKGROUND
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50 mb-12">
          Bridging enterprise backends with modern intelligence.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & "Now" Desk (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              <p>
                I am a software engineer based in Ahmedabad, Gujarat, India. My day-to-day focus centers on backend infrastructure, database optimization, and scalable distributed APIs.
              </p>
              <p>
                At <span className="text-zinc-950 dark:text-zinc-200 font-medium">Silver Touch Technologies Ltd</span>, I architect backend modules for dynamic form generation, multi-stage workflow approval pipelines, and granular role-based access control (RBAC) using ASP.NET Core and PostgreSQL. I design relational models and JSONB schemas that allow non-technical administrators to configure complex business processes without code deployments.
              </p>
              <p>
                Concurrently, I am pursuing my <span className="text-zinc-950 dark:text-zinc-200 font-medium">M.Tech in AI & Machine Learning at BITS Pilani</span>. My academic focus explores dense vector retrieval, semantic search systems, and high-throughput LLM pipelines—the foundations behind <span className="text-zinc-950 dark:text-zinc-200 font-medium">InsightMesh</span>.
              </p>
            </div>

            {/* "Now" Status Box (Human, Personal Engineering Reality) */}
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-semibold">
                    Current Focus & Status
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/40">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-3">
                {nowItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <span className="font-mono text-[10px] uppercase text-zinc-400 dark:text-zinc-500 mr-2">
                        [{item.label}]
                      </span>
                      <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait & Stats Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Authentic Portrait in Minimal Editorial Frame */}
            <div className="relative rounded-xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-zinc-100 dark:bg-[#111111] p-2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900">
                <img
                  src="/profile/image4.jpg"
                  alt="Devanshu Chhipani"
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span>Devanshu Chhipani</span>
                  <span className="text-white/60">Ahmedabad, IN</span>
                </div>
              </div>
            </div>

            {/* 2x2 Metric Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111111] rounded-lg p-4 border border-black/[0.08] dark:border-white/[0.08]"
                >
                  <div className="text-xl font-semibold text-zinc-950 dark:text-zinc-100 mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                    {stat.detail}
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

export default About;
