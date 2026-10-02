import React, { useState } from 'react';
import {
  Cpu,
  Code,
  Globe,
  Database,
  Layers,
  Cloud,
  CheckCircle,
  XCircle,
  HelpCircle,
  Zap,
} from 'lucide-react';

export const TechnologyFreedom: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const techItems = [
    {
      name: 'AI Tools',
      category: 'Investigation & Ideation',
      desc: 'Use Gemini, Claude, ChatGPT, or local LLMs to challenge assumptions, brainstorm architectures, and simulate business scenarios.',
    },
    {
      name: 'AI-Assisted Coding',
      category: 'Development Speed',
      desc: 'Leverage Cursor, GitHub Copilot, v0, Windsurf, or Claude Code to rapidly scaffold and accelerate functional prototypes.',
    },
    {
      name: 'Web Research',
      category: 'Domain Validation',
      desc: 'Consult quick commerce studies, retail logistics reports, supply chain papers, and unit-economic breakdowns.',
    },
    {
      name: 'Web Scraping',
      category: 'Data Enrichment',
      desc: 'Extract publicly accessible catalog, pricing, or location data if relevant to your proposed solution.',
    },
    {
      name: 'External Datasets',
      category: 'Market Grounding',
      desc: 'Incorporate open-source retail databases, census geocodes, traffic patterns, or delivery benchmarks.',
    },
    {
      name: 'Public/Free APIs',
      category: 'System Integration',
      desc: 'Connect mapping, geolocation, weather, SMS notifications, or dummy banking APIs without paying fees.',
    },
    {
      name: 'Open-Source Libraries',
      category: 'Engineering Utilities',
      desc: 'Utilize charts, UI components, date formatters, state managers, validation libraries, and algorithmic helpers.',
    },
    {
      name: 'No-Code / Low-Code',
      category: 'Rapid Prototyping',
      desc: 'Tools like Streamlit, Retool, FlutterFlow, or Supabase are fully valid as long as they deliver functional logic.',
    },
    {
      name: 'Frontend Frameworks',
      category: 'User Interface',
      desc: 'React, Next.js, Vue, Svelte, Tailwind CSS, or vanilla web technologies of your choosing.',
    },
    {
      name: 'Backend Frameworks',
      category: 'Logic Engine',
      desc: 'Node.js, Express, Python FastAPI, Flask, Go, Java, or serverless functions.',
    },
    {
      name: 'Databases',
      category: 'State Persistence',
      desc: 'SQLite, PostgreSQL, MongoDB, IndexedDB, Firebase Firestore, or local JSON state engines.',
    },
    {
      name: 'Cloud / Deployment',
      category: 'Hosting & Access',
      desc: 'Vercel, Netlify, Render, Railway, GitHub Pages, or Cloud Run for seamless judge access.',
    },
  ];

  return (
    <section className="py-20 bg-[#090b11] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>TECHNOLOGY FREEDOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase" style={{ textWrap: 'balance' }}>
            BUILD WITH WHAT THE PROBLEM NEEDS.
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-xl mx-auto">
            You have absolute autonomy over your technology choices. No mandatory tech stacks, no forced frameworks.
          </p>
        </div>

        {/* 3 Explicit Clarifications */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0f121a] border border-white/10 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Paid APIs
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Paid APIs are <strong className="text-slate-200">NOT mandatory</strong>. You are never penalized for using free/mock tiers.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f121a] border border-white/10 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                LLM Integration
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Embedding an LLM inside your app is <strong className="text-slate-200">NOT mandatory</strong>. Use code or rules where appropriate.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f121a] border border-white/10 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Model Training
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Custom AI/ML model training is <strong className="text-slate-200">NOT mandatory</strong>. Build what actually delivers value.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {techItems.map((item) => {
            const isSelected = selectedTech === item.name;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedTech(isSelected ? null : item.name)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-blue-950/30 border-blue-500/50 shadow-md shadow-blue-500/10'
                    : 'bg-[#0e111a] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                  <Zap className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                </div>
                <div className="text-sm font-bold text-white">
                  {item.name}
                </div>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Philosophy Callout Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-900 to-indigo-950/30 border border-blue-500/20 text-center">
          <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Using more technology does not automatically make a solution stronger.
          </p>
          <p className="text-base sm:text-lg font-semibold text-blue-400 mt-2">
            Technology should serve the problem.
          </p>
        </div>
      </div>
    </section>
  );
};
