import React from 'react';
import { funnyEntries } from '../../data/ledgerData';

export default function FunnyMomentsLedger() {
  return (
    <div className="border dark:border-amber-500/60 border-slate-300 rounded overflow-hidden shadow-xl font-mono bg-white dark:bg-[#001c3d] transition-colors duration-300">
      <div className="dark:bg-amber-600 bg-amber-700 text-white text-xs px-4 py-2 font-bold uppercase tracking-wider flex justify-between">
        <span>Suspense Account of Memories 😂 (Multi-Voucher View)</span>
        <span>Unadjusted Fun Balances</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x dark:divide-amber-500/30 divide-slate-200 bg-slate-50/50 dark:bg-transparent">
        
        <div className="p-4">
          <h4 className="text-xs font-bold uppercase text-red-500 dark:text-red-400 tracking-wider mb-3 border-b dark:border-slate-700 pb-1">
            ❌ Debit Side (Trainees Exhaustive Queries)
          </h4>
          <ul className="space-y-2.5 text-sm">
            {funnyEntries.map((item, idx) => (
              <li key={idx} className="p-2 rounded bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 text-slate-800 dark:text-slate-200">
                <span className="text-xs font-bold text-red-600 block mb-0.5">Entry #{idx+1}:</span>
                {item.debit}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h4 className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider mb-3 border-b dark:border-slate-700 pb-1">
            ✅ Credit Side (Abdul Sir's Unmatched Support)
          </h4>
          <ul className="space-y-2.5 text-sm">
            {funnyEntries.map((item, idx) => (
              <li key={idx} className="p-2 rounded bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200">
                <span className="text-xs font-bold text-emerald-600 block mb-0.5">Offset Allocation:</span>
                {item.credit}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}