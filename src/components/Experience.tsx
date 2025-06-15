import React from "react";

const experienceData = [
  {
    company: "Optimus AI Lab",
    position: "Mid-level Frontend Engineer",
    logo: "/lovable-uploads/e548ee00-fa71-4780-9863-e8cdec22b503.png",
    start: "Nov 25, 2024",
    end: "Jan 8, 2025",
    present: false,
    description:
      "At Optimus, my work involves developing and maintaing dynamic user-centric applications and interfaces for top organizations and government agencies",
  },
  {
    company: "Paydestal",
    position: "Frontend Developer",
    logo: "/lovable-uploads/e548ee00-fa71-4780-9863-e8cdec22b503.png",
    start: "Sep 11, 2024",
    end: "",
    present: true,
    description:
      "At Paydestal, my primary roles involve collaborating with a cross-functional team to develop new fintech products and interactive dashboards using React.js, integrating APIs to display business data and transactions analytics, as well as optimizing existing applications to improve user experience and ensure product compliance",
  },
  {
    company: "Educative",
    position: "Project Author",
    logo: "/lovable-uploads/e548ee00-fa71-4780-9863-e8cdec22b503.png",
    start: "Dec 5, 2023",
    end: "Sep 16, 2024",
    present: false,
    description:
      "Technical content author tasked with creating interactive real-world tutorials, focused on topics like Next.js, TypeScript, React.",
  },
  {
    company: "Freecodecamp",
    position: "Technical Writer",
    logo: "/lovable-uploads/e548ee00-fa71-4780-9863-e8cdec22b503.png",
    start: "Aug 25, 2022",
    end: "Dec 6, 2023",
    present: false,
    description:
      "Volunteer writer for freeCodeCamp, producing technical articles around topics like nextjs, react, and JavaScript.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-sky-700/40 via-transparent to-sky-900/30 dark:from-sky-400/30 dark:to-sky-700/5 z-0 translate-x-[-50%]" />
          <div className="grid md:grid-cols-2 gap-y-16 gap-x-8 relative z-10">
            {experienceData.map((exp, idx) => {
              // Alternate alignment left/right
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={exp.company + exp.position}
                  className={`
                    flex md:items-center md:min-h-[190px] relative group
                    ${isLeft ? "md:justify-end text-left" : "md:justify-start text-left"}
                  `}
                  style={{ pointerEvents: "auto" }}
                >
                  {/* Connector dot */}
                  {/** For wide screens, place dot at the timeline */}
                  <div className={`
                    hidden md:flex flex-col items-center absolute top-0 ${isLeft ? "right-[-49px]" : "left-[-49px]"}
                  `}>
                    <span className="w-6 h-6 rounded-full bg-neutral-800 border-4 border-sky-500 flex items-center justify-center dark:bg-neutral-800 dark:border-sky-400 z-10 shadow-xl">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-4 h-4 rounded-sm object-contain"
                      />
                    </span>
                    {/* Line extend below unless last */}
                    {idx !== experienceData.length - 1 && (
                      <span className="flex-1 w-px bg-gradient-to-b from-sky-500/50 to-sky-900/0"></span>
                    )}
                  </div>
                  {/* Card */}
                  <div className={`
                    bg-[#141618]/90 dark:bg-white/5
                    rounded-xl p-6 shadow-md border border-white/10
                    min-w-[260px] md:max-w-lg
                    relative
                    transition duration-150
                    hover:shadow-sky-400/10
                    ${isLeft ? "ml-auto md:mr-8" : "mr-auto md:ml-8"}
                  `}>
                    <div className="flex items-center mb-2 md:hidden">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-8 h-8 rounded-md object-contain mr-3"
                      />
                      <span className="w-3 h-3 bg-sky-500 rounded-full"></span>
                    </div>
                    <h3 className="font-bold text-lg text-white tracking-wide mb-0 leading-snug">
                      {exp.company}
                    </h3>
                    <div className="text-base text-gray-300 font-semibold mb-0.5">{exp.position}</div>
                    <div className="uppercase tracking-widest text-xs mb-4 text-neutral-400 font-semibold flex items-center gap-2">
                      {exp.start}
                      {" - "}
                      {exp.present ? (
                        <span className="text-green-400 font-bold">PRESENT</span>
                      ) : (
                        exp.end
                      )}
                    </div>
                    <div className="text-gray-400 leading-relaxed text-[15px]">
                      {exp.description}
                    </div>
                  </div>
                  {/* For mobile, a thin vertical line at left */}
                  {idx !== experienceData.length - 1 && (
                    <div className="absolute left-4 top-12 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-sky-800/30 to-transparent md:hidden"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
