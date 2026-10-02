import React from 'react';
import { eventConfig } from '../config/eventConfig';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="py-14 bg-[#06080d] border-t border-white/[0.08] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="text-center md:text-left">
            <span className="text-xl font-black tracking-tight text-white block">
              {eventConfig.eventName}
            </span>
            <span className="text-xs font-medium text-slate-400 mt-1 block">
              AI × Prompt Engineering × Business Innovation
            </span>
            <span className="text-xs font-mono text-blue-400 mt-1 block">
              {eventConfig.challengeDateDisplay.toUpperCase()}
            </span>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a
              href="#challenge"
              onClick={(e) => handleScrollTo(e, '#challenge')}
              className="hover:text-white transition-colors"
            >
              Challenge
            </a>
            <a
              href="#build"
              onClick={(e) => handleScrollTo(e, '#build')}
              className="hover:text-white transition-colors"
            >
              Build
            </a>
            <a
              href="#submit"
              onClick={(e) => handleScrollTo(e, '#submit')}
              className="hover:text-white transition-colors"
            >
              Submit
            </a>
            <a
              href="#evaluation"
              onClick={(e) => handleScrollTo(e, '#evaluation')}
              className="hover:text-white transition-colors"
            >
              Evaluation
            </a>
          </nav>
        </div>

        {/* Fictional Disclaimer & Final Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left max-w-md">
            * {eventConfig.fictionalDisclaimer}
          </p>
          <div className="font-mono text-xs font-bold tracking-widest text-slate-300">
            {eventConfig.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
};
