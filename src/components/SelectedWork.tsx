import React, { useState } from "react";
import { ArrowUpRight, Play, CheckCircle2, RefreshCw, Terminal, Layers, Activity } from "lucide-react";
import { FadeUp } from "./FadeUp";

interface RagSample {
  query: string;
  matchedChunk: string;
  similarity: string;
  latency: string;
  tokens: string;
}

const ragSamples: RagSample[] = [
  {
    query: "workflow-acyclic-graphs",
    matchedChunk: "Directed Acyclic Graph (DAG) validation implemented via Kahn's algorithm in ASP.NET Core, detecting circular dependency in dynamic form workflows at submission.",
    similarity: "0.964",
    latency: "38ms",
    tokens: "192 t/s"
  },
  {
    query: "chromadb-vector-indexing",
    matchedChunk: "ChromaDB collection configured with 384-dimensional dense vectors using all-MiniLM-L6-v2 embeddings. Metadata filters partition documents by technical domain.",
    similarity: "0.938",
    latency: "44ms",
    tokens: "215 t/s"
  },
  {
    query: "postgres-jsonb-indexing",
    matchedChunk: "PostgreSQL GIN indexing on jsonb_path_ops over dynamic form submission schemas, reducing nested property lookups from 180ms to sub-8ms in enterprise tables.",
    similarity: "0.979",
    latency: "29ms",
    tokens: "180 t/s"
  }
];

