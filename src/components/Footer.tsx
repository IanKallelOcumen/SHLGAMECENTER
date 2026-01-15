import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import sebLogo from 'figma:asset/c3daad1785d289ba91aab854444945543110ba82.png';
import tryggHansaLogo from 'figma:asset/ba41ea0ffb0ff67e79a46bdeeaa9f85bb2c2949d.png';
import redBullLogo from 'figma:asset/a568e04cdb8bb818b532cadd6b5677ef5fda9d7b.png';
import bwhHotelsLogo from 'figma:asset/9b4fc622234b265eb80f136f3719c1913ffad2c0.png';
import amazonLogo from 'figma:asset/8052f2d4e05f96c926fed0dd9fe6b2976327e7a4.png';
import teliaLogo from 'figma:asset/f2d586207b0c9222bd5af0856d80b5f0a5286c28.png';
import xlbyggLogo from 'figma:asset/82b4df327302829850f975be15bf146df7098e05.png';
import norrlandsGuldLogo from 'figma:asset/501ed110695cd4f4a95bc62023443cb30224c36e.png';
import oakleyLogo from 'figma:asset/df5f1ac1b214a7ad33bc364417ad878d0eff1d01.png';
import svenskaSpelLogo from 'figma:asset/e6ecb35d4322ff77de7598e63f4d7518047522b2.png';
import sportbladetLogo from 'figma:asset/8121d8baca9f3c2212ecd60351381216d56dda19.png';

interface FooterProps {
  t: any;
  isDark: boolean;
}

// Custom TikTok SVG Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Huvudpartner (Main Partners) - 5 partners
const HUVUDPARTNER = [
  { 
    name: 'Svenska Spel', 
    logo: svenskaSpelLogo, 
    url: 'https://www.svenskaspel.se/' 
  },
  { 
    name: 'Norrlands Guld', 
    logo: norrlandsGuldLogo, 
    url: 'https://www.norrlandsguld.se/' 
  },
  { 
    name: 'Sportbladet', 
    logo: sportbladetLogo, 
    url: 'https://www.aftonbladet.se/sportbladet/' 
  },
  { 
    name: 'XL-BYGG', 
    logo: xlbyggLogo, 
    url: 'https://www.xlbygg.se/privat/' 
  },
  { 
    name: 'Oakley', 
    logo: oakleyLogo, 
    url: 'https://www.oakley.com/en-se' 
  },
];

// Officiell Partner (Official Partners) - 6 partners
const OFFICIELL_PARTNER = [
  { 
    name: 'Amazon', 
    logo: amazonLogo, 
    url: 'https://www.amazon.se/' 
  },
  { 
    name: 'Telia', 
    logo: teliaLogo, 
    url: 'https://www.telia.se/tv/sport/shl' 
  },
  { 
    name: 'BWH Hotels', 
    logo: bwhHotelsLogo, 
    url: 'https://www.bwhhotels.se/?gad_campaignid=21729915506' 
  },
  { 
    name: 'SEB', 
    logo: sebLogo, 
    url: 'https://seb.se/' 
  },
  { 
    name: 'Trygg-Hansa', 
    logo: tryggHansaLogo, 
    url: 'https://www.trygghansa.se/' 
  },
  { 
    name: 'Red Bull', 
    logo: redBullLogo, 
    url: 'https://www.redbull.com/se-sv/energydrink' 
  },
];

