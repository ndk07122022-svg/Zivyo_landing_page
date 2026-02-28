
import React from 'react';

export const Pricing: React.FC = () => {
  const operators = [
    {
      role: 'Market Expansion Leaders',
      desc: 'Advancing markets without breaking sequencing, readiness, or cross-country alignment.',
      link: 'Explore the Market Expansion System'
    },
    {
      role: 'Digital Commerce Leaders',
      desc: 'Scaling e-commerce and retail media within defined expansion guardrails.',
      link: 'Explore the Digital Commerce System'
    },
    {
      role: 'Retail & Channel Heads',
      desc: 'Owning retail rollout and distributor activation across markets with shared execution context.',
      link: 'Explore the Retail Commerce System'
    },
    {
      role: 'Regulatory & Compliance Leads',
      desc: 'Ensuring commercial progression advances only when approvals and obligations are secured.',
      link: 'Explore the Regulatory Operations System'
    },
    {
      role: 'Executive & Portfolio Leadership',
      desc: 'Overseeing capital deployment, prioritization, and expansion exposure across the portfolio.',
      link: 'Explore the Portfolio Governance System'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[10px] mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Roles</div>
          <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50">Built for Expansion Operators</h2>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">Each Expansion Operating System governs a distinct dimension of expansion — and the leaders accountable for its outcomes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operators.map((op) => (
            <div
              key={op.role}
              className="p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-500 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:border-brand-blue/30 group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-950 dark:group-hover:bg-zinc-50 transition-colors">
                  <div className="w-4 h-4 rounded-sm bg-zinc-400 dark:bg-zinc-500 group-hover:bg-white dark:group-hover:bg-zinc-950" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 leading-tight">{op.role}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed min-h-[60px]">{op.desc}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <button className="flex items-center text-xs font-bold uppercase tracking-widest text-[#3858df] dark:text-brand-blue hover:opacity-80 transition-opacity">
                  <span className="mr-2">→</span>
                  {op.link}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
