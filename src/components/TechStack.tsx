import React, { useState } from "react";
import { Server, Cpu, Database, Layout } from "lucide-react";
import { FadeUp } from "./FadeUp";

interface StackCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  technologies: { name: string; tag: string }[];
}

const categories: StackCategory[] = [
  {
    title: "Backend & Systems",
    subtitle: "High-throughput APIs & strongly-typed enterprise architecture",
    icon: <Server className="w-4 h-4 text-blue-500" />,
    technologies: [
      { name: "ASP.NET Core 8", tag: "Primary Enterprise" },
      { name: "C#", tag: "Strong Typing" },
      { name: "FastAPI", tag: "AI Microservices" },
      { name: "Python", tag: "Data & ML" },
      { name: "REST APIs", tag: "Contract-First" },
      { name: "RBAC Systems", tag: "Granular Auth" }
    ]
  },
  {
    title: "AI & Semantic Retrieval",
    subtitle: "Vector embeddings, RAG pipelines & accelerated inference",
    icon: <Cpu className="w-4 h-4 text-purple-500" />,
    technologies: [
      { name: "ChromaDB", tag: "Vector Index" },
      { name: "RAG Architecture", tag: "Hybrid Search" },
      { name: "Groq LLaMA-3", tag: "Sub-50ms Inference" },
      { name: "Vector Embeddings", tag: "Dense Representation" },
      { name: "Semantic Reranking", tag: "Reciprocal Rank" }
    ]
  },
  {
    title: "Data & Real-Time Hubs",
    subtitle: "Relational persistence, JSONB schemas & WebSocket streams",
    icon: <Database className="w-4 h-4 text-emerald-500" />,
    technologies: [
      { name: "PostgreSQL", tag: "Primary DB" },
      { name: "Entity Framework Core", tag: "ORM / Migrations" },
      { name: "JSONB Indexing", tag: "Dynamic Schemas" },
      { name: "SignalR", tag: "Real-time Sockets" },
      { name: "Stored Procedures", tag: "Batch Performance" }
    ]
  },
  {
    title: "Interfaces & Infrastructure",
    subtitle: "Type-safe reactive frontends & reproducible containerization",
    icon: <Layout className="w-4 h-4 text-amber-500" />,
    technologies: [
      { name: "React", tag: "UI Components" },
      { name: "TypeScript", tag: "End-to-End Types" },
      { name: "Next.js", tag: "SSR & Static Pages" },
      { name: "Tailwind CSS", tag: "Design Tokens" },
      { name: "Docker", tag: "Containers" },
      { name: "Git", tag: "Version Control" }
    ]
  }
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="stack" className="relative py-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-[11px] uppercase font-mono text-blue-600 dark:text-blue-400 mb-2 tracking-[0.2em] font-medium">
                SYSTEM CAPABILITIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                Technical Stack & Architecture
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
              Categorized by engineering tier & system role
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <FadeUp key={cat.title} delay={idx * 100}>
              <div
                onMouseEnter={() => setActiveCategory(idx)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`p-6 rounded-xl border transition-all h-full ${
                  activeCategory === idx
                    ? 'bg-zinc-50/80 dark:bg-[#141414] border-black/20 dark:border-white/20 shadow-xs'
                    : 'bg-white dark:bg-[#111111] border-black/[0.08] dark:border-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="p-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    {cat.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed font-sans">
                  {cat.subtitle}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-lg bg-zinc-50 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.06] hover:border-blue-500/40 transition-colors"
                    >
                      <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                        {tech.name}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                        {tech.tag}
                      </div>
                    </div>
                  ))}
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
