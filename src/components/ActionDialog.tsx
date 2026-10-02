import React from 'react';
import { AlertCircle, Download, ExternalLink, X, FileText } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

interface ActionDialogProps {
  isOpen: boolean;
  type: 'pdf' | 'submission';
  onClose: () => void;
}

export const ActionDialog: React.FC<ActionDialogProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 bg-[#0f121a] border border-white/10 rounded-xl shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'submission' ? (
          <div>
            <div className="w-12 h-12 mb-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 id="dialog-title" className="text-xl font-bold text-white mb-2">
              Submission Portal
            </h3>
            <p className="text-sm font-medium text-blue-400 bg-blue-950/40 border border-blue-800/30 rounded-lg p-3 my-3">
              Submission link will be available here.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              The submission portal opens during the official 3-hour build window on{' '}
              <span className="text-slate-200">{eventConfig.challengeDateDisplay}</span>. Participants will submit their repository, working deployment, prompt journey, and diagnosis.
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                Acknowledge
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 mb-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 id="dialog-title" className="text-xl font-bold text-white mb-2">
              Official Challenge Briefing PDF
            </h3>
            <div className="p-3 my-3 bg-slate-900/80 border border-white/10 rounded-lg text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Pending Official Release</span>
              </div>
              <p className="text-slate-400">
                The comprehensive PDF briefing dossier for <strong className="text-white">{eventConfig.caseName}</strong> will be accessible for download once the challenge window initiates.
              </p>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              All vital metrics, management perspectives, warning signals, and submission rubrics are fully documented below on this portal.
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
