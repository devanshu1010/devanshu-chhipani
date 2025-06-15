import React from "react";

// Dummy logo images (one for each company, all Unsplash placeholders for demo)
const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=128&q=80",
    start: "Nov 25, 2024",
    end: "Jan 8, 2025",
    present: false,
    description:
      "At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies",
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "",
    present: true,
    description:
      "At Paydestal, my primary roles involve collaborating with a cross-functional team to develop new fintech products and interactive dashboards using React.js, integrating APIs to display business data and transactions analytics, as well as optimizing existing applications to improve user experience and ensure product compliance",
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=128&q=80",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description:
      "Technical content author tasked with creating interactive real-world tutorials, focused on topics like Next.js, TypeScript, React.",
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=128&q=80",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description:
      "Volunteer writer for freeCodeCamp, producing technical articles around topics like nextjs, react, and JavaScript.",
  },
];

function formatDate(str: string) {
  if (!str) return "";
  const d = new Date(str);
  // Use input as fallback if parsing fails
  if (isNaN(d.getTime())) return str.toUpperCase();
  return d.toLocaleDateString("en-US", {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).toUpperCase().replace(/,/g,'');
}

const Experience: React.FC = () => {
  // Split into left and right columns for timeline alignment
  const leftItems = experienceData.filter((_, i) => i % 2 === 0);
  const rightItems = experienceData.filter((_, i) => i % 2 === 1);

  // Make sure columns are equal length for visual symmetry
  const maxRows = Math.max(leftItems.length, rightItems.length);

  // Fill with empty to preserve layout if counts are uneven
  const fillEmpty = (arr: typeof experienceData, max: number) =>
    arr.concat(Array(max - arr.length).fill(null));

  const left = fillEmpty(leftItems, maxRows);
  const right = fillEmpty(rightItems, maxRows);

  return (
    <section id="experience" className="py-20 px-2 bg-[#1a1a1a] w-full">
      <h2 className="text-center text-[2rem] sm:text-4xl font-bold text-white tracking-tight mb-20">
        Work Experience
      </h2>
      <div className="max-w-6xl mx-auto flex justify-center relative">
        {/* Timeline vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-[#222] z-0" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 w-full relative z-10">
          {/* Left column */}
          <div className="flex flex-col gap-20 relative">
            {left.map((exp, idx) => (
              <div className="flex items-start" key={idx}>
                {/* Vertical connector */}
                <div className="hidden md:flex flex-col items-center mr-6">
                  <span className="w-[68px] h-[68px] flex items-center justify-center rounded-xl bg-[#232323] shadow-lg">
                    {exp && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-11 h-11 rounded-xl object-cover"
                      />
                    )}
                  </span>
                  {/* Timeline vertical line */}
                  {idx !== maxRows - 1 && (
                    <span className="flex-1 w-[2px] bg-[#222]"></span>
                  )}
                </div>
                {/* Experience Content */}
                <div className={`flex-1 min-w-0`}>
                  {exp && (
                    <div className="mb-1">
                      <div className="font-bold text-white text-lg sm:text-xl">{exp.company}</div>
                      <div className="text-gray-200 text-[1rem] mb-1">{exp.position}</div>
                      <div className="uppercase text-xs font-semibold tracking-wider text-[#bbbbbb] mb-3">
                        {formatDate(exp.start)}
                        {" - "}
                        {exp.present ? (
                          <span className="text-green-400">PRESENT</span>
                        ) : (
                          formatDate(exp.end)
                        )}
                      </div>
                      <div className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed">{exp.description}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-20 relative">
            {right.map((exp, idx) => (
              <div className="flex items-start" key={idx}>
                {/* Vertical connector */}
                <div className="hidden md:flex flex-col items-center mr-6">
                  <span className="w-[68px] h-[68px] flex items-center justify-center rounded-xl bg-[#232323] shadow-lg">
                    {exp && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-11 h-11 rounded-xl object-cover"
                      />
                    )}
                  </span>
                  {/* Timeline vertical line */}
                  {idx !== maxRows - 1 && (
                    <span className="flex-1 w-[2px] bg-[#222]"></span>
                  )}
                </div>
                {/* Experience Content */}
                <div className={`flex-1 min-w-0`}>
                  {exp && (
                    <div className="mb-1">
                      <div className="font-bold text-white text-lg sm:text-xl">{exp.company}</div>
                      <div className="text-gray-200 text-[1rem] mb-1">{exp.position}</div>
                      <div className="uppercase text-xs font-semibold tracking-wider text-[#bbbbbb] mb-3">
                        {formatDate(exp.start)}
                        {" - "}
                        {exp.present ? (
                          <span className="text-green-400">PRESENT</span>
                        ) : (
                          formatDate(exp.end)
                        )}
                      </div>
                      <div className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed">{exp.description}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Mobile timeline: show single column with logo on left */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-[#232323] z-0" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
