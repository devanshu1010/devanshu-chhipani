import React, { useRef } from 'react';
import { usePersona } from '../context/PersonaContext';
import { ArrowUpRight, Github, Activity, Database, Cpu, Layout, Server, Lock, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { InteractiveHLD } from './InteractiveHLD';
import SpotlightCard from './SpotlightCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SelectedWork: React.FC = () => {
  const { persona } = usePersona();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.bento-shell');

    // Clean prior triggers on persona switch
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.id === 'work-bento-trigger') t.kill();
    });

    cards.forEach((card: Element) => {
      gsap.fromTo(
        card,
        {
          clipPath: 'inset(100% 0 0 0)',
          y: 35,
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            id: 'work-bento-trigger',
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [persona] });

  const renderSEProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Flagship Centerpiece: Interactive Pipeline HLD */}
      <SpotlightCard className="bento-shell md:col-span-12" innerClassName="p-6 sm:p-8">
        <InteractiveHLD />
      </SpotlightCard>

      {/* Production Case Study 1: Enterprise Vendor Portal (7 cols) */}
      <SpotlightCard className="bento-shell md:col-span-7" innerClassName="p-6 sm:p-8 h-full flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>STAGE 03: EXECUTION</span>
            </span>
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500">
              .NET 8 + PG
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
            Enterprise Vendor Portal
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Full lifecycle enterprise portal with SignalR real-time state machines, strict RBAC permissions, and sub-30ms PostgreSQL query plans.
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <button className="group inline-flex items-center rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 pl-5 pr-1.5 py-1.5 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all active:scale-[0.98]">
            <span>Inspect Architecture</span>
            <span className="ml-2.5 w-7 h-7 rounded-full bg-white/15 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </span>
          </button>
          <div className="font-mono text-xs text-zinc-400">
            p99: 18ms
          </div>
        </div>
      </SpotlightCard>

      {/* Case Study 2: Dynamic Form Orchestration (5 cols) */}
      <SpotlightCard className="bento-shell md:col-span-5" innerClassName="p-6 sm:p-8 h-full flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500">
              DAG ENGINE
            </span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-2">
            Kahn DAG Form Engine
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Low-code dependency solver evaluating complex multi-level cyclical validations across dynamic form schemas.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex justify-between items-center mb-1">
            <span>CIRCULARITY CHECK:</span>
            <span className="text-emerald-500 font-semibold">O(V + E)</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-zinc-500">
            <span>VALIDATION: PASS</span>
            <span>100+ SCHEMAS</span>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );

  const renderAIProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Flagship Centerpiece: Interactive Inference HLD */}
      <SpotlightCard className="bento-shell md:col-span-12" innerClassName="p-6 sm:p-8">
        <InteractiveHLD />
      </SpotlightCard>

      {/* Research Project 1: InsightMesh RAG Engine (7 cols) */}
      <SpotlightCard className="bento-shell md:col-span-7" innerClassName="p-6 sm:p-8 h-full flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              <span>STAGE 03: RETRIEVAL</span>
            </span>
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500">
              FASTAPI + CHROMADB
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3">
            InsightMesh Semantic Pipeline
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Dense retrieval architecture fusing vector embeddings with BM25 lexical rankers, streaming contextual summaries with sub-45ms latency.
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <button className="group inline-flex items-center rounded-full bg-cyan-600 dark:bg-cyan-500 text-white pl-5 pr-1.5 py-1.5 text-xs font-medium hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all active:scale-[0.98]">
            <span>Read Methodology</span>
            <span className="ml-2.5 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </span>
          </button>
          <div className="font-mono text-xs text-cyan-500 font-medium">
            0.94 RECALL@5
          </div>
        </div>
      </SpotlightCard>

      {/* Research Project 2: Adversarial Security & Red-Teaming (5 cols) */}
      <SpotlightCard className="bento-shell md:col-span-5" innerClassName="p-6 sm:p-8 h-full flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500">
              ALIGNMENT DEFENSE
            </span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-2">
            LLM Endpoint Defense Layer
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Semantic filtering algorithms detecting jailbreak vectors and unauthorized data exfiltration before model ingestion.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] font-mono text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex justify-between items-center mb-1">
            <span>INJECTION CATCH:</span>
            <span className="text-cyan-500 font-semibold">99.2%</span>
          </div>
          <div className="flex justify-between items-center text-[10px] text-zinc-500">
            <span>OVERHEAD: 3.2MS</span>
            <span>TOKEN AUDIT: OK</span>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );

  return (
    <section id="work" className="relative py-28 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6" ref={containerRef}>
        <div className="flex flex-col mb-14 text-left">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-400 font-semibold mb-2">
            STAGE 03: EXECUTION ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            {persona === 'se' ? 'Distributed Systems & Infrastructure' : 'Frontier Models & Evaluation Research'}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
            {persona === 'se'
              ? 'Mission-critical backend architectures engineered for high concurrency, persistence, and deterministic execution.'
              : 'Empirical research across latent spaces, semantic information retrieval, and defensive inference systems.'}
          </p>
        </div>

        {persona === 'se' ? renderSEProjects() : renderAIProjects()}
      </div>
    </section>
  );
};

export default SelectedWork;
