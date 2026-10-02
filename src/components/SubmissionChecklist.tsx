import React, { useState } from 'react';
import { CheckSquare, Square, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

interface SubmissionChecklistProps {
  onSubmitClick: () => void;
}

export const SubmissionChecklist: React.FC<SubmissionChecklistProps> = ({ onSubmitClick }) => {
  const initialItems = [
    { id: 'diag', label: 'Problem Diagnosis & Evidence Documented', checked: false },
    { id: 'prompt', label: 'Key Prompt Journey (Explore → Validate)', checked: false },
    { id: 'app', label: 'Functional Web/Mobile Application Built', checked: false },
    { id: 'deploy', label: 'Working Deployment / Demo Link Publicly Accessible', checked: false },
    { id: 'repo', label: 'GitHub Repository + Structured README Prepared', checked: false },
    { id: 'video', label: 'Demo Video (Flow & Business Value Explained)', checked: false },
    { id: 'kpi', label: 'Business Impact & Target KPIs Clarified', checked: false },
  ];

  const [items, setItems] = useState(initialItems);

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const completedCount = items.filter((i) => i.checked).length;
  const isAllComplete = completedCount === items.length;

  return (
    <section className="py-16 bg-[#080a0f] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-[#101420] to-[#0c0f17] border border-white/10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1">
                PRE-SUBMISSION VERIFICATION
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                SUBMISSION CHECKLIST
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3.5 py-1.5 rounded-lg text-xs font-mono">
              <span className="text-slate-400">Readiness:</span>
              <span className={`font-bold ${isAllComplete ? 'text-emerald-400' : 'text-blue-400'}`}>
                {completedCount} / {items.length} Ready
              </span>
            </div>
          </div>

          {/* Checklist items */}
          <div className="mt-6 space-y-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={`w-full p-3.5 sm:p-4 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${
                  item.checked
                    ? 'bg-blue-950/20 border-blue-500/40 text-white'
                    : 'bg-[#0f121a] border-white/5 hover:border-white/15 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`transition-colors ${item.checked ? 'text-blue-400' : 'text-slate-500'}`}>
                    {item.checked ? (
                      <CheckSquare className="w-5 h-5" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </div>
                  <span className={`text-xs sm:text-sm font-medium ${item.checked ? 'text-white' : 'text-slate-300'}`}>
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                  {item.checked ? 'READY' : 'PENDING'}
                </span>
              </button>
            ))}
          </div>

          {/* Action & Warning */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-amber-300/90 font-medium">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Incomplete or inaccessible submissions may affect evaluation.</span>
            </div>

            <button
              type="button"
              onClick={onSubmitClick}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 shrink-0 active:scale-[0.98]"
            >
              <span>Submit Your Solution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
