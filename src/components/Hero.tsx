
import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-gray-900/50 dark:via-black/30 dark:to-gray-900/50"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-sky-200/20 via-blue-200/15 to-transparent dark:from-sky-500/10 dark:via-blue-500/8 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/20 via-sky-200/15 to-transparent dark:from-blue-500/10 dark:via-sky-500/8 dark:to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Frontend Engineer specializing in React, TypeScript, and modern web technologies. 
          I create beautiful, performant web applications that deliver exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToExperience}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
