import { Moon, Sun, Menu, X } from 'lucide-react';
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

    const targetY = element.getBoundingClientRect().top + window.scrollY - 56;
    const lenis = getLenis();

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

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Work', href: 'work' },
    { name: 'Experience', href: 'experience' },
    { name: 'Stack', href: 'stack' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] z-50 flex justify-center px-6">
      <div className="w-full max-w-[1200px] h-full flex items-center justify-between">
        {/* Left: Logo mark only */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center text-left text-zinc-900 dark:text-zinc-100 group transition-transform active:scale-95"
          aria-label="Devanshu Chhipani home"
        >
          <LogoMark compact />
        </button>

        {/* Center: Links matching wireframe */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
          {navItems.map((item, idx) => (
            <span key={item.name} className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection(item.href)}
                className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
              >
                {item.name}
              </button>
              {idx < navItems.length - 1 && (
                <span className="text-zinc-400 dark:text-zinc-600 select-none">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Right: Theme Toggle matching wireframe */}
        <div className="flex items-center gap-3">
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
        <div className="md:hidden absolute top-[56px] left-0 right-0 border-b border-black/[0.08] dark:border-white/[0.08] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl p-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
