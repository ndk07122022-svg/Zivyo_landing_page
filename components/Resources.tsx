
import React, { useState, useEffect } from 'react';

const ResourceVisual: React.FC<{ type: 'framework' | 'playbook' | 'whitepaper' }> = ({ type }) => {
  const [randomPoints, setRandomPoints] = useState<{ cx: number, cy: number }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRandomPoints([...Array(12)].map(() => ({
        cx: 50 + Math.random() * 80,
        cy: 100 + Math.random() * 100
      })));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (type === 'framework') {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <defs>
          <linearGradient id="grad-framework" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3858df" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#101010" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad-framework)" rx="16" />
        {/* Layered Grid Planes */}
        <g transform="translate(100, 80) skewX(-20)">
          <rect x="0" y="0" width="150" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-300 dark:text-zinc-700" />
          <path d="M0 25 H 150 M0 50 H 150 M0 75 H 150 M37.5 0 V 100 M75 0 V 100 M112.5 0 V 100" stroke="currentColor" strokeWidth="0.5" className="text-zinc-200 dark:text-zinc-800" />
        </g>
        <g transform="translate(130, 110) skewX(-20)">
          <rect x="0" y="0" width="150" height="100" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-blue/50" />
          <path d="M0 50 H 150 M75 0 V 100" stroke="currentColor" strokeWidth="1.5" className="text-brand-blue" strokeDasharray="4 4" />
          <circle cx="75" cy="50" r="4" fill="#3858df" />
        </g>
        <g transform="translate(160, 140) skewX(-20)">
          <rect x="0" y="0" width="150" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 dark:text-zinc-600" />
        </g>
      </svg>
    );
  }

  if (type === 'playbook') {
    return (
      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
        <defs>
          <linearGradient id="grad-playbook" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3f3f46" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#18181b" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad-playbook)" rx="16" />
        {/* Gate Sequence */}
        <line x1="80" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="1" className="text-zinc-200 dark:text-zinc-800" strokeDasharray="4 8" />
        {[80, 160, 240, 320].map((x, i) => (
          <g key={i} transform={`translate(${x}, 150)`}>
            <rect x="-20" y="-30" width="40" height="60" rx="4" fill="currentColor" className="text-white dark:text-zinc-950 border border-zinc-200 dark:border-zinc-800" />
            <rect x="-20" y="-30" width="40" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-200 dark:text-zinc-800" />
            {i < 3 ? (
              <path d="M-6 0 L -2 4 L 6 -4" stroke="#3858df" strokeWidth={2} fill="none" strokeLinecap="round" />
            ) : (
              <circle r="4" fill="#f59e0b" className="animate-pulse" />
            )}
          </g>
        ))}
        {/* Architectural Hint */}
        <path d="M280 100 Q 300 70 320 100 L 340 100 L 340 140 L 260 140 L 260 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-400 dark:text-zinc-600" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full p-8">
      <defs>
        <clipPath id="split-clip">
          <rect x="0" y="0" width="200" height="300" />
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-100 dark:text-zinc-900" rx="16" />
      {/* Scattered vs Ordered */}
      <g opacity="0.4">
        {randomPoints.map((point, i) => (
          <circle key={i} cx={point.cx} cy={point.cy} r="2" fill="#ef4444" />
        ))}
        <path d="M60 120 L 130 180 M 50 200 L 110 140" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2 4" />
      </g>
      <line x1="200" y1="60" x2="200" y2="240" stroke="currentColor" strokeWidth="1" className="text-zinc-200 dark:text-zinc-800" />
      <g transform="translate(240, 100)">
        <rect x="0" y="0" width="100" height="100" rx="12" fill="none" stroke="#3858df" strokeWidth={1.5} />
        <path d="M20 50 H 80 M 50 20 V 80" stroke="#3858df" strokeWidth={1} opacity="0.3" />
        <circle cx="50" cy="50" r="10" fill="#3858df" fillOpacity="0.1" stroke="#3858df" strokeWidth={1} />
      </g>
    </svg>
  );
};

export const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Governance Frameworks for Multi-Channel Growth',
      category: 'Research',
      type: 'framework' as const,
      desc: 'An exploration of decision alignment across fragmented distribution networks.'
    },
    {
      title: 'Market Readiness Playbook: Middle East Expansion',
      category: 'Playbook',
      type: 'playbook' as const,
      desc: 'Structural requirements and regulatory gate sequences for 2024.'
    },
    {
      title: 'The Cost of Fragmentation in CPG Scale',
      category: 'Whitepaper',
      type: 'whitepaper' as const,
      desc: 'Measuring the ROI of centralized governance in distributed execution.'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="text-[10px] mono font-bold uppercase tracking-[0.3em] text-brand-blue">Perspective</div>
            <h2 className="text-4xl text-zinc-950 dark:text-zinc-50">Governance Resources</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Perspectives and practical guidance for governing growth at scale.
            </p>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 flex items-center transition-colors">
            View All Resources
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="enterprise-card group p-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl cursor-pointer shadow-sm ring-1 ring-zinc-950/5 dark:ring-white/5">
              <div className="p-7 space-y-6">
                <div className="aspect-[4/3] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity grid-pattern" />
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                    <ResourceVisual type={res.type} />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] mono uppercase tracking-widest text-brand-blue font-bold">{res.category}</span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors leading-snug">{res.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{res.desc}</p>
                </div>

                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
                  <span className="text-[10px] mono text-zinc-400 font-bold uppercase">12 Min Read</span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-zinc-50 dark:group-hover:text-zinc-950 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
