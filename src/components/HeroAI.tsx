import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Line, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Procedural neural nodes
const NeuralNetwork = () => {
  const group = useRef<THREE.Group>(null);

  // Create random nodes
  const nodeCount = 35;
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      ),
    }));
  }, []);

  // Create connections
  const lines = useMemo(() => {
    const linesArr = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 3.5) {
          linesArr.push([nodes[i].position, nodes[j].position]);
        }
      }
    }
    return linesArr;
  }, [nodes]);

  useFrame((state) => {
    if (group.current) {
      // Gentle rotation
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = state.clock.elapsedTime * 0.05;
      
      // Follow mouse
      const targetX = (state.pointer.x * state.viewport.width) / 4;
      const targetY = (state.pointer.y * state.viewport.height) / 4;
      group.current.position.x += (targetX - group.current.position.x) * 0.03;
      group.current.position.y += (targetY - group.current.position.y) * 0.03;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((node, i) => (
        <Sphere key={i} args={[0.06, 16, 16]} position={node.position}>
          <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
        </Sphere>
      ))}
      {lines.map((line, i) => (
        <Line 
          key={i} 
          points={line as [THREE.Vector3, THREE.Vector3]} 
          color="#3730a3" 
          lineWidth={1.5} 
          transparent 
          opacity={0.25} 
        />
      ))}
    </group>
  );
};

const HeroAI: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[82vh] flex items-center justify-center px-4 sm:px-6 py-16 max-w-[1200px] mx-auto w-full"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: Minimal, confident AI intro (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
          {/* Single-line live presence badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-[12px] font-mono text-indigo-600 dark:text-indigo-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-zinc-950 dark:text-zinc-200 font-medium">Model Inference Ready</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 leading-[1.08] mb-4">
            Devanshu Chhipani
          </h1>

          {/* Role */}
          <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-normal mb-5">
            AI Practitioner <span className="mx-1 text-zinc-300 dark:text-zinc-700">·</span> Research & ML
          </p>

          {/* One calm sentence */}
          <p className="text-[15px] sm:text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-md font-normal">
            Building intelligent retrieval systems and researching large-scale semantic reasoning.
          </p>

          {/* Minimal CTA pills */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('work')}
              className="px-6 py-2.5 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-all shadow-xs active:scale-[0.98]"
            >
              View Research
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-full bg-transparent border border-black/[0.12] dark:border-white/[0.12] text-zinc-900 dark:text-zinc-100 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
            >
              Collaborate
            </button>
          </div>
        </div>

        {/* Right: 3D Interactive Canvas (6 cols) */}
        <div className="lg:col-span-6 w-full h-[400px] lg:h-[500px] relative rounded-2xl overflow-hidden pointer-events-auto cursor-crosshair border border-black/[0.04] dark:border-white/[0.04] bg-gradient-to-br from-zinc-50/50 to-zinc-100/50 dark:from-[#0a0a0a]/50 dark:to-[#111]/50">
          <Canvas dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <NeuralNetwork />
            </Float>
          </Canvas>
          {/* Subtle overlay gradient to blend edges */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_60px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_0_60px_rgba(10,10,10,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroAI;

