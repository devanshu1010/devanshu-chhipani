import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-sky-500"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-pink-500"
  }
];

const FloatingSocial: React.FC = () => {
  return (
    <div className="fixed left-8 bottom-0 z-40 hidden lg:flex flex-col items-center">
      {/* Social icons */}
      <div className="flex flex-col space-y-6 mb-8">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
              aria-label={social.name}
            >
              <IconComponent size={20} />
            </a>
          );
        })}
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-24 bg-gray-300 dark:bg-gray-600"></div>
    </div>
  );
};

export default FloatingSocial;