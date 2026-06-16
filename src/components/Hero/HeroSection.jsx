import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 px-4 border-b dark:border-[#007acc] border-slate-300 rounded shadow-md dark:bg-[#002b5c] bg-white transition-colors duration-300">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-pattern" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block dark:bg-[#001c3d] bg-blue-50 text-blue-600 dark:text-[#ffd700] text-xs font-mono font-bold px-3 py-1 border dark:border-[#007acc] border-blue-200 rounded-full mb-4 uppercase tracking-widest">
            Voucher Type: Absolute Respect
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight dark:text-white text-slate-900 mb-6 font-mono">
            THANK YOU <span className="text-red-500 dark:text-[#ffd700] underline decoration-wavy">ABDUL SIR</span> ❤️
          </h1>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto my-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: "Duration", val: "35 Days" },
            { label: "Doubts Cleared", val: "Hundreds" },
            { label: "Vouchers Filed", val: "Thousands" },
            { label: "Memories Shared", val: "Unlimited" }
          ].map((item, idx) => (
            <div key={idx} className="p-3 border dark:border-[#007acc]/40 border-slate-200 rounded dark:bg-[#001c3d]/60 bg-slate-50 shadow-inner">
              <div className="text-xs text-slate-500 uppercase">{item.label}</div>
              <div className="text-lg font-bold dark:text-[#ffd700] text-blue-700">{item.val}</div>
            </div>
          ))}
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl dark:text-slate-300 text-slate-700 font-sans max-w-xl mx-auto italic leading-relaxed space-y-2 border-l-4 dark:border-[#ffd700] border-blue-600 pl-4 text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
      Socha tha training khatam hogi toh <span className='font-bold text-amber-200'>Account Close</span> karke aazaadi milegi, par ab samajh aa raha hai ki aazaadi nahi, seedhe Zimmedari ki <span className='font-bold text-amber-200'  >Entry Pass</span> ho gayi hai! Hum toh bas din gin rahe the ki kab yeh <span className='font-bold text-amber-200'>Period Audit </span> khatam ho... aur aaj jab <span className='font-bold text-amber-200'>Final Closing Balance</span> aaya, toh dil keh raha hai ki kaash thodi si <span className='font-bold text-amber-200'> Training Depreciated</span> na hoti. Aapke sath yeh safar sirf ek training nahi, humari life ka sabse bada <span className='font-bold text-amber-200'>Core Memory Asset </span> ban gaya ha
        </motion.p>
      </div>
    </section>
  );
}