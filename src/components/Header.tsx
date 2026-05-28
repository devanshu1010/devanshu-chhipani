import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getLenis } from '../lib/lenis';
import LogoMark from './LogoMark';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Calculate exact target Y, offset 88px for the fixed header
    const targetY = element.getBoundingClientRect().top + window.scrollY - 88;
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(targetY, {
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'Experience', href: 'experience' },
    { name: 'Tech Stack', href: 'tech' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <div className="sticky left-0 top-4 z-50 flex w-full justify-center px-3 pointer-events-none sm:top-5">
      <header className="pointer-events-auto w-full max-w-5xl">
        <nav
          className="relative mx-auto flex items-center justify-between gap-4 rounded-full border border-black/10 bg-white/75 px-3 py-2 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-black/75 dark:shadow-[0_18px_55px_rgba(0,0,0,0.42)] sm:px-4"
        >
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2 text-left text-zinc-950 transition-colors duration-300 hover:text-indigo-600 dark:text-zinc-50 dark:hover:text-indigo-400"
            >
              <LogoMark compact />
              <span className="font-mono tracking-[0.18em]">
                <span className="block text-[12px] font-bold leading-none text-zinc-900 dark:text-zinc-50">Devanshu</span>
                <span className="block text-[9px] font-medium text-zinc-500 group-hover:text-indigo-600 dark:text-zinc-400 dark:group-hover:text-indigo-400">Computer Engineer</span>
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-full border border-zinc-950/10 bg-white/35 p-1 dark:border-white/10 dark:bg-white/[0.04]">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-full px-3 py-2 font-mono text-[11px] font-medium tracking-[0.14em] text-zinc-600 transition-colors duration-200 hover:bg-indigo-500/10 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-indigo-400/10 dark:hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="grid h-9 w-9 place-items-center rounded-full border border-zinc-950/10 text-zinc-700 transition-colors duration-200 hover:border-indigo-500/40 hover:bg-zinc-950 hover:text-indigo-300 dark:border-white/10 dark:text-zinc-300 dark:hover:border-indigo-400/40 dark:hover:bg-white dark:hover:text-indigo-600"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="grid h-9 w-9 place-items-center rounded-full border border-zinc-950/10 text-zinc-700 dark:border-white/10 dark:text-zinc-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-950/10 text-zinc-700 transition-colors duration-200 hover:border-indigo-500/40 hover:bg-zinc-950 hover:text-indigo-300 dark:border-white/10 dark:text-zinc-300 dark:hover:border-indigo-400/40 dark:hover:bg-white dark:hover:text-indigo-600"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in px-3 pt-2">
            <div className="mt-2 space-y-1 rounded-2xl border border-black/10 bg-white/80 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-black/80">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full rounded-xl px-3 py-2 text-left font-mono text-sm font-medium tracking-[0.14em] text-zinc-700 transition-colors duration-200 hover:bg-indigo-500/10 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-indigo-400/10 dark:hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
