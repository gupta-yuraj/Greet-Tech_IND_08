import React from 'react';
import { motion } from 'framer-motion';
import { appreciationData } from '../../data/ledgerData';

export default function AppreciationReport() {
  return (
    <div className="border dark:border-[#007acc] border-slate-300 rounded overflow-hidden shadow-xl font-mono bg-white dark:bg-[#001c3d] transition-colors duration-300">
      <div className="dark:bg-[#007acc] bg-blue-700 text-white text-xs px-4 py-2 font-bold uppercase tracking-wider flex justify-between">
        <span>Trainer Competency Appreciation Analysis Report</span>
        <span>Rating: AAA+ Certified</span>
      </div>
      <div className="p-4 space-y-4">
        {appreciationData.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold dark:text-slate-300 text-slate-700 uppercase">
              <span>{item.subject}</span>
              <span className="text-emerald-600 dark:text-emerald-400">{item.level}% Absolute</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-[#002b5c] h-3 border dark:border-slate-700 border-slate-200 rounded overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-[#007acc] dark:to-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
        <div className="pt-2 border-t dark:border-slate-700 border-slate-200 flex justify-between items-center text-xs font-bold uppercase text-amber-600 dark:text-[#ffd700]">
          <span>Accumulated Memories Created</span>
          <span className="text-lg animate-pulse">∞ Infinite Assets</span>
        </div>
      </div>
    </div>
  );
}