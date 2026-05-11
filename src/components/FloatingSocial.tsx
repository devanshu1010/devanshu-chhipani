import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-amber-700 dark:hover:text-amber-300"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-emerald-700 dark:hover:text-sky-300"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-sky-700 dark:hover:text-sky-300"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-amber-700 dark:hover:text-amber-300"
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
      <div className="h-24 w-px bg-gradient-to-b from-amber-500/45 to-zinc-950/20 dark:from-amber-300/45 dark:to-white/20"></div>
    </div>
  );
};

export default FloatingSocial;
