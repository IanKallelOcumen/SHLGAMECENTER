# SHL Game Center

A modern, feature-rich web application for Swedish Hockey League (SHL) game information and statistics.

## Features

- **Live Match Updates** - Real-time game scores and match information
- **Match Timeline** - Detailed timeline of match events and key moments
- **Player & Team Stats** - Comprehensive statistics and performance metrics
- **Lineups View** - Player lineups with ice time visualization
- **Head-to-Head Comparison** - Compare player or team statistics
- **Broadcast Information** - Official broadcast details and schedules
- **News Carousel** - Latest SHL news and updates
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Multi-language Support** - English and Swedish language options
- **Dark Mode** - Built-in dark theme support

## Tech Stack

- **Frontend Framework** - React 18 with TypeScript
- **Build Tool** - Vite
- **Styling** - Tailwind CSS
- **Component Library** - Radix UI
- **Charting** - Recharts
- **Form Management** - React Hook Form
- **Notifications** - Sonner
- **Icons** - Lucide React

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or extract the project
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles
│   ├── assets/         # Images and other assets
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static files
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies
```

## Key Components

- **Header** - Navigation and language/theme controls
- **Hero** - Featured match section with key information
- **MatchTimeline** - Chronological event display
- **StatsPanel** - Performance metrics and statistics
- **LineupsView** - Team lineups with ice positioning
- **H2HStats** - Head-to-head player/team comparisons
- **NewsCarousel** - Scrollable news feed
- **Sidebar** - Additional navigation and filters

## Contributing

Contributions are welcome! Feel free to fork the project and submit pull requests.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or feature requests, please open an issue in the project repository.