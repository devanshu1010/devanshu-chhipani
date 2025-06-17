
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Calendar } from 'lucide-react';

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
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50 dark:from-blue-400/50 dark:to-purple-400/50"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 border-2 border-white dark:border-gray-900 shadow-lg"></div>
      
      {/* Card */}
      <div className="ml-8 pb-12">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {exp.company}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {exp.position}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>
                  {formatDate(exp.start)} – {exp.present ? (
                    <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
                  ) : formatDate(exp.end)}
                </span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {isExpanded ? exp.fullDescription : exp.description}
            </p>
            
            {/* Achievements (only when expanded) */}
            {isExpanded && exp.achievements && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey through different roles and companies, building experiences that matter.
          </p>
        </div>

        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
