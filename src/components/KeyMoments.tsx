import React from 'react';
import { Zap, Goal, AlertTriangle, Users } from 'lucide-react';

interface KeyMomentsProps {
  isDark: boolean;
}

export const KeyMoments: React.FC<KeyMomentsProps> = ({ isDark }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  const moments = [
    {
      id: 1,
      time: "58:24",
      title: "GOAL! Friberg scores the winner",
      description: "Incredible wrist shot from the slot",
      type: "goal",
      importance: "high",
      team: "home"
    },
    {
      id: 2,
      time: "52:11",
      title: "Power Play Opportunity",
      description: "Nygård sent off for tripping",
      type: "penalty",
      importance: "medium",
      team: "away"
    },
    {
      id: 3,
      time: "48:03",
      title: "GOAL! Tomasek equalizes",
      description: "Beautiful team play leads to score",
      type: "goal",
      importance: "high",
      team: "away"
    },
    {
      id: 4,
      time: "35:20",
      title: "Amazing Save!",
      description: "Johansson denies breakaway chance",
      type: "save",
      importance: "high",
      team: "home"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'goal':
        return <Goal className="w-5 h-5" />;
      case 'penalty':
        return <AlertTriangle className="w-5 h-5" />;
      case 'save':
        return <Zap className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const getColor = (type: string, importance: string) => {
    if (importance === 'high') {
      return type === 'goal' ? 'bg-[#E50036]' : 'bg-[#00ff85]';
    }
    return 'bg-slate-500';
  };

  return (
    <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
      <div className={`p-3 md:p-4 border-b flex items-center gap-2 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" />
        <h3 className={`font-bold text-base md:text-lg font-heading uppercase tracking-wide ${theme.text}`}>
          Key Moments
        </h3>
      </div>
      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
        {moments.map((moment, index) => (
          <div
            key={moment.id}
            className={`flex gap-3 md:gap-4 p-3 rounded-lg transition-all hover:scale-[1.02] cursor-pointer active:scale-[0.98] ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0
            }}
          >
            <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${getColor(moment.type, moment.importance)} flex items-center justify-center text-white`}>
              {getIcon(moment.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start md:items-center justify-between mb-1 gap-2">
                <span className={`font-bold text-sm md:text-base ${theme.text} line-clamp-1`}>{moment.title}</span>
                <span className="text-xs font-mono text-slate-500 font-bold whitespace-nowrap">{moment.time}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 line-clamp-1">{moment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};