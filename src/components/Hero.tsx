import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
    tag: 'AI / RETRIEVAL',
    response: 'Dense ChromaDB vector search + BM25 hybrid reranking on FastAPI, streaming under 45ms via Groq.',
    stats: {
      latency: '38ms',
      engine: 'FastAPI + ChromaDB',
      score: '0.94 recall'
    }
  },
  {
    id: 'enterprise',
    label: 'Dynamic Forms',
    tag: 'BACKEND / .NET',
    response: 'Low-code form orchestration engine in ASP.NET Core 8 & PostgreSQL with Kahn\'s DAG circular validation.',
    stats: {
      latency: '14ms',
      engine: 'ASP.NET Core + PG',
      score: '100+ schemas'
    }
  },
  {
    id: 'beliefs',
    label: 'Architecture Beliefs',
    tag: 'PHILOSOPHY',
    response: 'Clean relational schemas beat clever prompts. Type-safe contracts and sub-50ms p99 latencies come first.',
    stats: {
      latency: '4ms',
      engine: 'System Design',
      score: 'p99 focused'
    }
  },
  {
    id: 'contact',
    label: 'Connect / Hire',
    tag: 'DIRECT REACH',
    response: 'Open to Senior Backend & AI Infrastructure roles. Inbox monitored daily at work.devanshuchhipani@gmail.com.',
    stats: {
      latency: '<24h',
      engine: 'Direct Reachout',
      score: 'Available'
    }
  }
];

const Hero: React.FC = () => {
  const [activeProbe, setActiveProbe] = useState<SystemProbe>(probes[0]);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[82vh] flex items-center justify-center px-4 sm:px-6 py-16 max-w-[1200px] mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Minimal, confident Apple/Vercel intro (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Single-line live presence badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-[12px] font-mono text-zinc-600 dark:text-zinc-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-950 dark:text-zinc-200 font-medium">Available</span>
            <span className="text-zinc-400 dark:text-zinc-600">·</span>
            <span>Ahmedabad, IN</span>
            {istTime && (
              <>
                <span className="text-zinc-400 dark:text-zinc-600">·</span>
                <span>{istTime}</span>
              </>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 leading-[1.08] mb-4">
            Devanshu Chhipani
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-normal mb-5">
            Software Engineer <span className="mx-1 text-zinc-300 dark:text-zinc-700">·</span> Systems & AI
          </p>

          {/* One calm sentence — no resume dump, no repetition */}
          <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md font-normal">
            Architecting enterprise backend platforms at Silver Touch and researching semantic retrieval at BITS Pilani.
          </p>

          {/* Minimal CTA pills */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('work')}
              className="px-6 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs active:scale-[0.98]"
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-full bg-transparent border border-black/[0.12] dark:border-white/[0.12] text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: Snappy, Tactile Interactive System Console (6 cols) */}
        <div className="lg:col-span-6 w-full">
          <div className="rounded-xl bg-white dark:bg-[#0e0e0e] border border-black/[0.08] dark:border-white/[0.08] shadow-xs overflow-hidden text-left">
            {/* Window Chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/70 dark:bg-zinc-900/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 ml-2">
                  system.telemetry
                </span>
              </div>
              <span className="font-mono text-[10px] text-blue-600 dark:text-blue-400">
                INTERACTIVE PROBE
              </span>
            </div>

            {/* Probe Buttons */}
            <div className="p-3 border-b border-black/[0.06] dark:border-white/[0.06] bg-zinc-50/30 dark:bg-black/20">
              <div className="grid grid-cols-2 gap-1.5">
                {probes.map((probe) => (
                  <button
                    key={probe.id}
                    type="button"
                    onClick={() => setActiveProbe(probe)}
                    className={`px-3 py-2 rounded-md text-left transition-all border font-mono text-[11px] ${
                      activeProbe.id === probe.id
                        ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-500/40 text-blue-700 dark:text-blue-300 font-medium'
                        : 'bg-white dark:bg-zinc-900/50 border-black/[0.06] dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-black/20 dark:hover:border-white/20'
                    }`}
                  >
                    <div className="text-[9px] text-zinc-400 dark:text-zinc-500 mb-0.5">{probe.tag}</div>
                    <div className="truncate font-medium">{probe.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Response Display — Crisp, 1-2 punchy sentences */}
            <div className="p-5 font-mono text-xs flex flex-col justify-between min-h-[140px]">
              <div className="text-zinc-700 dark:text-zinc-300 font-sans text-sm leading-relaxed">
                {activeProbe.response}
              </div>

              {/* Live Telemetry Metadata */}
              <div className="pt-3 mt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                <div>
                  <span className="text-zinc-400 dark:text-zinc-500">LATENCY:</span>{' '}
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeProbe.stats.latency}</span>
                </div>
                <div>
                  <span className="text-zinc-400 dark:text-zinc-500">ENGINE:</span>{' '}
                  <span className="text-zinc-800 dark:text-zinc-200">{activeProbe.stats.engine}</span>
                </div>
                <div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{activeProbe.stats.score}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
