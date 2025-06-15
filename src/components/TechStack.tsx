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
                bg-white dark:bg-white/5
                backdrop-blur-lg rounded-lg p-6
                border border-gray-200 dark:border-white/10
                hover:border-sky-300 dark:hover:border-sky-500/30
                transition-all duration-300
                shadow-md hover:shadow-lg hover:shadow-sky-100/30 dark:hover:shadow-sky-500/10
              `}
              style={{ boxShadow: "0 4px 32px 0 rgba(175, 192, 255, 0.06)" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`
                      bg-sky-100 text-sky-800 
                      dark:bg-sky-500/10 dark:text-white
                      px-4 py-2 rounded-lg text-center 
                      border border-sky-200 dark:border-sky-500/20 
                      hover:border-sky-400 transition-colors
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
