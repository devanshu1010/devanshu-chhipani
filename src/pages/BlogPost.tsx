import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2, Check } from "lucide-react";
import LogoMark from "../components/LogoMark";
import Footer from "../components/Footer";

interface BlogPostData {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}

const blogPosts: Record<string, BlogPostData> = {
  "building-scalable-react-applications": {
    title: "Engineering Enterprise Workflow Engines with ASP.NET Core & EF Core",
    category: "Architecture & Backend",
    date: "Jan 14, 2025",
    readTime: "8 min read",
    author: "Devanshu Chhipani",
    content: `
      <h2>The Problem: Static Forms in Dynamic Enterprise Domains</h2>
      <p>Enterprise applications frequently require user-configurable forms and multi-step approval workflows. Hardcoding forms into database tables and frontend components quickly collapses under changing business requirements. An adaptable platform requires treating forms, database fields, and workflow pipelines as dynamic, metadata-driven entities.</p>

      <h2>1. The Sub-Workflow Acyclic Graph Architecture</h2>
      <p>A major design challenge in workflow orchestration is nesting: allowing one department's workflow to invoke a sub-workflow without introducing circular dependencies or orphan states.</p>
      <ul>
        <li><strong>Graph Validation:</strong> We enforce directed acyclic graph (DAG) topological validation before persisting workflow definitions to PostgreSQL.</li>
        <li><strong>State Persistence:</strong> Execution states are stored in indexed event logs, enabling audit trails and reliable replay during failure recovery.</li>
        <li><strong>Role-Based Delegation:</strong> Granular RBAC checks execute at both the route boundary and the workflow step transition level.</li>
      </ul>

      <h2>2. Dynamic Relational Schema Management</h2>
      <p>Rather than dumping flexible data into opaque JSON blobs, our platform generates structured PostgreSQL tables with VARCHAR primary keys and indexed foreign keys. This retains full SQL query capability, relational integrity, and index performance while allowing non-technical operators to build custom entities.</p>

      <h2>3. Real-Time Telemetry with SignalR</h2>
      <p>When an approval step resolves, immediate feedback is critical. Using ASP.NET Core SignalR hubs with Redis backplanes, state transitions broadcast instantly to active client sessions, ensuring dashboard synchronicity without polling.</p>

      <h2>Conclusion</h2>
      <p>Engineering a low-code workflow platform is an exercise in restraint: creating clean abstractions that give users maximum configuration power while strictly protecting relational consistency and database integrity.</p>
    `
  },
  "modern-css-techniques": {
    title: "Designing RAG Pipelines with ChromaDB, Vector Embeddings & FastAPI",
    category: "AI & Information Retrieval",
    date: "Dec 20, 2024",
    readTime: "7 min read",
    author: "Devanshu Chhipani",
    content: `
      <h2>Why Naive RAG Fails in Technical Domains</h2>
      <p>Standard Retrieval-Augmented Generation (RAG) often ingests raw documents, chunks them naively by token count, and passes the nearest vector matches to an LLM. In dense technical domains, this leads to hallucinated API parameters, irrelevant context injection, and high token costs.</p>

      <h2>1. The Multi-Stage Filtering Funnel</h2>
      <p>To maximize relevance and optimize inference cost, InsightMesh utilizes a progressive funnel:</p>
      <ul>
        <li><strong>Deduplication:</strong> Hash-based and fuzzy string deduplication removes duplicate technical snippets upfront.</li>
        <li><strong>Heuristic Keyword Gating:</strong> Lightweight regex filters separate business chatter and marketing text from architectural documentation before vectorization.</li>
        <li><strong>LLM Classification:</strong> A fast Groq-hosted Llama-3 model categorizes the remaining high-signal documents into domain hierarchies.</li>
      </ul>

      <h2>2. Vector Indexing with ChromaDB</h2>
      <p>Curated technical fragments are indexed into ChromaDB collections using domain-fine-tuned embeddings. Query execution retrieves the top-k semantically relevant chunks with distance thresholds, ensuring only high-confidence context reaches the generative model.</p>

      <h2>3. FastAPI Dry-Run & Telemetry Endpoints</h2>
      <p>Debugging RAG pipelines requires inspecting each transformation stage. By exposing dry-run analysis endpoints, developers can inspect chunk boundaries, embedding distances, and token usage before triggering production inference.</p>
    `
  },
  "typescript-best-practices": {
    title: "Real-Time Systems at Scale: From HTTP Polling to WebSockets & SignalR",
    category: "Real-Time Systems",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    author: "Devanshu Chhipani",
    content: `
      <h2>The Hidden Cost of HTTP Polling</h2>
      <p>In data-intensive platforms like vendor portals and real-time trackers, short polling introduces massive HTTP overhead: TLS handshakes, redundant headers, and continuous database lookups even when data hasn't changed. During my internship at Swaroop.ai, migrating from polling to WebSockets cut network transmission overhead by 40%.</p>

      <h2>1. Full-Duplex Connection Lifecycle</h2>
      <p>Persistent duplex connections shift the paradigm from client-pull to server-push. The server holds an open socket and only transmits events when data changes occur.</p>

      <h2>2. Persistent Notification Architecture in SignalR</h2>
      <p>At Silver Touch Technologies Ltd, we built a centralized SignalR hub supporting:</p>
      <ul>
        <li><strong>Persistent Storage:</strong> Notifications are written to PostgreSQL before broadcast, preventing message loss if a client is temporarily disconnected.</li>
        <li><strong>Read/Unread State Tracking:</strong> Synchronized delivery confirms receipt and updates badge counters across all user sessions in real time.</li>
        <li><strong>Role-Based Filtering:</strong> Clients only subscribe to channels matching their authenticated permissions.</li>
      </ul>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (slug) {
      setPost(blogPosts[slug] ?? null);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 p-6">
        <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-mono"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-zinc-950 dark:text-zinc-50 transition-colors">
      {/* Top Reading Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] z-50 flex items-center justify-between px-6">
        <div className="w-full max-w-[900px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <Link to="/" aria-label="Devanshu Chhipani home">
            <LogoMark compact />
          </Link>
        </div>
      </nav>

      {/* Main Article Body */}
      <main className="w-full max-w-[780px] mx-auto px-6 pt-28 pb-20">
        <header className="mb-12 border-b border-black/[0.08] dark:border-white/[0.08] pb-10">
          <div className="mb-4">
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight text-zinc-950 dark:text-zinc-50 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-blue-500" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-blue-500" />
                {post.readTime}
              </span>
              <span>·</span>
              <span>{post.author}</span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="Copy article link"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Share2 size={14} />}
              <span>{copied ? "Copied" : "Share"}</span>
            </button>
          </div>
        </header>

        {/* Prose Content */}
        <article
          className="prose prose-zinc dark:prose-invert max-w-none 
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-zinc-950 dark:prose-h2:text-zinc-50
            prose-p:text-[16px] sm:prose-p:text-[17px] prose-p:leading-[1.7] prose-p:text-zinc-600 dark:prose-p:text-zinc-300 prose-p:mb-6
            prose-strong:text-zinc-950 dark:prose-strong:text-zinc-100 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:text-zinc-600 dark:prose-li:text-zinc-300
            prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:font-mono prose-code:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft size={16} /> Return to all projects & experience
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
