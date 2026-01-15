import React, { useRef, useEffect, useState } from 'react';
import { Newspaper, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NewsCarouselProps {
  articles: any[];
  isDark: boolean;
  t: any;
}

export const NewsCarousel: React.FC<NewsCarouselProps> = ({ articles, isDark, t }) => {
  const newsScrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const theme = {
    text: isDark ? "text-white" : "text-[#242424]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  // Update scroll button states
  const updateScrollButtons = () => {
    if (newsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = newsScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = newsScrollRef.current;
    if (!scrollContainer) return;

    // Update button states on scroll
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();

    let scrollInterval: NodeJS.Timeout;
    if (!isHovering) {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
          
          // Auto scroll
          scrollContainer.scrollLeft += 1;
          
          // Stop at the end
          if (scrollLeft >= scrollWidth - clientWidth) {
            clearInterval(scrollInterval);
          }
        }
      }, 30);
    }
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
    };
  }, [isHovering]);

  const scrollNews = (direction: 'left' | 'right') => {
    if (newsScrollRef.current) {
      const scrollAmount = 300;
      newsScrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-center mb-3 md:mb-4">
        <h3 className={`font-bold text-lg md:text-xl uppercase tracking-tight flex items-center gap-2 font-heading ${theme.text}`}>
          <Newspaper className="w-4 h-4 md:w-5 md:h-5 text-[#E50036]" /> {t.latest}
        </h3>
        <div className="hidden sm:flex gap-2">
          <button 
            onClick={() => scrollNews('left')} 
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'} ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => scrollNews('right')} 
            disabled={!canScrollRight}
            className={`p-2 rounded-full border transition-all min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-95 ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-100'} ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : ''}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div ref={newsScrollRef} className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-2 -mx-3 px-3 md:mx-0 md:px-0">
        {articles.map((article, index) => (
          <a 
            key={`${article.id}-${index}`} 
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 w-64 sm:w-72 rounded pl-shadow overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-300 ${theme.card}`}
          >
            <div className="h-36 sm:h-40 overflow-hidden relative">
              <img 
                src={article.img} 
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-[#E50036] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm font-heading">
                {article.tag}
              </div>
            </div>
            <div className="p-3 md:p-4 flex flex-col h-28 sm:h-32 justify-between">
              <h4 className={`font-bold leading-tight line-clamp-2 group-hover:text-[#E50036] transition-colors font-heading uppercase text-base md:text-lg ${theme.text}`}>
                {article.title}
              </h4>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1 group-hover:text-[#E50036] font-heading">
                {t.readMore} <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};