
import React, { useEffect, useState } from "react";

const DacLoader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => {
        onComplete?.();
      }, 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900 transition-all duration-500 ${
        isFinished ? 'translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Logo container */}
      <div className="relative">
        {/* Main logo */}
        <div 
          className={`text-5xl md:text-6xl font-mono font-semibold text-emerald-400 transition-all duration-700 delay-200 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          DAC
        </div>
        
        {/* Hexagon border animation */}
        <svg
          className={`absolute inset-0 w-full h-full transition-all duration-1000 delay-500 ${
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,1 90,25 90,75 50,99 10,75 10,25"
            stroke="#10b981"
            strokeWidth="1"
            fill="none"
            className="animate-draw-hexagon"
            strokeDasharray="300"
            strokeDashoffset="300"
            style={{
              animation: isMounted ? 'draw-hexagon 1s ease-in-out 0.8s forwards' : 'none'
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes draw-hexagon {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DacLoader;
