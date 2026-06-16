import React, { useState } from 'react';
import PhotoVoucherRegister from './components/PhotoVoucher/PhotoVoucherRegister';
import VideoVoucherRegister from './components/PhotoVoucher/VideoVoucherRegister';

export default function App() {
  const [view, setView] = useState('photos'); // 'photos' or 'videos'

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#000f21] text-slate-900 dark:text-white p-6">
      <header className="max-w-6xl mx-auto mb-8 text-center font-mono">
        <h1 className="text-3xl font-bold text-[#007acc] dark:text-[#ffd700]">Abdul Sir's Farewell Portal</h1>
        
        {/* Toggle View Controller */}
        <div className="mt-6 inline-flex border dark:border-[#007acc] rounded overflow-hidden">
          <button 
            onClick={() => setView('photos')}
            className={`px-4 py-2 text-sm cursor-pointer ${view === 'photos' ? 'bg-[#007acc] text-white font-bold' : 'bg-transparent text-slate-400'}`}
          >
            📸 Photo Gallery
          </button>
          <button 
            onClick={() => setView('videos')}
            className={`px-4 py-2 text-sm cursor-pointer ${view === 'videos' ? 'bg-[#007acc] text-white font-bold' : 'bg-transparent text-slate-400'}`}
          >
            🎥 Video Book ({17})
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {view === 'photos' ? <PhotoVoucherRegister /> : <VideoVoucherRegister />}
      </main>
    </div>
  );
}