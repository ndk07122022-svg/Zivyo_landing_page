import React, { useState, useEffect } from 'react';

const StatusPill = ({ status }: { status: 'On Schedule' | 'In Progress' | 'Attention Required' }) => {
    const styles = {
        'On Schedule': 'bg-brand-blue/10 text-brand-blue dark:text-brand-blue border-brand-blue/20',
        'In Progress': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
        'Attention Required': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]',
    };

    return (
        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${styles[status]}`}>
            {status}
        </span>
    );
};

export const RetailCommerceSystem: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="aspect-[4/3] w-full" />;

    const tasks = [
        { retailer: 'Sainsbury\'s', city: 'London', type: 'Field Audit', date: 'Feb 26', status: 'In Progress' },
        { retailer: 'Tesco Express', city: 'Manchester', type: 'Promotion', date: 'Feb 27', status: 'Attention Required' },
        { retailer: 'Waitrose & Partners', city: 'Birmingham', type: 'Compliance', date: 'Feb 28', status: 'On Schedule' },
    ];

    return (
        <div className="w-full aspect-[4/3.2] flex items-center justify-center group/panel">
            <div className="w-full h-full bg-white dark:bg-brand-black border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] flex flex-col shadow-sm transition-all duration-500 relative overflow-hidden">

                {/* Subtle Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                />

                {/* Top OS Bar */}
                <div className="h-10 border-b border-zinc-100 dark:border-zinc-900 flex items-center justify-between px-6 shrink-0 z-10">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                            <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                        <span className="text-[9px] mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Retail Commerce System</span>
                    </div>
                    <div className="flex items-center gap-4 text-zinc-400">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <div className="w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 z-10">
                    <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl text-zinc-900 dark:text-zinc-100">Retail Ops Network — UK Cluster</h3>
                    </div>

                    {/* Tab & Update Row */}
                    <div className="flex items-center justify-between gap-4 z-20">
                        {/* Segmented Tabs */}
                        <div className="flex p-1 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-xl w-fit shrink-0 relative">
                            <div className="px-4 py-1.5 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">Distributor Networks</div>
                            <div className="px-4 py-1.5 text-[10px] font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider bg-white dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all">Field Ops</div>
                        </div>

                        {/* Integrated Message Card - Now inline to the right of tabs */}
                        <div className="flex-1 flex justify-end">
                            <div className="w-48 p-2.5 bg-zinc-950 dark:bg-zinc-50 border border-zinc-800 dark:border-zinc-200 rounded-xl shadow-xl flex flex-col gap-1 pointer-events-none group-hover/panel:translate-x-[-2px] transition-transform duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center overflow-hidden">
                                        <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(56, 88, 223, 0.5)]" />
                                    </div>
                                    <span className="text-[8px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">Agent Update</span>
                                </div>
                                <p className="text-[9px] leading-tight text-zinc-300 dark:text-zinc-700 font-medium italic">
                                    "Audit complete. SKU placement verified."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Task List */}
                    <div className="flex-1 flex flex-col gap-3 min-h-0 pr-4 group/list">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Scheduled Store Visits</span>
                            <div className="h-[1px] flex-1 mx-4 bg-zinc-100 dark:bg-zinc-900" />
                        </div>

                        <div className="space-y-2 overflow-hidden p-1 rounded-2xl border border-transparent group-hover/list:border-zinc-100 dark:group-hover/list:border-zinc-800 transition-all duration-500 group-hover/list:shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:group-hover/list:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                            {tasks.map((task, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-2xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-900/20 transition-all duration-300">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{task.retailer}</span>
                                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500">{task.city}</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{task.type}</span>
                                        <div className="h-0.5 w-6 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-blue w-1/2" />
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end gap-1.5">
                                        <span className="text-[10px] mono font-bold text-zinc-400 dark:text-zinc-500 uppercase">{task.date}</span>
                                        <StatusPill status={task.status as any} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subtle Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-[#0a0a0b] to-transparent pointer-events-none opacity-40" />
            </div>

            <style>{`
                @keyframes subtle-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-2px); }
                }
            `}</style>
        </div>
    );
};
