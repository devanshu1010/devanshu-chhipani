import React, { useRef } from 'react';
import { usePersona } from '../context/PersonaContext';
import { ArrowUpRight, Github, Activity, Database, Cpu, Layout, Server, Lock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP Plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SelectedWork: React.FC = () => {
  const { persona } = usePersona();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const cards = gsap.utils.toArray('.bento-card');
    
    // Kill existing triggers to prevent duplicates on re-render/persona toggle
    ScrollTrigger.getAll().forEach(t => {
      if (t.vars.id === 'bento-trigger') t.kill();
    });

    cards.forEach((card: HTMLElement, i) => {
      gsap.fromTo(
        card,
        { 
          clipPath: 'inset(100% 0 0 0)',
          y: 40,
        },
        {
          clipPath: 'inset(0% 0 0 0)',
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            id: 'bento-trigger',
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [persona] });

  const renderSEProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
      {/* Featured Project - Full Width */}
      <div className="bento-card md:col-span-12 group relative rounded-3xl overflow-hidden bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] p-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Production Ready
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-zinc-600 dark:text-zinc-400">
              v2.4.1
            </span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Enterprise Vendor Portal
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
            A comprehensive vendor management system built with Next.js and ASP.NET Core, featuring real-time SignalR workflows and RBAC authorization.
          </p>
          <div className="flex gap-4 items-center mt-auto">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:scale-105 transition-transform">
              View Project <ArrowUpRight size={16} />
            </button>
            <a href="#" className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        <div className="flex-1 relative flex items-center justify-center min-h-[300px]">
          {/* Abstract Mac Mockup */}
          <div className="w-[120%] h-full max-h-[340px] absolute right-[-10%] rounded-l-2xl border-y border-l border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 shadow-2xl flex flex-col overflow-hidden">
            <div className="h-8 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 gap-2 bg-white/50 dark:bg-zinc-950/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 p-6 grid grid-cols-3 gap-4">
               <div className="col-span-1 space-y-4">
                 <div className="h-20 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                 <div className="h-20 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse delay-75" />
                 <div className="h-20 rounded bg-zinc-200 dark:bg-zinc-800 animate-pulse delay-150" />
               </div>
               <div className="col-span-2 rounded bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm p-4 flex flex-col gap-4">
                 <div className="h-8 w-1/3 rounded bg-zinc-100 dark:bg-zinc-900" />
                 <div className="flex-1 rounded bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <Activity className="text-zinc-300 dark:text-zinc-700 w-12 h-12" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Items */}
      <div className="bento-card md:col-span-7 group rounded-3xl overflow-hidden bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] p-8 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6">
            <Layout className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Dynamic Form Engine</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-sm">
            Low-code orchestration engine generating dynamic enterprise forms with complex circular dependency validation.
          </p>
        </div>
        {/* Abstract Mobile Mockups */}
        <div className="h-48 w-full relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-black/[0.04] dark:border-white/[0.04] flex items-end justify-center gap-4 px-8 pt-8">
            <div className="w-1/2 h-[90%] bg-white dark:bg-zinc-950 rounded-t-2xl border-x border-t border-zinc-200 dark:border-zinc-800 shadow-lg p-4 transition-transform group-hover:-translate-y-2">
              <div className="w-1/3 h-1 mx-auto bg-zinc-200 dark:bg-zinc-800 rounded-full mb-6" />
              <div className="space-y-3">
                <div className="h-4 w-3/4 bg-zinc-100 dark:bg-zinc-900 rounded" />
                <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-900 rounded" />
                <div className="h-10 w-full bg-zinc-100 dark:bg-zinc-900 rounded mt-4" />
              </div>
            </div>
            <div className="w-1/2 h-[75%] bg-white dark:bg-zinc-950 rounded-t-2xl border-x border-t border-zinc-200 dark:border-zinc-800 shadow-lg p-4 transition-transform group-hover:translate-y-2">
              <div className="space-y-3 mt-4">
                <div className="h-16 w-full bg-zinc-100 dark:bg-zinc-900 rounded" />
                <div className="h-16 w-full bg-zinc-100 dark:bg-zinc-900 rounded" />
              </div>
            </div>
        </div>
      </div>

      <div className="bento-card md:col-span-5 group rounded-3xl overflow-hidden bg-zinc-950 text-white p-8 flex flex-col justify-between relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 opacity-50" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-emerald-500" />
                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-blue-500" />
             </div>
             <Github size={24} className="text-zinc-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Open Source</h3>
          <p className="text-zinc-400 text-sm mb-6">
            Contributing to the React ecosystem and sharing system architecture patterns.
          </p>
        </div>
        
        {/* Fake GitHub Activity Graph */}
        <div className="relative z-10 mt-auto bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
             <span>782 contributions</span>
             <span>2024</span>
          </div>
          <div className="grid grid-cols-12 gap-1">
             {Array.from({ length: 36 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-[2px] ${
                    Math.random() > 0.7 ? 'bg-emerald-500/80' : 
                    Math.random() > 0.4 ? 'bg-emerald-500/40' : 'bg-white/10'
                  }`}
                />
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAIProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
      {/* Featured AI Project */}
      <div className="bento-card md:col-span-12 group rounded-3xl overflow-hidden bg-[#050505] border border-white/[0.08] p-8 flex flex-col lg:flex-row gap-8 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              RAG Pipeline
            </span>
            <span className="text-xs font-mono text-zinc-500">
              38ms inference latency
            </span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
            InsightMesh Retrieval Engine
          </h3>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
            A high-throughput semantic search pipeline isolating dense technical intelligence from unstructured documentation using FastAPI and ChromaDB.
          </p>
          <div className="flex gap-4 items-center mt-auto">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors">
              Read Paper <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Abstract Architecture Diagram */}
        <div className="flex-1 relative z-10 min-h-[300px] flex items-center justify-center p-6">
           <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-xs text-indigo-200">
              <div className="flex justify-between items-center mb-8 relative">
                {/* Connection lines */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-indigo-500/30 -z-10" />
                
                <div className="bg-black border border-indigo-500/50 rounded-lg p-3 flex flex-col items-center gap-2">
                  <Database size={20} className="text-indigo-400" />
                  <span>ChromaDB</span>
                </div>
                
                <div className="bg-indigo-500/20 border border-indigo-500 rounded-lg p-4 flex flex-col items-center gap-2">
                  <Cpu size={24} className="text-indigo-300" />
                  <span className="font-bold text-white">Embeddings</span>
                </div>
                
                <div className="bg-black border border-indigo-500/50 rounded-lg p-3 flex flex-col items-center gap-2">
                  <Server size={20} className="text-indigo-400" />
                  <span>FastAPI</span>
                </div>
              </div>
              
              <div className="bg-black/50 rounded-lg p-4 border border-white/5 space-y-2">
                <div className="flex justify-between text-zinc-500">
                  <span>VECTOR SIMILARITY</span>
                  <span className="text-emerald-400">0.942 COSINE</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[94%]" />
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="bento-card md:col-span-5 group rounded-3xl overflow-hidden bg-zinc-950 border border-white/[0.08] p-8 flex flex-col justify-between">
        <div>
           <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 border border-rose-500/20">
              <Lock className="text-rose-400" size={24} />
           </div>
           <h3 className="text-2xl font-semibold text-white mb-2">Adversarial Defense</h3>
           <p className="text-zinc-400 mb-6 max-w-sm">
             Research on securing LLM endpoints against prompt injection and data extraction attacks.
           </p>
        </div>
        {/* Terminal Simulation */}
        <div className="mt-8 bg-black rounded-lg border border-white/10 p-4 font-mono text-[10px] text-emerald-400 space-y-2 overflow-hidden">
           <div>&gt; init defense-layer --strict</div>
           <div className="text-zinc-500">Loading heuristics... OK</div>
           <div>&gt; block_injection("Ignore previous instructions")</div>
           <div className="text-rose-400">[DENIED] Malicious payload detected</div>
           <div className="animate-pulse">_</div>
        </div>
      </div>

      <div className="bento-card md:col-span-7 group rounded-3xl overflow-hidden bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] p-8 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
           <div className="flex-1 flex flex-col justify-center">
             <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Computer Vision</h3>
             <p className="text-zinc-600 dark:text-zinc-400 mb-6">
               Edge-deployed object detection models optimized for low-power IoT devices using TensorFlow Lite.
             </p>
             <div className="flex flex-wrap gap-2 mt-auto">
                {['TFLite', 'OpenCV', 'Edge TPU'].map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                    {t}
                  </span>
                ))}
             </div>
           </div>
           <div className="flex-1 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-black/[0.04] dark:border-white/[0.04] p-4 relative overflow-hidden flex items-center justify-center">
              {/* Bounding Box Simulation */}
              <div className="absolute w-32 h-32 border-2 border-blue-500/50 rounded-lg flex items-start justify-start p-1 transition-transform group-hover:scale-110">
                 <div className="bg-blue-500 text-white text-[8px] font-mono px-1 rounded-sm">Person 98%</div>
              </div>
              <div className="absolute w-20 h-20 top-8 right-12 border-2 border-emerald-500/50 rounded-lg flex items-start justify-start p-1 transition-transform group-hover:translate-x-2">
                 <div className="bg-emerald-500 text-white text-[8px] font-mono px-1 rounded-sm">Laptop 92%</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="work" className="relative py-32 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6" ref={containerRef}>
        
        <div className="flex flex-col mb-16 gap-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-indigo-400 font-medium">
            PROOF OF CRAFT
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Selected Work
          </h2>
        </div>

        {persona === 'se' ? renderSEProjects() : renderAIProjects()}

      </div>
    </section>
  );
};

export default SelectedWork;
