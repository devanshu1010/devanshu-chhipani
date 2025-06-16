import React from "react";

// Enhanced experience data with more details
const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=128&q=80",
    start: "Nov 25, 2024",
    end: "",
    present: true,
    description: "Developed & maintained dynamic, user-centric web apps for top organizations and government agencies using React, TypeScript, and modern development practices.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "Jan 8, 2025",
    present: false,
    description: "Built fintech dashboards, integrated APIs, and optimized for user experience and compliance with modern security standards.",
    technologies: ["React", "Next.js", "TailwindCSS", "REST APIs"]
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=128&q=80",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description: "Created interactive & practical guides on Next.js, TypeScript, and React for thousands of developers worldwide.",
    technologies: ["Next.js", "TypeScript", "React", "Technical Writing"]
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=128&q=80",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description: "Wrote technical articles on JavaScript frameworks for a global audience, reaching over 100k+ readers monthly.",
    technologies: ["JavaScript", "React", "Vue.js", "Content Creation"]
  },
];

// Helper to format dates
function formatDate(str) {
  if (!str) return "";
  const d = new Date(str);
  if (isNaN(d.getTime())) return str.toUpperCase();
  return d
    .toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
    .replace(/,/g, "");
}

const ExperienceCard = ({ exp, index, isRightColumn = false }) => {
  return (
    <div className="relative" style={{ marginBottom: '74px' }}> {/* 33% of 224px for all cards */}
      {/* Timeline dot and vertical line - reverted to original */}
      <div className="absolute left-0 top-6 z-10">
        <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-white dark:border-slate-900 shadow-lg shadow-sky-500/30"></div>
        {/* Vertical timeline line - matches container height minus some padding */}
        <div className="absolute left-1/2 top-3 transform -translate-x-px w-0.5 h-36 bg-gradient-to-b from-sky-400 to-sky-300"></div>
      </div>
      
      {/* Card */}
      <div className="ml-12">
        <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-5 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-1 w-full h-56 flex flex-col">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-600 shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 truncate">{exp.company}</h3>
              <p className="text-sky-600 dark:text-sky-400 font-medium mb-1 text-sm">{exp.position}</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                {formatDate(exp.start)} – {exp.present ? (
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">PRESENT</span>
                ) : formatDate(exp.end)}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 flex-1 overflow-hidden">
            {exp.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full border border-sky-200 dark:border-sky-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-sky-50/30 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 dark:from-sky-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through different roles and companies, building experiences that matter.
          </p>
        </div>

        {/* Desktop/Tablet: Ladder Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 relative">
            {/* Left Column */}
            <div className="space-y-0"> {/* Remove space-y to use custom spacing */}
              {experienceData.map((exp, index) => {
                if (index % 2 === 0) {
                  return (
                    <ExperienceCard 
                      key={exp.company} 
                      exp={exp} 
                      index={index} 
                      isRightColumn={false}
                    />
                  );
                }
                return null;
              })}
            </div>
            
            {/* Right Column - offset to create ladder effect */}
            <div className="space-y-0" style={{ marginTop: '74px' }}> {/* 33% offset */}
              {experienceData.map((exp, index) => {
                if (index % 2 === 1) {
                  return (
                    <ExperienceCard 
                      key={exp.company} 
                      exp={exp} 
                      index={index} 
                      isRightColumn={false}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Single Column */}
        <div className="md:hidden space-y-6">
          {experienceData.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline dot and vertical line */}
              <div className="absolute left-0 top-6 z-10">
                <div className="w-3 h-3 rounded-full bg-sky-500 border-2 border-white dark:border-slate-900 shadow-lg shadow-sky-500/30"></div>
                {index < experienceData.length - 1 && (
                  <div className="absolute left-1/2 top-3 transform -translate-x-px w-0.5 h-48 bg-gradient-to-b from-sky-400 to-sky-300"></div>
                )}
              </div>
              
              {/* Card */}
              <div className="ml-12">
                <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-5 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-1 w-full h-56 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-600 shadow-md"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 truncate">{exp.company}</h3>
                      <p className="text-sky-600 dark:text-sky-400 font-medium mb-1 text-sm">{exp.position}</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                        {formatDate(exp.start)} – {exp.present ? (
                          <span className="text-emerald-500 dark:text-emerald-400 font-bold">PRESENT</span>
                        ) : formatDate(exp.end)}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 flex-1 overflow-hidden">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full border border-sky-200 dark:border-sky-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;