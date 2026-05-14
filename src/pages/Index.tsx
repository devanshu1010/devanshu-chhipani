
import { useEffect, useState } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import CursorGlow from '../components/CursorGlow';
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
    <div className="min-h-screen bg-white text-zinc-950 transition-colors duration-500 dark:bg-black dark:text-zinc-50">
      <div className="relative">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"></div>
        <CursorGlow />
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