export const Footer: React.FC<FooterProps> = ({ t, isDark }) => {
  const theme = {
    bg: isDark ? 'bg-[#0A0F1C]' : 'bg-white',
    sponsorBg: isDark ? 'bg-[#151B2D]' : 'bg-[#F5F7FA]',
    footerBg: 'bg-[#1A1A1A]',
    text: 'text-white',
    link: 'text-gray-400 hover:text-white',
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/SHLse/' },
    { name: 'X (Twitter)', icon: Twitter, url: 'https://x.com/SHLse' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/shlofficial/?hl=en' },
    { name: 'TikTok', icon: TikTokIcon, url: 'https://www.tiktok.com/@shlofficial?lang=en' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@shl' },
  ];

  const aboutSHL = [
    { label: t.footer?.aboutIPTV || 'Bepol IPTV - en väljgjd väg', url: 'https://www.shl.se/artikel/bepol-iptv' },
    { label: t.footer?.aboutSHL || 'Om SHL AB', url: 'https://www.shl.se/om-shl' },
    { label: t.footer?.shlEnglish || 'SHL in English', url: 'https://www.shl.se/en' },
    { label: t.footer?.sustainability || 'Hållbarhet', url: 'https://www.shl.se/hallbarhet' },
    { label: t.footer?.records || 'Rekor', url: 'https://www.shl.se/rekor' },
    { label: t.footer?.thatsHockey || 'Det här är hockey', url: 'https://www.shl.se/det-har-ar-hockey' },
    { label: t.footer?.contact || 'Kontakt', url: 'https://www.shl.se/kontakt' },
    { label: t.footer?.photographers || 'SHL-fotografraphs', url: 'https://www.shl.se/fotografer' },
    { label: t.footer?.unlockIPTV || 'Lås upp iptv:sen', url: 'https://www.shl.se/las-upp-iptv' },
    { label: t.footer?.jobs || 'Lediga jobb', url: 'https://www.shl.se/lediga-jobb' },
  ];

  return (
    <>
      {/* Sponsors Section */}
      <div className={`${theme.sponsorBg} py-16 border-t ${isDark ? 'border-[#1E293B]' : 'border-[#E5E7EB]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Huvudpartner */}
          <div className="mb-16">
            <h3 className={`text-center font-heading text-3xl uppercase tracking-wide mb-10 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {t.footer?.mainPartners || 'HUVUDPARTNER'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {HUVUDPARTNER.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80 filter grayscale hover:grayscale-0"
                  title={sponsor.name}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Officiell Partner */}
          <div>
            <h3 className={`text-center font-heading text-3xl uppercase tracking-wide mb-10 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {t.footer?.officialPartners || 'OFFICIELL PARTNER'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {OFFICIELL_PARTNER.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-80 filter grayscale hover:grayscale-0"
                  title={sponsor.name}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-14 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className={`${theme.footerBg} ${theme.text} py-12 md:py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* Social Media */}
            <div>
              <h4 className="font-heading text-lg md:text-xl uppercase mb-4 tracking-wide">
                {t.footer?.socialMedia || 'SHL I SOCIALA MEDIER'}
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.link} flex items-center gap-2 text-sm transition-colors`}
                    >
                      {social.icon && <social.icon className="w-4 h-4" />}
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a href="https://x.com/SHLse" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50036] transition-colors" title="X (Twitter)">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/SHLse/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50036] transition-colors" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/shlofficial/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50036] transition-colors" title="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@shlofficial?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50036] transition-colors" title="TikTok">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@shl" target="_blank" rel="noopener noreferrer" className="hover:text-[#E50036] transition-colors" title="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* About SHL */}
            <div>
              <h4 className="font-heading text-lg md:text-xl uppercase mb-4 tracking-wide">
                {t.footer?.aboutSHLTitle || 'OM SHL'}
              </h4>
              <ul className="space-y-3">
                {aboutSHL.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme.link} text-sm transition-colors`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About CHL */}
            <div>
              <h4 className="font-heading text-lg md:text-xl uppercase mb-4 tracking-wide">
                {t.footer?.aboutCHL || 'OM CHL'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.championshockeyleague.com/" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    Champions Hockey League
                  </a>
                </li>
                <li>
                  <a href="https://www.championshockeyleague.com/en/about" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.aboutCHLInfo || 'Om CHL'}
                  </a>
                </li>
                <li>
                  <a href="https://www.championshockeyleague.com/en/teams" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.chlTeams || 'CHL-lag'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms & Policies */}
            <div>
              <h4 className="font-heading text-lg md:text-xl uppercase mb-4 tracking-wide">
                {t.footer?.termsTitle || 'VILLKOR OCH INTEGRITETSPOLICY'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.shl.se/villkor" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.terms || 'Användarvillkor'}
                  </a>
                </li>
                <li>
                  <a href="https://www.shl.se/integritetspolicy" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.privacy || 'Integritetspolicy'}
                  </a>
                </li>
                <li>
                  <a href="https://www.shl.se/cookies" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.cookies || 'Cookie-policy'}
                  </a>
                </li>
                <li>
                  <a href="https://www.shl.se/gdpr" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    GDPR
                  </a>
                </li>
              </ul>
            </div>

            {/* RSS & Distribution */}
            <div>
              <h4 className="font-heading text-lg md:text-xl uppercase mb-4 tracking-wide">
                {t.footer?.rssTitle || 'RSS OCH DISTRIBUTION'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.shl.se/rss" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    RSS Feed
                  </a>
                </li>
                <li>
                  <a href="https://www.shl.se/api" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    API {t.footer?.access || 'Tillgång'}
                  </a>
                </li>
                <li>
                  <a href="https://www.shl.se/press" target="_blank" rel="noopener noreferrer" className={`${theme.link} text-sm transition-colors`}>
                    {t.footer?.press || 'Presstjänst'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SHL - Swedish Hockey League AB. {t.footer?.allRights || 'Alla rättigheter förbehållna.'}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};