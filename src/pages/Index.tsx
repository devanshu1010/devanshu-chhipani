
import { useEffect, useState } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import FloatingSocial from '../components/FloatingSocial';
import FloatingEmail from '../components/FloatingEmail';
import DacLoader from '../components/DacLoader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark');

    // Enhanced smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollPaddingTop = '0';
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }
  
  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 scroll-smooth overflow-x-hidden">
      <div className="relative w-full">
        {/* Consistent background pattern for all sections */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.06),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.06),transparent_70%)] pointer-events-none z-0"></div>

        {/* Animated gradient orbs with enhanced styling */}
        <div className="fixed top-0 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-sky-200/15 via-blue-200/10 to-transparent dark:from-sky-500/8 dark:via-blue-500/6 dark:to-transparent rounded-full blur-3xl animate-pulse shadow-2xl shadow-sky-500/5 z-0"></div>
        <div className="fixed bottom-0 right-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-200/15 via-sky-200/10 to-transparent dark:from-blue-500/8 dark:via-sky-500/6 dark:to-transparent rounded-full blur-3xl animate-pulse delay-1000 shadow-2xl shadow-blue-500/5 z-0"></div>

        {/* Floating components */}
        <FloatingSocial />
        <FloatingEmail />

        {/* Main content with consistent max-width */}
        <div className="relative z-10">
          <Header />
          <div className="max-w-7xl mx-auto">
            <Hero />
            <Experience />
            <TechStack />
            <Blog />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
