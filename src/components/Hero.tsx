import React, { useState, useEffect } from 'react';
import { Clock, MonitorPlay, Share2, Download, Bell } from 'lucide-react';
import { Button } from './Button';
import { LiveIndicator } from './LiveIndicator';
import { Tooltip } from './Tooltip';

interface HeroProps {
  gameData: any;
  userTime: string;
  setShowBroadcast: (show: boolean) => void;
  t: any;
}

export const Hero: React.FC<HeroProps> = ({ gameData, userTime, setShowBroadcast, t }) => {
  const [homeScore, setHomeScore] = useState(gameData.score.home);
  const [awayScore, setAwayScore] = useState(gameData.score.away);
  const [isLive, setIsLive] = useState(gameData.meta.status === 'live');
  const [notifications, setNotifications] = useState(false);

  // Simulate live score updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% chance every 3 seconds
        if (Math.random() > 0.5) {
          setHomeScore(prev => prev + 1);
        } else {
          setAwayScore(prev => prev + 1);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${gameData.homeTeam.name} vs ${gameData.awayTeam.name}`,
          text: `Watch ${gameData.homeTeam.name} vs ${gameData.awayTeam.name} - ${homeScore}-${awayScore}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share canceled');
      }
    }
  };

  const handleDownloadReport = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'match-report.pdf';
    link.click();
  };

  return (
    <div className="relative bg-[#001F3F] overflow-hidden">
      {/* Stadium Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1561917488-91aa9bc0a3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBzdGFkaXVtJTIwYXJlbmElMjBjcm93ZHxlbnwxfHx8fDE3Njg0OTcwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hockey Stadium"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/80 via-[#001F3F]/90 to-[#001F3F]/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-8 lg:py-12 relative z-10">
        {/* Top Meta Info */}
        <div className="flex flex-col sm:flex-row justify-between text-white mb-4 md:mb-6 lg:mb-8 text-xs font-bold uppercase tracking-widest opacity-90 font-heading gap-2 md:gap-3">
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <LiveIndicator isLive={isLive} />
            {!isLive && (
              <span className="bg-slate-600 px-2 py-0.5 rounded text-white">
                {t.upcoming}
              </span>
            )}
            <span>{gameData.meta.date}</span>
            <span className="w-1 h-1 bg-white rounded-full hidden sm:block"></span>
            <span className="hidden sm:inline">{gameData.meta.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-[#00ff85]">
            <Clock className="w-4 h-4" />
            {userTime} {t.localTime}
          </div>
        </div>

        {/* Main Scoreboard - Centered Layout */}
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8">
          {/* Teams on Desktop - Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 items-center w-full max-w-6xl mx-auto">
            {/* Home Team */}
            <div className="flex items-center justify-end gap-6 group">
              <div className="text-right">
                <h2 className="text-4xl xl:text-5xl font-bold tracking-tight text-white group-hover:text-[#E50036] transition-colors font-heading uppercase leading-tight">
                  {gameData.homeTeam.name}
                </h2>
                <div className="mt-3 flex justify-end gap-1">
                  {gameData.homeTeam.form.map((r: string, i: number) => (
                    <Tooltip key={i} content={`Match ${5 - i}: ${r === 'W' ? 'Win' : 'Loss'}`}>
                      <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded cursor-pointer hover:scale-110 transition-transform ${r === 'W' ? 'bg-[#00ff85] text-[#00102A]' : 'bg-[#E50036] text-white'}`}>
                        {r}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <img 
                src={gameData.homeTeam.logo} 
                alt={gameData.homeTeam.name}
                className="w-32 h-32 xl:w-36 xl:h-36 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform flex-shrink-0" 
              />
            </div>

            {/* Score Card - Centered */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white text-[#00102A] px-8 py-6 rounded-2xl shadow-2xl relative overflow-hidden hover:shadow-3xl transition-all hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D12128] via-transparent to-[#00553F]"></div>
                <div className="text-center">
                  <span className="text-6xl xl:text-7xl font-black tracking-tighter font-heading leading-none block">
                    {homeScore} <span className="text-gray-400">-</span> {awayScore}
                  </span>
                  <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mt-3 font-heading justify-center">
                    {gameData.score.periods.map((p: any, i: number) => (
                      <Tooltip key={i} content={`Period ${i + 1}`}>
                        <span className="hover:text-[#E50036] cursor-pointer transition-colors">
                          {p.home}-{p.away}
                        </span>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Away Team */}
            <div className="flex items-center justify-start gap-6 group">
              <img 
                src={gameData.awayTeam.logo} 
                alt={gameData.awayTeam.name}
                className="w-32 h-32 xl:w-36 xl:h-36 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform flex-shrink-0" 
              />
              <div className="text-left">
                <h2 className="text-4xl xl:text-5xl font-bold tracking-tight text-white group-hover:text-[#00553F] transition-colors font-heading uppercase leading-tight">
                  {gameData.awayTeam.name}
                </h2>
                <div className="mt-3 flex justify-start gap-1">
                  {gameData.awayTeam.form.map((r: string, i: number) => (
                    <Tooltip key={i} content={`Match ${5 - i}: ${r === 'W' ? 'Win' : 'Loss'}`}>
                      <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded cursor-pointer hover:scale-110 transition-transform ${r === 'W' ? 'bg-[#00ff85] text-[#00102A]' : 'bg-[#E50036] text-white'}`}>
                        {r}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden w-full">
            {/* Score Card First on Mobile */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-white text-[#00102A] px-8 py-6 rounded-2xl shadow-2xl relative overflow-hidden w-full max-w-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D12128] via-transparent to-[#00553F]"></div>
                <div className="text-center">
                  <span className="text-5xl md:text-6xl font-black tracking-tighter font-heading leading-none block">
                    {homeScore} <span className="text-gray-400">-</span> {awayScore}
                  </span>
                  <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 mt-3 font-heading justify-center">
                    {gameData.score.periods.map((p: any, i: number) => (
                      <Tooltip key={i} content={`Period ${i + 1}`}>
                        <span className="hover:text-[#E50036] cursor-pointer transition-colors">
                          {p.home}-{p.away}
                        </span>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Teams Below on Mobile */}
            <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
              {/* Home Team */}
              <div className="flex flex-col items-center text-center group">
                <img 
                  src={gameData.homeTeam.logo} 
                  alt={gameData.homeTeam.name}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform mb-3" 
                />
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#E50036] transition-colors font-heading uppercase leading-tight">
                  {gameData.homeTeam.name}
                </h2>
                <div className="mt-2 flex justify-center gap-1">
                  {gameData.homeTeam.form.map((r: string, i: number) => (
                    <Tooltip key={i} content={`Match ${5 - i}: ${r === 'W' ? 'Win' : 'Loss'}`}>
                      <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded cursor-pointer hover:scale-110 transition-transform ${r === 'W' ? 'bg-[#00ff85] text-[#00102A]' : 'bg-[#E50036] text-white'}`}>
                        {r}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center text-center group">
                <img 
                  src={gameData.awayTeam.logo} 
                  alt={gameData.awayTeam.name}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform mb-3" 
                />
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#00553F] transition-colors font-heading uppercase leading-tight">
                  {gameData.awayTeam.name}
                </h2>
                <div className="mt-2 flex justify-center gap-1">
                  {gameData.awayTeam.form.map((r: string, i: number) => (
                    <Tooltip key={i} content={`Match ${5 - i}: ${r === 'W' ? 'Win' : 'Loss'}`}>
                      <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded cursor-pointer hover:scale-110 transition-transform ${r === 'W' ? 'bg-[#00ff85] text-[#00102A]' : 'bg-[#E50036] text-white'}`}>
                        {r}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Centered */}
          <div className="flex gap-2 md:gap-3 flex-wrap justify-center mt-2">
            <Button
              onClick={() => setShowBroadcast(true)}
              variant="outline"
              size="sm"
              icon={MonitorPlay}
              iconPosition="left"
            >
              {t.watch}
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              icon={Share2}
              iconPosition="left"
            >
              {t.share}
            </Button>
            <Tooltip content="Download Match Report">
              <button
                onClick={handleDownloadReport}
                className="px-4 py-2 md:px-3 md:py-2 border-2 border-white/30 text-white hover:bg-white/10 rounded transition-all duration-300 font-heading font-bold uppercase min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95"
              >
                <Download className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </Tooltip>
            <Tooltip content={notifications ? "Notifications On" : "Enable Notifications"}>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`px-4 py-2 md:px-3 md:py-2 border-2 border-white/30 rounded transition-all duration-300 font-heading font-bold uppercase min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${notifications ? 'text-[#00ff85] border-[#00ff85]' : 'text-white hover:bg-white/10'}`}
              >
                <Bell className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};