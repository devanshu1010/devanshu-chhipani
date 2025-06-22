
import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Get the current theme from the document
    const getTheme = () => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };

    // Set initial theme
    setCurrentTheme(getTheme());

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setCurrentTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Trigger mount animation immediately
    setIsMounted(true);
    
    // Timer for completion
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete?.();
      }, 300);
    }, 2000);

    return () => {
      clearTimeout(finishTimer);
      observer.disconnect();
    };
  }, [onComplete]);

  const hexPoints = Array.from({ length: 6 })
    .map((_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = 60 + 50 * Math.cos(angle);
      const y = 60 + 50 * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ease-in-out ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}
      style={{ 
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)'
      }}
    >
      {/* Main logo container */}
      <div className="relative flex items-center justify-center">
        {/* Perfect hexagon with bold lines */}
        <svg
          className="absolute w-32 h-32 md:w-40 md:h-40"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points={hexPoints}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className={`transition-all duration-1000 ease-out ${
              isMounted ? 'opacity-100' : 'opacity-0'
            } ${currentTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: '314',
              strokeDashoffset: isMounted ? '0' : '314',
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, opacity 0.3s ease-out'
            }}
          />
        </svg>
        
        {/* DAC text centered perfectly in hexagon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-1">
            {/* D */}
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 -translate-x-8' 
                  : isFinished 
                    ? 'opacity-0 -translate-x-16' 
                    : 'opacity-100 translate-x-0'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.7s' : '0s' }}
            >
              D
            </span>
            {/* A */}
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 scale-75' 
                  : isFinished 
                    ? 'opacity-0 scale-75' 
                    : 'opacity-100 scale-100'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.9s' : '0s' }}
            >
              A
            </span>
            {/* C */}
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 translate-x-8' 
                  : isFinished 
                    ? 'opacity-0 translate-x-16' 
                    : 'opacity-100 translate-x-0'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.7s' : '0s' }}
            >
              C
            </span>
          </div>
        </div>
        
        {/* Inner glow effect with theme colors */}
        <div 
          className={`absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-1200 ease-out ${
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: currentTheme === 'dark' 
              ? 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transitionDelay: '1s'
          }}
        />
      </div>
      
      {/* Loading dots with theme colors */}
      <div className={`absolute bottom-20 flex space-x-3 transition-all duration-700 ease-out ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
      style={{
        transitionDelay: '1.2s'
      }}>
        <div 
          className={`w-2 h-2 rounded-full ${
            currentTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0ms'
          }}
        />
        <div 
          className={`w-2 h-2 rounded-full ${
            currentTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0.2s'
          }}
        />
        <div 
          className={`w-2 h-2 rounded-full ${
            currentTheme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
          }`}
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0.4s'
          }}
        />
      </div>
    </div>
  );
};

export default DacLoader;
