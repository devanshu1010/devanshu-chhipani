
import React, { useState } from "react";
import { Code, Database, Wrench, Sparkles, Star } from 'lucide-react';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const techCategories = [
    {
      category: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", icon: "⚛️", proficiency: "Expert" },
        { name: "TypeScript", icon: "📘", proficiency: "Advanced" },
        { name: "Next.js", icon: "▲", proficiency: "Advanced" },
        { name: "Tailwind CSS", icon: "🎨", proficiency: "Expert" },
        { name: "Vue.js", icon: "💚", proficiency: "Intermediate" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: "🟢", proficiency: "Advanced" },
        { name: "Express", icon: "🚀", proficiency: "Advanced" },
        { name: "Python", icon: "🐍", proficiency: "Intermediate" },
        { name: "PostgreSQL", icon: "🐘", proficiency: "Advanced" },
        { name: "MongoDB", icon: "🍃", proficiency: "Intermediate" }
      ]
    },
    {
      category: "Tools & Cloud",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Git", icon: "📦", proficiency: "Expert" },
        { name: "Docker", icon: "🐳", proficiency: "Intermediate" },
        { name: "AWS", icon: "☁️", proficiency: "Intermediate" },
        { name: "Vercel", icon: "◢", proficiency: "Advanced" },
        { name: "Figma", icon: "🎯", proficiency: "Advanced" }
      ]
    }
  ];

  const getProficiencyStars = (proficiency: string) => {
    const levels = {
      "Expert": 5,
      "Advanced": 4,
      "Intermediate": 3,
      "Beginner": 2
    };
    return levels[proficiency as keyof typeof levels] || 3;
  };

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-black dark:via-gray-950 dark:to-blue-950/30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Love Working With
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern tools and technologies that help me build amazing digital experiences
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === index
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techCategories[selectedCategory].technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="group p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-bold text-gray-900 dark:text-white text-lg">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-black/80 px-3 py-1 rounded-full">
                      {tech.proficiency}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-4 h-4 ${
                          starIndex < getProficiencyStars(tech.proficiency)
                            ? `fill-current text-gradient-to-r ${techCategories[selectedCategory].color.replace('from-', 'text-').replace(' to-', ' ')}`
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                        fill={starIndex < getProficiencyStars(tech.proficiency) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
