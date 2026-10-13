import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Terminal, Sparkles, Cpu } from "lucide-react";
import { usePersona } from "../context/PersonaContext";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const { persona } = usePersona();
  const email = "work.devanshuchhipani@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 text-center">
      <div className="max-w-[840px] mx-auto flex flex-col items-center">
        {/* Stage Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[11px] font-mono mb-6">
          <span className={`w-2 h-2 rounded-full ${persona === 'se' ? 'bg-emerald-500' : 'bg-cyan-500'} animate-pulse`} />
          <span className="font-semibold text-zinc-950 dark:text-zinc-100">
            {persona === 'se' ? 'STAGE 07: RPC HANDSHAKE' : 'STAGE 07: INFERENCE DISPATCH'}
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">/</span>
          <span className="text-zinc-500">DIRECT ROUTE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-zinc-950 dark:text-zinc-50 mb-6">
          {persona === 'se' ? "Let's architect durable infrastructure." : "Let's explore high-dimensional intelligence."}
        </h2>

        <p className="text-[16px] sm:text-[17px] text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed font-normal">
          {persona === 'se'
            ? 'Open to Senior Backend, Distributed Systems, and Infrastructure engineering opportunities. Inbox monitored continuously.'
            : 'Collaborating on frontier semantic retrieval, latent evaluation, and applied machine learning research.'}
        </p>

        {/* Double-Bezel Email Action Capsule */}
        <div className="p-1.5 sm:p-2 rounded-[2.5rem] bg-black/[0.04] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 shadow-xl mb-10 max-w-md w-full">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-white dark:bg-[#0c0c0c] border border-black/[0.06] dark:border-white/[0.06] p-3 flex items-center justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2.5 pl-3 text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate hover:text-emerald-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0 text-zinc-400" />
              <span className="truncate">{email}</span>
            </a>

            <button
              onClick={handleCopy}
              type="button"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/5 dark:bg-white/10 text-xs font-mono font-medium hover:bg-black/10 dark:hover:bg-white/20 transition-all active:scale-95 shrink-0 ml-2"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Verified Channels & Response Standard */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <a
            href="https://github.com/devanshu1010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/devanshu1010</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <span className="text-zinc-300 dark:text-zinc-700">/</span>

          <a
            href="https://linkedin.com/in/devanshu-chhipani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>linkedin/devanshu-chhipani</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <span className="text-zinc-300 dark:text-zinc-700">/</span>

          <span>LATENCY: &lt;24H</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
