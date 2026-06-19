// src/components/PhotoVoucher/PhotoVoucherRegister.jsx
import React, { useState } from 'react';
// Import the data from the pure .js file
import { photoVouchers } from '../../data/photos'; 

export default function PhotoVoucherRegister() {
  // State to track which photo is currently active in the modal
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectPhoto = (photo) => {
    setSelectedPhoto(photo);
    console.log("Selected Photo Voucher ID:", photo.id);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-[#001424] min-h-screen transition-colors duration-300">
      <h2 className="text-xl font-bold font-mono mb-6 text-slate-800 dark:text-white uppercase tracking-wider">
        {"Display Menu > Photo Voucher Records"}
      </h2>
      
      {/* PHOTO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {photoVouchers.map((voucher) => (
          <div 
            key={voucher.id} 
            className="border dark:border-[#007acc]/50 border-slate-200 rounded overflow-hidden shadow bg-white dark:bg-[#001c3d] group cursor-pointer font-mono text-xs text-left transition-colors duration-300" 
            onClick={() => handleSelectPhoto(voucher)}
          >
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

      {/* POP-UP MODAL LIGHTBOX */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseModal} // Close if background overlay is clicked
        >
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] bg-white dark:bg-[#001c3d] rounded-lg overflow-hidden border border-slate-300 dark:border-[#007acc] shadow-2xl font-mono"
            onClick={(e) => e.stopPropagation()} // Stop click event propagation inside the card content
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors text-sm font-bold w-8 h-8 flex items-center justify-center"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Image Wrapper */}
            <div className="w-full bg-slate-950 flex items-center justify-center overflow-hidden max-h-[70vh]">
              <img 
                src={selectedPhoto.url} 
                alt={selectedPhoto.title} 
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Voucher Metadata Info Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-[#007acc]/30 flex justify-between items-center bg-slate-50 dark:bg-[#002b5c]">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wide">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5">
                  Category: {selectedPhoto.category}
                </p>
              </div>
              <div className="text-xs font-bold text-blue-700 dark:text-[#ffd700] border border-blue-600/30 dark:border-[#ffd700]/30 px-2.5 py-1 rounded bg-blue-50 dark:bg-[#001c3d]">
                ID: {selectedPhoto.id}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}