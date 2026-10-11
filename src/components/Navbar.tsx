import { Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import LogoMark from './LogoMark';
import { usePersona } from '../context/PersonaContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const { persona, togglePersona } = usePersona();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lenis = useLenis();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.scrollY - 56;

    if (lenis) {
      lenis.scrollTo(targetY, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Keyboard navigation shortcuts [1-6]
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
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
  }, []);

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
    <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] z-50 flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-[1200px] h-full flex items-center justify-between">
        {/* Left: Logo mark only */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center text-left text-zinc-900 dark:text-zinc-100 group transition-transform active:scale-95"
          aria-label="Devanshu Chhipani home"
        >
          <LogoMark compact />
        </button>

        {/* Center: Links with subtle keyboard shortcut badges */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
          {navItems.map((item, idx) => (
            <span key={item.name} className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-1.5 transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                <span>{item.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono px-1 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border border-black/[0.06] dark:border-white/[0.08]">
                  {item.key}
                </span>
              </button>
              {idx < navItems.length - 1 && (
                <span className="text-zinc-400 dark:text-zinc-600 select-none">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2.5">
          {/* Dual Persona Toggle */}
          <div className="hidden lg:flex items-center p-0.5 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10 mr-2">
            <button
              onClick={() => persona !== 'se' && togglePersona()}
              className={`relative px-3 py-1 text-[11px] font-semibold rounded-full z-10 transition-colors ${
                persona === 'se' ? 'text-white' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white/70'
              }`}
            >
              SE
              {persona === 'se' && (
                <motion.div
                  layoutId="active-persona-nav"
                  className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            <button
              onClick={() => persona !== 'ai' && togglePersona()}
              className={`relative px-3 py-1 text-[11px] font-semibold rounded-full z-10 transition-colors ${
                persona === 'ai' ? 'text-white' : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white/70'
              }`}
            >
              AI
              {persona === 'ai' && (
                <motion.div
                  layoutId="active-persona-nav"
                  className="absolute inset-0 bg-indigo-500 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </div>

          <span className="hidden lg:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mr-1">
            <kbd className="px-1.5 py-0.5 rounded border border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900 text-[10px]">1-7</kbd>
            <span>nav</span>
          </span>

          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[56px] left-0 right-0 bg-white/95 dark:bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-black/[0.08] dark:border-white/[0.08] p-6 shadow-xl flex flex-col gap-4">
          <div className="flex p-1 bg-black/5 dark:bg-white/5 rounded-full mb-4">
            <button
              onClick={() => { togglePersona(); setIsMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-full ${persona === 'se' ? 'bg-blue-500 text-white' : 'text-zinc-500'}`}
            >
              Software Eng
            </button>
            <button
              onClick={() => { togglePersona(); setIsMenuOpen(false); }}
              className={`flex-1 py-2 text-xs font-semibold rounded-full ${persona === 'ai' ? 'bg-indigo-500 text-white' : 'text-zinc-500'}`}
            >
              AI Eng
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex items-center justify-between text-left py-2 text-base font-medium text-zinc-800 dark:text-zinc-200 border-b border-black/[0.04] dark:border-white/[0.04]"
            >
              <span>{item.name}</span>
              <span className="font-mono text-xs text-zinc-400">[{item.key}]</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
