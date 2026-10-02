import React, { useState } from 'react';
import {
  Award,
  Search,
  MessageSquareCode,
  Sparkles,
  Cpu,
  BarChart,
  Layout,
  Presentation,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export const EvaluationCriteria: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const criteria = [
    {
      title: 'Problem Discovery & Business Reasoning',
      points: 20,
      icon: Search,
      evaluates: [
        'Case analysis',
        'Underlying problem identification',
        'Strength of reasoning',
        'Supporting evidence',
        'Business understanding',
      ],
      note: 'Judges test whether your root-cause diagnosis cuts deeper than superficial symptom-treating.',
    },
    {
      title: 'Prompt Engineering & AI-Assisted Investigation',
      points: 15,
      icon: MessageSquareCode,
      evaluates: [
        'Prompt quality',
        'Purpose & intent',
        'Prompt evolution',
        'Testing assumptions',
        'Exploring alternatives',
        'Critical evaluation of AI responses',
        'Influence on product decisions',
      ],
      callout: 'More prompts ≠ more points. Prompt quality and analytical rigor dominate.',
    },
    {
      title: 'Solution Relevance & Innovation',
      points: 15,
      icon: Sparkles,
      evaluates: [
        'Problem-solution fit',
        'Originality',
        'Suitability for NOVA CART',
        'User value',
        'Non-generic thinking',
      ],
      note: 'Avoid generic e-commerce clones. The solution must specifically fit NOVA CART’s local reality.',
    },
    {
      title: 'Functional Implementation',
      points: 20,
      icon: Cpu,
      evaluates: [
        'Working functionality',
        'Core user journey',
        'Business / processing logic',
        'Feature reliability',
        'Effective technology use',
      ],
      note: 'Tested live by judges. The application must perform state transformations and output results.',
    },
    {
      title: 'Business Impact & Feasibility',
      points: 15,
      icon: BarChart,
      evaluates: [
        'Potential measurable impact',
        'Practicality',
        'Feasibility',
        'Scalability',
        'KPI clarity',
      ],
      note: 'Can this realistically be deployed in 3 Indian cities with positive unit economics?',
    },
    {
      title: 'User Experience & Product Design',
      points: 10,
      icon: Layout,
      evaluates: [
        'Ease of use',
        'User journey',
        'Consistency',
        'Usability',
        'Alignment with identified problem',
      ],
      note: 'Clean interface hierarchy that guides the target user without cognitive drag.',
    },
    {
      title: 'Presentation & Proof',
      points: 5,
      icon: Presentation,
      evaluates: [
        'Demo clarity',
        'Problem-to-product explanation',
        'Supporting evidence',
        'Impact communication',
      ],
      note: 'A persuasive, articulate walkthrough connecting data to code in under 3 minutes.',
    },
  ];

  return (
    <section id="evaluation" className="py-24 bg-[#080b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>EVALUATION — 100 POINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            OBJECTIVE RUBRIC & SCORING WEIGHTS
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Submissions are scored across seven precise criteria with zero subjective ambiguity.
          </p>

          {/* Visual Formula Summary */}
          <div className="mt-8 py-3.5 px-5 rounded-xl bg-white/[0.03] border border-white/10 inline-block font-mono text-xs sm:text-sm font-bold text-slate-200">
            <span className="text-blue-400">20</span> +{' '}
            <span className="text-sky-400">15</span> +{' '}
            <span className="text-indigo-400">15</span> +{' '}
            <span className="text-blue-400">20</span> +{' '}
            <span className="text-cyan-400">15</span> +{' '}
            <span className="text-violet-400">10</span> +{' '}
            <span className="text-purple-400">5</span> ={' '}
            <span className="text-white font-black text-base bg-blue-600/30 px-2 py-0.5 rounded border border-blue-500/30">
              100 POINTS
            </span>
          </div>
        </div>

        {/* Visual Weighted Score Distribution Bar */}
        <div className="mb-10 p-4 rounded-xl bg-[#0e111a] border border-white/10">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span>Score Distribution</span>
            <span>Total: 100 pts</span>
          </div>
          <div className="h-3 w-full rounded-full bg-slate-900 overflow-hidden flex">
            <div style={{ width: '20%' }} className="bg-blue-600 h-full" title="Problem Discovery: 20 pts" />
            <div style={{ width: '15%' }} className="bg-sky-500 h-full" title="Prompt Engineering: 15 pts" />
            <div style={{ width: '15%' }} className="bg-indigo-500 h-full" title="Solution Relevance: 15 pts" />
            <div style={{ width: '20%' }} className="bg-blue-400 h-full" title="Functional Build: 20 pts" />
            <div style={{ width: '15%' }} className="bg-cyan-500 h-full" title="Business Impact: 15 pts" />
            <div style={{ width: '10%' }} className="bg-violet-500 h-full" title="UX Design: 10 pts" />
            <div style={{ width: '5%' }} className="bg-purple-400 h-full" title="Presentation: 5 pts" />
          </div>
        </div>

        {/* Criteria Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {criteria.map((c, idx) => {
            const Icon = c.icon;
            const isSelected = activeCategory === idx;
            return (
              <div
                key={c.title}
                onClick={() => setActiveCategory(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#101422] border-blue-500/50 shadow-xl shadow-blue-500/10'
                    : 'bg-[#0d1017] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-white">
                      {c.points} <span className="text-xs font-normal text-slate-400">PTS</span>
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-3">
                    {c.title}
                  </h3>

                  <div className="space-y-1.5 mt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Evaluated Criteria:
                    </span>
                    {c.evaluates.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {c.callout && (
                    <div className="mt-4 p-2.5 rounded bg-blue-950/40 border border-blue-500/30 text-xs font-semibold text-blue-300">
                      {c.callout}
                    </div>
                  )}

                  {c.note && !c.callout && (
                    <div className="mt-4 text-xs text-slate-400 italic">
                      {c.note}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Weight: {c.points}%</span>
                  <span className="text-blue-400">Inspect Rubric</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
