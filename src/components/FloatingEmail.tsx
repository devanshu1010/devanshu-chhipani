import React from "react";

const FloatingEmail: React.FC = () => {
  return (
    <div className="fixed right-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Email link */}
      <div className="mb-8">
        <a
          href="mailto:devanshu.chhipani@gmail.com"
          className="font-mono text-sm text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:text-amber-700 dark:text-zinc-400 dark:hover:text-amber-300"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          devanshu.chhipani@gmail.com
        </a>
      </div>
      
      {/* Vertical line */}
      <div className="h-24 w-px bg-gradient-to-b from-amber-500/45 to-zinc-950/20 dark:from-amber-300/45 dark:to-white/20"></div>
    </div>
  );
};

export default FloatingEmail;