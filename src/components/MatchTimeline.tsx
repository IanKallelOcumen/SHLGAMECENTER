import React from 'react';
import { Goal, AlertTriangle } from 'lucide-react';

interface TimelineEvent {
  id: number;
  time: string;
  type: string;
  team: string;
  player?: string;
  assist?: string;
  desc?: string;
  score?: string;
}

interface MatchTimelineProps {
  timeline: TimelineEvent[];
  isDark: boolean;
  t: any;
}

export const MatchTimeline: React.FC<MatchTimelineProps> = ({ timeline, isDark, t }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  return (
    <div className={`rounded pl-shadow p-0 overflow-hidden ${theme.card}`}>
      <div className={`p-3 md:p-4 border-b flex justify-between items-center ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <h3 className={`font-bold text-base md:text-lg font-heading uppercase tracking-wide ${theme.text}`}>
          {t.matchCommentary}
        </h3>
        <div className="flex gap-2">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-[#D12128] rounded-full"></span>
          <span className="w-2 h-2 md:w-3 md:h-3 bg-[#00553F] rounded-full"></span>
        </div>
      </div>
      <div className="relative">
        <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
        
        {timeline.map((event, i) => (
          <div 
            key={i} 
            className={`flex gap-3 md:gap-6 p-4 md:p-6 transition-colors relative group ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}
          >
            <div className="relative z-10 w-12 md:w-16 text-right flex-shrink-0">
              <div className={`font-black text-base md:text-xl font-heading ${theme.text}`}>
                {event.time}
              </div>
            </div>
            <div className={`absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 border-2 rounded-full z-20 group-hover:border-[#E50036] transition-colors ${isDark ? 'bg-[#151A26] border-slate-600' : 'bg-white border-slate-300'}`}></div>
            <div className="flex-1 pl-2 md:pl-4 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                {event.type === 'goal' && (
                  <div className="bg-[#00102A] text-white p-1 rounded-sm">
                    <Goal className="w-3 h-3" />
                  </div>
                )}
                {event.type === 'penalty' && (
                  <div className="bg-[#E50036] text-white p-1 rounded-sm">
                    <AlertTriangle className="w-3 h-3" />
                  </div>
                )}
                <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-heading">
                  {event.type}
                </span>
              </div>
              <div className={`text-sm md:text-lg font-bold ${theme.text} line-clamp-2`}>
                {event.player || event.desc}
                {event.score && (
                  <span className="ml-2 text-[#E50036] font-heading">{event.score}</span>
                )}
              </div>
              {event.assist && (
                <div className="text-xs md:text-sm text-slate-500 truncate">Assist: {event.assist}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={`p-4 border-t text-center ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <button className="text-[#E50036] font-bold text-sm uppercase tracking-widest hover:underline font-heading">
          {t.loadEvents}
        </button>
      </div>
    </div>
  );
};