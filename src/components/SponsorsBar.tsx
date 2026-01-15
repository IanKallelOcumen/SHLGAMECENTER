import { ImageWithFallback } from './figma/ImageWithFallback';

// Import sponsor logos (the real ones you provided)
import amazonLogo from 'figma:asset/8052f2d4e05f96c926fed0dd9fe6b2976327e7a4.png';
import teliaLogo from 'figma:asset/f2d586207b0c9222bd5af0856d80b5f0a5286c28.png';
import bwhLogo from 'figma:asset/9b4fc622234b265eb80f136f3719c1913ffad2c0.png';
import sebLogo from 'figma:asset/c3daad1785d289ba91aab854444945543110ba82.png';
import trygghansaLogo from 'figma:asset/ba41ea0ffb0ff67e79a46bdeeaa9f85bb2c2949d.png';
import redbullLogo from 'figma:asset/a568e04cdb8bb818b532cadd6b5677ef5fda9d7b.png';

interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

// HUVUDPARTNER (Main Partners) - 5 sponsors
const HUVUDPARTNER: Sponsor[] = [
  {
    name: "Svenska Spel",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Crect fill='%23E30613' width='160' height='60' rx='4'/%3E%3Ctext x='80' y='32' font-family='Arial, sans-serif' font-size='14' font-weight='bold' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESVENSKA SPEL%3C/text%3E%3C/svg%3E",
    url: "https://www.svenskaspel.se/"
  },
  {
    name: "Norrlands Guld",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Cdefs%3E%3ClinearGradient id='gold' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFD700'/%3E%3Cstop offset='100%25' style='stop-color:%23FFA500'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23003D7A' width='160' height='60' rx='4'/%3E%3Ctext x='80' y='22' font-family='Georgia, serif' font-size='11' font-weight='bold' fill='url(%23gold)' text-anchor='middle' dominant-baseline='middle'%3ENORRLANDS%3C/text%3E%3Ctext x='80' y='38' font-family='Georgia, serif' font-size='14' font-weight='bold' fill='url(%23gold)' text-anchor='middle' dominant-baseline='middle'%3EGULD%3C/text%3E%3C/svg%3E",
    url: "https://www.norrlandsguld.se/"
  },
  {
    name: "Sportbladet",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Crect fill='%23FFD700' width='160' height='60' rx='4'/%3E%3Ctext x='80' y='32' font-family='Arial Black, sans-serif' font-size='13' font-weight='900' fill='%23000' text-anchor='middle' dominant-baseline='middle'%3ESPORTBLADET%3C/text%3E%3C/svg%3E",
    url: "https://www.aftonbladet.se/sportbladet"
  },
  {
    name: "XL-BYGG",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Crect fill='%23D4AF37' width='160' height='60' rx='4'/%3E%3Ctext x='80' y='32' font-family='Arial Black, sans-serif' font-size='24' font-weight='900' fill='%23000' text-anchor='middle' dominant-baseline='middle'%3EXL!%3C/text%3E%3C/svg%3E",
    url: "https://www.xlbygg.se/"
  },
  {
    name: "Oakley",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Crect fill='%23000' width='160' height='60' rx='4'/%3E%3Ctext x='80' y='32' font-family='Arial Black, sans-serif' font-size='16' font-weight='900' fill='white' text-anchor='middle' dominant-baseline='middle'%3EOAKLEY%3C/text%3E%3C/svg%3E",
    url: "https://www.oakley.com/en-se"
  }
];

// OFFICIELL PARTNER (Official Partners) - 6 sponsors (ALL REAL LOGOS)
const OFFICIELL_PARTNER: Sponsor[] = [
  {
    name: "Amazon.se",
    logo: amazonLogo,
    url: "https://www.amazon.se/"
  },
  {
    name: "Telia",
    logo: teliaLogo,
    url: "https://www.telia.se/tv/sport/shl"
  },
  {
    name: "BWH Hotels",
    logo: bwhLogo,
    url: "https://www.bwhhotels.se/"
  },
  {
    name: "SEB",
    logo: sebLogo,
    url: "https://seb.se/"
  },
  {
    name: "Trygg-Hansa",
    logo: trygghansaLogo,
    url: "https://www.trygghansa.se/"
  },
  {
    name: "Red Bull",
    logo: redbullLogo,
    url: "https://www.redbull.com/se-sv/"
  }
];

interface SponsorsBarProps {
  language: 'EN' | 'SV';
}

export function SponsorsBar({ language }: SponsorsBarProps) {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HUVUDPARTNER Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
            {language === 'EN' ? 'MAIN PARTNERS' : 'HUVUDPARTNER'}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {HUVUDPARTNER.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                title={sponsor.name}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain"
                  style={{ maxWidth: '160px' }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* OFFICIELL PARTNER Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">
            {language === 'EN' ? 'OFFICIAL PARTNERS' : 'OFFICIELL PARTNER'}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {OFFICIELL_PARTNER.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                title={sponsor.name}
              >
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="h-12 w-auto object-contain"
                  style={{ maxWidth: '140px' }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            {language === 'EN' 
              ? 'Proud partners of the Swedish Hockey League' 
              : 'Stolta partners till Svenska Hockeyligan'}
          </p>
        </div>
      </div>
    </section>
  );
}
