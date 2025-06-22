
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to get system theme preference
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Function to apply theme to document
  const applyTheme = (mode: 'light' | 'dark') => {
    const root = document.documentElement;
    
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Default to system theme on initial load
    const systemTheme = getSystemTheme();
    setThemeMode(systemTheme);
    applyTheme(systemTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      const newSystemTheme = getSystemTheme();
      setThemeMode(newSystemTheme);
      applyTheme(newSystemTheme);
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    applyTheme(newTheme);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
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
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none py-6">
      {/* Fixed max-width container to match content width */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header
          className={`pointer-events-auto transition-all duration-300 rounded-2xl
            ${isScrolled
              ? "shadow-2xl"
              : "shadow-lg"}
          `}
        >
          <nav
            className={`
              relative flex items-center justify-between gap-4
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
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-300 transition-all duration-300 relative group cursor-pointer"
              >
                <span className="relative z-10">Devanshu</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group cursor-pointer"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </button>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-300"
                title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} theme`}
              >
                {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-200 text-gray-700 dark:text-gray-300"
                title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} theme`}
              >
                {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-sky-500 dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-200"
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
                    className="text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 w-full text-left hover:bg-white/10 dark:hover:bg-white/10"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
