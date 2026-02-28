
import React from 'react';
import { Button } from './UI/Button';

interface FooterProps {
  isDark: boolean;
  onRequestAccess?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onRequestAccess }) => {
  return (
    <footer className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-950 dark:bg-zinc-50 rounded-[2.5rem] p-12 md:p-16 text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-5 dark:opacity-10 pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl text-white dark:text-zinc-950 leading-tight">Expansion operates as a continuous, governed cycle — not a series of isolated initiatives.</h2>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onRequestAccess} variant="primary" size="lg" className="bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white hover:bg-zinc-100 dark:hover:bg-black px-8">Request Early Access</Button>
            <Button variant="outline" size="lg" className="border-zinc-700 dark:border-zinc-300 text-zinc-300 dark:text-zinc-700 hover:text-white dark:hover:text-zinc-950 hover:border-zinc-500 dark:hover:border-zinc-900 px-8">Talk to the Team</Button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={isDark ? "/logo-white.png" : "/logo-black.png"}
                alt="Zivyo Logo"
                className="h-10 w-auto"
              />
              <img
                src={isDark ? "/logotype-white.png" : "/logotype-black.png"}
                alt="Zivyo Logotype"
                className="h-8 md:h-11 w-auto object-contain relative top-[2px]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-xs text-zinc-500 uppercase tracking-widest mono font-bold">
            <a href="#" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors">LinkedIn</a>
          </div>

          <div className="text-[11px] text-zinc-400 dark:text-zinc-600 mono">
            © 2024 Zivyo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
