
import React from 'react';

type MockType = 'CHANNEL_LOGIC' | 'EXPANSION_LOGIC' | 'LAUNCH_GATE' | 'LEARNING_LOGIC' | 'WORKSPACE_CORE';

const SignalFlow: React.FC = () => (
  <div className="relative h-64 w-full flex items-center justify-center">
    {/* Source Nodes */}
    <div className="absolute left-0 h-full flex flex-col justify-between py-4">
      {[
        { id: 'dtc', label: 'DTC / Shopify', color: 'bg-brand-black dark:bg-zinc-100' },
        { id: 'amz', label: 'Amazon Seller', color: 'bg-brand-black dark:bg-zinc-100' },
        { id: 'dist', label: 'Global Distrib.', color: 'bg-brand-black dark:bg-zinc-100' }
      ].map((source, i) => (
        <div key={source.id} className="flex items-center space-x-4 animate-reveal" style={{ animationDelay: `${i * 0.2}s` }}>
          <div className={`w-10 h-10 rounded-xl ${source.color} flex items-center justify-center shadow-lg relative`}>
            <div className="absolute inset-0 rounded-xl animate-pulse bg-brand-blue/20" />
            <div className="w-4 h-4 rounded-sm border border-zinc-500 dark:border-zinc-400" />
          </div>
          <div className="text-[10px] mono font-bold uppercase tracking-widest text-brand-grey dark:text-zinc-500">{source.label}</div>
        </div>
      ))}
    </div>

    {/* Flow Lines */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40" viewBox="0 0 400 200">
      <path d="M60 40 C 200 40, 200 100, 300 100" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 8" className="text-brand-blue" />
      <path d="M60 100 C 200 100, 200 100, 300 100" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 8" className="text-brand-blue" />
      <path d="M60 160 C 200 160, 200 100, 300 100" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 8" className="text-brand-blue" />

      {/* Animating Packets */}
      <circle r="3" fill="#329ffc">
        <animateMotion path="M60 40 C 200 40, 200 100, 300 100" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#3858df">
        <animateMotion path="M60 100 C 200 100, 200 100, 300 100" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="3" fill="#53217f">
        <animateMotion path="M60 160 C 200 160, 200 100, 300 100" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>

    {/* Zivyo Central Processor */}
    <div className="absolute right-0 w-32 h-32 bg-brand-black dark:bg-zinc-50 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-4 ring-8 ring-zinc-50 dark:ring-brand-black">
      <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center mb-3">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      </div>
      <div className="text-[9px] mono font-bold text-white dark:text-brand-black uppercase tracking-widest text-center">Zivyo<br />Interpreter</div>
    </div>
  </div>
);

const ExpansionWorkflow: React.FC = () => (
  <div className="space-y-12">
    <div className="relative flex justify-between items-center">
      {/* Connecting Path */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-zinc-200 dark:bg-zinc-800" />

      {[
        { label: 'Market Audit', status: 'verified', icon: 'M9 12l2 2 4-4' },
        { label: 'Regulatory', status: 'verified', icon: 'M9 12l2 2 4-4' },
        { label: 'Pricing Gate', status: 'active', icon: 'M12 8v4l3 3' },
        { label: 'Supply Lock', status: 'pending', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
      ].map((step, i) => (
        <div key={i} className="relative z-10 flex flex-col items-center space-y-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${step.status === 'verified' ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' :
            step.status === 'active' ? 'bg-brand-black dark:bg-zinc-50 text-white dark:text-brand-black shadow-2xl animate-pulse' :
              'bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-brand-grey'
            }`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={step.icon} />
            </svg>
          </div>
          <div className="text-[10px] mono font-bold uppercase tracking-widest text-brand-grey dark:text-brand-grey">{step.label}</div>
        </div>
      ))}
    </div>

    {/* Detail Panel */}
    <div className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="text-[10px] mono font-bold text-brand-blue uppercase tracking-widest">Decision Node: Pricing Policy</div>
          <h4 className="text-xl text-brand-black dark:text-zinc-50">Middle East Distribution</h4>
        </div>
        <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-xl text-xs font-bold text-emerald-600 dark:text-emerald-400">Readiness: 72%</div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-brand-black rounded-2xl border border-zinc-100 dark:border-zinc-800 space-y-2">
          <div className="text-[9px] mono text-brand-grey uppercase font-bold">Assumptions Made</div>
          <p className="text-xs text-zinc-600 dark:text-brand-grey leading-relaxed font-medium">35% Gross Margin Floor across 3 territories.</p>
        </div>
        <div className="p-4 bg-white dark:bg-brand-black rounded-2xl border border-zinc-100 dark:border-zinc-800 space-y-2">
          <div className="text-[9px] mono text-brand-grey uppercase font-bold">Identified Risk</div>
          <p className="text-xs text-zinc-600 dark:text-brand-grey leading-relaxed font-medium">UAE Customs clearance delay (Est. 12 days).</p>
        </div>
      </div>
    </div>
  </div>
);

export const MockDashboard: React.FC<{ type: MockType }> = ({ type }) => {
  return (
    <div className="w-full bg-white dark:bg-brand-black border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative group ring-1 ring-brand-black/5 dark:ring-white/5">
      {/* Platform Toolbar */}
      <div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-6 bg-zinc-50/30 dark:bg-zinc-900/30 justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:border dark:border-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:border dark:border-zinc-700" />
          </div>
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-sm bg-brand-blue" />
            <span className="text-[10px] mono text-brand-grey dark:text-zinc-500 uppercase tracking-widest font-bold">
              {type.replace('_', ' ')}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-6 w-20 bg-zinc-100 dark:bg-zinc-900 rounded-md" />
          <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
        </div>
      </div>

      <div className="p-8">
        {type === 'CHANNEL_LOGIC' && (
          <div className="space-y-12">
            <SignalFlow />
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <div className="space-y-4">
                <div className="text-[10px] mono text-brand-grey uppercase font-bold tracking-widest">Active Governance</div>
                <div className="flex items-center space-x-3 p-4 bg-brand-black dark:bg-zinc-50 rounded-xl shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-xs font-bold text-white dark:text-brand-black uppercase tracking-widest">Policy Enforced</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-[10px] mono text-brand-grey uppercase font-bold tracking-widest">Signal Interpretation</div>
                <div className="h-10 w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center px-4 overflow-hidden">
                  <div className="flex-1 text-[10px] mono text-zinc-500 font-bold animate-pulse">ANALYZING_DRIFT...</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {type === 'EXPANSION_LOGIC' && (
          <ExpansionWorkflow />
        )}

        {type === 'LAUNCH_GATE' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-brand-black dark:text-zinc-50">Middle East Expansion</h4>
                <p className="text-[10px] mono text-brand-grey uppercase tracking-widest mt-1">Status: Stage 3 Verification</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-brand-blue">72%</div>
                <div className="text-[9px] mono text-brand-grey uppercase">Readiness Score</div>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: 'Regulatory Filing - UAE', owner: 'M. Chen', status: 'Completed', date: 'Oct 24' },
                { label: 'Inventory Positioning', owner: 'S. Rodriguez', status: 'Pending', date: 'Nov 02' },
                { label: 'Local Pricing Policy', owner: 'A. Jensen', status: 'In Review', date: 'Oct 28' },
                { label: 'Channel Authorization', owner: 'Zivyo', status: 'Completed', date: 'Oct 22' }
              ].map((gate, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all cursor-default">
                  <div className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full ${gate.status === 'Completed' ? 'bg-brand-blue' : gate.status === 'Pending' ? 'bg-amber-500' : 'bg-zinc-300 dark:bg-zinc-600'}`} />
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{gate.label}</span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className="text-[10px] mono text-brand-grey font-bold">{gate.owner}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full border ${gate.status === 'Completed' ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50' : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 border-zinc-100 dark:border-zinc-800'} font-bold uppercase tracking-wider`}>
                      {gate.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'LEARNING_LOGIC' && (
          <div className="space-y-8">
            <div className="p-6 bg-brand-black dark:bg-zinc-50 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-20 h-20 text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="relative z-10 space-y-4">
                <div className="text-[10px] mono text-zinc-500 dark:text-brand-grey uppercase font-bold tracking-widest">Decision Continuity</div>
                <h4 className="text-xl text-zinc-50 dark:text-brand-black leading-tight">UK Launch Review: <br />Margin Erosion Identified</h4>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="px-3 py-1 bg-white/10 dark:bg-black/10 rounded-lg text-[10px] mono text-zinc-300 dark:text-zinc-700 font-bold">Ref: G-882</div>
                  <div className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-[10px] mono font-bold">Critical Variance</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-[9px] mono text-brand-grey dark:text-zinc-500 uppercase font-bold tracking-widest">Initial Intent (Apr)</div>
                <div className="p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50">
                  <div className="text-2xl font-semibold text-brand-black dark:text-zinc-50">38%</div>
                  <p className="text-[10px] text-brand-grey mt-1">Target Margin Rule</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-[9px] mono text-brand-grey dark:text-zinc-500 uppercase font-bold tracking-widest">Actual Outcome (Oct)</div>
                <div className="p-4 border border-red-100 dark:border-red-900/30 rounded-xl bg-red-50/50 dark:bg-red-950/10">
                  <div className="text-2xl font-semibold text-red-500">34.2%</div>
                  <p className="text-[10px] text-red-400/70 mt-1">Drift Detected</p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900/80">
              <div className="text-[9px] mono text-brand-grey dark:text-zinc-500 uppercase font-bold mb-2">Automated Insight</div>
              <p className="text-xs text-zinc-600 dark:text-brand-grey leading-relaxed italic">"Distributor fee overheads in the UK market exceeded the model by 4.2%. Applying adjustment to all Western Europe logic nodes."</p>
            </div>
          </div>
        )}

        {/* Fallback for other types */}
        {!['CHANNEL_LOGIC', 'EXPANSION_LOGIC', 'LAUNCH_GATE', 'LEARNING_LOGIC'].includes(type) && (
          <div className="flex flex-col items-center justify-center h-64 space-y-4">
            <div className="w-16 h-16 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-full animate-spin flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-brand-blue rounded-full" />
            </div>
            <span className="text-[10px] mono text-brand-grey dark:text-zinc-500 uppercase tracking-widest font-bold">Initializing Module...</span>
          </div>
        )}
      </div>
    </div>
  );
};
