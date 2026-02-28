
import React from 'react';

export const Platform: React.FC = () => {
   return (
      <section id="platform" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 space-y-10">

            <div className="relative min-h-[580px] flex items-center justify-center">
               <div className="grid lg:grid-cols-12 gap-8 items-center w-full max-w-6xl mx-auto">

                  {/* Left Principles (1-3) */}
                  <div className="lg:col-span-3 space-y-5 order-2 lg:order-1 relative z-20">
                     {/* Principle 1 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-zinc-950 dark:bg-zinc-50 rounded-xl flex items-center justify-center text-white dark:text-zinc-950 font-bold mono text-sm shadow-xl">01</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Unified Expansion State</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              Every market, SKU, regulatory file, channel, and allocation exists within a shared state. No parallel trackers.
                           </p>
                        </div>
                     </div>
                     {/* Principle 2 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center text-zinc-950 dark:text-zinc-50 font-bold mono text-sm">02</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Structural Readiness</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              Regulatory clearance, inventory, and capital exposure must meet defined readiness conditions before scale.
                           </p>
                        </div>
                     </div>
                     {/* Principle 3 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center text-zinc-950 dark:text-zinc-50 font-bold mono text-sm">03</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Expansion Sequencing</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              The system governs what advances next based on dependencies and live conditions.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Central Core Diagram */}
                  <div className="lg:col-span-6 order-1 lg:order-2 h-[580px] flex items-center justify-center relative">
                     {/* Radial Depth Background */}
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[300px] h-[300px] border border-zinc-200/50 dark:border-zinc-800/30 rounded-full animate-pulse opacity-40 scale-110" />
                        <div className="w-[440px] h-[440px] border border-zinc-100 dark:border-zinc-900 rounded-full opacity-60" />
                        <div className="w-[560px] h-[560px] border border-zinc-50 dark:border-zinc-950 rounded-full opacity-20" />
                     </div>

                     {/* Central Kernel Core */}
                     <div className="relative z-20">
                        <div className="w-64 h-64 bg-zinc-950 dark:bg-zinc-50 rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center p-10 border-[1px] border-white/10 dark:border-zinc-900/10 group transform transition-transform duration-1000 hover:scale-105 ring-1 ring-zinc-800 dark:ring-white/10">
                           <div className="relative w-20 h-20 mb-6">
                              <div className="absolute inset-0 border-[3px] border-brand-blue/20 dark:border-brand-blue/10 rounded-3xl rotate-45 animate-pulse" />
                              <div className="absolute inset-4 border-[3px] border-brand-blue/60 dark:border-brand-blue/30 rounded-3xl rotate-45 animate-spin-slow" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_25px_rgba(56, 88, 223, 0.8)]" />
                              </div>
                           </div>
                           <div className="space-y-1 text-center">
                              <div className="text-[14px] mono font-bold text-white dark:text-zinc-950 uppercase tracking-[0.7em] leading-tight">Zivyo</div>
                              <div className="text-[8px] mono text-zinc-500 dark:text-zinc-400 font-bold tracking-widest uppercase">Expansion Arch.</div>
                           </div>
                        </div>
                     </div>

                     {/* Connection Paths (Illustrative Flow) */}
                     <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600">
                        <defs>
                           <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="transparent" />
                              <stop offset="50%" stopColor="#3858df" />
                              <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                        </defs>

                        {/* Paths from steps to center */}
                        <path d="M140 240 L 260 280" stroke="currentColor" strokeWidth="1" fill="none" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="4 6" />
                        <path d="M140 360 L 260 320" stroke="currentColor" strokeWidth="1" fill="none" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="4 6" />
                        <path d="M460 240 L 340 280" stroke="currentColor" strokeWidth="1" fill="none" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="4 6" />
                        <path d="M460 360 L 340 320" stroke="currentColor" strokeWidth="1" fill="none" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="4 6" />

                        {/* Animating Packets along paths */}
                        <circle r="2" fill="#3858df">
                           <animateMotion path="M140 240 L 260 280" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle r="2" fill="#3858df">
                           <animateMotion path="M460 240 L 340 280" dur="3.5s" repeatCount="indefinite" />
                        </circle>
                     </svg>
                  </div>

                  {/* Right Principles (4-6) */}
                  <div className="lg:col-span-3 space-y-5 order-3 relative z-20">
                     {/* Principle 4 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold mono text-sm shadow-lg shadow-brand-blue/20">04</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Multi-Actor Coordination</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              HQ, operators, and distributors operate within the same context. Coordination does not rely on spreadsheets.
                           </p>
                        </div>
                     </div>
                     {/* Principle 5 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center text-zinc-950 dark:text-zinc-50 font-bold mono text-sm">05</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Expansion Exposure Governance</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              Investment and scale reflect live expansion conditions. Risk is surfaced early — before it compounds.
                           </p>
                        </div>
                     </div>
                     {/* Principle 6 */}
                     <div className="p-7 bg-white dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm space-y-4 group hover:border-brand-blue/50 transition-all duration-500">
                        <div className="w-10 h-10 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center justify-center text-zinc-950 dark:text-zinc-50 font-bold mono text-sm">06</div>
                        <div className="space-y-2">
                           <h3 className="text-zinc-950 dark:text-zinc-50">Compounding Expansion Memory</h3>
                           <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                              Every decision is traceable. Outcomes inform future sequencing. Expansion improves systematically.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
