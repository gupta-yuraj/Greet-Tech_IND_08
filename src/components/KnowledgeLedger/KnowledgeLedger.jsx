import React from 'react';
import { motion } from 'framer-motion';
// import { timelineData } from '../../../data/ledgerData';
import { timelineData } from '../../data/ledgerData';

export default function KnowledgeLedger() {
  return (
    <div className="border dark:border-[#007acc] border-slate-300 rounded overflow-hidden shadow-xl font-mono bg-white dark:bg-[#001c3d] transition-colors duration-300">
      <div className="dark:bg-[#007acc] bg-blue-700 text-white text-xs px-4 py-2 font-bold uppercase tracking-wider flex justify-between">
        <span>Display Menu &gt; Day-wise Account Ledger Timeline</span>
        <span>Period: 35 Days Audit</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-slate-100 dark:bg-[#002b5c] border-b dark:border-[#007acc] border-slate-300 text-xs text-slate-600 dark:text-slate-300 uppercase font-bold">
              <th className="p-3 border-r dark:border-[#002b5c] border-slate-200 w-24">Date/Day</th>
              <th className="p-3 border-r dark:border-[#002b5c] border-slate-200">Particulars (Learning Concept)</th>
              <th className="p-3 text-right">Narration (Core Memory Asset)</th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-[#002b5c] divide-slate-100">
            {timelineData.map((row, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="hover:bg-slate-50 dark:hover:bg-[#002b5c]/50 transition-colors"
              >
                <td className="p-3 font-bold text-blue-600 dark:text-[#ffd700] border-r dark:border-[#002b5c] border-slate-200 whitespace-nowrap">{row.day}</td>
                <td className="p-3 dark:text-slate-200 text-slate-800 border-r dark:border-[#002b5c] border-slate-200">{row.learning}</td>
                <td className="p-3 text-right text-xs dark:text-emerald-400 text-emerald-700 font-sans italic font-medium">{row.memory}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}