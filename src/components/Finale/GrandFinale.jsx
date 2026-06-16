import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function GrandFinale() {
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({ startVelocity: 30, spread: 360, ticks: 60, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const points = [
    "Teaching us the exact industry process flow architectures.",
    "Guiding our careers with extreme professional dedication.",
    "Answering endless redundant loops of technical questions.",
    "Being unbelievably patient even when matrices broke down.",
    "The golden wisdom lessons, laughter, tracks, and classroom songs."
  ];

  return (
    <div className="text-center font-mono py-16 px-4 dark:bg-gradient-to-b dark:from-[#001c3d] dark:to-slate-950 rounded border-2 border-dashed dark:border-emerald-500/40 border-slate-300 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          THANK YOU ABDUL SIR ❤️
        </h2>
        
        <p className="text-sm dark:text-slate-300 text-slate-600 font-sans max-w-lg mx-auto">
          For everything you have built in us during these 35 unforgettable days.
        </p>

        <div className="text-left dark:bg-[#002b5c]/60 bg-slate-50 p-6 border dark:border-[#007acc]/40 border-slate-200 rounded max-w-xl mx-auto space-y-3 font-sans text-sm shadow-inner">
          {points.map((pt, i) => (
            <div key={i} className="flex gap-2 text-slate-700 dark:text-slate-200">
              <span className="text-emerald-500 font-mono">✔</span>
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t dark:border-slate-800 border-slate-200 space-y-2">
          <div className="text-xs uppercase tracking-widest bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 py-2 rounded font-bold border border-red-500/30 max-w-md mx-auto">
            🚫 System Message: Training Closed Successfully.
          </div>
          <p className="text-sm font-bold text-blue-600 dark:text-[#ffd700] animate-pulse pt-2">
            📊 Memories Ledger Will Remain Open Forever.
          </p>
          <div className="text-xs text-slate-400 font-sans font-semibold pt-4">
            — Deeply Valued & Signed By Your Trainees ❤️
            <br />
            <br/>
             <p className="font-mono text-wrap tracking-widest text-gray-500 uppercase">
    Created with <span className="text-red-400 animate-pulse">❤️</span> by your beloved trainee <span className="text-emerald-400 font-semibold tracking-wider">Yuraj</span>
  </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}