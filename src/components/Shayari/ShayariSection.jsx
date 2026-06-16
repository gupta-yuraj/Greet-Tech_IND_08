import React from 'react';
import { motion } from 'framer-motion';
import { shayaris, funnyShayaris } from '../../data/shayariData';

export default function ShayariSection() {
  return (
    <div className="space-y-8 font-mono">
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-l-2 border-blue-500 pl-2">
          Sub Ledger Class A: Emotional Ledger
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {shayaris.map((sh, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-5 border dark:border-[#007acc] border-slate-200 rounded shadow-sm bg-white dark:bg-[#002b5c] relative"
            >
              <span className="absolute top-2 right-2 bg-slate-100 dark:bg-[#001c3d] text-slate-500 dark:text-[#ffd700] text-[10px] px-1.5 py-0.5 rounded border border-transparent dark:border-[#007acc]/40">
                {sh.tag}
              </span>
              <p className="text-sm dark:text-slate-100 text-slate-800 leading-relaxed font-sans whitespace-pre-line mt-2">
                {sh.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 border-l-2 border-amber-500 pl-2">
          Sub Ledger Class B: Backbencher Records (Funny)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {funnyShayaris.map((sh, idx) => (
            <div key={idx} className="p-4 border border-dashed dark:border-slate-700 border-slate-300 bg-slate-50 dark:bg-[#001c3d] rounded">
              <p className="text-sm text-slate-700 dark:text-slate-300 font-sans italic whitespace-pre-line">
                "{sh.text}"
              </p>
              <div className="text-right text-xs font-bold mt-2 text-amber-600 dark:text-[#ffd700]">
                — Signed: {sh.auth}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}