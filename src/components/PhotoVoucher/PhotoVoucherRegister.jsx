// src/components/PhotoVoucher/PhotoVoucherRegister.jsx
import React from 'react';
// Import the component from its new location
// import PhotoCard from '../PhotoCard'; 
// Import the data from the pure .js file
import { photoVouchers } from '../../data/photos'; 

export default function PhotoVoucherRegister() {
  const handleSelectPhoto = (photo) => {
    console.log("Selected Photo Voucher ID:", photo.id);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-[#001424] min-h-screen transition-colors duration-300">
      <h2 className="text-xl font-bold font-mono mb-6 text-slate-800 dark:text-white uppercase tracking-wider">
        {"Display Menu > Photo Voucher Records"}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {photoVouchers.map((voucher) => (
          <div key={voucher.id} className="border dark:border-[#007acc]/50 border-slate-200 rounded overflow-hidden shadow bg-white dark:bg-[#001c3d] group cursor-pointer font-mono text-xs text-left transition-colors duration-300" onClick={() => handleSelectPhoto(voucher)}>
            <div className="relative overflow-hidden aspect-video bg-slate-900">
              <img
                src={voucher.url}
                alt={voucher.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-black/70 text-[#ffd700] px-2 py-0.5 rounded">
                {voucher.id}
              </div>
            </div>
            <div className="p-3">
              <div className="font-bold truncate dark:text-white text-slate-800">{voucher.title}</div>
              <div className="text-[10px] text-slate-400 mt-1">{voucher.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}