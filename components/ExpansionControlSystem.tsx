import React from 'react';

const StatusDot = ({ pulse = false }: { pulse?: boolean }) => (
    <span className="relative flex h-1.5 w-1.5">
        {pulse && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light-blue dark:bg-brand-light-blue/60 opacity-75"></span>
        )}
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-blue dark:bg-brand-blue/80 shadow-[0_0_8px_rgba(56,88,223,0.4)]"></span>
    </span>
);

const ExternalNode = ({ label, icon, position, align = "left", flowDirection = "in" }: { label: string; icon: React.ReactNode; position: string; align?: "left" | "right"; flowDirection?: "in" | "out" }) => (
    <div className={`absolute ${position} group/node cursor-pointer pointer-events-auto z-20 transition-all duration-500`}>
        <div className={`relative flex flex-col items-center gap-2`}>
            {/* Animated Data Flow Line */}
            <div className={`absolute ${align === 'left' ? 'left-full' : 'right-full'} top-1/2 -translate-y-1/2 w-6 h-[2px] overflow-hidden pointer-events-none`}>
                <div className={`w-full h-full bg-zinc-200 dark:bg-zinc-800/30 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent w-[50%] h-full animate-flow-${flowDirection}`} />
                </div>
            </div>

            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 backdrop-blur-md flex items-center justify-center text-brand-grey dark:text-zinc-400 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover/node:border-brand-blue/50 dark:group-hover/node:border-brand-blue/30 transition-all duration-300 group-hover/node:text-brand-blue group-hover/node:scale-110">
                {icon}
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/node:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="text-[9px] font-black text-brand-blue dark:text-brand-blue/90 uppercase tracking-[0.2em] whitespace-nowrap">
                    {label}
                </span>
            </div>
        </div>
    </div>
);

export const ExpansionControlSystem: React.FC = () => {
    return (
        <div className="relative w-full max-w-4xl flex items-center justify-center p-4 md:p-8 lg:p-12 lg:pt-0 group/system">

            {/* External Nodes - Tightened Spacing & Flow */}
            <div className="hidden lg:block">
                <ExternalNode
                    label="Marketplace"
                    position="-left-6 top-[22%]"
                    align="left"
                    flowDirection="in"
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                />
                <ExternalNode
                    label="Warehouse"
                    position="-left-6 top-[58%]"
                    align="left"
                    flowDirection="in"
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                />
                <ExternalNode
                    label="Compliance"
                    position="-right-6 top-[40%]"
                    align="right"
                    flowDirection="out"
                    icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                />
            </div>

            {/* Main Container - Reduced Height */}
            <div className="relative w-full bg-white dark:bg-[#0a0a0b] rounded-[2rem] md:rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.03)] overflow-hidden flex flex-col group/container hover:border-brand-blue/30 dark:hover:border-brand-blue/20 transition-all duration-700 min-h-[440px] lg:min-h-[480px]">

                {/* Subtle Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.01] dark:from-brand-blue/[0.02] to-transparent pointer-events-none" />
                <div className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] bg-brand-blue/10 blur-[100px] rounded-full opacity-0 group-hover/container:opacity-30 dark:group-hover/container:opacity-40 transition-opacity duration-1000" />

                {/* Top Control Strip */}
                <div className="h-12 md:h-14 px-4 md:px-8 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900/50 relative z-10 bg-zinc-50/50 dark:bg-transparent backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 group/logo cursor-pointer">
                            <img src="/logo-white.png" alt="Zivyo Logo" className="w-5.5 h-5.5 md:w-6 md:h-6 object-contain brightness-0 dark:brightness-100" />
                            <img src="/logotype-white.png" alt="Zivyo" className="h-4.5 md:h-5.5 object-contain brightness-0 dark:brightness-100" />
                        </div>
                        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black text-brand-grey dark:text-zinc-500 uppercase tracking-widest">Workspace 01</span>
                            <div className="w-1 h-1 rounded-full bg-brand-blue animate-pulse" />
                            <span className="text-[9px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">Active</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-brand-grey dark:text-zinc-500">
                        <svg className="w-4 h-4 hover:text-brand-blue transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <svg className="w-4 h-4 hover:text-brand-blue transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                </div>

                {/* Center Control Surface */}
                <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-8 p-6 md:p-8 lg:p-10 items-stretch justify-center relative z-10">

                    {/* Channels Card */}
                    <div className="w-full md:flex-1 bg-zinc-50/80 dark:bg-[#121214] rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-6 md:p-8 shadow-md dark:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 group/card cursor-default flex flex-col">
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <h3 className="text-[10px] md:text-xs text-brand-grey dark:text-zinc-400 uppercase tracking-widest font-black">Channels</h3>
                            <div className="flex gap-1">
                                <StatusDot pulse />
                                <StatusDot pulse />
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 flex-1 flex flex-col justify-center">
                            {[
                                { name: 'Amazon', icon: 'a', status: 'active' },
                                { name: 'Shopify', icon: 's', status: 'active' },
                                { name: 'Retail', icon: 'r', status: 'active' },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 group/row">
                                    <div className="flex items-center gap-4">
                                        <div className="w-7 h-7 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-600 dark:text-zinc-400 italic">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300 group-hover/row:text-zinc-950 dark:group-hover/row:text-white transition-colors">{item.name}</span>
                                    </div>
                                    <div className="pl-4">
                                        <StatusDot />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Markets Card */}
                    <div className="w-full md:flex-1 bg-white dark:bg-[#18181b]/60 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 p-6 md:p-8 shadow-md dark:shadow-2xl hover:translate-y-[-4px] transition-all duration-500 group/card cursor-default flex flex-col">
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <h3 className="text-[10px] md:text-xs text-brand-grey dark:text-zinc-400 uppercase tracking-widest font-black">Markets</h3>
                            <div className="flex gap-1">
                                <StatusDot pulse />
                                <StatusDot pulse />
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 flex-1 flex flex-col justify-center">
                            {[
                                { name: 'UAE', value: '82%' },
                                { name: 'EU', value: '91%' },
                                { name: 'US', value: '88%' },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-zinc-100 dark:hover:border-zinc-800 group/row">
                                    <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300 group-hover/row:text-brand-black dark:group-hover/row:text-white transition-colors">{item.name}</span>
                                    <span className="text-[11px] md:text-xs font-bold text-brand-grey dark:text-zinc-500 tabular-nums tracking-widest">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Anchored Module */}
                <div className="px-4 md:px-10 pb-6 md:pb-10 flex justify-center relative z-10 mt-auto">
                    <div className="w-full md:w-auto px-8 py-3.5 bg-zinc-50/90 dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-200 dark:border-zinc-800/50 flex items-center justify-center gap-4 md:gap-6 shadow-lg dark:shadow-xl group/engine cursor-default hover:border-brand-blue/30 transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover/engine:scale-110 transition-transform duration-500">
                            <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xs md:text-sm font-black text-brand-black dark:text-zinc-100 leading-none">Decision Engine</div>
                            <div className="text-[9px] md:text-[10px] font-bold text-brand-grey dark:text-zinc-500 uppercase tracking-[0.2em] mt-1.5">Human Oversight</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};
