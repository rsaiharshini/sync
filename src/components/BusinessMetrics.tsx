import React from 'react';
import { Users, Activity, ShoppingBag, CreditCard, TrendingUp, AlertTriangle } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export const BusinessMetrics: React.FC = () => {
  const metrics = [
    {
      value: '1,20,000',
      label: 'Registered Users',
      subtext: 'Accumulated across 3 pilot cities',
      icon: Users,
    },
    {
      value: '46,000',
      label: 'Monthly Active Users',
      subtext: '38.3% MAU to registered ratio',
      icon: Activity,
    },
    {
      value: '38,500',
      label: 'Monthly Orders',
      subtext: '~1,280 daily transactions',
      icon: ShoppingBag,
    },
    {
      value: '₹486',
      label: 'Average Order Value',
      subtext: 'Local grocery & daily essentials',
      icon: CreditCard,
    },
    {
      value: '₹26.1L',
      label: 'Monthly Revenue',
      subtext: 'Commission + delivery convenience fees',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="case" className="py-20 bg-[#090b11] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>THE CASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight" style={{ textWrap: 'balance' }}>
            NOVA CART LOOKS LIKE IT'S GROWING. <br />
            <span className="text-slate-400">BUT SOMETHING IS WRONG.</span>
          </h2>
          <p className="mt-5 text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {eventConfig.caseSummary}
          </p>
          <div className="mt-3 text-xs font-mono text-slate-400">
            * Fictional business case dossier created for PromptWars
          </div>
        </div>

        {/* Growth Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="p-5 rounded-xl bg-[#0f131d] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-medium text-slate-400 tracking-wider">
                      METRIC 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tabular-nums tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">
                    {m.label}
                  </div>
                </div>
                <div className="text-xs text-slate-400 mt-4 pt-3 border-t border-white/[0.06]">
                  {m.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
