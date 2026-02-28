import React from 'react';
import { Button } from './UI/Button';
import { ExpansionControlSystem } from './ExpansionControlSystem';

interface HeroProps {
   onRequestAccess?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAccess }) => {


   return (
      <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6 bg-white dark:bg-brand-black transition-colors duration-500">
         {/* Structural Decor */}
         <div className="absolute inset-0 grid-pattern opacity-[0.08] dark:opacity-[0.05] pointer-events-none" />
         <div className="absolute top-0 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-blue/10 dark:bg-brand-purple/10 rounded-full blur-[100px] md:blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3 opacity-30 dark:opacity-40 transition-all duration-700" />

         <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            <div className="space-y-8 md:space-y-10 text-center lg:text-left">
               {/* System Metadata Header */}
               <div className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">


                  <h1 className="animate-reveal delay-1s text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] text-brand-black dark:text-zinc-50 leading-[0.8] lg:leading-[0.75] pb-2">
                     The Operating <br className="hidden sm:block" />
                     System <span className="text-zinc-300 dark:text-zinc-700">for</span> <br className="hidden sm:block" />
                     <span className="text-zinc-300 dark:text-zinc-700">Expansion</span>
                  </h1>

                  <div className="space-y-4 mx-auto lg:mx-0">
                     <p className="animate-reveal delay-[1.5s] text-lg md:text-xl text-brand-grey dark:text-zinc-400 max-w-xl leading-relaxed">
                        Unify expansion across markets and channels into one continuous system — where launches, revenue, regulatory readiness, and execution alignment remain connected and compound over time.
                     </p>
                  </div>
               </div>

               {/* Main CTA Group */}
               <div className="animate-reveal delay-[2s] flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 items-center lg:items-start justify-center">
                  <Button
                     onClick={onRequestAccess}
                     variant="primary"
                     size="lg"
                     className="w-full md:w-auto bg-brand-black dark:bg-zinc-50 text-zinc-50 dark:text-brand-black hover:bg-black dark:hover:bg-white shadow-xl dark:shadow-white/10 px-8 group hover:scale-[1.02] transition-transform whitespace-nowrap"
                  >
                     Request Early Access
                  </Button>
               </div>
            </div>

            {/* Expansion Control System Visual */}
            <div className="relative flex items-center justify-center animate-reveal delay-[1.5s] w-full mt-12 lg:mt-0">
               <ExpansionControlSystem />
            </div>
         </div>

         {/* Scroll Discovery Indicator */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-reveal delay-[8s] hidden md:block">
            <div className="flex flex-col items-center space-y-4">
               <span className="text-[10px] mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-[0.5em]">System Live</span>
               <div className="w-px h-16 bg-gradient-to-b from-zinc-200 dark:from-zinc-800 to-transparent" />
            </div>
         </div>
      </section>
   );
};
