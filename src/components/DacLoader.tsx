import React from "react";

const DacLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 dark:bg-black">
      <div className="relative">
        {/* DAC text with animation */}
        <div className="text-6xl md:text-8xl font-bold text-white font-mono tracking-wider">
          <span className="inline-block animate-pulse delay-0">D</span>
          <span className="inline-block animate-pulse delay-200">A</span>
          <span className="inline-block animate-pulse delay-400">C</span>
        </div>
        
        {/* Animated underline */}
        <div className="mt-4 h-1 bg-sky-500 rounded-full animate-[width-grow_2s_ease-in-out_infinite] origin-left"></div>
        
        {/* Loading dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-3 h-3 bg-sky-500 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-sky-500 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-sky-400 rounded-full animate-spin reverse"></div>
      </div>
    </div>
  );
};

export default DacLoader;