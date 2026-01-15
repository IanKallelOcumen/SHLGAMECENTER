import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StatsPanelProps {
  detailedStats: any[];
  isDark: boolean;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ detailedStats, isDark }) => {
  const theme = {
    text: isDark ? "text-white" : "text-[#00102A]",
    card: isDark ? "bg-[#151A26] border-slate-800" : "bg-white border-transparent",
  };

  // Prepare data for chart
  const chartData = detailedStats.flatMap(section => 
    section.stats.map((stat: any) => ({
      name: stat.label,
      FHC: parseFloat(stat.home) || 0,
      FBK: parseFloat(stat.away) || 0
    }))
  );

  return (
    <div className="space-y-4 md:space-y-8 animate-fade-in">
      {/* Detailed Stats Cards */}
      <div className={`rounded pl-shadow overflow-hidden ${theme.card}`}>
        <div className="p-4 md:p-5 bg-[#00102A] text-white flex justify-between items-center">
          <h3 className="font-bold uppercase tracking-widest font-heading text-base md:text-lg">Team Statistics</h3>
          <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-[#E50036]"/>
        </div>
        <div className="p-4 md:p-8">
          {detailedStats.map((section, idx) => (
            <div key={idx} className="mb-6 md:mb-10 last:mb-0">
              <h4 className={`font-bold border-b pb-2 md:pb-3 mb-4 md:mb-6 uppercase tracking-wider text-sm md:text-base font-heading ${isDark ? 'text-white border-slate-700' : 'text-[#00102A] border-slate-200'}`}>
                {section.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.stats.map((stat: any, sIdx: number) => {
                  const hVal = parseFloat(stat.home);
                  const aVal = parseFloat(stat.away);
                  const total = hVal + aVal;
                  const hPct = (hVal / total) * 100;
                  const aPct = (aVal / total) * 100;
                  
                  return (
                    <div key={sIdx} className={`p-4 md:p-5 rounded border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                      <div className="text-center text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 md:mb-3 font-heading">
                        {stat.label}
                      </div>
                      <div className={`flex justify-between items-center font-black text-xl md:text-2xl stat-value ${theme.text}`}>
                        <span>{stat.home}</span>
                        <span>{stat.away}</span>
                      </div>
                      <div className={`flex h-2 md:h-3 mt-2 md:mt-3 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                        <div 
                          style={{ width: `${hPct}%` }} 
                          className="bg-[#D12128] transition-all duration-1000"
                        ></div>
                        <div 
                          style={{ width: `${aPct}%` }} 
                          className="bg-[#00553F] transition-all duration-1000"
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Visualization */}
      <div className={`rounded pl-shadow p-4 md:p-8 ${theme.card}`}>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#E50036]" />
          <h3 className={`font-bold uppercase tracking-widest font-heading text-base md:text-lg ${theme.text}`}>
            Statistics Comparison
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={300} className="md:hidden">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 11 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? '#1e293b' : '#ffffff',
                border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                borderRadius: '8px'
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="FHC" fill="#D12128" radius={[8, 8, 0, 0]} />
            <Bar dataKey="FBK" fill="#00553F" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={350} className="hidden md:block">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#334155' : '#e2e8f0'} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 13 }}
              angle={-45}
              textAnchor="end"
              height={90}
            />
            <YAxis tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 13 }} />
            <Tooltip 
              contentStyle={{
                backgroundColor: isDark ? '#1e293b' : '#ffffff',
                border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="FHC" fill="#D12128" radius={[8, 8, 0, 0]} />
            <Bar dataKey="FBK" fill="#00553F" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Momentum Chart */}
      <div className={`rounded pl-shadow p-4 md:p-8 ${theme.card}`}>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#E50036]" />
          <h3 className={`font-bold uppercase tracking-widest font-heading text-base md:text-lg ${theme.text}`}>
            Match Momentum
          </h3>
        </div>
        <div className="h-32 md:h-48 flex items-end gap-1">
          {Array.from({length: 40}).map((_, i) => {
            const height = Math.random() * 80 + 10;
            const isHome = Math.random() > 0.5;
            return (
              <div 
                key={i} 
                className={`flex-1 rounded-t transition-all hover:opacity-80 ${isHome ? 'bg-[#D12128]' : 'bg-[#00553F]'}`}
                style={{ 
                  height: `${height}%`,
                  animation: `fadeIn 0.5s ease-out ${i * 0.05}s forwards`,
                  opacity: 0,
                }}
              ></div>
            );
          })}
        </div>
        <div className="flex justify-between text-xs md:text-sm text-slate-500 font-bold mt-2 md:mt-3 uppercase tracking-wider font-heading">
          <span>Period 1</span>
          <span>Period 2</span>
          <span>Period 3</span>
        </div>
      </div>
    </div>
  );
};