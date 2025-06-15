const Experience = () => {
  const experiences = [
    {
      company: "Tech Company",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "Vue.js", "Sass", "Figma"]
    },
    {
      company: "Startup",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Built and maintained various web applications while learning modern development practices and agile methodologies.",
      technologies: ["JavaScript", "HTML", "CSS", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`
                bg-white dark:bg-white/5
                backdrop-blur-lg rounded-lg p-6
                border border-gray-200 dark:border-white/10
                hover:border-sky-300 dark:hover:border-sky-500/30
                shadow-md hover:shadow-lg hover:shadow-sky-200/25 dark:hover:shadow-sky-500/10
                transition-all duration-300
              `}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                  <p className="text-sky-600 dark:text-sky-300 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm lg:text-base mt-2 lg:mt-0">{exp.duration}</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`
                      bg-sky-100 text-sky-800
                      dark:bg-sky-500/20 dark:text-sky-300
                      px-3 py-1 rounded-full text-sm border border-sky-200 dark:border-sky-500/30
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
