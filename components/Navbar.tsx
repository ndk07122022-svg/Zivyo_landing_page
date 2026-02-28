
import React, { useState, useEffect } from 'react';
import { Button } from './UI/Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onRequestAccess?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, onRequestAccess }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
      ? 'py-4 glass border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 shadow-sm'
      : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={isDark ? "/logo-white.png" : "/logo-black.png"}
              alt="Zivyo Logo"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={isDark ? "/logotype-white.png" : "/logotype-black.png"}
              alt="Zivyo Logotype"
              className="h-7 md:h-10 w-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100 relative top-[2px]"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-xs uppercase tracking-widest text-brand-grey dark:text-zinc-400 hover:text-brand-black dark:hover:text-zinc-50 transition-colors duration-300 group font-display"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-brand-grey dark:text-zinc-400 group"
            title="Toggle Theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M3 12h1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <Button onClick={onRequestAccess} variant="primary" size="sm" className="bg-brand-black dark:bg-zinc-50 text-zinc-50 dark:text-brand-black hover:bg-black dark:hover:bg-white hover:scale-105 transition-transform active:scale-95">
            Request Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};
