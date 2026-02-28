
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { PlatformAnchor } from './components/PlatformAnchor';
import { Solutions } from './components/Solutions';
import { Platform } from './components/Platform';
import { Pricing } from './components/Pricing';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onRequestAccess={openModal} />

      <main>
        <Hero onRequestAccess={openModal} />
        <Problem />
        <Solutions />
        <PlatformAnchor />
        <Platform />
        <Pricing />
        <Resources />
      </main>

      <Footer isDark={isDark} onRequestAccess={openModal} />

      <EarlyAccessModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
