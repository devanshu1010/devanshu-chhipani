import React from "react";
import { BookOpen, GraduationCap, Briefcase, Zap, Terminal, Database, Cpu } from "lucide-react";
import { usePersona } from "../context/PersonaContext";

const seStats = [
  { value: "4+ Years", label: "Backend Engineering", detail: "High-Throughput Systems" },
  { value: ".NET 8 + PG", label: "Enterprise Stack", detail: "Silver Touch Core" },
  { value: "100+ Schemas", label: "Dynamic Form Engine", detail: "DAG Dependency Solver" },
  { value: "B.Tech CE", label: "DDU Nadiad", detail: "First Class Distinction" }
];

const aiStats = [
  { value: "M.Tech AI/ML", label: "BITS Pilani", detail: "Post-Graduate Research" },
  { value: "768-D Space", label: "Vector Search", detail: "InsightMesh Engine" },
  { value: "<45ms", label: "Inference Latency", detail: "FastAPI + Groq LPU" },
  { value: "0.94 Recall", label: "Hybrid BM25 + Dense", detail: "Semantic Benchmark" }
];

const seNowItems = [
  {
    icon: <Briefcase className="w-3.5 h-3.5 text-emerald-500" />,
    label: "ENGINEERING",
    text: "Building dynamic form engines and RBAC authorization in ASP.NET Core and PostgreSQL at Silver Touch."
  },
  {
    icon: <Database className="w-3.5 h-3.5 text-blue-500" />,
    label: "PERSISTENCE",
    text: "Tuning JSONB relational indexing, connection pooling, and sub-30ms p99 query latency."
  },
  {
    icon: <BookOpen className="w-3.5 h-3.5 text-purple-500" />,
    label: "SYSTEMS STUDY",
    text: "Designing Data-Intensive Applications (Martin Kleppmann) and PostgreSQL storage internals."
  }
];

const aiNowItems = [
  {
    icon: <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />,
    label: "RESEARCH",
    text: "M.Tech candidate in AI/ML at BITS Pilani, investigating neural information retrieval, embeddings, and attention."
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-amber-500" />,
    label: "PROJECT",
    text: "Benchmarking InsightMesh semantic retrieval engine using hybrid dense ChromaDB vectors and BM25 rankers."
  },
  {
    icon: <Cpu className="w-3.5 h-3.5 text-indigo-500" />,
    label: "LITERATURE",
    text: "Studying FlashAttention-2 IO complexity, speculative decoding, and RLHF alignment methodologies."
  }
];

const About: React.FC = () => {
  const { persona } = usePersona();
  const stats = persona === 'se' ? seStats : aiStats;
  const nowItems = persona === 'se' ? seNowItems : aiNowItems;

  return (
    <section id="about" className="relative py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-left">
        <div className="text-[11px] uppercase font-mono text-emerald-600 dark:text-cyan-400 mb-2 tracking-[0.2em] font-semibold">
          {persona === 'se' ? 'STAGE 02: KERNEL & DISTRIBUTED THESIS' : 'STAGE 02: KNOWLEDGE MANIFOLD & RESEARCH THESIS'}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50 mb-12">
          {persona === 'se'
            ? 'Engineering deterministic backends for enterprise scale.'
            : 'Investigating representation geometry and semantic retrieval.'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative & Focus Desk (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {persona === 'se' ? (
                <>
                  <p>
                    I am a software engineer based in Ahmedabad, India. My practice focuses on backend infrastructure, database optimization, and high-concurrency API architectures.
                  </p>
                  <p>
                    At <span className="text-zinc-950 dark:text-zinc-200 font-medium">Silver Touch Technologies Ltd</span>, I architect enterprise backend modules for dynamic form generation, multi-stage approval automation, and granular role-based access control (RBAC) using ASP.NET Core and PostgreSQL.
                  </p>
                  <p>
                    I prioritize type safety, relational normalization, and predictable execution latency over superficial shortcuts. Clean schemas and resilient contracts always come first.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I am an applied AI researcher and engineer. My academic focus at <span className="text-zinc-950 dark:text-zinc-200 font-medium">BITS Pilani (M.Tech AI/ML)</span> explores high-dimensional latent representations and semantic vector discovery.
                  </p>
                  <p>
                    In my research, I develop hybrid retrieval pipelines fusing dense vector embeddings with lexical BM25 reranking, yielding sub-45ms responses in systems like <span className="text-zinc-950 dark:text-zinc-200 font-medium">InsightMesh</span>.
                  </p>
                  <p>
                    My goal is designing verifiable inference channels where agentic reasoning and domain retrieval perform reliably under production load.
                  </p>
                </>
              )}
            </div>

            {/* "Now" Status Desk (Double-Bezel Shell) */}
            <div className="p-1.5 sm:p-2 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-lg">
              <div className="rounded-[calc(2rem-0.5rem)] bg-white dark:bg-[#0c0c0c] border border-black/[0.06] dark:border-white/[0.06] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 font-semibold">
                      Current Engineering Focus
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/40">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3.5">
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
          </div>

          {/* Right Column: Editorial Portrait & Stats Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Authentic Portrait in Double-Bezel Frame */}
            <div className="p-1.5 sm:p-2 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-xl">
              <div className="rounded-[calc(2rem-0.5rem)] overflow-hidden bg-zinc-950 relative aspect-[4/3]">
                <img
                  src="/profile/image4.jpg"
                  alt="Devanshu Chhipani"
                  className="w-full h-full object-cover object-center filter grayscale contrast-[1.08] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span className="font-semibold">Devanshu Chhipani</span>
                  <span className="text-white/60">{persona === 'se' ? 'Systems Focus' : 'Research Focus'}</span>
                </div>
              </div>
            </div>

            {/* 2x2 Metric Stats in Double-Bezel Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.02] border border-black/10 dark:border-white/10"
                >
                  <div className="rounded-[calc(1rem-0.25rem)] bg-white dark:bg-[#0c0c0c] p-4 border border-black/[0.04] dark:border-white/[0.04] h-full flex flex-col justify-between">
                    <div>
                      <div className="text-xl font-semibold text-zinc-950 dark:text-zinc-100 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-2">
                      {stat.detail}
                    </div>
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
