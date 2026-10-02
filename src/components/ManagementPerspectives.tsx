import React from 'react';
import { UserCheck, Target, Truck, Store, Smartphone, BarChart3, Quote } from 'lucide-react';

export const ManagementPerspectives: React.FC = () => {
  const leaders = [
    {
      role: 'Chief Executive Officer',
      name: 'Executive Office',
      quote: 'We need to improve customer retention.',
      focus: 'Customer Lifetime Value & Churn',
      icon: UserCheck,
    },
    {
      role: 'VP Marketing',
      name: 'Growth & Acquisition',
      quote: 'We need stronger acquisition and better promotions.',
      focus: 'Top-of-Funnel Pipeline & Campaign ROI',
      icon: Target,
    },
    {
      role: 'Head of Operations',
      name: 'Fulfillment & Logistics',
      quote: 'Delivery reliability is damaging the experience.',
      focus: 'SLA Breaches & Rider Network Constraints',
      icon: Truck,
    },
    {
      role: 'Partner Team Lead',
      name: 'Merchant Ecosystem',
      quote: 'Inventory accuracy and store experience are the real bottlenecks.',
      focus: 'Catalog Sync, Stock-Outs & Retailer Friction',
      icon: Store,
    },
    {
      role: 'VP Product',
      name: 'Platform Strategy',
      quote: "We're treating ourselves like another delivery app instead of giving customers a reason to choose local commerce.",
      focus: 'Value Proposition & Differentiated UX',
      icon: Smartphone,
    },
    {
      role: 'Chief Financial Officer',
      name: 'Finance & Unit Economics',
      quote: "Our problem isn't growth. It's the quality and cost of that growth.",
      focus: 'Burn Rate, Discount Dependency & Margins',
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20 bg-[#080a0f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>MANAGEMENT PERSPECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            EVERYONE SEES A DIFFERENT PROBLEM.
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Internal leadership meetings have reached a deadlock. Every department head has a persuasive diagnosis backed by real numbers.
          </p>
        </div>

        {/* 6 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <div
                key={leader.role}
                className="p-6 rounded-xl bg-[#0e111a] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                        {leader.role}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {leader.name}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mt-2">
                    <Quote className="w-6 h-6 text-slate-600/40 absolute -top-2 -left-1 pointer-events-none" />
                    <p className="text-base font-semibold text-slate-100 pl-5 leading-snug italic">
                      “{leader.quote}”
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-slate-400">Internal Focus:</span>
                  <span className="font-mono text-slate-300 text-[11px] font-medium text-right">
                    {leader.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Takeaway */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-blue-950/20 border border-blue-500/20">
          <p className="text-lg sm:text-xl font-bold text-white">
            Each argument has evidence.
          </p>
          <p className="text-base sm:text-lg font-medium text-blue-300 mt-2">
            Your job is not to agree with management. Your job is to discover what deserves priority.
          </p>
        </div>
      </div>
    </section>
  );
};
