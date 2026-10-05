import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
}

const featuredProject: ProjectItem = {
  title: "InsightMesh — AI & Semantic Technical Retrieval Engine",
  category: "AI/ML & Information Retrieval · Personal Project",
  description: "A multi-stage pipeline combining deduplication, lightweight technical filtering, Groq-based LLM classification, and ChromaDB vector search to isolate high-value technical intelligence from noise.",
  technologies: ["Python", "FastAPI", "ChromaDB", "Groq API", "RAG", "Vector Embeddings", "REST APIs"],
  link: "https://github.com/devanshu1010"
};

const secondaryProjects: ProjectItem[] = [
  {
    title: "Dynamic Form Generator & Workflow Automation Platform",
    category: "Silver Touch Technologies Ltd",
    description: "Low-code orchestration engine for dynamic forms, custom tables, nested sub-workflows with circular dependency validation, and granular RBAC permissions.",
    technologies: ["ASP.NET Core", "EF Core", "PostgreSQL", "Next.js", "Tailwind CSS", "RBAC"]
  },
  {
    title: "Enterprise Vendor Portal & Real-Time Notification Hub",
    category: "Silver Touch Technologies Ltd",
    description: "Centralized backend APIs with SignalR-based notification streaming, persistent read tracking, automated vendor approvals, and optimized PostgreSQL queries.",
    technologies: ["ASP.NET Core", "SignalR", "PostgreSQL", "React", "Next.js", "Stored Procedures"]
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-12">
          Selected Work
        </h2>

        <div className="space-y-8">
          {/* Featured Project matching wireframe */}
          <div className="bg-white dark:bg-[#111111] rounded-[12px] p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.08] w-full group transition-colors hover:bg-zinc-50/80 dark:hover:bg-[#161616]">
            {/* Browser Frame Window with active preview skeleton */}
            <div className="w-full h-[280px] sm:h-[380px] bg-zinc-50 dark:bg-[#0a0a0a] border border-black/[0.08] dark:border-white/[0.08] rounded-lg mb-6 flex flex-col overflow-hidden relative group/frame">
              {/* Browser Header */}
              <div className="h-10 border-b border-black/[0.06] dark:border-white/[0.08] bg-zinc-100 dark:bg-[#141414] flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 ml-2">insightmesh.internal/rag</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-blue-600 dark:text-blue-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Simulated UI Skeleton with subtle data flow */}
              <div className="flex-1 p-6 flex flex-col justify-between font-mono text-xs text-zinc-500 dark:text-zinc-400">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] pb-2 text-[11px]">
                    <span className="text-zinc-700 dark:text-zinc-300">&gt; ChromaDB Vector Collection</span>
                    <span className="text-blue-600 dark:text-blue-400">1,536-dim embeddings</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="h-14 rounded border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-zinc-400">Deduplication</span>
                      <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs">99.4% Unique</span>
                    </div>
                    <div className="h-14 rounded border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-zinc-400">LLM Filtering</span>
                      <span className="text-zinc-800 dark:text-zinc-200 font-semibold text-xs">Groq Llama-3</span>
                    </div>
                    <div className="h-14 rounded border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-2 flex flex-col justify-between">
                      <span className="text-[10px] text-zinc-400">Query Latency</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs">~42ms</span>
                    </div>
                  </div>
                </div>

                <div className="rounded border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] p-3 text-[11px] text-zinc-600 dark:text-zinc-300">
                  <span className="text-blue-500 mr-2">$</span>
                  <span>GET /api/v1/search?query=workflow-acyclic-graphs&amp;top_k=5</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="max-w-3xl">
                <div className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 mb-1 tracking-wider">
                  {featuredProject.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-100 mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/50 border border-black/[0.06] dark:border-white/[0.08] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {featuredProject.link && (
                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1 font-mono text-xs uppercase tracking-wider shrink-0"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* 2-Column Grid for smaller projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111111] rounded-[12px] p-5 sm:p-6 border border-black/[0.08] dark:border-white/[0.08] group transition-colors hover:bg-zinc-50/80 dark:hover:bg-[#161616]"
              >
                <div className="w-full h-[200px] sm:h-[220px] bg-zinc-100 dark:bg-[#0a0a0a] border border-black/[0.06] dark:border-white/[0.08] rounded-lg mb-5 flex flex-col overflow-hidden">
                  <div className="h-8 border-b border-black/[0.06] dark:border-white/[0.08] bg-zinc-200/50 dark:bg-[#111111] flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-mono text-xs">
                    Enterprise System Preview
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 mb-1">
                      {proj.category}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-100 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/50 border border-black/[0.06] dark:border-white/[0.08] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

