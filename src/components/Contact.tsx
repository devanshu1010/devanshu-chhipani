import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Calendar } from "lucide-react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const email = "work.devanshuchhipani@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-[12px] font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for New Roles & Collaborations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 mb-6">
          Let's build something durable.
        </h2>

        <p className="text-[16px] sm:text-[17px] text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-normal">
          Whether you're looking for a backend engineer to architect low-latency APIs or an AI practitioner to design semantic retrieval pipelines, my inbox is open.
        </p>

        {/* Email Pill with Direct Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-10">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-xs active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>

          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-[#111111] border border-black/[0.12] dark:border-white/[0.12] text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors active:scale-[0.98]"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-500" />
                <span className="font-mono text-xs">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Channels & Human Response Pledge */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <a
            href="https://github.com/devanshu1010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/devanshu1010</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <span className="text-zinc-300 dark:text-zinc-700">·</span>

          <a
            href="https://linkedin.com/in/devanshu-chhipani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>linkedin/devanshu-chhipani</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <span className="text-zinc-300 dark:text-zinc-700">·</span>

          <span>Reply time: Usually sub-24h</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
