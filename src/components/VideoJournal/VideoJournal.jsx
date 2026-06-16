import React, { useState } from 'react';
import { videoJournal } from '../../data/videos';
import VideoModal from './VideoModal';

export default function VideoJournal() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videoJournal.map((vid) => (
          <div 
            key={vid.id}
            onClick={() => setSelectedVideo(vid)}
            className="border dark:border-[#007acc] border-slate-300 rounded overflow-hidden bg-white dark:bg-[#001c3d] hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="bg-slate-200 dark:bg-[#002b5c] p-4 aspect-video flex items-center justify-center relative">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                ▶
              </div>
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                {vid.id}
              </span>
            </div>
            <div className="p-3 border-t dark:border-[#007acc]/40 border-slate-100">
              <div className="font-bold text-sm truncate dark:text-slate-200 text-slate-800">{vid.title}</div>
              <div className="text-xs text-slate-400 mt-1 italic">Voucher Class: {vid.category}</div>
            </div>
          </div>
        ))}
      </div>
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}