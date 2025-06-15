
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
    
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-all duration-500">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(148,163,184,.05)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(148,163,184,.05)_50%,transparent_75%,transparent)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <Header />
        <Hero />
        <Experience />
        <TechStack />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
