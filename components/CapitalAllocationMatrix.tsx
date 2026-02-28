import React, { useState, useEffect } from 'react';

const MetricCard = ({ label, value, subtext, color = "brand-blue" }: { label: string, value: string, subtext?: string, color?: "brand-blue" | "red" | "zinc" }) => (
    <div className="flex flex-col">
        <span className="text-[9px] mono font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
        <div className="flex items-baseline gap-1.5">
            <span className={`text-xl md:text-2xl font-black ${color === 'brand-blue' ? 'text-[#3858df]' : color === 'red' ? 'text-red-500' : 'text-zinc-900 dark:text-zinc-50'}`}>
                {value}
            </span>
            {subtext && <span className="text-[8px] mono font-bold text-zinc-400 dark:text-zinc-500 uppercase">{subtext}</span>}
        </div>
    </div>
);

const GridCell = ({ value, delta, status }: { value: string, delta: string, status: 'healthy' | 'warning' | 'neutral' }) => (
    <div className={`py-1.5 px-2.5 rounded-lg border transition-all duration-300 group/cell ${status === 'warning'
        ? 'bg-red-500/5 border-red-500/20 hover:border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.05)]'
        : status === 'healthy'
            ? 'bg-brand-blue/5 border-brand-blue/10 hover:border-brand-blue/30'
            : 'bg-zinc-50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
        }`}>
        <div className="flex justify-between items-center mb-0.5">
            <span className={`text-[10px] md:text-[11px] font-bold ${status === 'warning' ? 'text-red-500' : status === 'healthy' ? 'text-[#3858df]' : 'text-zinc-600 dark:text-zinc-400'}`}>
                {value}
            </span>
            <span className={`text-[8px] mono font-bold ${delta.startsWith('+') ? 'text-brand-blue' : 'text-red-400'}`}>
                {delta}
            </span>
        </div>
        <div className="flex gap-0.5">
            {[1, 2, 3].map(i => (
                <div key={i} className={`h-0.5 flex-1 rounded-full ${status === 'healthy' ? 'bg-brand-blue/20' : status === 'warning' ? 'bg-red-500/20' : 'bg-zinc-200 dark:bg-zinc-800'}`} />
            ))}
        </div>
    </div>
);

const AllocationSlider = ({ region, percentage }: { region: string, percentage: number }) => (
    <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider mono">
            <span className="text-zinc-500">{region}</span>
            <span className="text-zinc-900 dark:text-zinc-100">{percentage}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden relative">
            <div
                className="absolute inset-y-0 left-0 bg-zinc-900 dark:bg-zinc-100 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
            />
        </div>
    </div>
);

export const CapitalAllocationMatrix: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="aspect-[4/3] w-full" />;

    const markets = ['UK', 'EU', 'US'];
    const brands = ['ALPHA', 'BETA', 'GAMMA'];

    return (
        <div className="w-full aspect-[4/3.2] flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-brand-black border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-5 md:p-8 flex flex-col shadow-sm gap-5 overflow-hidden transition-all duration-500">

                {/* Header Section */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#3858df] shadow-[0_0_10px_rgba(56,88,223,0.5)]" />
                            <span className="text-[10px] mono font-bold text-zinc-500 uppercase tracking-widest">Portfolio Governance</span>
                        </div>
                        <h3 className="text-sm md:text-base text-zinc-900 dark:text-zinc-100 leading-tight">Executive Allocation Layer</h3>
                    </div>

                    <div className="flex items-center gap-6 md:gap-10">
                        <MetricCard label="Total Margin" value="36.8%" color="brand-blue" />
                        <MetricCard label="Deployed" value="$42.3M" color="zinc" />
                    </div>
                </div>

                {/* Matrix Grid - Tighter Row Spacing */}
                <div className="flex-1 flex flex-col gap-2 min-h-0">
                    <div className="grid grid-cols-4 gap-4">
                        <div />
                        {brands.map(brand => (
                            <div key={brand} className="text-[9px] mono font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-center">
                                {brand}
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1 overflow-hidden">
                        {markets.map((market, rowIdx) => (
                            <div key={market} className="grid grid-cols-4 gap-4 items-center">
                                <span className="text-[10px] mono font-black text-zinc-600 dark:text-zinc-400">{market}</span>
                                {[0, 1, 2].map(colIdx => {
                                    const isDrift = market === 'UK' && colIdx === 1;
                                    return (
                                        <div key={colIdx} className="relative">
                                            {isDrift && (
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-max">
                                                    <div className="bg-red-500 text-white text-[8px] mono font-black px-1.5 py-0.5 rounded shadow-xl animate-bounce">
                                                        UK — MARGIN DRIFT
                                                    </div>
                                                </div>
                                            )}
                                            <GridCell
                                                value={isDrift ? "34.2%" : `${(30 + Math.random() * 10).toFixed(1)}%`}
                                                delta={isDrift ? "-4.2%" : "+0.8%"}
                                                status={isDrift ? 'warning' : 'healthy'}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section: Allocation Sliders & Active Status */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] mono font-bold text-zinc-500 uppercase tracking-widest">Allocation Rebalancing</span>
                            {/* Re-integrated Activity Status Button */}
                            <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 active-status-glow">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#3858df] animate-pulse" />
                                <span className="text-[8px] mono font-bold text-[#3858df] uppercase">Active Optimization</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-zinc-400" />
                            <span className="text-[8px] mono font-bold text-zinc-400 uppercase tracking-widest">Auto</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <AllocationSlider region="UK" percentage={22} />
                        <AllocationSlider region="EU" percentage={28} />
                        <AllocationSlider region="US" percentage={35} />
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translate(-50%, 0); }
                    50% { transform: translate(-50%, -3px); }
                }
                .active-status-glow {
                    box-shadow: 0 0 10px rgba(56, 88, 223, 0.05);
                }
            `}</style>
        </div>
    );
};
