import React from 'react';
import { usePersona } from '../context/PersonaContext';
import { useLenis } from 'lenis/react';
import { ArrowDown, Cpu, Database, Network, Server, ShieldCheck, Terminal, Layers, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

interface StoryStage {
  step: string;
  badge: string;
  title: string;
  targetId: string;
  summary: string;
  metric: string;
  icon: React.ReactNode;
}

const seStages: StoryStage[] = [
  {
    step: '01',
    badge: 'STAGE 01: INGRESS',
    title: 'Gateway & Telemetry',
    targetId: 'home',
    summary: 'Real-time telemetry probe console inspecting p99 latencies, HTTP/3 protocol, and uptime health.',
    metric: 'HTTP/3 · p99 < 50ms',
    icon: <Terminal className="w-4 h-4 text-emerald-500" />
  },
  {
    step: '02',
    badge: 'STAGE 02: KERNEL',
    title: 'Relational Schemas',
    targetId: 'about',
    summary: 'Enterprise ACID contracts, normalized PostgreSQL tables, and low-code DAG dependency solvers.',
    metric: 'ACID · Kahn DAG',
    icon: <Database className="w-4 h-4 text-emerald-500" />
  },
  {
    step: '03',
    badge: 'STAGE 03: ENGINE',
    title: 'Distributed Systems',
    targetId: 'work',
    summary: 'Interactive packet trace simulator and production systems like the Vendor Portal with SignalR.',
    metric: 'SignalR · 100+ Schemas',
    icon: <Server className="w-4 h-4 text-emerald-500" />
  },
  {
    step: '04',
    badge: 'STAGE 04: TOOLCHAIN',
    title: 'Runtime & Trace',
    targetId: 'stack',
    summary: 'ASP.NET Core 8 Kestrel runtime, PostgreSQL connection pooling, Docker, and deployment track records.',
    metric: '.NET 8 · EF Core',
    icon: <Layers className="w-4 h-4 text-emerald-500" />
  },
  {
    step: '05',
    badge: 'STAGE 05: HANDSHAKE',
    title: 'Direct RPC Ingress',
    targetId: 'contact',
    summary: 'Direct socket route for technical inquiries and engineering collaborations with guaranteed sub-24h latency.',
    metric: 'SLA < 24H',
    icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />
  }
];

const aiStages: StoryStage[] = [
  {
    step: '01',
    badge: 'STAGE 01: LATENT',
    title: 'Manifold Projection',
    targetId: 'home',
    summary: 'Interactive 3D WebGL neural mesh simulating continuous token embeddings inside a 768-D latent space.',
    metric: '768-D · WebGL R3F',
    icon: <Network className="w-4 h-4 text-cyan-500" />
  },
  {
    step: '02',
    badge: 'STAGE 02: MANIFOLD',
    title: 'Research Corpus',
    targetId: 'about',
    summary: 'Academic foundation at BITS Pilani (M.Tech AI/ML), statistical learning theory, and dense vector spaces.',
    metric: 'BITS Pilani · AI/ML',
    icon: <Database className="w-4 h-4 text-cyan-500" />
  },
  {
    step: '03',
    badge: 'STAGE 03: INFERENCE',
    title: 'Retrieval Pipeline',
    targetId: 'work',
    summary: 'Interactive tensor execution simulator and InsightMesh hybrid vector search (ChromaDB + BM25).',
    metric: '0.94 Recall · 38ms',
    icon: <Cpu className="w-4 h-4 text-cyan-500" />
  },
  {
    step: '04',
    badge: 'STAGE 04: COMPUTE',
    title: 'Accelerators & Eval',
    targetId: 'stack',
    summary: 'Groq LPU hardware, FlashAttention-2 IO tiling, CUDA execution kernels, and empirical benchmark logs.',
    metric: 'FlashAttn-2 · FP8',
    icon: <Layers className="w-4 h-4 text-cyan-500" />
  },
  {
    step: '05',
    badge: 'STAGE 05: DISPATCH',
    title: 'Inference Dispatch',
    targetId: 'contact',
    summary: 'Conversational agent query channel and research collaboration inbox for frontier ML investigations.',
    metric: 'Agent Dispatch',
    icon: <ShieldCheck className="w-4 h-4 text-cyan-500" />
  }
];

export const PipelineRoadmap: React.FC = () => {
  const { persona } = usePersona();
  const stages = persona === 'se' ? seStages : aiStages;
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
    if (lenis) {
      lenis.scrollTo(targetY, { duration: 1.0 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto text-left">
        {/* Storyline Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className={`text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-2 ${
              persona === 'se' ? 'text-emerald-600 dark:text-emerald-400' : 'text-cyan-600 dark:text-cyan-400'
            }`}>
              {persona === 'se' ? 'PORTFOLIO ARCHITECTURE MAP' : 'NEURAL JOURNEY ROADMAP'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {persona === 'se'
                ? 'The 5-Stage Systems Engineering Lifecycle'
                : 'The 5-Stage Applied AI & Research Pipeline'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-md">
            {persona === 'se'
              ? 'Every section maps to a stage in the distributed backend pipeline. Select any stage to dive into detailed execution.'
              : 'Every section maps to a stage in the generative intelligence pipeline. Select any stage to inspect the technical methodology.'}
          </p>
        </div>

        {/* 5-Stage Horizontal Story Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {stages.map((stage, idx) => (
            <SpotlightCard
              key={stage.step}
              className="h-full group"
              innerClassName="p-5 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-zinc-400 font-bold">
                    {stage.step}
                  </span>
                  <span className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    {stage.icon}
                  </span>
                </div>

                <div className={`text-[10px] font-mono uppercase tracking-wider font-semibold mb-1 ${
                  persona === 'se' ? 'text-emerald-600 dark:text-emerald-400' : 'text-cyan-600 dark:text-cyan-400'
                }`}>
                  {stage.badge}
                </div>

                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-cyan-400 transition-colors">
                  {stage.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-4">
                  {stage.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between mt-auto">
                <span className="font-mono text-[10px] text-zinc-500">
                  {stage.metric}
                </span>

                <button
                  onClick={() => scrollTo(stage.targetId)}
                  className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium transition-all group-hover:translate-x-0.5 ${
                    persona === 'se'
                      ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700'
                      : 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-300'
                  }`}
                  aria-label={`Jump to ${stage.title} section`}
                >
                  <span>Explore</span>
                  <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineRoadmap;

