import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TallyLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading Company: Memories Pvt. Ltd...');

  const logs = [
    "Loading Company: Memories Pvt. Ltd...",
    "Opening Financial Year: 35 Days...",
    "Verifying Friendship Ledger...",
    "Calculating Fun Balance...",
    "Preparing Farewell Report...",
    "Finalizing Tally Gates..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); 
          return 100;
        }

        const diff = Math.random() * 3 + 1; 
        const next = Math.min(oldProgress + diff, 100);

        const textIdx = Math.min(
          Math.floor((next / 100) * logs.length),
          logs.length - 1
        );

        setStatusText(logs[textIdx]);
        return next;
      });
    }, 250); 

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#001c3d] text-white font-mono flex flex-col justify-between p-4 sm:p-6 z-50 select-none overflow-y-auto">
      
      {/* RESPONSIVE TOP BAR: Dynamically adapts layout flow and font sizes */}
      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center border-b border-[#007acc] pb-2 font-semibold text-xl sm:text-2xl md:text-4xl text-[#cdda1a] gap-1 xs:gap-4">
        <span className="whitespace-nowrap">TallyPrime v7.0 - Gold</span>
        <span className="text-sm sm:text-lg md:text-3xl text-slate-300 xs:text-[#cdda1a] tracking-wide">Gateway of Memories</span>
      </div>

      {/* RESPONSIVE MAIN CARD CONTAINER */}
      <div className="my-auto py-6 w-full">
        <div className="max-w-xl mx-auto w-full border border-[#007acc] bg-[#002b5c] p-4 sm:p-6 shadow-2xl relative rounded-lg">
          
          <h2 className="text-[#ffd700] text-base sm:text-lg font-bold mb-4 tracking-wide border-b border-[#007acc] pb-2">
            Startup Process Manager
          </h2>

          <div className="space-y-3 text-xs sm:text-sm min-h-[80px]">
            <p className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              ⚡ Status: Operational
            </p>
            <p className="text-[#e2e8f0] line-clamp-2 leading-relaxed">
              ⚙️ {statusText}
            </p>
          </div>

          {/* PROGRESS BAR SECTION */}
          <div className="mt-6 sm:mt-8">
            <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mb-1.5">
              <span>Progress Matrix</span>
              <span className="font-bold text-slate-200">{Math.round(progress)}%</span>
            </div>

            <div className="w-full bg-[#001c3d] h-3 sm:h-4 rounded overflow-hidden border border-[#007acc]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#007acc] to-emerald-500"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-[10px] sm:text-xs text-slate-500 border-t border-[#002b5c] pt-2 mt-2 tracking-tight sm:tracking-normal">
        © 2026 Memories Pvt. Ltd. All Assets Reserved to Abdul Sir.
      </div>

    </div>
  );
}