import { useEffect } from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';

const Index = () => {
  useEffect(() => {
    // Enable smooth scroll only
    // Force dark mode always
    document.documentElement.classList.add('dark');

    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <div className={`
      min-h-screen 
      transition-all duration-500
      bg-gradient-to-br
      from-white via-neutral-100 to-white
      dark:from-black dark:via-neutral-900 dark:to-black
    `}>
      <div className="relative">
        {/* Background Pattern - less opacity for light mode */}
        <div className={`
          absolute inset-0 
          bg-[linear-gradient(45deg,transparent_25%,rgba(180,180,180,0.04)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(170,170,170,0.03)_50%,transparent_75%,transparent)]
          dark:bg-[linear-gradient(45deg,transparent_25%,rgba(40,40,40,.08)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(40,40,40,.06)_50%,transparent_75%,transparent)]
          bg-[length:20px_20px] pointer-events-none
        `}></div>

        {/* Animated gradient orbs -- more subtle in light mode */}
        <div className={`
          absolute top-0 left-1/4 w-96 h-96
          bg-gradient-to-r
          from-sky-100/30 to-blue-100/20
          dark:from-sky-900/25 dark:to-blue-900/20
          rounded-full blur-3xl animate-pulse
        `}></div>
        <div className={`
          absolute bottom-0 right-1/4 w-96 h-96
          bg-gradient-to-r
          from-blue-100/30 to-sky-100/20
          dark:from-blue-900/25 dark:to-sky-900/20
          rounded-full blur-3xl animate-pulse delay-1000
        `}></div>

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