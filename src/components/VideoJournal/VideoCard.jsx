// // // src/components/PhotoVoucher/VideoCard.jsx
// // import React from 'react';
// // import { motion } from 'framer-motion';

// // export default function VideoCard({ item, onSelect }) {
// //   if (!item) return null;

// //   return (
// //     <motion.div
// //       layout
// //       whileHover={{ scale: 1.02, y: -4 }}
// //       className="border dark:border-[#007acc]/50 border-slate-200 rounded overflow-hidden shadow bg-white dark:bg-[#001c3d] group cursor-pointer font-mono text-xs"
// //       onClick={() => onSelect(item)}
// //     >
// //       <div className="relative overflow-hidden aspect-video bg-slate-900 flex items-center justify-center">
// //         {/* HTML5 Video preview set to pause by default */}
// //         <video 
// //           src={item.url} 
// //           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
// //           preload="metadata"
// //           muted
// //         />
        
// //         {/* Overlay Play Button Icon */}
// //         <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
// //           <div className="w-12 h-12 rounded-full bg-[#ffd700] text-slate-900 flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
// //             ▶
// //           </div>
// //         </div>

// //         <div className="absolute top-2 right-2 bg-black/70 text-[#ffd700] px-2 py-0.5 rounded font-mono text-[10px] z-10">
// //           {item.id}
// //         </div>
// //       </div>

// //       <div className="p-3 border-t dark:border-[#007acc]/30 border-slate-100">
// //         <div className="font-bold dark:text-slate-300 text-slate-700 truncate">
// //           {item.title}
// //         </div>
// //         <div className="text-[11px] text-slate-400 mt-1 italic">Category: {item.category}</div>
// //       </div>
// //     </motion.div>
// //   );
// // }
// <div className="relative overflow-hidden aspect-video bg-slate-900 flex items-center justify-center">
//   {/* ✅ Drive thumbnail image instead of <video> */}
//   <img
//     src={`https://drive.google.com/thumbnail?id=${item.driveId}&sz=w400`}
//     alt={item.title}
//     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//   />

//   {/* Play button overlay stays the same */}
//   <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors duration-300">
//     <div className="w-12 h-12 rounded-full bg-[#ffd700] text-slate-900 flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
//       ▶
//     </div>
//   </div>

//   <div className="absolute top-2 right-2 bg-black/70 text-[#ffd700] px-2 py-0.5 rounded font-mono text-[10px] z-10">
//     {item.id}
//   </div>
// </div>