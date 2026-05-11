
import { useEffect, useState } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import DacLoader from '../components/DacLoader';
import Experience from '../components/Experience';
import FloatingEmail from '../components/FloatingEmail';
import FloatingSocial from '../components/FloatingSocial';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import { destroyLenis, initLenis } from '../lib/lenis';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isLoading) return;
    initLenis();
    return destroyLenis;
  }, [isLoading]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#f6f7ef] text-zinc-950 transition-colors duration-500 dark:bg-[#0c0f0d] dark:text-zinc-50">
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(22,24,29,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,24,29,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60 dark:bg-[linear-gradient(to_right,rgba(246,247,239,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(246,247,239,0.08)_1px,transparent_1px)]"></div>
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(115deg,rgba(16,185,129,0.12),transparent_30%,rgba(56,189,248,0.1)_58%,rgba(251,191,36,0.1)_82%,transparent_94%)] dark:bg-[linear-gradient(115deg,rgba(16,185,129,0.1),transparent_30%,rgba(56,189,248,0.09)_58%,rgba(251,191,36,0.08)_82%,transparent_94%)]"></div>
        <FloatingSocial />
        <FloatingEmail />
        <div className="animate-page-in">
          <Header />
          <Hero />
          <Experience />
          <TechStack />
          <Blog />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
