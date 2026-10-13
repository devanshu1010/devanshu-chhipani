import React, { useState } from 'react';
import { ArrowUpRight, Terminal, Activity, Layers, ShieldCheck, Mail } from 'lucide-react';

interface SystemProbe {
  id: string;
  label: string;
  tag: string;
  response: string;
  stats: {
    latency: string;
    engine: string;
    score: string;
  };
}

const probes: SystemProbe[] = [
  {
    id: 'rag',
    label: 'InsightMesh (RAG)',
    tag: 'SYSTEM / RETRIEVAL',
    response: 'Hybrid ChromaDB and BM25 reranking on FastAPI. Streaming token latency under 45ms via Groq.',
    stats: {
      latency: '38ms',
      engine: 'FastAPI + PGVector',
      score: '0.94 recall'
    }
  },
  {
    id: 'enterprise',
    label: 'Dynamic Forms',
    tag: 'BACKEND / .NET',
    response: 'Low-code orchestration engine in ASP.NET Core 8 and PostgreSQL with Kahn\'s DAG circular validation.',
    stats: {
      latency: '14ms',
      engine: 'ASP.NET Core + PG',
      score: '100+ schemas'
    }
  },
  {
    id: 'beliefs',
    label: 'Architecture Creed',
    tag: 'PHILOSOPHY',
    response: 'Clean relational schemas beat clever hacks. Type-safe contracts and sub-50ms p99 latencies come first.',
    stats: {
      latency: '4ms',
      engine: 'System Design',
      score: 'p99 focused'
    }
  },
  {
    id: 'contact',
    label: 'Direct Channel',
    tag: 'NETWORKING',
    response: 'Open to Senior Backend and Systems roles. Inbox monitored at work.devanshuchhipani@gmail.com.',
    stats: {
      latency: '<24h',
      engine: 'Direct Route',
      score: 'Active'
    }
  }
];

const HeroSE: React.FC = () => {
  const [activeProbe, setActiveProbe] = useState<SystemProbe>(probes[0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 max-w-[1200px] mx-auto w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Systems Engineering Positioning (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Hardware & Ingress Probe Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-950 dark:text-zinc-200 font-semibold tracking-wide">INGRESS GATEWAY ONLINE</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>HTTP/3</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>x86_64</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 leading-[1.06] mb-4">
            Devanshu Chhipani
          </h1>

          {/* Role Specification */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal mb-5 flex items-center gap-2">
            <span>Systems Engineer</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm">Distributed Backends</span>
          </p>

          {/* Concise Value Thesis (< 20 words) */}
          <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md font-normal">
            Architecting high-throughput backend infrastructure, resilient distributed services, and sub-50ms data engines.
          </p>

          {/* Button-in-Button Action Group */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 pl-6 pr-2 py-2 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-md active:scale-[0.98]"
            >
              <span>Explore Pipeline</span>
              <span className="ml-3 w-8 h-8 rounded-full bg-white/15 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[1.8]" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center rounded-full px-6 py-3 border border-black/15 dark:border-white/15 text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
            >
              <span>Initialize RPC</span>
            </button>
          </div>
        </div>

        {/* Right Column: Double-Bezel Telemetry Console (6 cols) */}
        <div className="lg:col-span-6 w-full">
          {/* Outer Shell */}
          <div className="p-1.5 sm:p-2 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-2xl">
            {/* Inner Core */}
            <div className="rounded-[calc(2rem-0.5rem)] bg-white dark:bg-[#0c0c0c] border border-black/[0.06] dark:border-white/[0.06] overflow-hidden text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              {/* Window Chrome Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="font-mono text-[11px] text-zinc-500 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-emerald-500" />
                    <span>probe.telemetry.v1</span>
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-medium">
                  STAGE 01: INGRESS
                </span>
              </div>

              {/* Probe Selector Grid */}
              <div className="p-3 border-b border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/30 dark:bg-black/30">
                <div className="grid grid-cols-2 gap-2">
                  {probes.map((probe) => {
                    const isSelected = activeProbe.id === probe.id;
                    return (
                      <button
                        key={probe.id}
                        type="button"
                        onClick={() => setActiveProbe(probe)}
                        className={`p-2.5 rounded-xl text-left transition-all border font-mono text-[11px] ${
                          isSelected
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-500/40 text-emerald-800 dark:text-emerald-300 font-medium shadow-xs'
                            : 'bg-white dark:bg-zinc-900/40 border-black/[0.06] dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-black/20 dark:hover:border-white/20'
                        }`}
                      >
                        <div className="text-[9px] text-zinc-400 dark:text-zinc-500 mb-0.5 tracking-wider font-semibold">
                          {probe.tag}
                        </div>
                        <div className="truncate font-semibold text-[12px]">{probe.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Response Log Body */}
              <div className="p-5 font-mono text-xs flex flex-col justify-between min-h-[140px]">
                <div className="text-zinc-800 dark:text-zinc-200 font-sans text-sm leading-relaxed">
                  {activeProbe.response}
                </div>

                {/* Machine Telemetry Metadata Strip */}
                <div className="pt-3 mt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span>LATENCY:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeProbe.stats.latency}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-zinc-400" />
                    <span>RUNTIME:</span>
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{activeProbe.stats.engine}</span>
                  </div>
                  <div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeProbe.stats.score}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSE;
