import React, { useEffect, useState } from 'react';

const FlowThread = ({ startPos, endPos, delay, color = "#3858df", size = 2.5 }: { startPos: { x: number, y: number }, endPos: { x: number, y: number }, delay: number, color?: string, size?: number }) => {
    // Increased curvature for a more "energetic" feel
    const path = `M ${startPos.x} ${startPos.y} C ${startPos.x + 20} ${startPos.y}, ${endPos.x - 20} ${endPos.y}, ${endPos.x} ${endPos.y}`;
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 300">
            <path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-40 dark:opacity-50"
                style={{
                    animation: 'dash 10s linear infinite',
                }}
            />
            <circle r={size} fill={color} className="shadow-[0_0_12px_rgba(56,88,223,0.9)]">
                <animateMotion
                    path={path}
                    dur="2.5s"
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
};

export const UnifiedControlSurface: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="aspect-[4/3] w-full" />;

    return (
        <div className="relative w-full aspect-[4/3] flex items-center justify-center isolate group">

            {/* Main Platform (Flat, OS Style) */}
            <div className="relative w-full h-[92%] bg-white dark:bg-brand-black rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-sm dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transition-all duration-500">


                {/* Content Layer */}
                <div className="relative z-10 h-full flex items-center justify-between px-6 md:px-12 py-8">

                    {/* Left Section: Channels */}
                    <div className="w-[32%] flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-[#3858df] shadow-[0_0_12px_rgba(56,88,223,0.6)]" />
                            <span className="text-[10px] md:text-[11px] mono font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">Channels</span>
                        </div>
                        <div className="space-y-2.5">
                            {[
                                { name: 'Amazon', gain: '+9%' },
                                { name: 'Shopify', gain: '+8%' },
                                { name: 'Retail', gain: '+12%' },
                                { name: 'Sales Dist', gain: '+6%' }
                            ].map((channel, i) => (
                                <div key={channel.name} className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:border-[#3858df]/50 group/item">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-5 h-5 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700/50">
                                            {channel.name[0]}
                                        </div>
                                        <span className="text-[10px] md:text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 group-hover/item:text-zinc-950 dark:group-hover/item:text-zinc-50">{channel.name}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-[#3858df] tabular-nums">{channel.gain}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center Section: Connectivity */}
                    <div className="flex-1 px-4 flex flex-col items-center justify-center gap-8">
                        {/* Horizontal Signal Guides (Aligned to Tab Edges) */}
                        <div className="relative w-full h-[1px] bg-zinc-200/50 dark:bg-zinc-800/50">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent animate-scan-fast" />
                        </div>

                        <div className="relative z-20">
                            <div className="px-6 py-3 bg-zinc-950 dark:bg-zinc-50 rounded-2xl border border-zinc-800 dark:border-zinc-200 shadow-2xl">
                                <span className="text-[9px] md:text-[10px] mono font-black text-white dark:text-zinc-950 uppercase tracking-[0.3em] whitespace-nowrap">Digital Commerce Layer</span>
                            </div>

                            {/* Input Flow Termination (Left of Tab) */}
                            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                                {/* Flow threads lead here */}
                            </div>

                            {/* Output Flow Origin (Right of Tab) */}
                            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                                {/* Flow threads start here */}
                            </div>
                        </div>

                        <div className="relative w-full h-[1px] bg-zinc-200/50 dark:bg-zinc-800/50" />
                    </div>

                    {/* Right Section: Enhanced Business */}
                    <div className="w-[32%] flex flex-col gap-4 items-end">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] md:text-[11px] mono font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest text-right">Enhanced Business</span>
                            <div className="w-2 h-2 rounded-full bg-[#3858df] shadow-[0_0_12px_rgba(56,88,223,0.6)]" />
                        </div>

                        <div className="w-full flex flex-col gap-3">
                            {/* Revenue Card */}
                            <div className="w-full p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 shadow-sm space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400">Revenue Flow</span>
                                    <span className="text-[11px] font-black text-[#3858df]">+12.4%</span>
                                </div>
                                <div className="h-10 w-full flex items-end gap-1 px-1">
                                    {[0.4, 0.6, 0.5, 0.8, 0.7, 0.9, 0.85, 1].map((h, i) => (
                                        <div key={i} className="flex-1 bg-[#3858df]/20 dark:bg-[#3858df]/40 rounded-t-sm" style={{ height: `${h * 100}%` }} />
                                    ))}
                                </div>
                            </div>

                            {/* Yield Optimization Card */}
                            <div className="w-full p-4 rounded-2xl bg-zinc-950 dark:bg-zinc-50 border border-zinc-800 dark:border-zinc-200 shadow-2xl flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500">Yield Optimization</span>
                                    <div className="w-4 h-4 rounded-full bg-[#3858df] flex items-center justify-center animate-pulse shadow-[0_0_12px_rgba(56, 88, 223, 0.8)]">
                                        <svg className="w-2.5 h-2.5 text-white dark:text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-black text-white dark:text-zinc-950">98.2</span>
                                    <span className="text-[9px] mono font-bold text-[#3858df] uppercase tracking-widest">Optimized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animated Signals (Precision Coordinates) */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Inputs from Channel Card edge (~x: 125) to Tab left edge (~x: 155) */}
                    <FlowThread startPos={{ x: 125, y: 115 }} endPos={{ x: 155, y: 152 }} delay={0} color="#3858df" size={2.5} />
                    <FlowThread startPos={{ x: 125, y: 225 }} endPos={{ x: 155, y: 152 }} delay={1.2} color="#3858df" size={2.5} />

                    {/* Outputs from Tab right edge (~x: 245) to Business Card edge (~x: 275) */}
                    <FlowThread startPos={{ x: 245, y: 152 }} endPos={{ x: 275, y: 110 }} delay={0.6} color="#3858df" size={2.5} />
                    <FlowThread startPos={{ x: 245, y: 152 }} endPos={{ x: 275, y: 235 }} delay={1.8} color="#3858df" size={2.5} />
                </div>
            </div>

            <style>{`
                @keyframes dash {
                    to { stroke-dashoffset: 200; }
                }
                .animate-scan-fast {
                    animation: scan 2.5s linear infinite;
                }
                @keyframes scan {
                    0% { transform: translateX(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateX(200%); opacity: 0; }
                }
            `}</style>
        </div>
    );
};
