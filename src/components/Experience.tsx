
import React from "react";

// Dummy logo images (replace or update as needed)
const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=128&q=80",
    start: "Nov 25, 2024",
    end: "",
    present: true,
    description:
      "Developed & maintained dynamic, user-centric web apps for top organizations and government agencies.",
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "Jan 8, 2025",
    present: false,
    description:
      "Built fintech dashboards, integrated APIs, and optimized for user experience and compliance.",
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=128&q=80",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description:
      "Created interactive & practical guides on Next.js, TypeScript, and React.",
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=128&q=80",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description:
      "Wrote technical articles on JavaScript frameworks for a global audience.",
  },
];

// Helper to format dates succinctly
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
  align: "left" | "right";
  isLast: boolean;
}> = ({ exp, align, isLast }) => (
  <div className={`relative w-full flex ${align === "left" ? "justify-end pr-8" : "justify-start pl-8"} group`}>
    {/* Timeline connector for desktop */}
    <div
      className={`
        absolute top-6 z-10 hidden md:flex flex-col items-center
        ${align === "left" ? "right-0" : "left-0"}
      `}
    >
      {/* Timeline dot */}
      <div className="w-4 h-4 rounded-full bg-sky-500 dark:bg-sky-400 border-4 border-white dark:border-gray-900 shadow-lg"></div>
      {/* Timeline line */}
      {!isLast && (
        <div className="w-0.5 bg-gray-300 dark:bg-gray-600 flex-1" style={{ minHeight: "80px" }}></div>
      )}
    </div>

    <div
      className={`
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700 
        rounded-xl p-6 max-w-md w-full
        shadow-lg hover:shadow-xl
        transition-all duration-300
        relative z-20
      `}
    >
      <div className="flex items-start gap-4">
        <img
          src={exp.logo}
          alt={exp.company}
          className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm shrink-0"
        />
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{exp.company}</h3>
          <p className="text-sky-600 dark:text-sky-400 text-base font-medium">{exp.position}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {formatDate(exp.start)}
            {" – "}
            {exp.present ? (
              <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
            ) : (
              formatDate(exp.end)
            )}
          </p>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main Experience component
const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 w-full px-4 py-24 bg-transparent">
      <h2 className="text-center font-bold text-3xl sm:text-4xl tracking-tight mb-16 text-gray-900 dark:text-white">
        <span className="inline-block bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-sky-300 dark:to-blue-400">
          Work Experience
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Central timeline line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-x-px"></div>

        {/* Desktop layout */}
        <div className="hidden md:block space-y-8">
          {experienceData.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              align={idx % 2 === 0 ? "left" : "right"}
              isLast={idx === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-6 relative">
          {/* Mobile timeline line */}
          <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative flex items-start">
              {/* Mobile timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-sky-500 dark:bg-sky-400 border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 z-10"></div>
              
              <div className="ml-12 w-full">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-lg object-cover border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm shrink-0"
                    />
                    <div className="flex flex-col flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{exp.company}</h3>
                      <p className="text-sky-600 dark:text-sky-400 text-base font-medium">{exp.position}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {formatDate(exp.start)}
                        {" – "}
                        {exp.present ? (
                          <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
                        ) : (
                          formatDate(exp.end)
                        )}
                      </p>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
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