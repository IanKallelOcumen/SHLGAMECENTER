import React from 'react';
import { 
  Menu, Globe, Sun, Moon, ExternalLink, ChevronDown, X,
  Layout, Video, MessageCircle, MoreHorizontal, Trophy
} from 'lucide-react';
import { SHL_TEAMS } from '../utils/gameData';
import shlLogo from 'figma:asset/ef7a448215cdd68d2e9ae4cbdbdc19de31acb560.png';

interface HeaderProps {
  lang: 'EN' | 'SV';
  isDark: boolean;
  showMobileMenu: boolean;
  toggleLang: () => void;
  toggleTheme: () => void;
  setShowMobileMenu: (show: boolean) => void;
  t: any;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  isDark,
  showMobileMenu,
  toggleLang,
  toggleTheme,
  setShowMobileMenu,
  t
}) => {
  const navItems = [
    { label: t.nav.start, icon: <Layout className="w-4 h-4"/>, link: '#' },
    { label: t.nav.fantasy, icon: <Trophy className="w-4 h-4"/>, link: 'https://fantasy.shl.se/', external: true },
    { label: t.nav.video, icon: <Video className="w-4 h-4"/>, link: '#' },
    { label: t.nav.communities, icon: <MessageCircle className="w-4 h-4"/>, link: '#' },
    { label: t.nav.more, icon: <MoreHorizontal className="w-4 h-4"/>, link: '#' }
  ];

  const theme = {
    nav: "bg-[#001F3F]",
    clubBar: isDark ? "bg-[#0A0F1C] border-[#1E293B]" : "bg-[#F5F7FA] border-[#E5E7EB]",
  };
  
  // Duplicate teams for infinite scroll effect
  const duplicatedTeams = [...SHL_TEAMS, ...SHL_TEAMS, ...SHL_TEAMS];

  return (
    <>
      {/* Club Bar - Infinite Scroll */}
      <div className={`border-b h-12 hidden md:flex items-center overflow-hidden ${theme.clubBar}`}>
        <div className="flex animate-scroll-infinite gap-8 px-4">
          {duplicatedTeams.map((team, i) => (
            <a 
              key={`team-${i}`}
              href={team.website}
              target="_blank"
              rel="noopener noreferrer"
              className="club-bar-logo w-8 h-8 flex items-center justify-center cursor-pointer transition-all hover:scale-110 flex-shrink-0"
              title={team.name}
            >
              <img 
                src={team.logo} 
                alt={team.name}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <header className={`${theme.nav} h-[60px] md:h-[80px] sticky top-0 z-50 shadow-lg transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-3 md:px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-10">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
              <img 
                src={shlLogo}
                alt="SHL 50 Years Logo"
                className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 text-white font-bold text-sm tracking-wide uppercase nav-item">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.link}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className="px-4 py-7 cursor-pointer hover:bg-[#E50036] transition-colors relative group flex items-center gap-2"
                >
                  {item.label}
                  {item.label === t.nav.more && <ChevronDown className="w-3 h-3 inline ml-1 opacity-50 group-hover:opacity-100" />}
                  {item.external && <ExternalLink className="w-3 h-3 inline ml-1 opacity-50 group-hover:opacity-100" />}
                </a>
              ))}
            </nav>
          </div>

          {/* Utility Nav */}
          <div className="flex items-center gap-4 text-white">
            <button onClick={toggleLang} className={`flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded text-xs font-bold hover:bg-white/20 transition-all font-heading tracking-wide`}>
              <Globe className="w-3 h-3" /> {lang}
            </button>
            <button onClick={toggleTheme} className={`flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded text-xs font-bold hover:bg-white/20 transition-all font-heading tracking-wide`}>
              {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
            </button>
            <button className="bg-white text-[#00102A] px-6 py-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-slate-200 transition-colors font-heading hidden md:block">
              {t.signIn}
            </button>
            <button onClick={() => setShowMobileMenu(true)} className="lg:hidden p-2 hover:bg-white/10 rounded transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}></div>
          <div className={`w-3/4 max-w-sm h-full ${isDark ? 'bg-[#151A26] text-white' : 'bg-white text-[#242424]'} shadow-2xl animate-slide-in relative flex flex-col`}>
            <div className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
              <span className="font-heading font-bold text-xl uppercase tracking-widest">{t.menu}</span>
              <button onClick={() => setShowMobileMenu(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 space-y-2">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.link} 
                  className="flex items-center gap-4 p-4 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-heading font-bold uppercase tracking-wide"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-4"></div>
              <button className="w-full bg-[#E50036] text-white py-3 rounded font-heading font-bold uppercase tracking-widest">{t.signIn}</button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};