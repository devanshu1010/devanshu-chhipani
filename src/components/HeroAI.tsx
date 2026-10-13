import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowUpRight, Sparkles, Network, Database, Cpu } from 'lucide-react';

// High-Performance Instanced Neural Mesh
interface NeuralMeshProps {
  nodeCount: number;
}

const InstancedNeuralGraph: React.FC<NeuralMeshProps> = ({ nodeCount }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate node positions in 3D latent space
  const { positions, linePositions } = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 8.5,
          (Math.random() - 0.5) * 8.5,
          (Math.random() - 0.5) * 7.5
        )
      );
    }

    const segments: number[] = [];
    const maxDist = 3.6;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (pos[i].distanceTo(pos[j]) < maxDist) {
          segments.push(pos[i].x, pos[i].y, pos[i].z);
          segments.push(pos[j].x, pos[j].y, pos[j].z);
        }
      }
    }

    return {
      positions: pos,
      linePositions: new Float32Array(segments)
    };
  }, [nodeCount]);

  // Set initial instance matrices
  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    positions.forEach((pos, idx) => {
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.08 + (idx % 3) * 0.03);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(idx, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions]);

  // Frame animation with pointer interpolation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.06;

      const targetX = (state.pointer.x * 2.0);
      const targetY = (state.pointer.y * 2.0);
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Single Draw-Call Instanced Nodes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, nodeCount]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.75} />
      </instancedMesh>

      {/* Synaptic Edge Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0284c7" transparent opacity={0.28} linewidth={1} />
      </lineSegments>
    </group>
  );
};

const HeroAI: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Hardware concurrency budget gating
  const isHighPerformance = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) > 4;
  const activeNodeCount = isHighPerformance ? 44 : 26;

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-12 max-w-[1200px] mx-auto w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: AI Researcher Positioning (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
          {/* Latent Projection Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] font-mono text-cyan-700 dark:text-cyan-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-zinc-950 dark:text-zinc-200 font-semibold tracking-wide">LATENT MANIFOLD PROJECTION</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>EMBED-768D</span>
            <span className="text-zinc-400 dark:text-zinc-600">/</span>
            <span>BF16</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 leading-[1.06] mb-4">
            Devanshu Chhipani
          </h1>

          {/* Role Specification */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal mb-5 flex items-center gap-2">
            <span>AI Practitioner</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">Applied Research &amp; Evaluation</span>
          </p>

          {/* Concise Value Thesis (< 20 words) */}
          <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md font-normal">
            Developing frontier semantic retrieval architectures, high-dimensional vector pipelines, and agentic reasoning benchmarks.
          </p>

          {/* Button-in-Button Action Group */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center rounded-full bg-cyan-600 dark:bg-cyan-500 text-white pl-6 pr-2 py-2 text-sm font-medium hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all shadow-md active:scale-[0.98]"
            >
              <span>Explore Research</span>
              <span className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 stroke-[1.8]" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center rounded-full px-6 py-3 border border-black/15 dark:border-white/15 text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
            >
              <span>Dispatch Agent Query</span>
            </button>
          </div>
        </div>

        {/* Right Column: Double-Bezel 3D Neural Viewport (6 cols) */}
        <div className="lg:col-span-6 w-full">
          {/* Outer Shell */}
          <div className="p-1.5 sm:p-2 rounded-[2rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-2xl">
            {/* Inner Core */}
            <div className="rounded-[calc(2rem-0.5rem)] bg-zinc-900 dark:bg-[#070b10] border border-black/[0.06] dark:border-white/[0.06] overflow-hidden relative h-[420px] sm:h-[480px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              {/* Telemetry Header */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Network className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-[11px] text-zinc-300">neural.latent.space</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[10px] text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3" />
                    <span>768-D</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    <span>FP8 KV</span>
                  </span>
                </div>
              </div>

              {/* R3F WebGL Canvas */}
              <Canvas
                dpr={[1, 1.75]}
                camera={{ position: [0, 0, 9], fov: 50 }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={50} />
                <ambientLight intensity={0.6} />
                <pointLight position={[8, 8, 8]} intensity={1.2} color="#06b6d4" />
                <pointLight position={[-8, -8, -8]} intensity={0.6} color="#3b82f6" />
                <InstancedNeuralGraph nodeCount={activeNodeCount} />
              </Canvas>

              {/* Subtle edge vignette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(7,11,16,0.9)]" />

              {/* Bottom HUD metrics strip */}
              <div className="absolute bottom-0 inset-x-0 z-20 flex items-center justify-between px-5 py-2.5 border-t border-white/10 bg-black/40 backdrop-blur-md font-mono text-[10px] text-zinc-400">
                <span>GRAPH NODES: {activeNodeCount}</span>
                <span className="text-emerald-400 font-semibold">INTERACTIVE VIEWPORT</span>
                <span>DRAW CALLS: 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAI;
