import React from 'react';
import { motion } from 'framer-motion';
import { teamMessages } from '../../data/messages';

export default function TeamMessageWall() {
  return (
    <div className="border dark:border-[#007acc] border-slate-300 rounded overflow-hidden bg-white dark:bg-[#001c3d] shadow-xl font-mono text-xs">
      <div className="dark:bg-[#007acc] bg-blue-700 text-white text-xs px-4 py-2 font-bold uppercase tracking-wider flex justify-between">
        <span>Team Testimonial Message Wall Ledger</span>
        <span>Entries Registered: {teamMessages.length}</span>
      </div>
      <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto divide-y dark:divide-[#002b5c] divide-slate-100">
        {teamMessages.map((msg) => (
          <motion.div 
            key={msg.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pt-3 first:pt-0 flex flex-col sm:flex-row justify-between items-start gap-2"
          >
            <div className="space-y-1">
              <div className="font-bold dark:text-[#ffd700] text-blue-700 text-sm">{msg.name}</div>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-sans italic">"{msg.text}"</p>
            </div>
            <span className="text-[10px] bg-slate-100 dark:bg-[#002b5c] text-slate-400 dark:text-slate-300 px-2 py-0.5 rounded whitespace-nowrap self-end sm:self-start">
              Verified: {msg.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}