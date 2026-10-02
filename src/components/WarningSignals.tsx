import React from 'react';
import { AlertOctagon, TrendingDown, Clock, XCircle, Headphones, Banknote } from 'lucide-react';

export const WarningSignals: React.FC = () => {
  const signals = [
    {
      metric: 'Repeat Purchase Rate',
      from: '41%',
      to: '27%',
      direction: 'down',
      icon: TrendingDown,
      note: '-14 percentage points in customer cohort retention',
    },
    {
      metric: 'Average Delivery Time',
      from: '29 min',
      to: '37 min',
      direction: 'up_bad',
      icon: Clock,
      note: '+8 minutes breach beyond promised delivery window',
    },
    {
      metric: 'Cancellation Rate',
      from: '6%',
      to: '11%',
      direction: 'up_bad',
      icon: XCircle,
      note: 'Almost doubled; peak cancellations at peak hours',
    },
    {
      metric: 'Support Tickets / Month',
      from: '3,100',
      to: '5,900',
      direction: 'up_bad',
      icon: Headphones,
      note: '+90% escalation in customer & partner complaints',
    },
    {
      metric: 'Promotional Spend / Month',
      from: '₹9.5L',
      to: '₹17L',
      direction: 'up_bad',
      icon: Banknote,
      note: 'Acquisition discount subsidies grew by ~79%',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span>WARNING SIGNALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            BEHIND THE TOP-LINE NUMBERS, <br />
            <span className="text-rose-400">CRITICAL FRICTION IS SPREADING.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            These shifts occurred over the last four operating quarters. The symptoms are visible across customer experience, partner operations, and unit economics.
          </p>
        </div>

        {/* 5 Warning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {signals.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.metric}
                className="p-5 rounded-xl bg-[#111520] border border-rose-500/20 hover:border-rose-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-slate-400">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300">
                      SIGNAL 0{idx + 1}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-slate-200">
                    {s.metric}
                  </div>

                  {/* Contrast Value Transition */}
                  <div className="mt-3 flex items-baseline gap-2 font-mono">
                    <span className="text-base text-slate-400 line-through tabular-nums">
                      {s.from}
                    </span>
                    <span className="text-xs text-rose-400 font-bold">→</span>
                    <span className="text-2xl font-extrabold text-rose-300 tabular-nums tracking-tight">
                      {s.to}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400 mt-4 pt-3 border-t border-white/[0.06] leading-relaxed">
                  {s.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Pivot Statement */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10">
          <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            NOVA CART is getting bigger.
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 tracking-tight mt-2">
            But is it actually getting better?
          </p>
        </div>
      </div>
    </section>
  );
};
