
import React from 'react';

export const PlatformAnchor: React.FC = () => {
  return (
    <section className="pt-20 pb-10 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <div className="text-[10px] mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em]">
            THE EXPANSION ARCHITECTURE
          </div>
          <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50">
            How Expansion Runs as a Continuous System
          </h2>
        </div>

        <div className="space-y-4 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          <p>
            Expansion does not reset between launches or markets.
          </p>
          <p>
            Digital growth, retail rollout, regulatory milestones, and capital allocation operate inside one continuous system — not as disconnected initiatives.
          </p>
          <p className="font-semibold text-zinc-950 dark:text-zinc-50 pt-2">
            This is the Expansion Architecture.
          </p>
        </div>

        <div className="pt-10 max-w-md mx-auto">
          <div className="h-px bg-zinc-100 dark:bg-zinc-900" />
        </div>
      </div>
    </section>
  );
};
