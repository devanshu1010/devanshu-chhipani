import React from "react";
import LogoMark from "./LogoMark";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-black/[0.08] dark:border-white/[0.08] py-8 px-6 mt-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo mark only */}
        <div className="flex items-center text-zinc-500 dark:text-zinc-500">
          <LogoMark compact />
        </div>

        {/* Center: Links */}
        <div className="flex items-center gap-6 text-[13px] font-medium text-zinc-500 dark:text-zinc-500">
          <a
            href="https://github.com/devanshu1010"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/devanshu-chhipani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="mailto:work.devanshuchhipani@gmail.com"
            className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right */}
        <div className="text-[13px] text-zinc-500 dark:text-zinc-500 font-mono">
          &copy; {new Date().getFullYear()} Devanshu Chhipani
        </div>
      </div>
    </footer>
  );
};

export default Footer;

