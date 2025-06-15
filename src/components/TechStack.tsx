
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
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">{category.category}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white px-4 py-2 rounded-lg text-center border border-purple-500/20 hover:border-purple-400/40 transition-colors"
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
