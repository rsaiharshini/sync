import React from 'react';
import { ArrowDown, AlertTriangle, Cpu, Terminal, ArrowRight, UserCheck, ShieldAlert } from 'lucide-react';

export const FunctionalPrototype: React.FC = () => {
  return (
    <section id="build" className="py-20 bg-[#080a0f] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>FUNCTIONAL PROTOTYPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            DON'T JUST DESIGN IT. MAKE IT WORK.
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            A concept deck is not a product. An actual working system proves that your proposal can be operationalized.
          </p>
        </div>

        {/* 3-Step Functional Flow */}
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Box 1: INPUT */}
          <div className="p-6 rounded-xl bg-[#0f121a] border border-blue-500/30 text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
              STEP 01 · SYSTEM INGESTION
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              INPUT
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-lg mx-auto">
              User submits orders, inventory updates, delivery status, merchant parameters, or simulation constraints.
            </p>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center py-1 text-blue-400">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Box 2: PROCESSING / BUSINESS LOGIC */}
          <div className="p-6 rounded-xl bg-[#111522] border border-blue-500/40 text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
              STEP 02 · EXECUTION ENGINE
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              PROCESSING / BUSINESS LOGIC
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-lg mx-auto">
              Algorithms, heuristic filters, route optimization, retention scoring, or automated catalog reconciliation.
            </p>
          </div>

          {/* Flow Arrow */}
          <div className="flex justify-center py-1 text-blue-400">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Box 3: ACTION / RECOMMENDATION / OUTPUT */}
          <div className="p-6 rounded-xl bg-[#0f121a] border border-blue-500/30 text-center shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
              STEP 03 · MEASURABLE OUTCOME
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              ACTION / RECOMMENDATION / OUTPUT
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-lg mx-auto">
              Dynamic dispatch advice, merchant restock trigger, personalized retention incentive, or dashboard decision directive.
            </p>
          </div>
        </div>

        {/* 4-Part Logic Vector Chain */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              The Evaluator's Checklist For Your System
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-blue-400 font-semibold block mb-1">01. Persona</span>
              <div className="text-sm font-bold text-white">Who uses it</div>
              <p className="text-xs text-slate-400 mt-1">Clearly identified operational or consumer persona.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-blue-400 font-semibold block mb-1">02. Interaction</span>
              <div className="text-sm font-bold text-white">What they do</div>
              <p className="text-xs text-slate-400 mt-1">Real click, input, or trigger performed in the UI.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-blue-400 font-semibold block mb-1">03. Logic</span>
              <div className="text-sm font-bold text-white">What system does</div>
              <p className="text-xs text-slate-400 mt-1">Underlying computation or business rule applied.</p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-[11px] font-mono text-blue-400 font-semibold block mb-1">04. ROI</span>
              <div className="text-sm font-bold text-white">What value created</div>
              <p className="text-xs text-slate-400 mt-1">Tangible business benefit delivered to NOVA CART.</p>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-center gap-3.5 max-w-3xl mx-auto">
          <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0" />
          <p className="text-xs sm:text-sm font-semibold text-rose-200 leading-snug">
            Warning: Static UI screens alone will NOT be considered a complete functional prototype.
          </p>
        </div>
      </div>
    </section>
  );
};
