
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-[1.1]">
              A single Expansion Operating System powering applied expansion environments across markets.
            </h2>
            <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-lg">
              <p>Each environment governs a distinct layer of expansion — spanning digital commerce, retail execution, market activation, regulatory operations, and portfolio governance.</p>
              <p className="font-semibold text-zinc-950 dark:text-zinc-50">Together, these environments operate as one continuous system, ensuring expansion advances with structure, sequencing, and accountability.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 scale-100 lg:translate-x-12">
            <div className="p-10 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm space-y-6">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mono">The Fragmented</div>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">Performance isolated in siloed dashboards.</p>
            </div>
            <div className="p-10 bg-zinc-950 dark:bg-zinc-50 border border-zinc-800 dark:border-zinc-200 rounded-2xl shadow-2xl space-y-6 translate-y-12">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center">
                <div className="w-4 h-4 bg-zinc-50 dark:bg-zinc-950 rounded-full" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mono">The Governed</div>
              <p className="text-base text-zinc-300 dark:text-zinc-600 leading-relaxed">Unified intent driving every distributed action.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