const SelectedWork: React.FC = () => {
  const [activeRagIndex, setActiveRagIndex] = useState<number>(0);
  const activeRag = ragSamples[activeRagIndex];
  const [formMode, setFormMode] = useState<'preview' | 'schema'>('preview');
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Reviewer' | 'Vendor'>('Admin');
  const [signalrEvents, setSignalrEvents] = useState<string[]>([
    "Vendor #1084 submitted compliance docs (14ms)",
    "Workflow #492 transitioned to 'Approved' by Manager",
    "SignalR heartbeat OK · 42 connected enterprise clients"
  ]);

  const addSignalrEvent = () => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const ms = Math.floor(10 + Math.random() * 25);
    const newEvent = `Vendor #${randomId} verified & state updated (${ms}ms)`;
    setSignalrEvents((prev) => [newEvent, prev[0], prev[1]]);
  };

  return (
    <section id="work" className="relative py-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-medium mb-2">
                PROOF OF CRAFT
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-zinc-950 dark:text-zinc-50">
                Selected Systems & Work
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
              Interactive system sandboxes · Click to test telemetry
            </p>
          </div>
        </FadeUp>

        <div className="space-y-8">
          
          <FadeUp delay={100}>
            <div className="bg-white dark:bg-[#111111] rounded-xl p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.08] w-full transition-all">
              <div className="w-full bg-zinc-950 border border-black/[0.08] dark:border-white/[0.12] rounded-lg mb-6 overflow-hidden text-zinc-300 font-mono text-xs">
                <div className="h-10 border-b border-white/[0.08] bg-zinc-900/90 flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-zinc-400 ml-2">insightmesh.repl/semantic-search</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CHROMADB CONNECTED</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-900/40 border-b border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Simulate Query:</span>
                  {ragSamples.map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveRagIndex(idx)}
                      className={`px-2.5 py-1 rounded text-[11px] transition-all border ${
                        activeRagIndex === idx
                          ? 'bg-blue-600/30 border-blue-500 text-blue-300 font-medium'
                          : 'bg-zinc-800/60 border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/20'
                      }`}
                    >
                      `{sample.query}`
                    </button>
                  ))}
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-2 text-[12px] text-zinc-400">
                    <span className="text-blue-400 font-semibold">$</span>
                    <span className="text-zinc-200 font-semibold">GET /api/v1/search?query={activeRag.query}&amp;top_k=1</span>
                  </div>

                  <div className="p-3.5 rounded bg-zinc-900/80 border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span>TOP VECTOR RESULT // RECALL CHUNK</span>
                      <span className="text-blue-400 font-mono">COSINE: {activeRag.similarity}</span>
                    </div>
                    <p className="text-zinc-200 font-sans text-sm leading-relaxed">
                      "{activeRag.matchedChunk}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-2.5 rounded bg-zinc-900/50 border border-white/[0.04]">
                      <div className="text-[10px] text-zinc-500">EMBEDDING LATENCY</div>
                      <div className="text-sm font-semibold text-emerald-400">{activeRag.latency}</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/50 border border-white/[0.04]">
                      <div className="text-[10px] text-zinc-500">COSINE SIMILARITY</div>
                      <div className="text-sm font-semibold text-blue-400">{activeRag.similarity}</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/50 border border-white/[0.04]">
                      <div className="text-[10px] text-zinc-500">INFERENCE SPEED</div>
                      <div className="text-sm font-semibold text-zinc-200">{activeRag.tokens}</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/50 border border-white/[0.04]">
                      <div className="text-[10px] text-zinc-500">VECTOR DB</div>
                      <div className="text-sm font-semibold text-zinc-200">ChromaDB 384d</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="text-xs font-mono uppercase text-blue-600 dark:text-blue-400 mb-1 tracking-wider">
                    AI / SEMANTIC RETRIEVAL ENGINE · OPEN SOURCE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-zinc-100 mb-2">
                    InsightMesh — Technical Knowledge Retrieval System
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-4 leading-relaxed">
                    A high-throughput semantic search pipeline isolating dense technical intelligence from unstructured documentation. Uses FastAPI and ChromaDB with hybrid BM25 + dense vector reranking, achieving sub-50ms query latencies under Groq inference acceleration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "FastAPI", "ChromaDB", "Groq API", "RAG", "Vector Search", "REST APIs"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/50 border border-black/[0.06] dark:border-white/[0.08] rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://github.com/devanshu1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/[0.12] dark:border-white/[0.15] text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
                >
                  <span>GitHub Source</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp delay={100}>
              <div className="bg-white dark:bg-[#111111] rounded-xl p-6 border border-black/[0.08] dark:border-white/[0.08] flex flex-col h-full justify-between">
                <div>
                  <div className="w-full bg-zinc-50 dark:bg-zinc-950 border border-black/[0.08] dark:border-white/[0.08] rounded-lg mb-6 overflow-hidden">
                    <div className="h-9 border-b border-black/[0.06] dark:border-white/[0.06] bg-zinc-100 dark:bg-zinc-900/60 flex items-center justify-between px-3 text-[11px] font-mono">
                      <span className="text-zinc-600 dark:text-zinc-400">Dynamic Form Engine</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setFormMode('preview')}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            formMode === 'preview'
                              ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 shadow-xs'
                              : 'text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          UI
                        </button>
                        <button
                          onClick={() => setFormMode('schema')}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            formMode === 'schema'
                              ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-100 shadow-xs'
                              : 'text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          Schema JSON
                        </button>
                      </div>
                    </div>

                    <div className="p-4 min-h-[170px] flex flex-col justify-center">
                      {formMode === 'preview' ? (
                        <div className="space-y-3">
                          <div>
                            <label className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block mb-1">
                              SELECT WORKFLOW ROLE (RBAC):
                            </label>
                            <div className="flex gap-2">
                              {(['Admin', 'Reviewer', 'Vendor'] as const).map((role) => (
                                <button
                                  key={role}
                                  type="button"
                                  onClick={() => setSelectedRole(role)}
                                  className={`px-2.5 py-1 rounded text-xs font-mono border transition-all ${
                                    selectedRole === role
                                      ? 'bg-blue-600 text-white border-blue-600'
                                      : 'bg-white dark:bg-zinc-900 border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300'
                                  }`}
                                >
                                  {role}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="p-2.5 rounded bg-white dark:bg-zinc-900/60 border border-black/[0.06] dark:border-white/[0.06] text-xs font-mono text-zinc-600 dark:text-zinc-300 flex items-center justify-between">
                            <span>Permissions: {selectedRole === 'Admin' ? 'Read · Write · Publish' : selectedRole === 'Reviewer' ? 'Read · Approve' : 'Read Only'}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </div>
                        </div>
                      ) : (
                        <pre className="text-[10px] font-mono text-zinc-700 dark:text-zinc-300 overflow-x-auto p-2 bg-zinc-100 dark:bg-zinc-900/80 rounded">
{`{
  "formId": "dyn_vendor_approval",
  "roleAccess": ["${selectedRole}"],
  "validation": { "strictDAG": true },
  "schemaVersion": 2
}`}
                        </pre>
                      )}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 mb-1">
                    SILVER TOUCH TECHNOLOGIES LTD
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100 mb-2">
                    Dynamic Form Platform & Workflow Automation
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                    Low-code orchestration engine generating dynamic enterprise forms, multi-stage approval pipelines, Kahn's algorithm circular dependency detection, and granular RBAC authorization.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  {["ASP.NET Core", "EF Core", "PostgreSQL", "Next.js", "RBAC"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="bg-white dark:bg-[#111111] rounded-xl p-6 border border-black/[0.08] dark:border-white/[0.08] flex flex-col h-full justify-between">
                <div>
                  <div className="w-full bg-zinc-950 border border-black/[0.08] dark:border-white/[0.12] rounded-lg mb-6 overflow-hidden">
                    <div className="h-9 border-b border-white/[0.08] bg-zinc-900/80 flex items-center justify-between px-3 text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-zinc-300">
                        <Activity className="w-3 h-3 text-emerald-400" />
                        <span>SignalR WebSocket Hub</span>
                      </div>
                      <button
                        onClick={addSignalrEvent}
                        type="button"
                        className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-blue-600/30 text-blue-300 border border-blue-500/40 hover:bg-blue-600/50"
                      >
                        <RefreshCw className="w-2.5 h-2.5" />
                        <span>Push Event</span>
                      </button>
                    </div>

                    <div className="p-3.5 space-y-2 min-h-[170px] flex flex-col justify-center font-mono text-[11px]">
                      {signalrEvents.map((evt, idx) => (
                        <div
                          key={idx}
                          className={`p-2 rounded border transition-all ${
                            idx === 0
                              ? 'bg-blue-950/40 border-blue-500/40 text-blue-200'
                              : 'bg-zinc-900/60 border-white/[0.04] text-zinc-400'
                          }`}
                        >
                          <span className="text-zinc-500 mr-2">&gt;</span>
                          <span>{evt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 mb-1">
                    SILVER TOUCH TECHNOLOGIES LTD
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-100 mb-2">
                    Enterprise Vendor Portal & Real-Time Hub
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                    Centralized backend with SignalR event streaming, persistent read status tracking, automated approval workflows, and indexed PostgreSQL stored procedures handling thousands of concurrent updates.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                  {["ASP.NET Core", "SignalR", "PostgreSQL", "React", "Next.js"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
