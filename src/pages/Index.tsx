
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
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('loaderShown'));

useEffect(() => {
    if (isLoading) return;
    initLenis();
    return destroyLenis;
  }, [isLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', '1');
    setIsLoading(false);
  };

  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-950 transition-colors duration-500 dark:bg-black dark:text-zinc-50">
      <div className="relative">
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
