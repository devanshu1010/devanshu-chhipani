
import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Trigger mount animation immediately
    setIsMounted(true);
    
    // Faster finish timer - reduced from 2500ms to 1800ms
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete?.();
      }, 500); // Reduced exit animation time
    }, 1800);

    return () => {
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-gray-900 transition-all duration-500 ease-in-out ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Main logo container */}
      <div className="relative flex items-center justify-center">
        {/* Background hexagon with smoother animation */}
        <svg
          className="absolute w-24 h-24 md:w-32 md:h-32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,5 85,25 85,75 50,95 15,75 15,25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className={`text-blue-600 dark:text-blue-400 transition-all duration-700 ease-out ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              strokeDasharray: '200',
              strokeDashoffset: isMounted ? '0' : '200',
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}
          />
        </svg>
        
        {/* DAC text with improved animation */}
        <div 
          className={`relative z-10 text-3xl md:text-4xl font-bold font-mono text-gray-900 dark:text-white transition-all duration-800 ease-out ${
            isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
          style={{
            transitionDelay: '0.6s'
          }}
        >
          DAC
        </div>
        
        {/* Inner glow effect */}
        <div 
          className={`absolute inset-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600/20 dark:bg-blue-400/20 blur-xl transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            transitionDelay: '0.8s'
          }}
        />
      </div>
      
      {/* Loading dots with staggered animation */}
      <div className={`absolute bottom-16 flex space-x-2 transition-all duration-500 ease-out ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: '1s'
      }}>
        <div 
          className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0ms'
          }}
        />
        <div 
          className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0.2s'
          }}
        />
        <div 
          className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
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
