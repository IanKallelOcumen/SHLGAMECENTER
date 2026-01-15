// Import team logos
import farjestadLogo from 'figma:asset/71ce8ec20de21eec67bb31085808f63bd01f48a7.png';
import brynasLogo from 'figma:asset/a8b0b21833169f0c6826647f73042c985332aca7.png';
import difLogo from 'figma:asset/8277e89488b4c302ad6574b22058e65ba33b43e6.png';
import hv71Logo from 'figma:asset/d4bd986d22edf7ded0a35306fff2c87bd63eb47a.png';
import linkopingLogo from 'figma:asset/7fcc880cf7f4a4796fb8aaff13985e00ab2b40f1.png';
import frolundaLogo from 'figma:asset/69d207bf61a3f53b16de65856a551bca947956db.png';
import malmoLogo from 'figma:asset/31d155da89d064925dbe1409da2e868a1c71c19b.png';
import luleaLogo from 'figma:asset/4112fbafe82b81363b0c79639e5abbdb34e43da3.png';
import leksandLogo from 'figma:asset/0216807e02547563f3c8fad77d908d574545ce26.png';
import skellefteaLogo from 'figma:asset/327f6b47942a898e029a39422239c5a45f4ec36a.png';
import rogleLogo from 'figma:asset/9df998339e4f957829f70db7f235a348c8884957.png';
import orebroLogo from 'figma:asset/c39905106d9203df6ab7614012d75f7d8aa2919b.png';
import timraLogo from 'figma:asset/f4d60f18a2dd9e000cab53e70048acf1bd104fea.png';
import vaxjoLogo from 'figma:asset/efb004d50808654ab92e5349af32e277c40064ff.png';

// Import player images
import frolundaStarPlayer from 'figma:asset/1b5dc1ade23757f742efdf84cee5064ffed0780a.png';
import farjestadStarPlayer from 'figma:asset/b90f8792e7cadf3a7c25eef351635075e0993488.png';

