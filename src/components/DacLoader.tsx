
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
          }, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden transition-all duration-500">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900/50 dark:via-black dark:to-gray-900/50"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-md mx-auto px-8">
        {/* Modern DAC logo */}
        <div className="relative mb-12">
          <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white font-mono tracking-wider">
            <div className="flex items-center justify-center">
              {['D', 'A', 'C'].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '1s',
                    animationFillMode: 'forwards'
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-bold font-mono tracking-wider text-blue-500/20 dark:text-blue-400/20 blur-lg">
            DAC
          </div>
        </div>
        
        {/* Progress section */}
        <div className="w-full space-y-4">
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Status text */}
          <div className="text-center space-y-2">
            <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              {progress < 25 && "Initializing components..."}
              {progress >= 25 && progress < 50 && "Loading resources..."}
              {progress >= 50 && progress < 75 && "Setting up interface..."}
              {progress >= 75 && progress < 95 && "Almost ready..."}
              {progress >= 95 && "Welcome aboard!"}
            </div>
            
            {/* Percentage */}
            <div className="text-gray-500 dark:text-gray-500 text-xs font-mono">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DacLoader;
