import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleItem {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

const articles: ArticleItem[] = [
  {
    title: "Engineering Enterprise Workflow Engines with ASP.NET Core & EF Core",
    excerpt: "Architectural strategies for dynamic form modeling, sub-workflow acyclic graphs, and multi-tenant RBAC enforcement.",
    date: "Jan 2025",
    readTime: "8 min read",
    slug: "building-scalable-react-applications"
  },
  {
    title: "Designing RAG Pipelines with ChromaDB, Vector Embeddings & FastAPI",
    excerpt: "Practical lessons on chunking strategies, heuristic keyword gating before LLM inference, and low-latency semantic indexing.",
    date: "Dec 2024",
    readTime: "7 min read",
    slug: "modern-css-techniques"
  },
  {
    title: "Real-Time Systems at Scale: From HTTP Polling to WebSockets & SignalR",
    excerpt: "How streaming duplex sockets cut network latency by 40% and eliminate persistent server connection exhaustion.",
    date: "Oct 2024",
    readTime: "6 min read",
    slug: "typescript-best-practices"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="writing" className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-12">
          Writing
        </h2>

        <div className="flex flex-col mb-8">
          {articles.map((art, idx) => (
            <Link
              key={idx}
              to={`/blog/${art.slug}`}
              className="group py-8 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-sm"
            >
              <div className="max-w-2xl">
                <h3 className="text-[20px] sm:text-[24px] font-semibold text-zinc-950 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {art.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                  {art.excerpt}
                </p>
                <div className="text-[13px] text-zinc-400 dark:text-zinc-500 font-mono">
                  {art.date} · {art.readTime}
                </div>
              </div>
              <div className="text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all transform group-hover:translate-x-1 duration-200">
                <ArrowRight className="h-6 w-6" />
              </div>
            </Link>
          ))}
          {/* Bottom hairline */}
          <div className="border-b border-black/[0.08] dark:border-white/[0.08]" />
        </div>

        <Link
          to="/blog/building-scalable-react-applications"
          className="inline-flex items-center text-[15px] font-medium text-zinc-950 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          View all writing <span className="ml-1 text-lg leading-none">&rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
