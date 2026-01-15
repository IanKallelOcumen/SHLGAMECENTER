import React from 'react';
import { Clock } from 'lucide-react';

interface StickyMiniScoreProps {
  gameData: any;
  isDark: boolean;
  isScrolled: boolean;
  t: any;
}

export const StickyMiniScore: React.FC<StickyMiniScoreProps> = ({
  gameData,
  isDark,
  isScrolled,
  t
}) => {
  const { homeTeam, awayTeam, score, meta } = gameData;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } bg-[#001F3F]/95 backdrop-blur-lg border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Left: Home Team */}
          <div className="flex items-center gap-2 flex-1">
            <img src={homeTeam.logo} alt={homeTeam.name} className="w-8 h-8 object-contain" />
            <span className="font-bold text-sm md:text-base hidden sm:block text-white">
              {homeTeam.abbr}
            </span>
          </div>

          {/* Center: Score & Status */}
          <div className="flex items-center gap-3 px-4">
            {meta.status === 'live' && (
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#E50036] animate-pulse"></div>
                <span className="text-[#E50036] text-xs font-bold uppercase hidden md:block">LIVE</span>
              </div>
            )}
            <div className="text-2xl md:text-3xl font-black text-white score-display">
              {score.home} - {score.away}
            </div>
            <div className="text-xs text-white/70 hidden md:flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {meta.time}
            </div>
          </div>

          {/* Right: Away Team */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <span className="font-bold text-sm md:text-base hidden sm:block text-white">
              {awayTeam.abbr}
            </span>
            <img src={awayTeam.logo} alt={awayTeam.name} className="w-8 h-8 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};