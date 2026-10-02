import React, { useState } from 'react';
import { Search, MessageSquareCode, CheckCheck, Palette, Laptop, BarChart2, ChevronRight } from 'lucide-react';

export const ChallengeTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      step: '01',
      title: 'DISCOVER',
      tagline: 'Analyse available data & uncover bottlenecks',
      icon: Search,
      details:
        'Analyse the available information across NOVA CART. Find non-obvious patterns, contradictions between growth and friction, delivery bottlenecks, and neglected local commerce opportunities.',
      questions: [
        'Where is the disconnect between order volume and customer retention?',
        'Why are delivery times rising alongside cancellation spikes?',
        'What local merchant realities are invisible in the executive dashboard?',
      ],
    },
    {
      step: '02',
      title: 'PROMPT',
      tagline: 'Engage AI as an adversarial reasoning partner',
      icon: MessageSquareCode,
      details:
        'Use AI as an active reasoning partner. Investigate internal management assumptions, synthesize hypotheses, compare alternative diagnoses, and stress-test your emerging conclusions.',
      questions: [
        'Can you simulate counter-arguments to the CEO’s hypothesis?',
        'What root causes explain both rising support tickets and partner inventory mismatch?',
        'How would a regional Indian local commerce marketplace solve hyper-local delivery variance?',
      ],
    },
    {
      step: '03',
      title: 'VALIDATE',
      tagline: 'Verify problem priority with external evidence',
      icon: CheckCheck,
      details:
        'Use evidence to determine whether the identified problem truly deserves priority. Participants may leverage legitimate external research, industry benchmarks, and comparable market cases.',
      questions: [
        'Does solving this issue create sustainable unit economics?',
        'What does consumer behavior research say about delivery expectations in Tier 1 vs Tier 2 cities?',
        'Are competitors suffering the same structural flaw or is this execution-specific?',
      ],
    },
    {
      step: '04',
      title: 'DESIGN',
      tagline: 'Define persona, core problem, and product scope',
      icon: Palette,
      details:
        'Determine: Who is the primary user? What is the actual problem? Why does it matter? What should the product do? Frame the exact digital intervention that shifts the needle.',
      questions: [
        'Is the primary end-user the customer, delivery partner, store manager, or ops dispatcher?',
        'What is the single most valuable workflow the application must execute?',
        'What can be stripped away to ensure completion within the 3-hour window?',
      ],
    },
    {
      step: '05',
      title: 'BUILD',
      tagline: 'Develop a functional Web or Mobile Application',
      icon: Laptop,
      details:
        'Develop a functional Web or Mobile Application. Implement real processing logic, reactive user inputs, and tangible outputs. Not a static Figma wireframe.',
      questions: [
        'Does the application accept input, process it logically, and generate an actionable result?',
        'Can a judge test the core workflow independently on a live URL?',
        'Is the repository clean, structured, and reproducible?',
      ],
    },
    {
      step: '06',
      title: 'PROVE',
      tagline: 'Connect the solution to measurable business impact',
      icon: BarChart2,
      details:
        'Connect the solution to measurable business impact. Demonstrate how the product mathematically addresses retention, delivery SLA, cancellation rates, or merchant profitability.',
      questions: [
        'Which specific KPI will this intervention reverse (e.g. 27% repeat rate -> 35%)?',
        'What is the payback period or operational ROI for NOVA CART?',
        'How does your demo video articulate the journey from evidence to outcome?',
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#080a0f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>CHALLENGE PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            THE 6-STAGE REASONING & BUILD WORKFLOW
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            A disciplined trajectory designed to transform ambiguous business signals into an engineered, high-impact digital solution.
          </p>

          {/* Sequential Banner */}
          <div className="mt-8 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 overflow-x-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono font-bold tracking-wider text-slate-300 whitespace-nowrap min-w-max mx-auto">
              <span>DISCOVER</span>
              <span className="text-blue-400 font-sans">→</span>
              <span>PROMPT</span>
              <span className="text-blue-400 font-sans">→</span>
              <span>VALIDATE</span>
              <span className="text-blue-400 font-sans">→</span>
              <span>DESIGN</span>
              <span className="text-blue-400 font-sans">→</span>
              <span>BUILD</span>
              <span className="text-blue-400 font-sans">→</span>
              <span className="text-blue-400">PROVE</span>
            </div>
          </div>
        </div>

        {/* 6 Stage Grid / Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#101420] border-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'bg-[#0c0f17] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400 tracking-wider">
                      STAGE {stage.step}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/[0.04] text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-blue-300/90 font-medium mb-3">
                    {stage.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stage.details}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">Investigation Focus:</span>
                  <span className="text-blue-400 flex items-center gap-1 font-mono">
                    View Prompts <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Stage Deep Dive Panel */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0d1018] border border-blue-500/20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                STAGE {stages[activeStage].step}
              </span>
              <h4 className="text-xl font-bold text-white">
                {stages[activeStage].title} — In-Depth Execution Guidance
              </h4>
            </div>
            <div className="text-xs text-slate-400">
              Click any stage card above to inspect guidance
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 block">
                Stage Objective
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stages[activeStage].details}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
                Key Reasoning Questions To Ask Your AI Partner:
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                {stages[activeStage].questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <span className="font-mono text-blue-400 shrink-0">#{i + 1}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
