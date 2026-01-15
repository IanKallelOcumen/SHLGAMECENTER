import React from 'react';
import { User, Shield, Zap, Target, Activity } from 'lucide-react';

interface Player {
  pos: string;
  name: string;
  num: string;
  x: number;
  y: number;
}

interface LineupsViewProps {
  lineups: {
    home: Player[];
    away: Player[];
  };
  gameData: any;
  lineupView: 'list' | 'ice';
  setLineupView: (view: 'list' | 'ice') => void;
  isDark: boolean;
  t: any;
}

// Extended player stats (mock data for demonstration)
const playerStats: Record<string, any> = {
  'Johansson': { goals: 0, assists: 0, saves: 28, savePercent: '93.3%', toi: '60:00' },
  'Tömmernes': { goals: 2, assists: 8, plusMinus: '+5', hits: 45, blocks: 18, toi: '18:24' },
  'Folin': { goals: 1, assists: 5, plusMinus: '+3', hits: 38, blocks: 22, toi: '17:45' },
  'Friberg': { goals: 12, assists: 15, plusMinus: '+8', sog: 72, hits: 24, toi: '19:32' },
  'Borg': { goals: 8, assists: 12, plusMinus: '+6', faceoff: '54.2%', hits: 18, toi: '18:15' },
  'Strömwall': { goals: 10, assists: 11, plusMinus: '+4', sog: 65, hits: 16, toi: '17:48' },
  'Lindbom': { goals: 0, assists: 1, saves: 24, savePercent: '88.9%', toi: '60:00' },
  'Andersson': { goals: 3, assists: 9, plusMinus: '+7', hits: 52, blocks: 25, toi: '19:12' },
  'Nygren': { goals: 2, assists: 7, plusMinus: '+4', hits: 41, blocks: 19, toi: '18:03' },
  'Lindqvist': { goals: 14, assists: 8, plusMinus: '+9', sog: 88, hits: 19, toi: '19:45' },
  'Tomasek': { goals: 18, assists: 9, plusMinus: '+12', faceoff: '58.7%', hits: 15, toi: '20:21' },
  'Nygård': { goals: 9, assists: 14, plusMinus: '+6', sog: 71, hits: 28, toi: '18:38' },
};

// Bench and coaching staff
const benchPlayers = {
  home: [
    { num: '14', name: 'Lundberg', pos: 'C' },
    { num: '22', name: 'Karlsson', pos: 'LW' },
    { num: '19', name: 'Svensson', pos: 'RW' },
    { num: '5', name: 'Bergman', pos: 'D' },
    { num: '33', name: 'Eriksson', pos: 'G' },
  ],
  away: [
    { num: '18', name: 'Pettersson', pos: 'C' },
    { num: '27', name: 'Johansson', pos: 'LW' },
    { num: '91', name: 'Olsson', pos: 'RW' },
    { num: '6', name: 'Nilsson', pos: 'D' },
    { num: '1', name: 'Gustafsson', pos: 'G' },
  ]
};

const coachingStaff = {
  home: {
    headCoach: 'Roger Rönnberg',
    assistantCoaches: ['Johan Andersson', 'Tobias Abrahamsson'],
    goaltendingCoach: 'Mats Waltin'
  },
  away: {
    headCoach: 'Tomas Mitell',
    assistantCoaches: ['Peter Andersson', 'Niklas Eriksson'],
    goaltendingCoach: 'Lars Johansson'
  }
};

