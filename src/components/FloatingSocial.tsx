import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-indigo-600 dark:hover:text-indigo-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-indigo-600 dark:hover:text-indigo-400"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-indigo-600 dark:hover:text-indigo-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-indigo-600 dark:hover:text-indigo-400"
  }
];

const FloatingSocial: React.FC = () => {
  return (
    <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Social icons */}
      <div className="mb-8 flex flex-col space-y-6">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-500 transition-all duration-300 hover:-translate-y-1 dark:text-zinc-400 ${social.color}`}
              aria-label={social.name}
            >
              <IconComponent size={20} />
            </a>
          );
        })}
      </div>
      
      {/* Vertical line */}
      <div className="h-24 w-px bg-gradient-to-b from-indigo-500/40 to-zinc-950/15 dark:from-indigo-400/40 dark:to-white/15"></div>
    </div>
  );
};

export default FloatingSocial;
