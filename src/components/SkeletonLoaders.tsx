import React from 'react';
import { Skeleton } from './ui/skeleton';

export const HeroSkeleton: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-[#151A26]' : 'bg-white'}`}>
    <div className="p-6 md:p-8">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-16 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-6 w-24" />
        </div>
      </div>
    </div>
  </div>
);

export const NewsCarouselSkeleton: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div>
    <Skeleton className="h-8 w-48 mb-4" />
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`flex-shrink-0 w-72 rounded overflow-hidden ${isDark ? 'bg-[#151A26]' : 'bg-white'}`}>
          <Skeleton className="h-40 w-full" />
          <div className="p-4">
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StatsPanelSkeleton: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`rounded-xl p-6 ${isDark ? 'bg-[#151A26]' : 'bg-white'}`}>
    <Skeleton className="h-8 w-32 mb-6" />
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="mb-4">
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    ))}
  </div>
);
