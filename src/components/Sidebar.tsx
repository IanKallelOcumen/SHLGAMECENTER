import React from 'react';
import { Ticket, CalendarPlus, MapPin, ArrowRight, Star, Bookmark } from 'lucide-react';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

interface SidebarProps {
  gameData: any;
  isDark: boolean;
  t: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ gameData, isDark, t }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  return (
    <div className="lg:col-span-4 space-y-4 md:space-y-8">
      {/* TICKET WIDGET */}
      <div className="bg-gradient-to-br from-[#00102A] to-[#001a3d] text-white rounded-lg p-5 md:p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E50036] rounded-full blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-white/10 rounded-full"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-white/5 rounded-full"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-[#E50036] font-bold uppercase tracking-widest text-xs mb-2 font-heading">
            <Ticket className="w-4 h-4" /> {t.officialTickets}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading uppercase leading-none">
            {t.secureSeat}
          </h3>
          <Button
            variant="primary"
            size="lg"
            className="w-full !bg-white !text-[#00102A] hover:!bg-slate-200 min-h-[48px] active:scale-95"
          >
            {t.buyNow}
          </Button>
        </div>
      </div>

      {/* KEY PLAYERS */}
      <div className={`rounded-lg pl-shadow p-4 md:p-6 ${theme.card}`}>
        <h3 className={`font-bold text-lg mb-6 border-l-4 border-[#E50036] pl-3 font-heading uppercase ${theme.text}`}>
          {t.playersToWatch}
        </h3>
        <div className="flex items-start gap-4 mb-6 p-3 rounded-lg transition-all hover:bg-slate-800/50 cursor-pointer group">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-[#D12128] transition-colors">
              <img 
                src={gameData.homeTeam.star.image} 
                alt={gameData.homeTeam.star.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <Tooltip content="Add to Favorites">
              <button className="absolute -top-1 -right-1 w-6 h-6 bg-[#E50036] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="w-3 h-3 text-white" />
              </button>
            </Tooltip>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase text-slate-400 font-heading">
              FHC • Forward
            </div>
            <div className={`font-bold text-xl leading-tight font-heading uppercase ${theme.text}`}>
              {gameData.homeTeam.star.name}
            </div>
            <div className="text-sm font-bold text-[#D12128] font-mono">
              {gameData.homeTeam.star.stats}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 p-3 rounded-lg transition-all hover:bg-slate-800/50 cursor-pointer group">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-[#00553F] transition-colors">
              <img 
                src={gameData.awayTeam.star.image} 
                alt={gameData.awayTeam.star.name}
                className="w-full h-full object-cover" 
              />
            </div>
            <Tooltip content="Add to Favorites">
              <button className="absolute -top-1 -right-1 w-6 h-6 bg-[#E50036] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Star className="w-3 h-3 text-white" />
              </button>
            </Tooltip>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase text-slate-400 font-heading">
              FBK • Forward
            </div>
            <div className={`font-bold text-xl leading-tight font-heading uppercase ${theme.text}`}>
              {gameData.awayTeam.star.name}
            </div>
            <div className="text-sm font-bold text-[#00553F] font-mono">
              {gameData.awayTeam.star.stats}
            </div>
          </div>
        </div>
      </div>

      {/* UTILITY LINKS */}
      <div className={`rounded-lg pl-shadow overflow-hidden ${theme.card}`}>
        <button className={`w-full p-4 border-b cursor-pointer flex justify-between items-center group transition-all ${isDark ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-100 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E50036]/10 flex items-center justify-center group-hover:bg-[#E50036] transition-colors">
              <CalendarPlus className="w-5 h-5 text-[#E50036] group-hover:text-white transition-colors" />
            </div>
            <span className={`font-bold text-sm font-heading uppercase tracking-wide ${theme.text}`}>
              {t.syncCalendar}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E50036] group-hover:translate-x-1 transition-all" />
        </button>
        <button className={`w-full p-4 border-b cursor-pointer flex justify-between items-center group transition-all ${isDark ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-100 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E50036]/10 flex items-center justify-center group-hover:bg-[#E50036] transition-colors">
              <MapPin className="w-5 h-5 text-[#E50036] group-hover:text-white transition-colors" />
            </div>
            <span className={`font-bold text-sm font-heading uppercase tracking-wide ${theme.text}`}>
              {t.venueGuide}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E50036] group-hover:translate-x-1 transition-all" />
        </button>
        <button className={`w-full p-4 cursor-pointer flex justify-between items-center group transition-all ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E50036]/10 flex items-center justify-center group-hover:bg-[#E50036] transition-colors">
              <Bookmark className="w-5 h-5 text-[#E50036] group-hover:text-white transition-colors" />
            </div>
            <span className={`font-bold text-sm font-heading uppercase tracking-wide ${theme.text}`}>
              Save Match
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#E50036] group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      {/* VENUE INFO */}
      <div className={`rounded-lg pl-shadow p-6 ${theme.card}`}>
        <h3 className={`font-bold text-lg mb-4 font-heading uppercase ${theme.text}`}>
          Venue Information
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center p-2 rounded hover:bg-slate-800/50 transition-colors">
            <span className="text-slate-500 font-medium">Arena:</span>
            <span className={`font-bold ${theme.text}`}>{gameData.meta.venue.split(',')[0]}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded hover:bg-slate-800/50 transition-colors">
            <span className="text-slate-500 font-medium">Capacity:</span>
            <span className={`font-bold ${theme.text}`}>{gameData.meta.capacity}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded hover:bg-slate-800/50 transition-colors">
            <span className="text-slate-500 font-medium">Referee:</span>
            <span className={`font-bold ${theme.text}`}>{gameData.meta.referee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};