export const LineupsView: React.FC<LineupsViewProps> = ({
  lineups,
  gameData,
  lineupView,
  setLineupView,
  isDark,
  t
}) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
    cardAlt: isDark ? "bg-[#1A2030]" : "bg-slate-50",
  };

  return (
    <div className="space-y-4 md:space-y-8 animate-fade-in">
      <div className="flex justify-end mb-4 md:mb-6">
        <div className={`flex rounded-lg overflow-hidden shadow-md ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
          <button 
            onClick={() => setLineupView('list')} 
            className={`px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase font-heading transition-all min-h-[44px] md:min-h-0 active:scale-95 ${lineupView === 'list' ? 'bg-white text-[#001F3F]' : `${isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-50'}`}`}
          >
            {t.lineupMode.list}
          </button>
          <button 
            onClick={() => setLineupView('ice')} 
            className={`px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase font-heading transition-all min-h-[44px] md:min-h-0 active:scale-95 ${lineupView === 'ice' ? 'bg-[#001F3F] text-white' : `${isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-50'}`}`}
          >
            {t.lineupMode.ice}
          </button>
        </div>
      </div>

      {lineupView === 'ice' ? (
        <div className="space-y-4 md:space-y-8">
          {/* Ice Rink */}
          <div className="ice-rink h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] border-4 border-slate-300 shadow-inner relative overflow-hidden">
            {/* Center Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-red-600 -translate-x-1/2 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border-2 border-red-600 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            
            {/* HOME PLAYERS */}
            {lineups.home.map((p, i) => (
              <div 
                key={`h-${i}`} 
                className="absolute flex flex-col items-center group cursor-pointer transform-gpu"
                style={{ 
                  left: `${p.x}%`, 
                  top: `${p.y}%`, 
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#D12128] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-black text-xs sm:text-sm md:text-base z-10 group-hover:scale-125 active:scale-110 transition-transform font-heading">
                  {p.num}
                </div>
                <div className="bg-white/90 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase mt-1 shadow-sm text-[#00102A] font-heading whitespace-nowrap player-name">
                  {p.name}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#00102A] text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {p.pos}
                </div>
              </div>
            ))}

            {/* AWAY PLAYERS */}
            {lineups.away.map((p, i) => (
              <div 
                key={`a-${i}`} 
                className="absolute flex flex-col items-center group cursor-pointer transform-gpu"
                style={{ 
                  left: `${p.x}%`, 
                  top: `${p.y}%`, 
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#00553F] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-black text-xs sm:text-sm md:text-base z-10 group-hover:scale-125 active:scale-110 transition-transform font-heading">
                  {p.num}
                </div>
                <div className="bg-white/90 px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-bold uppercase mt-1 shadow-sm text-[#00102A] font-heading whitespace-nowrap player-name">
                  {p.name}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#00102A] text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {p.pos}
                </div>
              </div>
            ))}
          </div>

          {/* Formation Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {['home', 'away'].map((side) => (
              <div key={side} className={`rounded p-4 md:p-5 ${theme.cardAlt}`}>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" />
                  <h4 className={`font-heading font-bold uppercase text-sm md:text-base ${theme.text}`}>
                    {side === 'home' ? gameData.homeTeam.name : gameData.awayTeam.name} Formation
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3 text-sm md:text-base">
                  <div className={`${theme.text} opacity-70`}>
                    <span className="font-bold">System:</span> 1-2-3
                  </div>
                  <div className={`${theme.text} opacity-70`}>
                    <span className="font-bold">Lines:</span> 4
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Starting Lineups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['home', 'away'].map((side) => (
              <div key={side} className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
                <div className={`p-4 border-b flex items-center gap-3 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm">
                    <img 
                      src={side === 'home' ? gameData.homeTeam.logo : gameData.awayTeam.logo}
                      alt={side === 'home' ? gameData.homeTeam.name : gameData.awayTeam.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold font-heading uppercase text-lg ${theme.text}`}>
                      {side === 'home' ? gameData.homeTeam.name : gameData.awayTeam.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-heading">STARTING LINEUP</p>
                  </div>
                  <Shield className="w-5 h-5 text-[#E50036]" />
                </div>
                
                {/* Players */}
                <div className="p-4 space-y-1">
                  {lineups[side as 'home' | 'away'].map((p, i) => {
                    const stats = playerStats[p.name] || {};
                    const isGoalie = p.pos === 'G';
                    
                    return (
                      <div 
                        key={i} 
                        className={`p-3 border-b last:border-0 transition-all hover:scale-[1.01] ${isDark ? 'border-slate-800 hover:bg-slate-800/50' : 'border-slate-50 hover:bg-slate-50'}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          {/* Player Info */}
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white font-mono text-xs font-bold flex-shrink-0">
                              {p.num}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span className={`font-bold ${theme.text} player-name truncate`}>
                                  {p.name}
                                </span>
                                <span className="text-xs font-bold text-white bg-[#001F3F] px-2 py-0.5 rounded font-heading flex-shrink-0">
                                  {p.pos}
                                </span>
                              </div>
                              {/* Player Stats */}
                              <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                                {isGoalie ? (
                                  <>
                                    <span className="flex items-center gap-1">
                                      <Shield className="w-3 h-3" />
                                      {stats.saves || 0} Saves
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Target className="w-3 h-3" />
                                      {stats.savePercent || '0%'}
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span className="flex items-center gap-1">
                                      <Zap className="w-3 h-3" />
                                      {stats.goals || 0}G {stats.assists || 0}A
                                    </span>
                                    <span className={`font-bold ${(stats.plusMinus || '').includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                                      {stats.plusMinus || '0'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Activity className="w-3 h-3" />
                                      {stats.toi || '00:00'}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bench / Reserves */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['home', 'away'].map((side) => (
              <div key={side} className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
                <div className={`p-3 border-b flex items-center gap-2 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
                  <User className="w-4 h-4 text-[#0051BA]" />
                  <h4 className={`font-heading font-bold uppercase text-sm ${theme.text}`}>
                    {t.lineups?.bench || 'Bench'}
                  </h4>
                </div>
                <div className="p-3 space-y-2">
                  {benchPlayers[side as 'home' | 'away'].map((p, i) => (
                    <div key={i} className={`flex items-center gap-3 p-2 rounded ${isDark ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'}`}>
                      <span className="w-6 h-6 flex items-center justify-center rounded bg-slate-600 text-white text-xs font-bold">
                        {p.num}
                      </span>
                      <span className={`text-sm font-medium ${theme.text} flex-1`}>
                        {p.name}
                      </span>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {p.pos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Coaching Staff */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['home', 'away'].map((side) => {
              const staff = coachingStaff[side as 'home' | 'away'];
              return (
                <div key={side} className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
                  <div className={`p-3 border-b flex items-center gap-2 ${isDark ? 'border-slate-700 bg-[#1A2030]' : 'border-slate-100 bg-slate-50'}`}>
                    <User className="w-4 h-4 text-[#E50036]" />
                    <h4 className={`font-heading font-bold uppercase text-sm ${theme.text}`}>
                      {t.lineups?.coaching || 'Coaching Staff'}
                    </h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-heading mb-1">Head Coach</p>
                      <p className={`font-bold ${theme.text}`}>{staff.headCoach}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-heading mb-1">Assistant Coaches</p>
                      <p className={`text-sm ${theme.text}`}>{staff.assistantCoaches.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-heading mb-1">Goaltending Coach</p>
                      <p className={`text-sm ${theme.text}`}>{staff.goaltendingCoach}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};