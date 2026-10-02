import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

type SimulationState = 'default' | 'before' | 'live' | 'closed';

export const Countdown: React.FC = () => {
  const [simState, setSimState] = useState<SimulationState>('default');
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate actual countdown or simulated countdown
  useEffect(() => {
    const updateTimer = () => {
      if (simState === 'before') {
        setTimeLeft({ hours: 1, minutes: 45, seconds: 20 });
        return;
      }
      if (simState === 'live') {
        setTimeLeft({ hours: 2, minutes: 14, seconds: 38 });
        return;
      }
      if (simState === 'closed') {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Default real state
      if (!eventConfig.challengeStartTime) {
        // Start time not yet announced
        return;
      }

      const start = new Date(eventConfig.challengeStartTime).getTime();
      const durationMs = eventConfig.challengeDurationHours * 60 * 60 * 1000;
      const end = start + durationMs;
      const now = Date.now();

      if (now < start) {
        const diff = Math.max(0, start - now);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else if (now >= start && now <= end) {
        const diff = Math.max(0, end - now);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [simState]);

  // Determine current active status
  let status: 'unannounced' | 'before' | 'live' | 'closed' = 'unannounced';

  if (simState === 'before') status = 'before';
  else if (simState === 'live') status = 'live';
  else if (simState === 'closed') status = 'closed';
  else if (eventConfig.challengeStartTime) {
    const start = new Date(eventConfig.challengeStartTime).getTime();
    const durationMs = eventConfig.challengeDurationHours * 60 * 60 * 1000;
    const end = start + durationMs;
    const now = Date.now();
    if (now < start) status = 'before';
    else if (now >= start && now <= end) status = 'live';
    else status = 'closed';
  } else {
    status = 'unannounced';
  }

  const formatNum = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="p-6 md:p-8 rounded-2xl bg-[#0c0f17] border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Challenge Status Engine</span>
            </div>
            
            {status === 'unannounced' && (
              <>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  SCHEDULED FOR {eventConfig.challengeDateDisplay.toUpperCase()}
                </h3>
                <p className="text-xs text-slate-400">
                  Exact start time slot to be released to enrolled participants prior to opening.
                </p>
              </>
            )}

            {status === 'before' && (
              <>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  CHALLENGE STARTS IN
                </h3>
                <p className="text-xs text-slate-400">
                  Prepare your environment, tools, and research baseline.
                </p>
              </>
            )}

            {status === 'live' && (
              <>
                <h3 className="text-2xl font-bold text-emerald-400 tracking-tight flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  CHALLENGE IS LIVE
                </h3>
                <p className="text-xs text-slate-400">
                  3-Hour Build Window in progress. Keep an eye on the clock.
                </p>
              </>
            )}

            {status === 'closed' && (
              <>
                <h3 className="text-2xl font-bold text-rose-400 tracking-tight">
                  CHALLENGE CLOSED
                </h3>
                <p className="text-xs text-slate-400">
                  The official 3-hour development window has concluded. Submissions under review.
                </p>
              </>
            )}
          </div>

          {/* Clock or Status Visual */}
          {status === 'unannounced' ? (
            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-4 rounded-xl">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-white tracking-tight">
                  03
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Hours Window
                </span>
              </div>
              <div className="text-slate-600 text-xl font-mono">/</div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-blue-400 tracking-tight">
                  02 OCT
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Official Date
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-5 py-3 rounded-xl font-mono">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-white tabular-nums">
                  {formatNum(timeLeft.hours)}
                </span>
                <span className="text-[10px] uppercase font-sans text-slate-400 tracking-wider">
                  Hours
                </span>
              </div>
              <span className="text-2xl text-blue-400 font-bold -mt-4">:</span>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-white tabular-nums">
                  {formatNum(timeLeft.minutes)}
                </span>
                <span className="text-[10px] uppercase font-sans text-slate-400 tracking-wider">
                  Mins
                </span>
              </div>
              <span className="text-2xl text-blue-400 font-bold -mt-4">:</span>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-bold text-blue-400 tabular-nums">
                  {formatNum(timeLeft.seconds)}
                </span>
                <span className="text-[10px] uppercase font-sans text-slate-400 tracking-wider">
                  Secs
                </span>
              </div>
            </div>
          )}
        </div>

        {/* State Preview Simulator for testing all countdown states easily */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Config: start_time={eventConfig.challengeStartTime ? 'set' : 'null'} · duration={eventConfig.challengeDurationHours}h
          </span>
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10">
            <span className="text-[10px] text-slate-400 px-2 uppercase font-mono">Test State:</span>
            <button
              onClick={() => setSimState('default')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                simState === 'default' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Default (Config)
            </button>
            <button
              onClick={() => setSimState('before')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                simState === 'before' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setSimState('live')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                simState === 'live' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setSimState('closed')}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                simState === 'closed' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
