import React from "react";

// Dummy logo images (replace or update as needed)
const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=128&q=80",
    start: "Nov 25, 2024",
    end: "Jan 8, 2025",
    present: false,
    description:
      "Developed & maintained dynamic, user-centric web apps for top organizations and government agencies.",
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=128&q=80",
    start: "Sep 11, 2024",
    end: "",
    present: true,
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

// The card component for each experience item
const ExperienceCard: React.FC<{
  exp: typeof experienceData[number];
  align: "left" | "right";
  isLast: boolean;
}> = ({ exp, align, isLast }) => (
  <div className={`relative w-full flex ${align === "left" ? "justify-end" : "justify-start"} group`}>
    <div
      className={`
        flex flex-col items-center absolute top-6
        ${align === "left" ? "right-[-38px]" : "left-[-38px]"}
        z-10
        hidden md:flex
      `}
    >
      {/* Timeline dot */}
      <span className="w-5 h-5 rounded-full bg-sky-500 border-4 border-white dark:border-[#151719] shadow-md"></span>
      {/* The vertical line */}
      {!isLast && (
        <span className="flex-1 w-[2px] bg-gradient-to-b from-sky-500/80 to-transparent dark:from-sky-400/60 dark:to-transparent" style={{ minHeight: 56 }} />
      )}
    </div>
    <div
      className={`
        bg-white dark:bg-[#181c1f]
        border border-neutral-200 dark:border-neutral-800 shadow-xl
        rounded-2xl p-5 sm:p-6 max-w-xl w-full
        transition-colors
        group-hover:shadow-2xl
        flex gap-6 relative z-20
        ${align === "left" ? "md:ml-[48px]" : "md:mr-[48px]"}
      `}
    >
      <img
        src={exp.logo}
        alt={exp.company}
        className="w-14 h-14 rounded-xl object-cover border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md shrink-0"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-neutral-800 dark:text-white text-lg">{exp.company}</span>
        <span className="text-sky-700 dark:text-sky-300 text-base font-medium">{exp.position}</span>
        <span className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {formatDate(exp.start)}
          {" – "}
          {exp.present ? (
            <span className="text-green-500 dark:text-green-400 font-bold">PRESENT</span>
          ) : (
            formatDate(exp.end)
          )}
        </span>
        <span className="mt-2 text-[0.97rem] text-neutral-600 dark:text-neutral-300">{exp.description}</span>
      </div>
    </div>
  </div>
);

// Responsive and alternate-aligned time-line
const Experience: React.FC = () => {
  // Split into two columns
  const leftExperiences = experienceData.filter((_, i) => i % 2 === 0);
  const rightExperiences = experienceData.filter((_, i) => i % 2 === 1);
  const maxRows = Math.max(leftExperiences.length, rightExperiences.length);

  // Ensure both columns have equal "height" for connector symmetry
  const fillEmpty = (arr: typeof experienceData, max: number) =>
    arr.concat(Array(max - arr.length).fill(null));

  const left = fillEmpty(leftExperiences, maxRows);
  const right = fillEmpty(rightExperiences, maxRows);

  return (
    <section id="experience" className="relative z-10 w-full px-2 py-24 bg-transparent">
      <h2 className="text-center font-bold text-2xl sm:text-4xl tracking-tight mb-16 text-neutral-900 dark:text-white">
        <span className="inline-block bg-gradient-to-r from-sky-800/90 via-sky-500/80 to-blue-600/70 bg-clip-text text-transparent dark:from-sky-400/80 dark:via-blue-400/60 dark:to-sky-600/50">
          Work Experience
        </span>
      </h2>
      <div className="max-w-5xl mx-auto px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-10 relative">
        {/* Timeline line - desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 z-0"></div>
        {/* Left side */}
        <div className="flex flex-col gap-24 md:pr-6">
          {left.map((exp, idx) =>
            exp ? (
              <ExperienceCard
                exp={exp}
                align="left"
                isLast={idx === maxRows - 1 && right[maxRows - 1] === null}
                key={idx}
              />
            ) : (
              // Fill for symmetry if needed
              <div key={idx} className="hidden md:block h-[140px]" />
            )
          )}
        </div>
        {/* Right side */}
        <div className="flex flex-col gap-24 md:pl-6">
          {right.map((exp, idx) =>
            exp ? (
              <ExperienceCard
                exp={exp}
                align="right"
                isLast={idx === maxRows - 1 && left[maxRows - 1] === null}
                key={idx}
              />
            ) : (
              // Fill for symmetry if needed
              <div key={idx} className="hidden md:block h-[140px]" />
            )
          )}
        </div>
        {/* Timeline line mobile */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 z-0" />
      </div>
      {/* For mobile, render a vertical stack with timeline dots/lines */}
      <div className="md:hidden max-w-2xl mx-auto mt-12 flex flex-col gap-14 relative z-10">
        {experienceData.map((exp, idx) => (
          <div className="relative flex items-start" key={idx}>
            <div className="flex flex-col items-center mr-4">
              {/* Timeline dot */}
              <span className="w-4 h-4 mt-2 rounded-full bg-sky-500 border-4 border-white dark:border-[#151719] shadow-md"></span>
              {/* Timeline line */}
              {idx !== experienceData.length - 1 && (
                <span className="flex-1 w-[2px] bg-gradient-to-b from-sky-500/80 to-transparent dark:from-sky-400/60 dark:to-transparent" style={{ minHeight: 60 }} />
              )}
            </div>
            <div className="flex-1">
              <ExperienceCard exp={exp} align="left" isLast={idx === experienceData.length - 1} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

