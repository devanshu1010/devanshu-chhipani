import React from "react";

const stats = [
  {
    value: "M.Tech AI/ML",
    label: "BITS Pilani"
  },
  {
    value: "Enterprise",
    label: "ASP.NET & Postgres"
  },
  {
    value: "AI & RAG",
    label: "InsightMesh Engine"
  },
  {
    value: "B.Tech CE",
    label: "DDU · Distinction"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[11px] uppercase font-mono text-zinc-500 dark:text-zinc-500 mb-8 tracking-widest">
          ABOUT
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Left 60% */}
          <div className="w-full md:w-[60%]">
            <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am a Software Engineer based in Ahmedabad, Gujarat, India, focused on building scalable enterprise solutions and intelligent software systems. With a strong foundation in backend architecture and AI/ML, I bridge the gap between complex engineering workflows and reliable product experiences.
            </p>
            <p className="text-[16px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              At Silver Touch Technologies Ltd, I develop low-code platforms for dynamic form generation, multi-stage workflow orchestration, and granular RBAC authorization using ASP.NET Core and PostgreSQL. In parallel, I am pursuing an M.Tech in AI/ML at BITS Pilani and engineering <span className="text-zinc-950 dark:text-zinc-200 font-medium">InsightMesh</span>, an AI-powered technical retrieval and semantic search engine using Python, FastAPI, ChromaDB, and Groq LLMs.
            </p>
          </div>

          {/* Right 40% */}
          <div className="w-full md:w-[40%] grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111111] rounded-lg p-5 border border-black/[0.08] dark:border-white/[0.08]"
              >
                <div className="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

