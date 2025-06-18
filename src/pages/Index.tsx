
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
    document.documentElement.style.scrollPaddingTop = '120px';
    
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
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Infinite dark background with grid pattern */}
      <div className="fixed inset-0 bg-gray-900">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-sky-500/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/8 via-blue-500/4 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating components */}
      <FloatingSocial />
      <FloatingEmail />

      {/* Header */}
      <Header />

      {/* Main content with consistent max-width and seamless sections */}
      <div className="relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Seamless sections without gaps */}
          <div className="space-y-0">
            <section id="home" className="min-h-screen flex items-center">
              <Hero />
            </section>
            
            <section id="experience" className="py-16">
              <Experience />
            </section>
            
            <section id="tech" className="py-16">
              <TechStack />
            </section>
            
            <section id="blog" className="py-16">
              <Blog />
            </section>
            
            <section id="contact" className="py-16">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
