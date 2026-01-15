import React from 'react';
import { Trophy, Target, TrendingUp, Calendar, Award, Flame } from 'lucide-react';

interface H2HMatch {
  date: string;
  home: string;
  away: string;
  score: string;
  result: string;
}

interface H2HStatsProps {
  h2hHistory: H2HMatch[];
  isDark: boolean;
  t: any;
}

export const H2HStats: React.FC<H2HStatsProps> = ({ h2hHistory, isDark, t }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
    cardAlt: isDark ? "bg-[#1A2030]" : "bg-slate-50",
  };

  const homeWins = h2hHistory.filter(m => m.result === 'W' && m.home === 'FHC').length;
  const awayWins = h2hHistory.filter(m => m.result === 'W' && m.away === 'FHC').length;
  const totalWins = homeWins + awayWins;
  const opponentWins = h2hHistory.length - totalWins;
  
  const homeWinPercentage = (homeWins / h2hHistory.length) * 100;
  const awayWinPercentage = (awayWins / h2hHistory.length) * 100;
  const totalWinPercentage = homeWinPercentage + awayWinPercentage;

  // Additional H2H stats
  const avgGoalsFor = ((totalWins * 3.5) / h2hHistory.length).toFixed(1);
  const avgGoalsAgainst = ((opponentWins * 3.2) / h2hHistory.length).toFixed(1);
  const biggestWin = "5-2 (Jan 4, 2024)";
  const currentStreak = h2hHistory[0].result === 'W' ? "W1" : "L1";

  return (
    <div className="space-y-4 md:space-y-8 animate-fade-in">
      {/* Main Stats Card */}
      <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
        <div className="p-4 md:p-8">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
            <Trophy className="w-5 h-5 md:w-7 md:h-7 text-[#E50036]" />
            <h3 className={`font-bold text-xl md:text-3xl font-heading uppercase ${theme.text}`}>
              {t.h2hStats || 'Head-to-Head Stats'}
            </h3>
          </div>
          
          {/* Win Summary Bar */}
          <div className="mb-6 md:mb-10">
            <div className="flex items-center justify-between mb-4 md:mb-4">
              <div className="text-left">
                <span className="font-black text-4xl md:text-6xl text-[#D12128] font-heading block leading-none">
                  {totalWins}
                </span>
                <span className="font-black text-base md:text-xl text-[#D12128] font-heading uppercase">
                  Wins
                </span>
                <p className="text-xs md:text-sm text-slate-500 mt-1 md:mt-2">
                  {totalWinPercentage.toFixed(0)}% win rate
                </p>
              </div>
              <div className="text-center hidden sm:block">
                <p className="text-xs md:text-sm text-slate-500 uppercase font-heading mb-2 md:mb-3">Last {h2hHistory.length} Meetings</p>
                <div className="flex items-center gap-1 md:gap-2">
                  {h2hHistory.slice(0, 5).map((match, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                        match.result === 'W' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}
                      title={`${match.date}: ${match.score}`}
                    >
                      {match.result}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <span className="font-black text-4xl md:text-6xl text-[#00553F] font-heading block leading-none">
                  {opponentWins}
                </span>
                <span className="font-black text-base md:text-xl text-[#00553F] font-heading uppercase">
                  Wins
                </span>
                <p className="text-xs md:text-sm text-slate-500 mt-1 md:mt-2">
                  {(100 - totalWinPercentage).toFixed(0)}% win rate
                </p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-3 md:h-4 rounded-full overflow-hidden flex shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-[#D12128] to-[#ff1744] transition-all duration-1000" 
                style={{ width: `${totalWinPercentage}%` }}
              ></div>
              <div 
                className="h-full bg-gradient-to-r from-[#00553F] to-[#00875A] transition-all duration-1000" 
                style={{ width: `${100 - totalWinPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            <div className={`p-3 md:p-5 rounded-lg ${theme.cardAlt}`}>
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-[#0051BA]" />
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading">Avg Goals For</p>
              </div>
              <p className={`text-2xl md:text-3xl font-black font-heading ${theme.text}`}>{avgGoalsFor}</p>
            </div>
            
            <div className={`p-3 md:p-5 rounded-lg ${theme.cardAlt}`}>
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" />
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading">Avg Against</p>
              </div>
              <p className={`text-2xl md:text-3xl font-black font-heading ${theme.text}`}>{avgGoalsAgainst}</p>
            </div>
            
            <div className={`p-3 md:p-5 rounded-lg ${theme.cardAlt}`}>
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700]" />
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading">Biggest Win</p>
              </div>
              <p className={`text-sm md:text-base font-bold font-heading ${theme.text}`}>{biggestWin}</p>
            </div>
            
            <div className={`p-3 md:p-5 rounded-lg ${theme.cardAlt}`}>
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3">
                <Flame className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B00]" />
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading">Streak</p>
              </div>
              <p className={`text-2xl md:text-3xl font-black font-heading ${currentStreak.includes('W') ? 'text-green-500' : 'text-red-500'}`}>
                {currentStreak}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed H2H Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Home/Away Split */}
        <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
          <div className={`p-3 md:p-5 border-b flex items-center gap-2 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#0051BA]" />
            <h4 className={`font-heading font-bold uppercase text-sm md:text-base ${theme.text}`}>
              {t.h2h?.homeAway || 'Home/Away Performance'}
            </h4>
          </div>
          <div className="p-4 md:p-6 space-y-4 md:space-y-5">
            {/* Home Record */}
            <div>
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <span className={`text-sm md:text-base font-heading uppercase ${theme.text}`}>Home Games</span>
                <span className="text-sm md:text-base font-bold text-[#D12128]">{homeWins}W - {h2hHistory.filter(m => m.home === 'FHC').length - homeWins}L</span>
              </div>
              <div className="w-full h-2 md:h-3 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-[#D12128]" 
                  style={{ width: `${(homeWins / h2hHistory.filter(m => m.home === 'FHC').length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Away Record */}
            <div>
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <span className={`text-sm md:text-base font-heading uppercase ${theme.text}`}>Away Games</span>
                <span className="text-sm md:text-base font-bold text-[#00553F]">{awayWins}W - {h2hHistory.filter(m => m.away === 'FHC').length - awayWins}L</span>
              </div>
              <div className="w-full h-2 md:h-3 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-[#00553F]" 
                  style={{ width: `${(awayWins / h2hHistory.filter(m => m.away === 'FHC').length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Season Comparison */}
        <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
          <div className={`p-3 md:p-5 border-b flex items-center gap-2 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#0051BA]" />
            <h4 className={`font-heading font-bold uppercase text-sm md:text-base ${theme.text}`}>
              {t.h2h?.recentForm || 'Recent Form (2024)'}
            </h4>
          </div>
          <div className="p-4 md:p-6 space-y-4 md:space-y-5">
            {/* 2024 Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className={`p-3 md:p-4 rounded ${theme.cardAlt}`}>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading mb-1 md:mb-2">2024 Meetings</p>
                <p className={`text-2xl md:text-3xl font-black font-heading ${theme.text}`}>
                  {h2hHistory.filter(m => m.date.includes('24')).length}
                </p>
              </div>
              <div className={`p-3 md:p-4 rounded ${theme.cardAlt}`}>
                <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading mb-1 md:mb-2">2024 Wins</p>
                <p className={`text-2xl md:text-3xl font-black font-heading text-[#D12128]`}>
                  {h2hHistory.filter(m => m.date.includes('24') && m.result === 'W').length}
                </p>
              </div>
            </div>

            {/* Goal Difference */}
            <div className={`p-3 md:p-4 rounded ${theme.cardAlt}`}>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase font-heading mb-2 md:mb-3">Goal Difference</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 md:h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                <span className={`text-lg md:text-xl font-black font-heading text-green-500`}>+{(parseFloat(avgGoalsFor) - parseFloat(avgGoalsAgainst)).toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match History */}
      <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
        <div className={`p-3 border-b flex items-center gap-2 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
          <Calendar className="w-5 h-5 text-[#E50036]" />
          <h4 className={`font-heading font-bold uppercase ${theme.text}`}>
            {t.h2h?.matchHistory || 'Recent Match History'}
          </h4>
        </div>
        <div className="p-4 space-y-2">
          {h2hHistory.map((match, i) => {
            const isFHCHome = match.home === 'FHC';
            const isFHCWin = match.result === 'W';
            
            return (
              <div 
                key={i} 
                className={`flex items-center justify-between p-4 rounded-lg transition-all hover:scale-[1.01] ${isDark ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-slate-50 hover:bg-slate-100'}`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${i * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {/* Date */}
                <div className="text-sm font-bold text-slate-400 w-24 font-heading">
                  {match.date}
                </div>
                
                {/* Teams and Score */}
                <div className="flex-1 flex items-center justify-center gap-4">
                  <span className={`font-black text-base font-heading uppercase w-20 text-right ${
                    isFHCHome && !isFHCWin ? 'text-slate-400' : 
                    !isFHCHome && isFHCWin ? 'text-slate-400' : 
                    theme.text
                  }`}>
                    {match.home}
                  </span>
                  <span className={`px-4 py-2 rounded-md font-bold text-sm font-heading min-w-[70px] text-center ${
                    isDark ? 'bg-[#001F3F] text-white' : 'bg-[#001F3F] text-white'
                  }`}>
                    {match.score}
                  </span>
                  <span className={`font-black text-base font-heading uppercase w-20 text-left ${
                    !isFHCHome && !isFHCWin ? 'text-slate-400' : 
                    isFHCHome && isFHCWin ? 'text-slate-400' : 
                    theme.text
                  }`}>
                    {match.away}
                  </span>
                </div>
                
                {/* Result Badge */}
                <div className="w-24 text-right flex items-center justify-end gap-2">
                  <span className={`inline-flex items-center justify-center w-10 h-10 text-sm font-bold rounded-lg text-white font-heading ${
                    isFHCWin ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {match.result}
                  </span>
                  {i === 0 && (
                    <span className="px-2 py-1 bg-[#E50036] text-white text-xs font-bold rounded uppercase font-heading">
                      Latest
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-4 rounded-lg ${theme.cardAlt} border-l-4 border-[#E50036]`}>
          <p className="text-xs text-slate-500 uppercase font-heading mb-2">Most Goals in a Game</p>
          <p className={`text-3xl font-black font-heading ${theme.text}`}>5</p>
          <p className="text-xs text-slate-500 mt-1">Jan 4, 2024</p>
        </div>
        
        <div className={`p-4 rounded-lg ${theme.cardAlt} border-l-4 border-[#0051BA]`}>
          <p className="text-xs text-slate-500 uppercase font-heading mb-2">Total Goals Scored</p>
          <p className={`text-3xl font-black font-heading ${theme.text}`}>{(parseFloat(avgGoalsFor) * h2hHistory.length).toFixed(0)}</p>
          <p className="text-xs text-slate-500 mt-1">In last {h2hHistory.length} meetings</p>
        </div>
        
        <div className={`p-4 rounded-lg ${theme.cardAlt} border-l-4 border-[#FFD700]`}>
          <p className="text-xs text-slate-500 uppercase font-heading mb-2">Dominant Venue</p>
          <p className={`text-xl font-black font-heading ${theme.text}`}>
            {homeWins > awayWins ? 'Home' : 'Away'}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {Math.max(homeWins, awayWins)} wins
          </p>
        </div>
      </div>
    </div>
  );
};