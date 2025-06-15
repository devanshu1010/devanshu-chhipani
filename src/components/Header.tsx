import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-300
          ${isScrolled
            ? "shadow-2xl"
            : "shadow-lg"}
        `}
        style={{ width: '100%', maxWidth: '900px' }}
      >
        <nav
          className={`
            mx-auto relative flex items-center justify-between gap-4
            px-6 py-3 sm:px-8
            rounded-2xl
            border border-white/20 dark:border-white/10
            bg-white/70 dark:bg-black/60
            backdrop-blur-lg
            shadow-lg
            ${isScrolled ? "border-opacity-60" : "border-opacity-40"}
            `}
        >
          {/* Logo with glow */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-300 transition-all duration-300 relative group cursor-pointer"
            >
              <span className="relative z-10">Devanshu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group cursor-pointer"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              ))}
            </div>
            
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 text-gray-700 dark:text-gray-300"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-teal-500 dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in px-3 pt-2">
            <div className="pt-2 pb-3 space-y-1 bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-xl border border-white/15 mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 w-full text-left hover:bg-white/10 dark:hover:bg-white/10"
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
