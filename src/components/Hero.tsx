
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent dark:from-blue-400/5 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white mb-2">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Devanshu
              </span>
              <span className="block text-gray-900 dark:text-white">
                Chhipani
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              A passionate{' '}
              <span className="font-semibold text-gray-900 dark:text-white">full-stack developer</span>
              {' '}creating beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('experience')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-white rounded-2xl font-semibold text-lg hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:scale-105 active:scale-95">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection('experience')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        >
          <div className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform">
            <ArrowDown className="text-gray-600 dark:text-gray-400 w-6 h-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
