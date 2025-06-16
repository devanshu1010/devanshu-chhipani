
import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 dark:bg-black overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* DAC text with enhanced animation */}
        <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-mono tracking-wider mb-8 relative">
          <div className="flex">
            {['D', 'A', 'C'].map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-pulse opacity-0"
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '2s',
                  animationFillMode: 'forwards'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold font-mono tracking-wider text-sky-400/30 blur-lg animate-pulse">
            DAC
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 md:w-80 h-1 bg-slate-700 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-sky-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading text */}
        <div className="text-slate-400 text-sm md:text-base font-medium tracking-wide">
          {progress < 30 && "Initializing..."}
          {progress >= 30 && progress < 60 && "Loading components..."}
          {progress >= 60 && progress < 90 && "Almost ready..."}
          {progress >= 90 && "Welcome!"}
        </div>
        
        {/* Percentage */}
        <div className="text-white/60 text-xs md:text-sm font-mono mt-2">
          {progress}%
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-sky-500/30 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-sky-500/30 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-sky-500/30 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-sky-500/30 animate-pulse"></div>
    </div>
  );
};

export default DacLoader;