// Helper function to create SVG logo data URLs
const createTeamLogo = (initials: string, color: string) => {
  // Adjust font size based on text length for better fit
  const fontSize = initials.length > 3 ? 24 : 28;
  
  const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="${color}" stroke="#fff" stroke-width="3"/>
    <text x="50" y="50" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="#fff" text-anchor="middle" dominant-baseline="central">${initials}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

export const TEAM_LOGOS = {
  home: frolundaLogo,
  away: farjestadLogo
};

export const SHL_TEAMS = [
  { name: "Brynäs IF", logo: brynasLogo, website: "https://www.brynas.se/" },
  { name: "Djurgårdens IF", logo: difLogo, website: "https://www.difhockey.se/" },
  { name: "Frölunda HC", logo: frolundaLogo, website: "https://www.frolundahockey.com/" },
  { name: "Färjestad BK", logo: farjestadLogo, website: "https://www.farjestad.se/" },
  { name: "HV71", logo: hv71Logo, website: "https://www.hv71.se/" },
  { name: "Leksands IF", logo: leksandLogo, website: "https://www.leksandsif.se/" },
  { name: "Linköping HC", logo: linkopingLogo, website: "https://www.lhc.eu/" },
  { name: "Luleå Hockey", logo: luleaLogo, website: "https://www.luleahockey.se/" },
  { name: "Malmö Redhawks", logo: malmoLogo, website: "https://www.malmoredhawks.com/" },
  { name: "Rögle BK", logo: rogleLogo, website: "https://www.roglebk.se/" },
  { name: "Skellefteå AIK", logo: skellefteaLogo, website: "https://www.skellefteaaik.se/" },
  { name: "Timrå IK", logo: timraLogo, website: "https://www.timraik.se/" },
  { name: "Växjö Lakers", logo: vaxjoLogo, website: "https://www.vaxjolakers.se/" },
  { name: "Örebro Hockey", logo: orebroLogo, website: "https://www.orebrohockey.se/" }
];

export const PLAYERS = {
  homeStar: frolundaStarPlayer,
  awayStar: farjestadStarPlayer,
  homeGoalie: "https://images.unsplash.com/photo-1628346933239-fbbb07104f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnb2FsaWUlMjBtYXNrfGVufDF8fHx8MTc2ODQ3NTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  awayGoalie: "https://images.unsplash.com/photo-1730391117623-4d1115361396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnb2FsdGVuZGVyJTIwc2F2ZXxlbnwxfHx8fDE3Njg0OTI5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

export const getGameData = (lang: 'EN' | 'SV') => ({
  meta: {
    league: "SHL",
    round: "Round 24",
    venue: "Scandinavium, Göteborg",
    time: "19:00",
    date: lang === 'EN' ? "Thursday 14 November" : "Torsdag 14 November",
    referee: "M. Nord",
    capacity: "12,044",
    status: "live" // 'upcoming', 'live', 'finished'
  },
  homeTeam: {
    name: "Frölunda HC",
    abbr: "FHC",
    rank: "3",
    points: "42",
    form: ["W", "W", "L", "W", "L"],
    logo: TEAM_LOGOS.home,
    color: "#D12128",
    star: { name: "Max Friberg", stats: "12G, 15A", image: PLAYERS.homeStar }
  },
  awayTeam: {
    name: "Färjestad BK",
    abbr: "FBK",
    rank: "1",
    points: "48",
    form: ["W", "L", "W", "W", "W"],
    logo: TEAM_LOGOS.away,
    color: "#00553F",
    star: { name: "David Tomasek", stats: "18G, 9A", image: PLAYERS.awayStar }
  },
  score: {
    home: 4,
    away: 3,
    periods: [
      { home: 1, away: 0 },
      { home: 2, away: 1 },
      { home: 1, away: 2 }
    ]
  },
  timeline: [
    { id: 1, time: "58'", type: "goal", team: "FHC", player: "M. Friberg", assist: "H. Tömmernes", score: "4-3" },
    { id: 2, time: "52'", type: "penalty", team: "FBK", player: "J. Nygård", desc: "Tripping (2 min)" },
    { id: 3, time: "48'", type: "goal", team: "FBK", player: "D. Tomasek", assist: "J. Nyström", score: "3-3" },
    { id: 4, time: "44'", type: "substitution", team: "FHC", desc: "Goalie Change" },
    { id: 5, time: "42'", type: "goal", team: "FHC", player: "J. Innala", assist: "M. Strömwall", score: "3-2" },
  ],
  articles: [
    { 
      id: 1, 
      title: "Frölunda HC tar emot Färjestad BK i stormatch", 
      tag: "MATCHTIPS", 
      img: "https://images.unsplash.com/photo-1611483446721-898ab75ac42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob2NrZXklMjBhcmVuYXxlbnwxfHx8fDE3Njg0NzIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.shl.se/artikel/frolunda-hc-farjestad-bk" 
    },
    { 
      id: 2, 
      title: "SHL:s Veckans Lag - Här är spelarna som presterat bäst", 
      tag: "VECKANS LAG", 
      img: "https://images.unsplash.com/photo-1612639401210-3db99c43b320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjB0ZWFtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY4NDcyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.shl.se/artikel/veckans-lag" 
    },
    { 
      id: 3, 
      title: "Färjestads powerplay - statistik och analys", 
      tag: "ANALYS", 
      img: "https://images.unsplash.com/photo-1763573676925-8f0ac40505a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBnYW1lJTIwYWN0aW9ufGVufDF8fHx8MTc2ODQ5MjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.shl.se/artikel/farjestad-powerplay-analys" 
    },
    { 
      id: 4, 
      title: "Max Friberg om matchen: 'Vi måste vara taggade'", 
      tag: "INTERVJU", 
      img: "https://images.unsplash.com/photo-1612374375120-3d125dc41887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg0NzI5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.frolundahc.com/artikel/max-friberg-intervju" 
    },
    { 
      id: 5, 
      title: "Grundseriens slutskede: Vem vinner SHL 2024/2025?", 
      tag: "EXPERT", 
      img: "https://images.unsplash.com/photo-1768245342982-bdd24990d54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBwdWNrJTIwc2hvdHxlbnwxfHx8fDE3Njg0OTI5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.shl.se/artikel/slutskede-analys" 
    },
    { 
      id: 6, 
      title: "Tabelltopp möter tabelljumbo - Full omgångsöversikt", 
      tag: "MATCHGUIDE", 
      img: "https://images.unsplash.com/photo-1576584726682-a79edc486f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2NrZXklMjBjcm93ZCUyMGZhbnN8ZW58MXx8fHwxNzY4NDkyOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", 
      link: "https://www.shl.se/artikel/omgang-oversikt" 
    }
  ],
  stats: [
    { label: "possession", home: 54, away: 46 },
    { label: "shots", home: 32, away: 28 },
    { label: "faceoff", home: 58.2, away: 41.8 },
    { label: "pim", home: 6, away: 8 },
    { label: "hits", home: 18, away: 12 },
  ],
  detailedStats: [
    { category: "Attacking", stats: [
      { label: "Goals", home: "85", away: "92" },
      { label: "Shots per Game", home: "32.5", away: "29.8" },
      { label: "Shooting %", home: "10.2%", away: "11.5%" },
      { label: "Power Play %", home: "24.5%", away: "28.1%" }
    ]},
    { category: "Defending", stats: [
      { label: "Goals Against", home: "55", away: "61" },
      { label: "Penalty Kill %", home: "88.2%", away: "79.5%" },
      { label: "Saves", home: "624", away: "598" },
      { label: "Save %", home: "91.8%", away: "90.5%" }
    ]}
  ],
  lineups: {
    home: [
      { pos: "G", name: "Johansson", num: "1", x: 12, y: 50 },
      { pos: "LD", name: "Tömmernes", num: "7", x: 28, y: 30 },
      { pos: "RD", name: "Folin", num: "2", x: 28, y: 70 },
      { pos: "LW", name: "Friberg", num: "12", x: 45, y: 25 },
      { pos: "C", name: "Borg", num: "11", x: 45, y: 50 },
      { pos: "RW", name: "Strömwall", num: "88", x: 45, y: 75 },
    ],
    away: [
      { pos: "G", name: "Lindbom", num: "35", x: 88, y: 50 },
      { pos: "RD", name: "Andersson", num: "44", x: 72, y: 70 },
      { pos: "LD", name: "Nygren", num: "32", x: 72, y: 30 },
      { pos: "RW", name: "Lindqvist", num: "34", x: 55, y: 75 },
      { pos: "C", name: "Tomasek", num: "96", x: 55, y: 50 },
      { pos: "LW", name: "Nygård", num: "11", x: 55, y: 25 },
    ]
  },
  h2hHistory: [
    { date: "24 Oct 24", home: "FBK", away: "FHC", score: "4 - 1", result: "L" },
    { date: "12 Mar 24", home: "FHC", away: "FBK", score: "3 - 2", result: "W" },
    { date: "04 Jan 24", home: "FBK", away: "FHC", score: "2 - 5", result: "W" },
    { date: "18 Nov 23", home: "FHC", away: "FBK", score: "1 - 2", result: "L" },
    { date: "23 Sep 23", home: "FBK", away: "FHC", score: "4 - 3", result: "L" }
  ]
});