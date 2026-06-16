// // src/components/PhotoVoucher/PhotoCard.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// // We accept item, photo, data, or voucher to catch any mapping variations
// export default function PhotoCard({ item, photo, data, voucher, onSelect }) {
  
//   // Consolidate whatever prop was passed into a single reliable object
//   const activeData = item || photo || data || voucher;

//   // Guard clause: If nothing was passed, don't crash the UI loop
//   if (!activeData) return null;

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, y: -4 }}
//       className="border dark:border-[#007acc]/50 border-slate-200 rounded overflow-hidden shadow bg-white dark:bg-[#001c3d] group cursor-pointer font-mono text-xs text-left"
//       onClick={() => onSelect && onSelect(activeData)}
//     >
//       <div className="relative overflow-hidden aspect-video bg-slate-900">
//         <img 
//           src={activeData.url} 
//           alt={activeData.title || "Farewell Memory"} 
//           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
//           onError={(e) => {
//             // If the path string itself is broken, this error fallback runs instantly on your screen
//             e.target.style.display = 'none';
//             e.target.parentNode.innerHTML = `
//               <div class="flex flex-col items-center justify-center h-full text-red-400 p-4 text-center bg-slate-950 font-mono text-[10px]">
//                 <span>⚠️ Broken Path</span>
//                 <span class="text-slate-500 mt-1 select-all">${activeData.url}</span>
//               </div>
//             `;
//           }}
//         />
//         <div className="absolute top-2 right-2 bg-black/70 text-[#ffd700] px-2 py-0.5 rounded font-mono text-[10px]">
//           {activeData.id || "MEM"}
//         </div>
//       </div>

//       <div className="p-3 border-t dark:border-[#007acc]/30 border-slate-100">
//         <div className="font-bold dark:text-slate-300 text-slate-700 truncate">
//           {activeData.title || "Untitled Memory"}
//         </div>
//         <div className="text-[10px] text-slate-400 mt-1 italic">
//           Category: {activeData.category || "General"}
//         </div>
//       </div>
//     </motion.div>
//   );
// }