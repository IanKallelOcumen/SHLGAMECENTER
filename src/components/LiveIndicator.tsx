import React from 'react';
import { Radio } from 'lucide-react';

interface LiveIndicatorProps {
  isLive: boolean;
  className?: string;
}

export const LiveIndicator: React.FC<LiveIndicatorProps> = ({ isLive, className = '' }) => {
  if (!isLive) return null;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#E50036] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E50036]"></span>
      </div>
      <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#E50036] animate-pulse">
        Live
      </span>
      <Radio className="w-3 h-3 text-[#E50036] animate-pulse" />
    </div>
  );
};
