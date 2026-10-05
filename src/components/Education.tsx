import React from "react";
import { Award, GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details: string;
}

const educationList: EducationItem[] = [
  {
    degree: "M.Tech. in Artificial Intelligence & Machine Learning",
    institution: "BITS Pilani — Work Integrated Learning Programme (WILP)",
    period: "2026 — Present",
    details: "Advanced study focusing on deep learning architectures, statistical machine learning, and scalable AI infrastructure."
  },
  {
    degree: "Bachelor of Technology (B.Tech), Computer Engineering",
    institution: "Dharmsinh Desai University",
    period: "2021 — 2025",
    grade: "CPI: 7.73 · First Class with Distinction",
    details: "Rigorous coursework in Data Structures, Relational Database Management, Operating Systems, Computer Networks, and Object-Oriented Software Design."
  }
];

const certifications = [
  {
    title: "CS50's Introduction to Artificial Intelligence with Python",
    issuer: "Harvard University",
    link: "https://cs50.harvard.edu/ai/"
  },
  {
    title: "DUHacks Hackathon Participation",
    issuer: "Dharmsinh Desai University",
    link: ""
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-black/[0.08] dark:border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
          Academic Background
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-12">
          Education & certified knowledge.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degree entries */}
          <div className="lg:col-span-8 space-y-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/50 dark:bg-[#111111] p-6 sm:p-7"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {edu.institution}
                </p>

                {edu.grade && (
                  <p className="font-mono text-xs text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-white/5 inline-block px-2.5 py-1 rounded mb-3">
                    {edu.grade}
                  </p>
                )}

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications rail */}
          <div className="lg:col-span-4">
            <div className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-zinc-50/50 dark:bg-[#111111] p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-zinc-950 dark:text-zinc-50 font-semibold text-base">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Certifications
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, ci) => (
                    <div
                      key={ci}
                      className="border-b border-black/[0.06] dark:border-white/[0.06] pb-4 last:border-b-0"
                    >
                      <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-xs font-mono text-zinc-400 dark:text-zinc-600">
                Verified Credential Records
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

