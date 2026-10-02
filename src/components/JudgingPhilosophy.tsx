import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export const JudgingPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-[#090c13] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>JUDGING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            THERE IS NO PREDETERMINED ANSWER.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Two participants may analyse the exact same NOVA CART data, identify completely different high-impact problems, and build completely different products.
          </p>
        </div>

        {/* The Connection Chain */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f131c] border border-white/10 text-center mb-12 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
            The Golden Thread of Proof
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold text-white">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-blue-300">
              EVIDENCE
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sky-300">
              PROMPTING
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-indigo-300">
              INSIGHT
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300">
              PROBLEM
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-violet-300">
              PRODUCT
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-300">
              FUNCTIONAL BUILD
            </span>
            <span className="text-blue-500 font-sans">→</span>
            <span className="px-3 py-1.5 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-200">
              BUSINESS IMPACT
            </span>
          </div>
        </div>

        {/* 3 Explicit Negative Gates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          <div className="p-6 rounded-xl bg-gradient-to-b from-[#121622] to-[#0c0f17] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
              <X className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-200 leading-snug">
              A beautiful application solving the wrong problem is not enough.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-b from-[#121622] to-[#0c0f17] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
              <X className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-200 leading-snug">
              A complex application without clear business value is not enough.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-b from-[#121622] to-[#0c0f17] border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
              <X className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-200 leading-snug">
              A generic AI-generated idea converted into a website is not enough.
            </p>
          </div>
        </div>

        {/* The Concluding Declaration */}
        <div className="text-center">
          <div className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-blue-900/30 to-indigo-950/40 border border-blue-500/30">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider uppercase">
              THE COMPLETE JOURNEY MATTERS.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
