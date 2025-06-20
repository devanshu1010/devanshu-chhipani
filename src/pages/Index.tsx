
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
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
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
    
    // Sequential animation steps like Brittany Chiang's site
    setTimeout(() => setAnimationStep(1), 100); // Header
    setTimeout(() => setAnimationStep(2), 200); // Floating elements
    setTimeout(() => setAnimationStep(3), 400); // Hero
  };

  // Prevent flickering by not rendering content until ready
  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Consistent background with grid pattern */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent dark:from-blue-500/10 dark:via-purple-500/5 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-blue-500/5 to-transparent dark:from-purple-500/10 dark:via-blue-500/5 dark:to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/8 via-purple-500/4 to-transparent dark:from-blue-500/8 dark:via-purple-500/4 dark:to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header with sequential animation */}
      <div className={`transition-all duration-700 ease-out ${
        animationStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <Header />
      </div>

      {/* Floating components with sequential animation */}
      <div className={`transition-all duration-700 ease-out ${
        animationStep >= 2 ? 'opacity-100' : 'opacity-0'
      }`}>
        <FloatingSocial />
        <FloatingEmail />
      </div>

      {/* Main content with consistent max-width and sequential animations */}
      <div className="relative z-10">
        <div className="space-y-0">
          {/* Hero section */}
          <section id="home" className={`min-h-screen flex items-center justify-center transition-all duration-800 ease-out ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Hero />
          </section>
          
          {/* Scroll-animated sections */}
          <ScrollAnimatedSection>
            <section id="experience" className="py-20">
              <Experience />
            </section>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection delay={200}>
            <section id="tech" className="py-20">
              <TechStack />
            </section>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection delay={400}>
            <section id="blog" className="py-20">
              <Blog />
            </section>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection delay={600}>
            <section id="contact" className="py-20">
              <Contact />
            </section>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
