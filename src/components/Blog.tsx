import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";
import SpotlightCard from "./SpotlightCard";

interface ArticleItem {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const seArticles: ArticleItem[] = [
  {
    title: "Engineering Enterprise Workflow Engines with ASP.NET Core & EF Core",
    excerpt: "Architectural strategies for dynamic form modeling, sub-workflow acyclic graphs, and multi-tenant RBAC enforcement.",
    date: "Jan 2025",
    readTime: "8 min read",
    slug: "building-scalable-react-applications"
  },
  {
    title: "Real-Time Systems at Scale: From HTTP Polling to WebSockets & SignalR",
    excerpt: "How streaming duplex sockets cut network latency by 40% and eliminate persistent server connection exhaustion.",
    date: "Oct 2024",
    readTime: "6 min read",
    slug: "typescript-best-practices"
  }
];

const aiArticles: ArticleItem[] = [
  {
    title: "Designing RAG Pipelines with ChromaDB, Vector Embeddings & FastAPI",
    excerpt: "Practical lessons on chunking strategies, heuristic keyword gating before LLM inference, and low-latency semantic indexing.",
    date: "Dec 2024",
    readTime: "7 min read",
    slug: "modern-css-techniques"
  },
  {
    title: "Adversarial Prompt Injection Defense at the Endpoint Layer",
    excerpt: "Investigating semantic token logit filtering and input classification heuristics to guard LLM inference channels.",
    date: "Nov 2024",
    readTime: "9 min read",
    slug: "typescript-best-practices"
  }
];

const Blog: React.FC = () => {
  const { persona } = usePersona();
  const articles = persona === 'se' ? seArticles : aiArticles;

  return (
    <section id="writing" className="relative py-28 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-left">
        <div className="flex flex-col mb-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-400 font-semibold mb-2">
            {persona === 'se' ? 'STAGE 06: ARCHITECTURE RFCS & POST-MORTEMS' : 'STAGE 06: RESEARCH PREPRINTS & BENCHMARKS'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50">
            {persona === 'se' ? 'Technical RFCs & Systems Writing' : 'Machine Learning Preprints & Notes'}
          </h2>
        </div>

        <SpotlightCard innerClassName="p-6 sm:p-8">
          <div className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
            {articles.map((art, idx) => (
              <Link
                key={idx}
                to={`/blog/${art.slug}`}
                className="group py-6 first:pt-0 last:pb-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-colors"
              >
                <div className="max-w-2xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-50 mb-2 group-hover:text-emerald-600 dark:group-hover:text-cyan-400 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                    {art.date} / {art.readTime}
                  </div>
                </div>

                <div className="p-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-emerald-500/10 dark:group-hover:bg-cyan-500/10 transition-colors shrink-0">
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-6 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">
              Verified Technical Ledger
            </span>

            <Link
              to="/blog/building-scalable-react-applications"
              className="group inline-flex items-center rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 pl-5 pr-1.5 py-1.5 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all active:scale-[0.98]"
            >
              <span>View All Dispatches</span>
              <span className="ml-2.5 w-7 h-7 rounded-full bg-white/15 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
              </span>
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Blog;
