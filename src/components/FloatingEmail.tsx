import React from "react";

const FloatingEmail: React.FC = () => {
  return (
    <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Email link */}
      <div className="mb-8">
        <a
          href="mailto:your.email@example.com"
          className="text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 transform hover:-translate-y-1 text-sm font-mono tracking-wider"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          your.email@example.com
        </a>
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-24 bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );
};

export default FloatingEmail;