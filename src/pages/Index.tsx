import { useEffect, useState } from 'react';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import DacLoader from '../components/DacLoader';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PipelineRoadmap from '../components/PipelineRoadmap';
import SelectedWork from '../components/SelectedWork';
import TechStack from '../components/TechStack';
import InteractiveWidget from '../components/InteractiveWidget';
import CircuitSpine from '../components/CircuitSpine';
import { usePersona } from '../context/PersonaContext';

const Index = () => {
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('loaderShown'));
  const { persona } = usePersona();

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', '1');
    setIsLoading(false);
  };

  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div
      className={`min-h-screen text-zinc-950 transition-colors duration-500 relative overflow-x-hidden ${
        persona === 'se'
          ? 'bg-[#fafafa] dark:bg-[#08080a] dark:text-zinc-50'
          : 'bg-[#fafafa] dark:bg-[#04030a] dark:text-zinc-50'
      }`}
    >
      {/* SE Mode: Subtle Hardware Engineering Grid Overlay */}
      {persona === 'se' && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none -z-10 opacity-70 dark:opacity-40"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      )}

      {/* AI Mode: Ethereal Cosmic Latent Gradient Orbs */}
      {persona === 'ai' && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
        >
          <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/12 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[160px] pointer-events-none" />
        </div>
      )}

      {/* Vertical Side Spine for 5-Stage Story Progress */}
      <CircuitSpine />

      {/* Pinned Top Navigation */}
      <Navbar />

      <main className="w-full max-w-[1200px] mx-auto pt-0">
        {/* Act 1: Ingress / Latent Space Hero */}
        <Hero />

        {/* 5-Stage Portfolio Pipeline Story Roadmap Overview */}
        <PipelineRoadmap />

        {/* Act 2: Architecture & Philosophy / Academic Manifold */}
        <About />

        {/* Act 3: Distributed Execution Engine / RAG Inference Pipeline */}
        <SelectedWork />

        {/* Act 4: Production Trace Log / Research Milestones */}
        <Experience />

        {/* Act 4 (Cont.): Toolchain & Runtime Stack / ML Compute */}
        <TechStack />

        {/* Act 5: Engineering Dispatches / Publications */}
        <Blog />

        {/* Act 5 (Cont.): Foundations & Academic Verification */}
        <Education />

        {/* Act 5 (Finale): Direct RPC Handshake / Agent Dispatch */}
        <Contact />
      </main>

      <InteractiveWidget />
      <Footer />
    </div>
  );
};

export default Index;
