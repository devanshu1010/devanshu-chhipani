import { Moon, Sun, Menu, X, Cpu, Sparkles } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { useLenis } from 'lenis/react';
import LogoMark from './LogoMark';
import { usePersona } from '../context/PersonaContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const { persona, togglePersona } = usePersona();
  const lenis = useLenis();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.scrollY - 80;

    if (lenis) {
      lenis.scrollTo(targetY, {
        duration: 1.0,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, [lenis]);

  // Keyboard navigation shortcuts [1-7]
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const keyMap: Record<string, string> = {
        '1': 'home',
        '2': 'about',
        '3': 'work',
        '4': 'experience',
        '5': 'stack',
        '6': 'writing',
        '7': 'contact',
      };

      if (keyMap[e.key]) {
        scrollToSection(keyMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);

  const navItems = [
    { name: 'Home', href: 'home', key: '1' },
    { name: 'About', href: 'about', key: '2' },
    { name: 'Work', href: 'work', key: '3' },
    { name: 'Experience', href: 'experience', key: '4' },
    { name: 'Stack', href: 'stack', key: '5' },
    { name: 'Writing', href: 'writing', key: '6' },
    { name: 'Contact', href: 'contact', key: '7' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-[1080px] h-[52px] sm:h-[56px] bg-white/85 dark:bg-[#0d0d0d]/85 backdrop-blur-2xl border border-black/[0.08] dark:border-white/10 rounded-full flex items-center justify-between px-4 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all">
        {/* Left: Logo Mark */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center text-left text-zinc-900 dark:text-zinc-100 group transition-transform active:scale-95"
          aria-label="Devanshu Chhipani home"
        >
          <LogoMark compact />
        </button>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
          {navItems.map((item, idx) => (
            <span key={item.name} className="flex items-center gap-5 lg:gap-6">
              <button
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                <span>{item.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 border border-black/[0.06] dark:border-white/[0.08]">
                  {item.key}
                </span>
              </button>
              {idx < navItems.length - 1 && (
                <span className="text-zinc-300 dark:text-zinc-700 select-none">/</span>
              )}
            </span>
          ))}
        </div>

        {/* Right: Controls & Persona Capsule */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dual Persona Switcher */}
          <div className="flex items-center p-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10">
            <button
              onClick={() => persona !== 'se' && togglePersona()}
              className={`relative flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full z-10 transition-colors ${
                persona === 'se'
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white/80'
              }`}
              aria-label="Switch to Systems Engineering persona"
            >
              <Cpu className="w-3 h-3 stroke-[2]" />
              <span>SE</span>
              {persona === 'se' && (
                <motion.div
                  layoutId="active-persona-pill"
                  className="absolute inset-0 bg-emerald-600 dark:bg-emerald-500 rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
            </button>
            <button
              onClick={() => persona !== 'ai' && togglePersona()}
              className={`relative flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full z-10 transition-colors ${
                persona === 'ai'
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white/80'
              }`}
              aria-label="Switch to AI Researcher persona"
            >
              <Sparkles className="w-3 h-3 stroke-[2]" />
              <span>AI</span>
              {persona === 'ai' && (
                <motion.div
                  layoutId="active-persona-pill"
                  className="absolute inset-0 bg-cyan-600 dark:bg-cyan-500 rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                />
              )}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-zinc-600 dark:text-zinc-400 active:scale-95"
            aria-label="Toggle visual theme"
          >
            {isDarkMode ? <Sun size={14} className="stroke-[1.8]" /> : <Moon size={14} className="stroke-[1.8]" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 left-3 right-3 bg-white/95 dark:bg-[#0e0e0e]/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/10 p-5 rounded-3xl shadow-2xl flex flex-col gap-3"
          >
            <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-full mb-2">
              <button
                onClick={() => {
                  if (persona !== 'se') togglePersona();
                }}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors ${
                  persona === 'se' ? 'bg-emerald-600 text-white' : 'text-zinc-500'
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>Systems Eng</span>
              </button>
              <button
                onClick={() => {
                  if (persona !== 'ai') togglePersona();
                }}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full flex items-center justify-center gap-1.5 transition-colors ${
                  persona === 'ai' ? 'bg-cyan-600 text-white' : 'text-zinc-500'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>AI Researcher</span>
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center justify-between text-left py-2.5 px-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium text-zinc-800 dark:text-zinc-200"
              >
                <span>{item.name}</span>
                <span className="font-mono text-xs text-zinc-400">[{item.key}]</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
