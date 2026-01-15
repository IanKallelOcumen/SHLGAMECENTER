import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface PlayerComparisonProps {
  homePlayer: any;
  awayPlayer: any;
  isDark: boolean;
  t: any;
}

export const PlayerComparison: React.FC<PlayerComparisonProps> = ({
  homePlayer,
  awayPlayer,
  isDark,
  t
}) => {
  const [selectedStat, setSelectedStat] = useState<'goals' | 'assists' | 'points' | 'shots'>('points');

  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  const stats = {
    goals: { home: 12, away: 18 },
    assists: { home: 15, away: 9 },
    points: { home: 27, away: 27 },
    shots: { home: 124, away: 156 }
  };

  const currentStat = stats[selectedStat];
  const total = currentStat.home + currentStat.away;
  const homePercentage = (currentStat.home / total) * 100;
  const awayPercentage = (currentStat.away / total) * 100;

  return (
    <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
      <div className={`p-3 md:p-4 border-b flex items-center gap-2 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <Users className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" />
        <h3 className={`font-bold text-sm md:text-base font-heading uppercase tracking-wide ${theme.text}`}>
          {t.playerMatchup.title}
        </h3>
      </div>

      <div className="p-4 md:p-6">
        {/* Players */}
        <div className="flex items-start justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 md:border-3 border-[#D12128] mb-2">
              <img
                src={homePlayer.image}
                alt={homePlayer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`font-bold text-sm md:text-lg font-heading uppercase leading-tight ${theme.text}`}>
              {homePlayer.name.split(' ')[0]}<br/>{homePlayer.name.split(' ')[1]}
            </div>
            <div className="text-[10px] md:text-xs text-slate-500 font-heading mt-1">
              FHC • {t.playerMatchup.forward}
            </div>
          </div>

          <div className="flex items-center justify-center mt-2 md:mt-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E50036] flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm md:text-base font-heading">VS</span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 md:border-3 border-[#00553F] mb-2">
              <img
                src={awayPlayer.image}
                alt={awayPlayer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`font-bold text-sm md:text-lg font-heading uppercase leading-tight ${theme.text}`}>
              {awayPlayer.name.split(' ')[0]}<br/>{awayPlayer.name.split(' ')[1]}
            </div>
            <div className="text-[10px] md:text-xs text-slate-500 font-heading mt-1">
              FBK • {t.playerMatchup.forward}
            </div>
          </div>
        </div>

        {/* Stat Selector */}
        <div className="flex gap-2 mb-6 justify-center">
          {(['goals', 'assists', 'points', 'shots'] as const).map((stat) => (
            <button
              key={stat}
              onClick={() => setSelectedStat(stat)}
              className={`px-5 py-2 rounded-md font-heading font-bold uppercase text-xs tracking-wider transition-all ${
                selectedStat === stat
                  ? 'bg-[#E50036] text-white'
                  : isDark
                  ? 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.playerMatchup[stat]}
            </button>
          ))}
        </div>

        {/* Comparison */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-4xl font-black text-[#D12128] font-heading">
              {currentStat.home}
            </span>
            <span className={`text-sm font-bold uppercase tracking-wider font-heading ${theme.text}`}>
              {t.playerMatchup[selectedStat]}
            </span>
            <span className="text-4xl font-black text-[#00553F] font-heading">
              {currentStat.away}
            </span>
          </div>

          <div className={`h-3 rounded-full overflow-hidden flex ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
            <div
              className="bg-[#D12128] transition-all duration-1000 flex items-center justify-end"
              style={{ width: `${homePercentage}%` }}
            >
              {homePercentage > 15 && (
                <span className="text-white text-xs font-bold pr-2">{homePercentage.toFixed(0)}%</span>
              )}
            </div>
            <div
              className="bg-[#00553F] transition-all duration-1000 flex items-center justify-start"
              style={{ width: `${awayPercentage}%` }}
            >
              {awayPercentage > 15 && (
                <span className="text-white text-xs font-bold pl-2">{awayPercentage.toFixed(0)}%</span>
              )}
            </div>
          </div>
        </div>

        {/* Additional Stats Grid */}
        <div className={`grid grid-cols-3 gap-4 mt-6 pt-6 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-heading mb-1">{t.playerMatchup.plusMinus}</div>
            <div className={`text-2xl font-black font-heading ${theme.text}`}>+8</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-heading mb-1">{t.playerMatchup.toi}</div>
            <div className={`text-2xl font-black font-heading ${theme.text}`}>19:24</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-heading mb-1">{t.playerMatchup.hits}</div>
            <div className={`text-2xl font-black font-heading ${theme.text}`}>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};