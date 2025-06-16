
import React from "react";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "Next.js", level: 85, color: "from-gray-800 to-black" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-500" },
        { name: "Vue.js", level: 75, color: "from-green-500 to-emerald-500" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 88, color: "from-green-600 to-green-800" },
        { name: "Express", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Python", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 82, color: "from-blue-700 to-indigo-700" },
        { name: "MongoDB", level: 78, color: "from-green-700 to-green-900" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 70, color: "from-yellow-600 to-orange-600" },
        { name: "Vercel", level: 90, color: "from-gray-800 to-black" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-sky-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Tech{' '}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 dark:from-sky-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="group/tech">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {tech.name}
                      </span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 group-hover/tech:shadow-lg`}
                        style={{
                          width: `${tech.level}%`,
                          boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
