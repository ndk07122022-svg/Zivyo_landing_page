
import React, { useState } from 'react';
import { Button } from './UI/Button';
import { MockDashboard } from './UI/MockUI';
import { UnifiedControlSurface } from './UnifiedControlSurface';
import { CapitalAllocationMatrix } from './CapitalAllocationMatrix';
import { RetailCommerceSystem } from './RetailCommerceSystem';

export const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'digital' | 'retail' | 'launch' | 'regulatory' | 'portfolio'>('digital');

  const tabs = [
    { id: 'digital' as const, label: 'Digital Commerce' },
    { id: 'retail' as const, label: 'Retail Commerce' },
    { id: 'launch' as const, label: 'Market Launch' },
    { id: 'regulatory' as const, label: 'Regulatory Ops' },
    { id: 'portfolio' as const, label: 'Portfolio Governance' },
  ];

  return (
    <section id="solutions" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 space-y-10">

        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[10px] mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Systems Overview</div>
          <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50">Govern every layer of expansion</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col items-center space-y-6">
          <div className="inline-flex p-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-xs uppercase tracking-widest rounded-xl transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                  ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[580px]">

          {/* Digital Commerce System */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'digital' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <UnifiedControlSurface />
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-[0.4em] mono">System 01</div>
                  <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-tight">Digital Commerce System</h2>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Govern digital revenue across marketplaces and D2C storefronts within one continuous commerce layer — aligning pricing posture, inventory positioning, campaign activity, and performance interpretation across markets.
                </p>
                <Button variant="primary" size="lg" className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-xl group">
                  Explore Digital Commerce
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Retail Commerce System */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'retail' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-[0.4em] mono">System 02</div>
                  <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-tight">Retail Commerce System</h2>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Govern retail planning, trade execution, merchandising, and sell-through across markets within a unified retail commerce environment — coordinating distributor networks and field execution under a shared operational framework.
                </p>
                <Button variant="primary" size="lg" className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-xl group">
                  Explore Retail Commerce
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
              <div className="relative">
                <RetailCommerceSystem />
              </div>
            </div>
          </div>

          {/* Market Launch System */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'launch' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <MockDashboard type="LAUNCH_GATE" />
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-[0.4em] mono">System 03</div>
                  <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-tight">Market Launch System</h2>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Govern market activation across regions within a structured launch environment — aligning regulatory readiness, entry pricing posture, and distributor onboarding before scale is permitted.
                </p>
                <Button variant="primary" size="lg" className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-xl group">
                  Explore Market Launch
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Regulatory Operations System */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'regulatory' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-[0.4em] mono">System 04</div>
                  <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-tight">Regulatory Operations System</h2>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Govern the regulatory lifecycle across markets within one continuous compliance environment — managing filings, approvals, documentation, and post-market obligations as an integrated component of expansion.
                </p>
                <Button variant="primary" size="lg" className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-xl group">
                  Explore Regulatory Ops
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
              <div className="relative">
                <MockDashboard type="EXPANSION_LOGIC" />
              </div>
            </div>
          </div>

          {/* Portfolio Governance System */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'portfolio' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <CapitalAllocationMatrix />
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-[0.4em] mono">System 05</div>
                  <h2 className="text-4xl md:text-5xl text-zinc-950 dark:text-zinc-50 leading-tight">Portfolio Governance System</h2>
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Govern expansion across markets, brands, and SKUs within one executive framework — directing capital allocation, prioritization, and exposure oversight across regions.
                </p>
                <Button variant="primary" size="lg" className="bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-xl group">
                  Explore Portfolio Governance
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
