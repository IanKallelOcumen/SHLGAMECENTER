import React, { useState } from 'react';
import { TrendingUp, Users } from 'lucide-react';
import { Button } from './Button';

interface MatchPredictionProps {
  homeTeam: string;
  awayTeam: string;
  isDark: boolean;
}

export const MatchPrediction: React.FC<MatchPredictionProps> = ({ 
  homeTeam, 
  awayTeam, 
  isDark 
}) => {
  const [voted, setVoted] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<'home' | 'away' | 'draw' | null>(null);
  const [votes, setVotes] = useState({ home: 2847, away: 3241, draw: 912 });

  const totalVotes = votes.home + votes.away + votes.draw;
  const homePercentage = ((votes.home / totalVotes) * 100).toFixed(1);
  const awayPercentage = ((votes.away / totalVotes) * 100).toFixed(1);
  const drawPercentage = ((votes.draw / totalVotes) * 100).toFixed(1);

  const handleVote = (team: 'home' | 'away' | 'draw') => {
    if (voted) return;
    setSelectedTeam(team);
    setVotes(prev => ({
      ...prev,
      [team]: prev[team] + 1
    }));
    setVoted(true);
  };

  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  return (
    <div className={`rounded pl-shadow p-4 md:p-6 ${theme.card}`}>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className={`font-bold text-base md:text-lg font-heading uppercase flex items-center gap-2 ${theme.text}`}>
          <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" />
          Fan Predictions
        </h3>
        <div className="flex items-center gap-1 md:gap-2 text-slate-500 text-xs md:text-sm">
          <Users className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-bold">{totalVotes.toLocaleString()}</span>
        </div>
      </div>

      {!voted ? (
        <div className="space-y-2 md:space-y-3">
          <p className={`text-xs md:text-sm ${theme.text} mb-3 md:mb-4`}>Who do you think will win?</p>
          <button
            onClick={() => handleVote('home')}
            className={`w-full p-3 md:p-4 rounded-lg border-2 transition-all hover:border-[#D12128] hover:bg-[#D12128]/10 font-bold font-heading active:scale-95 min-h-[48px] ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
          >
            <span className={`uppercase text-sm md:text-base ${theme.text}`}>{homeTeam}</span>
          </button>
          <button
            onClick={() => handleVote('draw')}
            className={`w-full p-3 md:p-4 rounded-lg border-2 transition-all hover:border-slate-500 hover:bg-slate-500/10 font-bold font-heading active:scale-95 min-h-[48px] ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
          >
            <span className={`uppercase text-sm md:text-base ${theme.text}`}>Draw</span>
          </button>
          <button
            onClick={() => handleVote('away')}
            className={`w-full p-3 md:p-4 rounded-lg border-2 transition-all hover:border-[#00553F] hover:bg-[#00553F]/10 font-bold font-heading active:scale-95 min-h-[48px] ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
          >
            <span className={`uppercase text-sm md:text-base ${theme.text}`}>{awayTeam}</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3 md:space-y-4">
          <div className={`p-3 md:p-4 rounded-lg ${isDark ? 'bg-[#00ff85]/10 border border-[#00ff85]/30' : 'bg-[#00ff85]/20 border border-[#00ff85]'}`}>
            <p className="text-[#00ff85] font-bold text-xs md:text-sm font-heading uppercase text-center">Vote Recorded!</p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className={`text-xs md:text-sm font-bold font-heading ${theme.text}`}>{homeTeam}</span>
                <span className="text-[#D12128] font-bold text-xs md:text-sm">{homePercentage}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div 
                  className="h-full bg-[#D12128] transition-all duration-1000"
                  style={{ width: `${homePercentage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className={`text-xs md:text-sm font-bold font-heading ${theme.text}`}>Draw</span>
                <span className="text-slate-500 font-bold text-xs md:text-sm">{drawPercentage}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div 
                  className="h-full bg-slate-500 transition-all duration-1000"
                  style={{ width: `${drawPercentage}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className={`text-xs md:text-sm font-bold font-heading ${theme.text}`}>{awayTeam}</span>
                <span className="text-[#00553F] font-bold text-xs md:text-sm">{awayPercentage}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                <div 
                  className="h-full bg-[#00553F] transition-all duration-1000"
                  style={{ width: `${awayPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};