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
    fullDescription: "Led the development of complex web applications for government agencies and Fortune 500 companies. Implemented scalable architecture patterns, optimized performance by 40%, and mentored junior developers. Built responsive dashboards handling millions of data points with real-time updates.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
    achievements: [
      "Reduced application load time by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline"
    ]
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "Jan 8, 2025",
    present: false,
    description: "Built fintech dashboards, integrated APIs, and optimized for user experience and compliance with modern security standards.",
    fullDescription: "Developed secure fintech applications handling sensitive financial data. Integrated payment gateways, implemented OAuth 2.0 authentication, and ensured PCI DSS compliance. Created intuitive user interfaces for complex financial operations.",
    technologies: ["React", "Next.js", "TailwindCSS", "REST APIs"],
    achievements: [
      "Integrated 5+ payment gateways",
      "Achieved 99.9% uptime",
      "Reduced transaction processing time by 30%"
    ]
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=128&q=80",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description: "Created interactive & practical guides on Next.js, TypeScript, and React for thousands of developers worldwide.",
    fullDescription: "Authored comprehensive technical courses and interactive tutorials reaching over 50,000 developers globally. Created hands-on projects, coding challenges, and best practices guides. Collaborated with engineering teams to ensure content accuracy and relevance.",
    technologies: ["Next.js", "TypeScript", "React", "Technical Writing"],
    achievements: [
      "Reached 50,000+ developers",
      "95% positive feedback rating",
      "Published 12 comprehensive courses"
    ]
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=128&q=80",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description: "Wrote technical articles on JavaScript frameworks for a global audience, reaching over 100k+ readers monthly.",
    fullDescription: "Produced high-quality technical content covering modern web development topics. Articles consistently ranked in top search results and were shared across developer communities. Collaborated with open-source maintainers to create accurate, up-to-date content.",
    technologies: ["JavaScript", "React", "Vue.js", "Content Creation"],
    achievements: [
      "100k+ monthly readers",
      "20+ published articles",
      "Featured in dev communities"
    ]
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

interface ExperienceCardProps {
  exp: typeof experienceData[0];
  index: number;
  isRightColumn?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index, isRightColumn = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
      {/* Timeline dot for desktop - positioned relative to this card - NO ANIMATIONS */}
      <div className="hidden md:block absolute top-8 z-20" style={{
        left: isRightColumn ? '-2.5rem' : 'calc(100% + 1.5rem)'
      }}>
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-4 border-white dark:border-gray-900 shadow-lg"></div>
      </div>

      {/* Card */}
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full flex flex-col group hover:bg-white/90 dark:hover:bg-black/90 h-full">
        {/* Header Section */}
        <div className="flex items-start gap-2 sm:gap-3 mb-3 flex-shrink-0">
          <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl object-cover border border-gray-200 dark:border-gray-600"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 truncate transition-colors duration-300">{exp.company}</h3>
            <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-1 transition-colors duration-300">{exp.position}</p>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide">
              {formatDate(exp.start)} – {exp.present ? (
                <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
              ) : formatDate(exp.end)}
            </p>
          </div>
        </div>
        
        {/* Description Section - Flexible height */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className={`text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-500 ease-in-out ${isExpanded ? 'mb-4' : 'mb-2'}`}>
            <p className="mb-2">{isExpanded ? exp.fullDescription : exp.description}</p>
            
            {/* Achievements Section - Only visible when expanded */}
            {isExpanded && (
              <div className="mt-3 animate-fade-in">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${achIndex * 100}ms` }}>
                      <span className="text-blue-500 dark:text-blue-400 mt-1 transition-colors duration-300">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Read more/less button */}
          <div className="flex-shrink-0 mb-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-all duration-200 hover:scale-105"
            >
              {isExpanded ? (
                <>
                  Show less
                  <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Read more
                  <svg className="w-3 h-3 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
        
        {/* Technologies Section - Fixed at bottom */}
        <div className="flex-shrink-0">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                style={{ animationDelay: `${techIndex * 50}ms` }}
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
    <section id="experience" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Fixed max-width container */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Work{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-anim">
              Experience
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            My journey through different roles and companies, building experiences that matter.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop: Two Column Layout with Center Line */}
          <div className="hidden md:block">
            {/* Center Timeline Line - NO ANIMATIONS */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-purple-500/50 dark:from-blue-400/50 dark:via-blue-400/30 dark:to-purple-400/50 z-10"></div>
            
            <div className="grid grid-cols-2 gap-16 items-stretch relative">
              {/* Left Column */}
              <div className="space-y-16 text-left">
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
              
              {/* Right Column */}
              <div className="space-y-16 lg:mt-[175px] text-left">
                {experienceData.map((exp, index) => {
                  if (index % 2 === 1) {
                    return (
                      <ExperienceCard 
                        key={exp.company}
                        exp={exp} 
                        index={index} 
                        isRightColumn={true}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Single Column */}
          <div className="md:hidden space-y-8">
            {experienceData.map((exp, index) => (
              <div key={exp.company} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                {/* Mobile Timeline - NO ANIMATIONS */}
                <div className="absolute left-4 top-6 z-10">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-2 border-white dark:border-gray-900 shadow-lg"></div>
                  {index < experienceData.length - 1 && (
                    <div className="absolute left-1/2 top-3 transform -translate-x-px w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-purple-500/50 dark:from-blue-400/50 dark:to-purple-400/50"></div>
                  )}
                </div>
                
                {/* Mobile Card */}
                <div className="ml-12">
                  <div className="group bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[320px] flex flex-col hover:bg-white/90 dark:hover:bg-black/90">
                    {/* ... keep existing code (mobile card content) */}
                    <div className="flex items-start gap-3 mb-3 flex-shrink-0">
                      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-10 h-10 rounded-xl object-cover border border-gray-200 dark:border-gray-600"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 truncate transition-colors duration-300">{exp.company}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1 transition-colors duration-300">{exp.position}</p>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wide">
                          {formatDate(exp.start)} – {exp.present ? (
                            <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
                          ) : formatDate(exp.end)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-3 flex-1 transition-colors duration-300">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
