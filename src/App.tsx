import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { BusinessMetrics } from './components/BusinessMetrics';
import { WarningSignals } from './components/WarningSignals';
import { ManagementPerspectives } from './components/ManagementPerspectives';
import { ChallengeMission } from './components/ChallengeMission';
import { ChallengeTimeline } from './components/ChallengeTimeline';
import { TechnologyFreedom } from './components/TechnologyFreedom';
import { FunctionalPrototype } from './components/FunctionalPrototype';
import { SubmissionRequirements } from './components/SubmissionRequirements';
import { SubmissionChecklist } from './components/SubmissionChecklist';
import { EvaluationCriteria } from './components/EvaluationCriteria';
import { JudgingPhilosophy } from './components/JudgingPhilosophy';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ActionDialog } from './components/ActionDialog';
import { eventConfig } from './config/eventConfig';

export default function App() {
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    type: 'pdf' | 'submission';
  }>({
    isOpen: false,
    type: 'pdf',
  });

  const handleDownloadPdf = () => {
    if (eventConfig.challengePdfUrl && eventConfig.challengePdfUrl.trim() !== '') {
      window.open(eventConfig.challengePdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      setDialogState({ isOpen: true, type: 'pdf' });
    }
  };

  const handleSubmitSolution = () => {
    if (eventConfig.submissionUrl && eventConfig.submissionUrl.trim() !== '') {
      window.open(eventConfig.submissionUrl, '_blank', 'noopener,noreferrer');
    } else {
      setDialogState({ isOpen: true, type: 'submission' });
    }
  };

  const handleExplore = () => {
    const el = document.querySelector('#case');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Fixed Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDownloadPdf={handleDownloadPdf}
          onExplore={handleExplore}
        />

        {/* Challenge Status / Countdown Engine */}
        <div className="px-4 sm:px-6 lg:px-8 -mt-6 mb-12 relative z-20">
          <Countdown />
        </div>

        {/* Business Case (The Case) */}
        <BusinessMetrics />

        {/* Warning Signals */}
        <WarningSignals />

        {/* Management Disagreement */}
        <ManagementPerspectives />

        {/* Your Challenge / Mission */}
        <ChallengeMission />

        {/* 6-Stage Challenge Process */}
        <ChallengeTimeline />

        {/* Technology Freedom */}
        <TechnologyFreedom />

        {/* Functional Prototype Requirements */}
        <FunctionalPrototype />

        {/* Submission Requirements (7 numbered cards) */}
        <SubmissionRequirements />

        {/* Interactive Submission Checklist */}
        <SubmissionChecklist onSubmitClick={handleSubmitSolution} />

        {/* Evaluation — 100 Points */}
        <EvaluationCriteria />

        {/* Judging Philosophy */}
        <JudgingPhilosophy />

        {/* Closing Action Banner */}
        <FinalCTA
          onDownloadPdf={handleDownloadPdf}
          onSubmitSolution={handleSubmitSolution}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Dialog for PDF & Submissions */}
      <ActionDialog
        isOpen={dialogState.isOpen}
        type={dialogState.type}
        onClose={() => setDialogState({ isOpen: false, type: 'pdf' })}
      />
    </div>
  );
}
