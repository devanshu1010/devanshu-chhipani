import React, { useState } from "react";
import { Server, Cpu, Database, Layout, ShieldCheck, Terminal, Layers } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { usePersona } from "../context/PersonaContext";

interface StackCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  technologies: { name: string; tag: string }[];
}

const seCategories: StackCategory[] = [
  {
    title: "Backend Core & Systems",
    subtitle: "High-throughput APIs and strongly-typed architecture",
    icon: <Server className="w-4 h-4 text-emerald-500" />,
    technologies: [
      { name: "ASP.NET Core 8", tag: "Enterprise Core" },
      { name: "C#", tag: "Type Safety" },
      { name: "FastAPI", tag: "Async Microservices" },
      { name: "REST & RPC", tag: "Strict Contracts" },
      { name: "Kestrel", tag: "HTTP/3 Engine" },
      { name: "RBAC Systems", tag: "Granular Auth" }
    ]
  },
  {
    title: "Data Persistence & WAL",
    subtitle: "Relational normalization and low-latency storage engines",
    icon: <Database className="w-4 h-4 text-emerald-500" />,
    technologies: [
      { name: "PostgreSQL 16", tag: "Primary DB" },
      { name: "Entity Framework", tag: "ORM / Migrations" },
      { name: "JSONB Indexing", tag: "Dynamic Schemas" },
      { name: "SignalR", tag: "Duplex WebSockets" },
      { name: "Connection Pools", tag: "PgBouncer" },
      { name: "Index Tuning", tag: "p99 Focused" }
    ]
  },
  {
    title: "System Execution & Ingress",
    subtitle: "High-concurrency packet filtering and resilient runtime",
    icon: <Layers className="w-4 h-4 text-emerald-500" />,
    technologies: [
      { name: "Docker", tag: "Containers" },
      { name: "Linux / POSIX", tag: "Runtime Target" },
      { name: "Reverse Proxy", tag: "Nginx / Envoy" },
      { name: "DAG Solver", tag: "Dependency Check" },
      { name: "CI/CD Actions", tag: "Automated Tests" },
      { name: "Git", tag: "Version Tree" }
    ]
  },
  {
    title: "Client Interfaces",
    subtitle: "Reactive frontends consuming strongly-typed endpoints",
    icon: <Layout className="w-4 h-4 text-emerald-500" />,
    technologies: [
      { name: "React 18", tag: "Component Tree" },
      { name: "TypeScript", tag: "Strict Types" },
      { name: "Next.js", tag: "SSR & Static" },
      { name: "Tailwind CSS", tag: "Design Tokens" },
      { name: "GSAP", tag: "Motion Engine" },
      { name: "Lenis", tag: "Inertial Scroll" }
    ]
  }
];

const aiCategories: StackCategory[] = [
  {
    title: "Vector Embeddings & Indices",
    subtitle: "Dense representation spaces and hybrid lexical search",
    icon: <Database className="w-4 h-4 text-cyan-500" />,
    technologies: [
      { name: "ChromaDB", tag: "Vector Index" },
      { name: "PGVector", tag: "Relational Search" },
      { name: "BM25 Ranking", tag: "Lexical Match" },
      { name: "768-D Manifold", tag: "Dense Vectors" },
      { name: "Cosine Metric", tag: "Similarity Score" },
      { name: "HNSW Graphs", tag: "Approx Nearest" }
    ]
  },
  {
    title: "Inference & Compute Engines",
    subtitle: "Accelerated model serving and memory optimization",
    icon: <Cpu className="w-4 h-4 text-cyan-500" />,
    technologies: [
      { name: "Groq LPU", tag: "Sub-50ms Inference" },
      { name: "FlashAttention-2", tag: "IO-Aware Attention" },
      { name: "CUDA & TensorRT", tag: "GPU Execution" },
      { name: "FP8 Quantization", tag: "Memory Reduction" },
      { name: "Speculative Sampling", tag: "Token Speedup" },
      { name: "Paged KV Cache", tag: "Memory Bank" }
    ]
  },
  {
    title: "Research Frameworks & Pip",
    subtitle: "Deep learning models, tokenizers, and orchestration",
    icon: <Server className="w-4 h-4 text-cyan-500" />,
    technologies: [
      { name: "PyTorch", tag: "Core Tensors" },
      { name: "FastAPI", tag: "Inference Server" },
      { name: "Hugging Face", tag: "Transformers" },
      { name: "BPE Tokenizers", tag: "Vocab 32k" },
      { name: "LangChain / LCEL", tag: "Chain Orchestration" },
      { name: "Python 3.11", tag: "Research Runtime" }
    ]
  },
  {
    title: "Evaluation & Alignment Guard",
    subtitle: "Adversarial defense and empirical benchmarking",
    icon: <ShieldCheck className="w-4 h-4 text-cyan-500" />,
    technologies: [
      { name: "Jailbreak Defense", tag: "Prompt Injection" },
      { name: "Recall@K Metrics", tag: "Retrieval Quality" },
      { name: "BLEU & ROUGE", tag: "Text Evaluation" },
      { name: "Edge TPU / TFLite", tag: "IoT Quantization" },
      { name: "Logit Filtering", tag: "Output Constraint" },
      { name: "Benchmarking Harness", tag: "Empirical Proof" }
    ]
  }
];

const TechStack: React.FC = () => {
  const { persona } = usePersona();
  const categories = persona === 'se' ? seCategories : aiCategories;
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="stack" className="relative py-28 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-left">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-[11px] uppercase font-mono text-emerald-600 dark:text-cyan-400 mb-2 tracking-[0.2em] font-semibold">
                STAGE 04: TOOLCHAIN &amp; RUNTIME STACK
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                {persona === 'se' ? 'Infrastructure & Systems Stack' : 'Vector & Machine Learning Compute'}
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
              Categorized by engineering tier and runtime role
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <FadeUp key={cat.title} delay={idx * 80}>
              {/* Outer Shell */}
              <div
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className="p-1.5 sm:p-2 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-lg h-full transition-all"
              >
                {/* Inner Core */}
                <div
                  className={`p-6 sm:p-7 rounded-[calc(2rem-0.5rem)] border h-full flex flex-col justify-between transition-colors ${
                    activeCategory === idx
                      ? 'bg-zinc-50/90 dark:bg-[#121212] border-black/20 dark:border-white/20'
                      : 'bg-white dark:bg-[#0c0c0c] border-black/[0.06] dark:border-white/[0.06]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
                        {cat.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {cat.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]"
                        >
                          <div className="font-medium text-xs text-zinc-800 dark:text-zinc-200 truncate">
                            {tech.name}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                            {tech.tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
