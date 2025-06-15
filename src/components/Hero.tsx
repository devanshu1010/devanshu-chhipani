
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer creating beautiful, functional, and user-centered digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('experience')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button className="border border-gray-400 dark:border-white/30 text-gray-700 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200">
              Download CV
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('experience')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="text-gray-600 dark:text-white/60" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
