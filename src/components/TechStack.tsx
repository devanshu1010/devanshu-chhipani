import React from "react";

const stackItems = [
  "Python",
  "C#",
  "ASP.NET Core",
  ".NET Core",
  "FastAPI",
  "PostgreSQL",
  "RAG Architecture",
  "ChromaDB",
  "Vector Embeddings",
  "SignalR",
  "Entity Framework Core",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Docker",
  "Git",
  "REST APIs",
  "RBAC Systems"
];

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-12">
          Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {stackItems.map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] rounded-full py-2.5 px-4 text-center text-[14px] text-zinc-900 dark:text-zinc-100 font-medium transition-colors hover:border-blue-500/40"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
