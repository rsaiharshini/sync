import React from 'react';
import { Compass, Lightbulb, Code2, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const ChallengeMission: React.FC = () => {
  const pillars = [
    { name: 'AI & Prompting', desc: 'Reasoning partner to challenge assumptions' },
    { name: 'Business Reasoning', desc: 'Unit economics, cohort retention, and root-cause analysis' },
    { name: 'External Research', desc: 'Quick commerce benchmarks, retail logistics, and consumer behavior' },
    { name: 'Data Rigor', desc: 'Grounded insights extracted from operational metrics' },
    { name: 'Creative Product Strategy', desc: 'Distinctive digital interventions that solve real pain' },
  ];

  return (
    <section id="challenge" className="py-24 bg-[#090c13] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label & Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>YOUR MISSION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.1]" style={{ textWrap: 'balance' }}>
            FIND THE PROBLEM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              WORTH SOLVING.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Participants must use <strong className="text-white">AI + Prompt Engineering + Business Reasoning + Research + Data + Creativity</strong> to investigate NOVA CART.
          </p>
        </div>

        {/* Core mandate box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#101420] to-[#0c0f18] border border-blue-500/30 shadow-2xl relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              The Primary Mandate
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2 uppercase">
              DESIGN & DEVELOP A FUNCTIONAL WEB OR MOBILE APPLICATION THAT ADDRESSES IT.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Identify and validate a high-impact underlying business problem or strategic opportunity. Then bring that solution to life as a working digital software system.
            </p>
          </div>

          {/* Core Guiding Question */}
          <div className="mt-8 p-6 rounded-xl bg-blue-950/40 border border-blue-500/30 text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-300 mb-2">
              <HelpCircle className="w-4 h-4" />
            </div>
            <p className="text-lg sm:text-xl font-bold text-white tracking-tight italic">
              “If NOVA CART could build one digital product or major digital intervention right now, what should it build — and can you prove why?”
            </p>
          </div>

          {/* Three Non-Negotiable Tenets */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="text-blue-400 font-mono text-xs font-semibold uppercase mb-1">
                Zero Prescribed Products
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We will <strong className="text-white">NOT</strong> tell participants what application to build. No pre-assigned templates.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="text-blue-400 font-mono text-xs font-semibold uppercase mb-1">
                No Single Answer
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                There is <strong className="text-white">no predefined application or single correct solution</strong>. Different angles can win.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <div className="text-blue-400 font-mono text-xs font-semibold uppercase mb-1">
                Investigation Drives Product
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your prompt queries, analytical findings, and user insights determine your prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
