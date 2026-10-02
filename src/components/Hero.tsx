import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, Sparkles, Calendar, Clock, Globe, User, ShieldCheck } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

interface HeroProps {
  onDownloadPdf: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadPdf, onExplore }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive animated data/network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const pointCount = Math.min(45, Math.floor(width / 32));
    const points: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 197, 253, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Radial depth glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Small label */}
        <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span>PROMPTWARS 2026</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-400">OFFICIAL PARTICIPANT PORTAL</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
          BUSINESS RESCUE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            CHALLENGE
          </span>
        </h1>

        {/* Large secondary text: NOVA CART */}
        <div className="mt-4 sm:mt-5 text-2xl sm:text-4xl font-mono font-bold tracking-wider text-slate-300">
          NOVA CART
        </div>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed" style={{ textWrap: 'balance' }}>
          A growing business. Falling retention. Rising operational pressure. The data is in front of you. The real problem isn't.
        </p>

        {/* Challenge statement */}
        <div className="mt-4 max-w-2xl mx-auto p-4 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-slate-200 font-medium">
          Investigate the business. Discover what actually matters. Build the digital product NOVA CART needs next.
        </div>

        {/* Prominent Tagline Banner */}
        <div className="mt-8 inline-block px-5 py-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm font-mono font-bold tracking-widest text-blue-300 shadow-inner">
          {eventConfig.tagline}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onExplore}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Explore Challenge</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onDownloadPdf}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Full Challenge</span>
          </button>
        </div>

        {/* 4 Premium Information Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 sm:p-5 rounded-xl bg-[#0f131c] border border-white/10 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Date</span>
              <Calendar className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white">02 OCT 2026</div>
            <div className="text-xs text-slate-400 mt-1">Challenge Date</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#0f131c] border border-white/10 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Duration</span>
              <Clock className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white">3 HOURS</div>
            <div className="text-xs text-slate-400 mt-1">Build Window</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#0f131c] border border-white/10 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Format</span>
              <Globe className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white">ONLINE</div>
            <div className="text-xs text-slate-400 mt-1">Mode</div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#0f131c] border border-white/10 hover:border-blue-500/30 transition-colors group">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Team</span>
              <User className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white">INDIVIDUAL</div>
            <div className="text-xs text-slate-400 mt-1">Participation</div>
          </div>
        </div>

        {/* Fictional Disclaimer */}
        <p className="mt-8 text-xs text-slate-400 max-w-xl mx-auto">
          * {eventConfig.fictionalDisclaimer}
        </p>
      </div>
    </section>
  );
};
