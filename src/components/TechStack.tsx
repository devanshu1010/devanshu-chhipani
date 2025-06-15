
const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git", "Docker", "AWS", "Vercel", "Figma"]
    }
  ];

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`
                bg-white/80
                dark:bg-white/5
                backdrop-blur-lg rounded-lg p-6
                border border-gray-300 dark:border-white/10
                hover:border-sky-500/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-sky-500/10
              `}
              style={{ boxShadow: "0 4px 32px 0 rgba(175, 192, 255, 0.06)" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`
                      bg-gradient-to-r 
                      from-sky-100/60 to-blue-100/60 
                      dark:from-sky-500/10 dark:to-blue-500/10
                      text-gray-800 dark:text-white
                      px-4 py-2 rounded-lg text-center 
                      border border-sky-200/50 dark:border-sky-500/20 
                      hover:border-sky-400/40 transition-colors
                    `}
                  >
                    {tech}
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