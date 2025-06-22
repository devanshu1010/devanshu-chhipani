import { useEffect, useState } from "react";

const DacLoader = ({ onComplete }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const getTheme = () => {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };

    setCurrentTheme(getTheme());

    const observer = new MutationObserver(() => {
      setCurrentTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    setIsMounted(true);
    
    // Reduced timing for smoother transition
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      // Immediate callback without additional delay
      setTimeout(() => {
        onComplete?.();
      }, 100); // Reduced from 300ms to 100ms
    }, 1800); // Reduced from 2000ms to 1800ms

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ease-in-out ${
        isFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${currentTheme === 'dark' ? 'bg-gray-900' : 'bg-slate-50'}`}
      style={{ 
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)'
      }}
    >
      <div className="relative flex items-center justify-center">
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
        
        <div className="relative z-10 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-1">
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 transform translate-x-4' 
                  : isFinished 
                    ? 'opacity-0 transform translate-x-0 scale-75' 
                    : 'opacity-100 transform translate-x-0'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.3s' : '0s' }}
            >
              D
            </span>
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 scale-75' 
                  : isFinished 
                    ? 'opacity-0 scale-75' 
                    : 'opacity-100 scale-100'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.4s' : '0s' }}
            >
              A
            </span>
            <span
              className={`text-4xl md:text-5xl font-bold font-mono transition-all duration-700 ease-in-out
                ${!isMounted 
                  ? 'opacity-0 transform -translate-x-4' 
                  : isFinished 
                    ? 'opacity-0 transform translate-x-0 scale-75' 
                    : 'opacity-100 transform translate-x-0'
                } ${currentTheme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ transitionDelay: isMounted ? '0.3s' : '0s' }}
            >
              C
            </span>
          </div>
        </div>
        
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
    </div>
  );
};

export default DacLoader;