import React from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

interface FinalCTAProps {
  onDownloadPdf: () => void;
  onSubmitSolution: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDownloadPdf, onSubmitSolution }) => {
  return (
    <section className="py-24 bg-[#080a0f] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-sky-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest uppercase text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>PROMPTWARS 2026</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
          THE DATA IS YOUR STARTING POINT. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            NOT YOUR ANSWER.
          </span>
        </h2>

        {/* Narrative */}
        <div className="mt-8 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed space-y-3 font-normal">
          <p>Everyone receives the same business challenge.</p>
          <p>Everyone has access to AI.</p>
          <div className="pt-2 text-white font-semibold grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-mono">
            <span className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">What they notice.</span>
            <span className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">What they ask.</span>
            <span className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">What they discover.</span>
            <span className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10">What they build.</span>
          </div>
        </div>

        {/* Large Final Tagline */}
        <div className="mt-12 text-2xl sm:text-4xl font-extrabold tracking-widest text-white uppercase font-mono">
          {eventConfig.tagline}
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onDownloadPdf}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>DOWNLOAD FULL CHALLENGE</span>
          </button>
          <button
            type="button"
            onClick={onSubmitSolution}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xl shadow-blue-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>SUBMIT YOUR SOLUTION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
