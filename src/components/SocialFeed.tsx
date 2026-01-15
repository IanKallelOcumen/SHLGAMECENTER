import React from 'react';
import { MessageCircle, Heart, Share2, Twitter } from 'lucide-react';

interface SocialFeedProps {
  isDark: boolean;
}

export const SocialFeed: React.FC<SocialFeedProps> = ({ isDark }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  const tweets = [
    {
      id: 1,
      user: "@SHLOfficial",
      handle: "SHL",
      avatar: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=100&h=100&fit=crop&crop=faces",
      content: "What a game! Friberg with the game winner in the final minutes! 🔥🏒",
      likes: 847,
      replies: 124,
      time: "2m ago"
    },
    {
      id: 2,
      user: "@FrolundaHC",
      handle: "Frölunda HC",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
      content: "GOAL!!! MAX FRIBERG!!! What a shot! 4-3 FHC! ⚡️ #FrolundaHC",
      likes: 1243,
      replies: 89,
      time: "5m ago"
    },
    {
      id: 3,
      user: "@IceHockeyStats",
      handle: "Hockey Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      content: "Incredible possession stats from FHC tonight - 54% to 46%. Dominating performance.",
      likes: 432,
      replies: 56,
      time: "12m ago"
    }
  ];

  return (
    <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
      <div className={`p-3 md:p-4 border-b flex items-center gap-2 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
        <Twitter className="w-4 h-4 md:w-5 md:h-5 text-[#1DA1F2]" />
        <h3 className={`font-bold text-base md:text-lg font-heading uppercase tracking-wide ${theme.text}`}>
          Live Feed
        </h3>
      </div>
      <div className="divide-y divide-slate-700">
        {tweets.map((tweet, index) => (
          <div
            key={tweet.id}
            className={`p-3 md:p-4 transition-colors ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.15}s forwards`,
              opacity: 0
            }}
          >
            <div className="flex gap-2 md:gap-3">
              <img
                src={tweet.avatar}
                alt={tweet.user}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 md:gap-2 mb-1 flex-wrap">
                  <span className={`font-bold text-xs md:text-sm ${theme.text} truncate`}>{tweet.user}</span>
                  <span className="text-[10px] md:text-xs text-slate-500 truncate">@{tweet.handle}</span>
                  <span className="text-[10px] md:text-xs text-slate-500">· {tweet.time}</span>
                </div>
                <p className={`text-xs md:text-sm mb-2 md:mb-3 ${theme.text}`}>{tweet.content}</p>
                <div className="flex items-center gap-4 md:gap-6 text-slate-500">
                  <button className="flex items-center gap-1 hover:text-[#1DA1F2] transition-colors group active:scale-95 min-h-[44px] md:min-h-0 -ml-2 pl-2">
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{tweet.replies}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#E50036] transition-colors group active:scale-95 min-h-[44px] md:min-h-0 -ml-2 pl-2">
                    <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">{tweet.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#00ff85] transition-colors group active:scale-95 min-h-[44px] md:min-h-0 -ml-2 pl-2">
                    <Share2 className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`p-3 md:p-4 border-t text-center ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
        <button className="text-[#1DA1F2] font-bold text-xs md:text-sm uppercase tracking-widest hover:underline font-heading active:scale-95 min-h-[44px] flex items-center justify-center w-full">
          View More on Twitter
        </button>
      </div>
    </div>
  );
};