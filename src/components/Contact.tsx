import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-[120px] px-6 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 mb-6">
        Let's build something.
      </h2>

      <p className="text-[16px] text-zinc-600 dark:text-zinc-400 max-w-lg mb-10 leading-relaxed">
        I'm open to engineering roles, backend systems, and teams developing practical AI & retrieval workflows.
      </p>

      <a
        href="mailto:work.devanshuchhipani@gmail.com"
        className="px-8 py-3.5 rounded-full bg-blue-600 text-white text-[15px] font-medium hover:bg-blue-500 transition-all shadow-[0_0_25px_rgba(59,130,246,0.25)] active:scale-[0.98]"
      >
        work.devanshuchhipani@gmail.com
      </a>
    </section>
  );
};

export default Contact;
