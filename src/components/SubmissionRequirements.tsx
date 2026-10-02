import React from 'react';
import {
  FileText,
  Terminal,
  Laptop,
  Globe,
  GitBranch,
  Video,
  TrendingUp,
  AlertCircle,
  Check,
} from 'lucide-react';

export const SubmissionRequirements: React.FC = () => {
  const requirements = [
    {
      num: '01',
      title: 'Problem Diagnosis',
      icon: FileText,
      summary:
        'Clearly state the underlying business problem or opportunity and explain the supporting evidence and reasoning.',
      detail:
        'Document why this issue takes precedence over the other competing friction points observed at NOVA CART.',
    },
    {
      num: '02',
      title: 'Prompt Journey',
      icon: Terminal,
      summary:
        'Submit the key prompts that influenced investigation and product decisions.',
      journey: 'Explore → Analyse → Challenge → Refine → Validate',
      emphasis: 'Quality of prompting matters more than quantity.',
    },
    {
      num: '03',
      title: 'Functional Web / Mobile Application',
      icon: Laptop,
      summary:
        'Submit a working prototype demonstrating the core functionality.',
      detail:
        'Demonstrates actual interactive inputs, state changes, and functional business processing logic.',
    },
    {
      num: '04',
      title: 'Deployment / Demo Link',
      icon: Globe,
      summary:
        'Provide an accessible working application/demo URL wherever applicable.',
      detail:
        'Judges should be able to access it immediately without requesting permission or credential barriers.',
    },
    {
      num: '05',
      title: 'GitHub Repository',
      icon: GitBranch,
      summary: 'Submit the source-code repository with complete documentation.',
      readmeItems: [
        'Project Name',
        'Problem Identified',
        'Proposed Solution',
        'Key Features',
        'Technology Stack',
        'Setup / Run Instructions',
        'External Datasets / APIs used (if applicable)',
      ],
    },
    {
      num: '06',
      title: 'Demo Video',
      icon: Video,
      summary:
        'A concise walkthrough demonstrating the end-to-end product flow.',
      videoFlow: [
        'Problem',
        'Solution',
        'Main Application Flow',
        'Core Functionality',
        'Expected Business Impact',
      ],
    },
    {
      num: '07',
      title: 'Business Impact',
      icon: TrendingUp,
      summary:
        'Explain what measurable outcome the solution intends to improve.',
      kpis: [
        'Retention',
        'Revenue',
        'Conversion',
        'Cost',
        'Delivery Time',
        'Customer Satisfaction',
        'Productivity',
        'Accuracy',
        'Operational Efficiency',
      ],
      note: 'Participants are strongly encouraged to formulate an appropriate target KPI.',
    },
  ];

  return (
    <section id="submit" className="py-20 bg-[#090c13] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>SUBMISSION REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            SEVEN MANDATORY DELIVERABLES
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            Submissions are evaluated holistically. Every deliverable provides a required dimension of proof.
          </p>
        </div>

        {/* 7 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <div
                key={req.num}
                className="p-6 rounded-xl bg-[#0e121b] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-blue-400/80">
                      {req.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {req.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {req.summary}
                  </p>

                  {/* Custom detail blocks */}
                  {req.journey && (
                    <div className="mt-3 p-2.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-blue-300">
                      <div className="font-bold text-white mb-1">Journey:</div>
                      {req.journey}
                    </div>
                  )}

                  {req.emphasis && (
                    <div className="mt-2 text-[11px] font-semibold text-amber-400">
                      * {req.emphasis}
                    </div>
                  )}

                  {req.readmeItems && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        README Checklist:
                      </span>
                      <ul className="grid grid-cols-2 gap-1 text-[11px] text-slate-400">
                        {req.readmeItems.map((item) => (
                          <li key={item} className="flex items-center gap-1">
                            <span className="text-blue-400 font-bold">·</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {req.videoFlow && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Required Video Content:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                        {req.videoFlow.map((v, i) => (
                          <span key={v} className="bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono">
                            {v}{i < req.videoFlow.length - 1 ? ' →' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {req.kpis && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                        Example Target KPIs:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                        {req.kpis.map((kpi) => (
                          <span key={kpi} className="text-slate-300">
                            {kpi} ·
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Mandatory Step</span>
                  <span className="text-blue-400">Section {req.num}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
