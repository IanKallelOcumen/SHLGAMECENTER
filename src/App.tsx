import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsCarousel } from './components/NewsCarousel';
import { MatchTimeline } from './components/MatchTimeline';
import { StatsPanel } from './components/StatsPanel';
import { LineupsView } from './components/LineupsView';
import { H2HStats } from './components/H2HStats';
import { Sidebar } from './components/Sidebar';
import { BroadcastModal } from './components/BroadcastModal';
import { Footer } from './components/Footer';
import { MatchPrediction } from './components/MatchPrediction';
import { KeyMoments } from './components/KeyMoments';
import { SocialFeed } from './components/SocialFeed';
import { PlayerComparison } from './components/PlayerComparison';
import { StickyMiniScore } from './components/StickyMiniScore';
import { HeroSkeleton, NewsCarouselSkeleton, StatsPanelSkeleton } from './components/SkeletonLoaders';
import { TRANSLATIONS } from './utils/translations';
import { getGameData } from './utils/gameData';

export default function App() {
  const [activeTab, setActiveTab] = useState('summary');
  const [userTime, setUserTime] = useState("");
  const [showBroadcast, setShowBroadcast] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [lang, setLang] = useState<'EN' | 'SV'>('EN');
  const [isDark, setIsDark] = useState(false);
  const [lineupView, setLineupView] = useState<'list' | 'ice'>('ice');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const t = TRANSLATIONS[lang];
  const gameData = getGameData(lang);

  // Load theme and language from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('shl-theme');
    const savedLang = localStorage.getItem('shl-lang');
    if (savedTheme === 'dark') setIsDark(true);
    if (savedLang === 'SV') setLang('SV');
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('shl-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('shl-lang', lang);
  }, [lang]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const date = new Date();
    date.setHours(19, 0, 0);
    setUserTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  // Scroll detection for mini score
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'SV' : 'EN');
  const toggleTheme = () => setIsDark(prev => !prev);

  const theme = {
    bg: isDark ? "bg-[#0A0F1C]" : "bg-[#F5F7FA]",
    text: isDark ? "text-white" : "text-[#1A1A1A]",
    card: isDark ? "bg-[#151B2D]" : "bg-white",
    cardText: isDark ? "text-white" : "text-[#1A1A1A]",
    border: isDark ? "border-[#1E293B]" : "border-[#E5E7EB]",
    muted: isDark ? "text-[#94A3B8]" : "text-[#6B7280]",
  };

  return (
    <div className={`min-h-screen font-sans ${theme.bg} ${theme.text} transition-colors duration-500`}>
      {/* Meta Tags for Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#E50036" />
      <meta name="description" content="Swedish Hockey League Live Match Center - Real-time scores, stats, lineups, and news for SHL matches" />
      <link rel="manifest" href="/public/manifest.json" />
      <link rel="apple-touch-icon" href="https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Swedish_Hockey_League_logo.svg/180px-Swedish_Hockey_League_logo.svg.png" />
      
      {/* Fonts & Styles */}
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --font-heading: 'Bebas Neue', sans-serif;
          --font-body: 'Inter', sans-serif;
          
          /* SHL Official Color Palette */
          --shl-navy: #001F3F;
          --shl-blue: #0051BA;
          --shl-blue-dark: #003D82;
          --shl-blue-light: #3B7DD6;
          
          --shl-red: #E50036;
          --shl-red-dark: #B8002A;
          --shl-red-light: #FF1A52;
          
          --shl-yellow: #FFD700;
          --shl-green: #00A651;
          --shl-black: #1A1A1A;
          
          /* Light Theme */
          --light-bg: #FFFFFF;
          --light-bg-secondary: #F5F7FA;
          --light-text: #1A1A1A;
          --light-text-secondary: #6B7280;
          --light-border: #E5E7EB;
          --light-card: #FFFFFF;
          
          /* Dark Theme */
          --dark-bg: #0A0F1C;
          --dark-bg-secondary: #151B2D;
          --dark-text: #FFFFFF;
          --dark-text-secondary: #94A3B8;
          --dark-border: #1E293B;
          --dark-card: #151B2D;
        }
        
        body { font-family: var(--font-body); }
        
        h1, h2, h3, h4, h5, h6,
        .club-bar-logo, .nav-item, .shl-btn, .tab-item, 
        .player-name, .stat-value, .score-display { 
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
        }
        
        .club-bar-logo { 
          filter: grayscale(100%) opacity(0.7); 
          transition: all 0.3s; 
        }
        .club-bar-logo:hover { 
          filter: grayscale(0%) opacity(1); 
          transform: scale(1.1); 
        }
        .pl-shadow { 
          box-shadow: 0 4px 12px rgba(0,0,0,0.08); 
        }
        .no-scrollbar::-webkit-scrollbar { 
          display: none; 
        }
        .no-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
        .ice-rink {
          background: #fff;
          background-image: 
            radial-gradient(circle at 50% 50%, transparent 40px, #E50036 41px, #E50036 43px, transparent 44px),
            linear-gradient(90deg, transparent 49.8%, #E50036 49.8%, #E50036 50.2%, transparent 50.2%),
            linear-gradient(90deg, transparent 25%, #0055BB 25%, #0055BB 25.5%, transparent 25.5%),
            linear-gradient(90deg, transparent 74.5%, #0055BB 74.5%, #0055BB 75%, transparent 75%);
          border-radius: 40px;
          position: relative;
          overflow: hidden;
        }
        .ice-rink::before {
          content: '';
          position: absolute;
          left: 5%; 
          top: 40%; 
          bottom: 40%; 
          width: 4%;
          border: 2px solid #E50036;
          border-radius: 50%;
        }
        .ice-rink::after {
          content: '';
          position: absolute;
          right: 5%; 
          top: 40%; 
          bottom: 40%; 
          width: 4%;
          border: 2px solid #E50036;
          border-radius: 50%;
        }
        
        /* Infinite scroll animation for club bar */
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        @keyframes fadeIn { 
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0); 
          } 
        }
        .animate-fade-in { 
          animation: fadeIn 0.5s ease-out forwards; 
        }
        @keyframes slideIn { 
          from { 
            transform: translateX(100%); 
          } 
          to { 
            transform: translateX(0); 
          } 
        }
        .animate-slide-in { 
          animation: slideIn 0.3s ease-out forwards; 
        }
        @keyframes ripple {
          to {
            width: 100px;
            height: 100px;
            opacity: 0;
            margin-left: -50px;
            margin-top: -50px;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>

      <Header
        lang={lang}
        isDark={isDark}
        showMobileMenu={showMobileMenu}
        toggleLang={toggleLang}
        toggleTheme={toggleTheme}
        setShowMobileMenu={setShowMobileMenu}
        t={t}
      />

      <Hero
        gameData={gameData}
        userTime={userTime}
        setShowBroadcast={setShowBroadcast}
        t={t}
      />

      {/* Tabs */}
      <div className={`sticky top-[60px] md:top-[80px] z-40 border-t border-white/10 shadow-lg bg-[#001F3F] text-white`}>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto flex justify-start md:justify-center gap-0">
            {['summary', 'stats', 'lineups', 'h2h'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 md:py-4 px-6 md:px-8 lg:px-12 text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider transition-all relative font-heading whitespace-nowrap border-b-2 ${activeTab === tab ? 'text-white border-[#E50036]' : 'text-white/70 border-transparent hover:text-white hover:border-white/30'}`}
              >
                {t.tabs[tab as keyof typeof t.tabs]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-4 md:space-y-8 animate-fade-in">
          {activeTab === 'summary' && (
            <>
              <NewsCarousel articles={gameData.articles} isDark={isDark} t={t} />
              <KeyMoments isDark={isDark} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <MatchPrediction 
                  homeTeam={gameData.homeTeam.name}
                  awayTeam={gameData.awayTeam.name}
                  isDark={isDark}
                />
                <PlayerComparison
                  homePlayer={gameData.homeTeam.star}
                  awayPlayer={gameData.awayTeam.star}
                  isDark={isDark}
                  t={t}
                />
              </div>
              <MatchTimeline timeline={gameData.timeline} isDark={isDark} t={t} />
              <SocialFeed isDark={isDark} />
            </>
          )}

          {activeTab === 'stats' && (
            <StatsPanel detailedStats={gameData.detailedStats} isDark={isDark} />
          )}

          {activeTab === 'lineups' && (
            <LineupsView
              lineups={gameData.lineups}
              gameData={gameData}
              lineupView={lineupView}
              setLineupView={setLineupView}
              isDark={isDark}
              t={t}
            />
          )}

          {activeTab === 'h2h' && (
            <H2HStats h2hHistory={gameData.h2hHistory} isDark={isDark} t={t} />
          )}
        </div>

        {/* Right Sidebar */}
        <Sidebar gameData={gameData} isDark={isDark} t={t} />
      </div>

      <Footer t={t} isDark={isDark} />

      <BroadcastModal
        show={showBroadcast}
        onClose={() => setShowBroadcast(false)}
        isDark={isDark}
        t={t}
      />

      {/* Sticky Mini Score */}
      <StickyMiniScore
        isScrolled={isScrolled}
        gameData={gameData}
        isDark={isDark}
        t={t}
      />
    </div>
  );
}