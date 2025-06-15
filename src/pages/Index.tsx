import { useEffect } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';

const Index = () => {
  useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark');
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black transition-all duration-500">
      <div className="relative">
        {/* Background Pattern */}
        {/* Less visible on true black, kept for subtlety */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(40,40,40,.08)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(40,40,40,.06)_50%,transparent_75%,transparent)] bg-[length:20px_20px] pointer-events-none"></div>

        {/* Animated gradient orbs, now more subtle on black */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-900/25 to-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/25 to-sky-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
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