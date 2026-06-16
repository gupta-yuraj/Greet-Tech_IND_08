import React from 'react';
import { statsData } from '../../data/ledgerData';

export default function StatisticsDashboard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 font-mono">
      {statsData.map((stat, idx) => (
        <div 
          key={idx} 
          className="border dark:border-[#007acc]/70 border-slate-300 bg-white dark:bg-[#001c3d] p-3 rounded shadow-sm text-center flex flex-col justify-between"
        >
          <div className="text-[10px] text-slate-400 uppercase tracking-tight line-clamp-2 min-h-[30px] mb-1">
            {stat.label}
          </div>
          <div className="text-sm sm:text-base font-black dark:text-[#ffd700] text-blue-700 tracking-wide break-words">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}