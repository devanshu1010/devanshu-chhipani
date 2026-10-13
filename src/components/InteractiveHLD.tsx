import React, { useState } from 'react';
import { usePersona } from '../context/PersonaContext';
import { ArrowRight, Activity, Zap, Shield, Cpu, Database, Server, RefreshCw, Terminal, CheckCircle2 } from 'lucide-react';

interface PipelineNode {
  id: string;
  name: string;
  role: string;
  metrics: {
    latency: string;
    throughput: string;
    spec: string;
  };
  details: string;
}

const sePipelineNodes: PipelineNode[] = [
  {
    id: 'gateway',
    name: 'Ingress Edge',
    role: 'HTTP/3 & TLS Termination',
    metrics: { latency: '1.2ms', throughput: '120k req/s', spec: 'eBPF XDP' },
    details: 'Packet filter at NIC driver level routing raw TCP/UDP streams with zero-copy ring buffers.'
  },
  {
    id: 'balancer',
    name: 'Load Balancer',
    role: 'Consistent Hash Ring',
    metrics: { latency: '0.8ms', throughput: '98k req/s', spec: 'Maglev Algo' },
    details: 'Even traffic distribution across worker nodes with millisecond health-check failover.'
  },
  {
    id: 'workers',
    name: 'Compute Fleet',
    role: 'ASP.NET Core 8 & C#',
    metrics: { latency: '14.5ms', throughput: '45k req/s', spec: 'Kestrel Runtime' },
    details: 'High-concurrency async services executing business contracts with Kahn DAG validation.'
  },
  {
    id: 'consensus',
    name: 'Consensus Log',
    role: 'Raft State Machine',
    metrics: { latency: '4.2ms', throughput: '22k ops/s', spec: 'Quorum 3/5' },
    details: 'Distributed transactional log ensuring strictly ordered writes across geographically isolated zones.'
  },
  {
    id: 'storage',
    name: 'Storage Engine',
    role: 'PostgreSQL & NVMe WAL',
    metrics: { latency: '2.1ms', throughput: '30k iops', spec: 'PG 16 + WAL' },
    details: 'ACID persistence layer tuned with connection pooling, index clustering, and partitioned tables.'
  }
];

const aiPipelineNodes: PipelineNode[] = [
  {
    id: 'tokenizer',
    name: 'BPE Tokenizer',
    role: 'Subword Segmentation',
    metrics: { latency: '0.4ms', throughput: '1.2M tok/s', spec: 'Vocab 32k' },
    details: 'Fast byte-pair encoding translating incoming prompt stream into dense token IDs.'
  },
  {
    id: 'embedding',
    name: 'Embedding Layer',
    role: 'Vector Latent Projection',
    metrics: { latency: '2.1ms', throughput: '768-D Space', spec: 'Dense Cosine' },
    details: 'High-dimensional geometric projection capturing semantic affinities across token vectors.'
  },
  {
    id: 'attention',
    name: 'FlashAttention-2',
    role: 'Multi-Head Attention',
    metrics: { latency: '18.4ms', throughput: '180 TFLOPS', spec: 'CUDA Tiled' },
    details: 'SRAM-optimized IO-aware exact attention calculation minimizing high-bandwidth memory reads.'
  },
  {
    id: 'kvcache',
    name: 'KV Cache Bank',
    role: 'Paged Attention Memory',
    metrics: { latency: '0.9ms', throughput: '99.4% Hit', spec: 'FP8 Paged' },
    details: 'Dynamic memory manager eliminating redundant key-value tensor recalculations during autoregression.'
  },
  {
    id: 'decoder',
    name: 'Speculative Head',
    role: 'Autoregressive Sampler',
    metrics: { latency: '12.8ms', throughput: '84 tok/s', spec: 'Draft Verification' },
    details: 'Parallel multi-token candidate generation with temperature-controlled distribution sampling.'
  }
];

export const InteractiveHLD: React.FC = () => {
  const { persona } = usePersona();
  const nodes = persona === 'se' ? sePipelineNodes : aiPipelineNodes;
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0].id);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const handleSimulate = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < nodes.length) {
        setSelectedNodeId(nodes[step].id);
        setActiveStep(step);
        step++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 700);
  };

  return (
    <div className="w-full text-left">
      {/* Interactive Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${persona === 'se' ? 'bg-emerald-500' : 'bg-cyan-500'} animate-pulse`} />
            <h4 className="text-sm font-semibold tracking-wide uppercase font-mono text-zinc-900 dark:text-zinc-100">
              {persona === 'se' ? 'Distributed Backend Flow Simulator' : 'Neural Inference Pipeline Inspector'}
            </h4>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">
            Select any architecture node to inspect runtime metrics or trigger simulated packet traversal.
          </p>
        </div>

        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className={`px-4 py-2 rounded-full text-xs font-mono font-medium flex items-center gap-2 transition-all ${
            persona === 'se'
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20'
              : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20'
          } ${isSimulating ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
          <span>{isSimulating ? 'Transmitting...' : persona === 'se' ? 'Trace Request Path' : 'Execute Token Inference'}</span>
        </button>
      </div>

      {/* Nodes Traversal Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
        {nodes.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          const isPassedInSimulation = isSimulating && index <= activeStep;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? persona === 'se'
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-500/40 shadow-xs'
                    : 'bg-cyan-50/70 dark:bg-cyan-950/20 border-cyan-500/40 shadow-xs'
                  : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-zinc-400">0{index + 1}</span>
                {isSelected && (
                  <CheckCircle2
                    className={`w-3 h-3 ${persona === 'se' ? 'text-emerald-500' : 'text-cyan-500'}`}
                  />
                )}
              </div>
              <div className="font-semibold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                {node.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 truncate mt-0.5">
                {node.metrics.latency}
              </div>

              {isPassedInSimulation && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    persona === 'se' ? 'bg-emerald-500' : 'bg-cyan-500'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Node Detailed Telemetry Display */}
      <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {selectedNode.name}
              </span>
              <span className="text-xs font-mono text-zinc-400">/</span>
              <span className={`text-xs font-mono ${persona === 'se' ? 'text-emerald-600 dark:text-emerald-400' : 'text-cyan-600 dark:text-cyan-400'}`}>
                {selectedNode.role}
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              {selectedNode.details}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-zinc-400 block text-[9px]">RESPONSE</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{selectedNode.metrics.latency}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-zinc-400 block text-[9px]">CAPACITY</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{selectedNode.metrics.throughput}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
              <span className="text-zinc-400 block text-[9px]">MECHANIC</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{selectedNode.metrics.spec}</span>
            </div>
          </div>
        </div>

        {/* Live Code / Schema Excerpt */}
        <div className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>Telemetry target: <code className="text-zinc-900 dark:text-zinc-200">cluster.node.{selectedNode.id}.sock</code></span>
          </div>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">HEALTH: NOMINAL</span>
        </div>
      </div>
    </div>
  );
};

