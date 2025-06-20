
import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Trigger mount animation
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    
    // Finish loader after delay
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete?.();
      }, 800);
    }, 2500);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <>
      <style>{`
        @keyframes draw-hexagon {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse-logo {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-draw-hexagon {
          animation: draw-hexagon 1.5s ease-out 1s forwards;
        }
        
        .animate-pulse-logo {
          animation: pulse-logo 2s ease-in-out infinite;
        }
      `}</style>
      
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-gray-900 transition-all duration-700 ease-in-out ${
          isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Main logo container */}
        <div className="relative flex items-center justify-center">
          {/* Background hexagon */}
          <svg
            className="absolute w-32 h-32 md:w-40 md:h-40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className={`text-emerald-500 dark:text-emerald-400 transition-all duration-500 ${
                isMounted ? 'animate-draw-hexagon opacity-100' : 'opacity-0'
              }`}
              strokeDasharray="300"
              strokeDashoffset="300"
            />
          </svg>
          
          {/* DAC text */}
          <div 
            className={`relative z-10 text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white transition-all duration-1000 delay-300 ${
              isMounted ? 'opacity-100 translate-y-0 animate-pulse-logo' : 'opacity-0 translate-y-8'
            }`}
          >
            DAC
          </div>
          
          {/* Inner glow effect */}
          <div 
            className={`absolute inset-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 blur-xl transition-all duration-1000 delay-500 ${
              isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
        </div>
        
        {/* Loading dots */}
        <div className={`absolute bottom-20 flex space-x-2 transition-all duration-500 delay-1000 ${
          isMounted ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </>
  );
};

export default DacLoader;
