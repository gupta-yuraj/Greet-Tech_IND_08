import React from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function VideoModal({ video, onClose }) {
  // Guard clause: Don't render if there's no active video or missing URL
  if (!video || !video.videoUrl) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-0 sm:p-4">
      
      {/* Big mobile-friendly dismiss button */}
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white text-3xl font-mono hover:text-[#ffd700] active:scale-95 z-[10000] w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 rounded-full transition-all"
      >
        &times;
      </button>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full h-full sm:h-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-[#001c3d] sm:border sm:border-[#007acc] sm:rounded-lg overflow-hidden text-white font-mono flex flex-col justify-center sm:justify-start"
      >
        {/* Supabase streams raw video files natively into this flexible frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          <video
            src={video.videoUrl}
            controls
            playsInline
            autoPlay
            className="w-full h-full object-contain max-h-[75vh]"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Info Area */}
        <div className="p-4 sm:p-3 bg-[#001c3d]">
          <h4 className="text-[#ffd700] font-bold text-base line-clamp-2 sm:truncate">
            {video.title}
          </h4>
          <p className="text-xs sm:text-[10px] text-slate-400 mt-1 sm:mt-0.5">
            ID: {video.id} | <span className="text-[#007acc]">{video.category}</span>
          </p>
        </div>
      </motion.div>

    </div>,
    document.body
  );
}