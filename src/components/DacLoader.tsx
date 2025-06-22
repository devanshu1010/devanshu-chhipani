import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 dark:bg-gray-900 transition-all duration-300 ease-in-out ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
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
            strokeWidth="6"
            fill="none"
            className={`text-blue-600 dark:text-blue-400 transition-all duration-1000 ease-out ${
              isMounted ? 'opacity-100' : 'opacity-0'
            }`}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: '300',
              strokeDashoffset: isMounted ? '0' : '300',
              transition: 'stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, opacity 0.3s ease-out'
            }}
          />
        </svg>
        
        {/* DAC text with true split-from-center animation */}
        <div className="relative z-10 flex items-center justify-center h-16 w-32 select-none">
          <div className="relative w-28 h-16">
            {/* D */}
            <span
              className={`absolute top-1/2 left-1/2 text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white transition-all duration-700 ease-in-out
                ${!isMounted ? 'opacity-0 -translate-x-1/2 -translate-y-1/2' : isFinished ? '-translate-x-[4.5rem] -translate-y-1/2 opacity-0' : '-translate-x-10  -translate-y-1/2 opacity-100'}`}
              style={{ transitionDelay: isMounted ? '0.7s' : '0s' }}
            >
              D
            </span>
            {/* A */}
            <span
              className={`absolute top-1/2 left-1/2 text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white transition-all duration-700 ease-in-out
                ${!isMounted ? 'opacity-0 scale-75 -translate-x-1/2 -translate-y-1/2' : isFinished ? 'opacity-0 scale-75 -translate-x-1/2 -translate-y-1/2' : 'opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2'}`}
              style={{ transitionDelay: isMounted ? '0.9s' : '0s' }}
            >
              A
            </span>
            {/* C */}
            <span
              className={`absolute top-1/2 left-1/2 text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white transition-all duration-700 ease-in-out
                ${!isMounted ? 'opacity-0 translate-x-1/2 -translate-y-1/2' : isFinished ? 'translate-x-[4.5rem] -translate-y-1/2 opacity-0' : 'translate-x-3 -translate-y-1/2 opacity-100'}`}
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
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
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
          className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0ms'
          }}
        />
        <div 
          className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
          style={{
            animation: isMounted ? 'bounce 1.4s ease-in-out infinite' : 'none',
            animationDelay: '0.2s'
          }}
        />
        <div 
          className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
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
