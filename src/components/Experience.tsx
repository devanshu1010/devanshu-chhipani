
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
function formatDate(str: string) {
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

const ExperienceCard: React.FC<{
  exp: typeof experienceData[number];
  index: number;
}> = ({ exp, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex w-full mb-8 md:mb-12">
      {/* Timeline line for mobile */}
      <div className="md:hidden absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 to-transparent"></div>
      
      {/* Timeline dot */}
      <div className={`absolute z-10 ${isEven ? 'md:left-1/2 md:-translate-x-1/2' : 'md:left-1/2 md:-translate-x-1/2'} left-6 md:left-1/2 transform -translate-x-1/2 top-8`}>
        <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-slate-900 shadow-lg shadow-sky-500/30"></div>
      </div>

      {/* Content */}
      <div className={`flex w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Spacer for desktop */}
        <div className="hidden md:block w-1/2"></div>
        
        {/* Card */}
        <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
          <div className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/10 dark:hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-600 shadow-md"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{exp.company}</h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium mb-2">{exp.position}</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                  {formatDate(exp.start)} – {exp.present ? (
                    <span className="text-emerald-500 dark:text-emerald-400 font-bold">PRESENT</span>
                  ) : formatDate(exp.end)}
                </p>
              </div>
            </div>
            
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 rounded-full border border-sky-200 dark:border-sky-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-sky-50/30 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Work{' '}
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 dark:from-sky-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey through different roles and companies, building experiences that matter.
          </p>
        </div>

        <div className="relative">
          {/* Central timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-400 via-sky-300 to-transparent transform -translate-x-px"></div>
          
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
