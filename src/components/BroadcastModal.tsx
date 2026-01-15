import React from 'react';
import { MonitorPlay, X, ExternalLink } from 'lucide-react';

interface BroadcastModalProps {
  show: boolean;
  onClose: () => void;
  isDark: boolean;
  t: any;
}

export const BroadcastModal: React.FC<BroadcastModalProps> = ({ show, onClose, isDark, t }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className={`w-full max-w-lg rounded shadow-2xl overflow-hidden relative ${isDark ? 'bg-[#151A26] text-white' : 'bg-white text-[#00102A]'}`}>
        <div className="bg-[#00102A] p-6 flex justify-between items-center">
          <h3 className="text-white font-bold text-xl flex items-center gap-2 font-heading uppercase">
            <MonitorPlay className="w-6 h-6 text-[#E50036]"/> {t.broadcasts}
          </h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-[#E50036] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6"/>
          </button>
        </div>
        <div className="p-6 space-y-4">
          <a
            href="https://www.tv4play.se/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 border rounded cursor-pointer group transition-colors ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-[#00102A] rounded flex items-center justify-center font-black font-heading">
                TV4
              </div>
              <div>
                <div className="font-bold font-heading uppercase">TV4 Play</div>
                <div className="text-xs opacity-60 font-medium">
                  {t.sweden} • {t.streaming}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 opacity-40 group-hover:text-[#E50036] group-hover:opacity-100 transition-all" />
          </a>
          <a
            href="https://www.hockeytv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between p-4 border rounded cursor-pointer group transition-colors ${isDark ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 text-[#00102A] rounded flex items-center justify-center font-black font-heading">
                INT
              </div>
              <div>
                <div className="font-bold font-heading uppercase">Home of Hockey .tv</div>
                <div className="text-xs opacity-60 font-medium">
                  {t.international} • {t.streaming}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 opacity-40 group-hover:text-[#E50036] group-hover:opacity-100 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};
