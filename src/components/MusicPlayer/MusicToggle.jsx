import React, { useState, useRef } from 'react';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/kiliye.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser setup rules."));
    }
    setPlaying(!playing);
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 rounded border bg-black/40 backdrop-blur-md border-gray-700 shadow-md z-40">
      <button
        onClick={toggleMusic}
        className={`font-mono text-xs uppercase tracking-wider transition-all duration-300 px-2 py-1 rounded ${
          playing
            ? 'bg-emerald-600 text-white border border-emerald-400 animate-pulse'
            : 'bg-red-900/50 text-red-200 border border-red-700'
        }`}
      >
        {playing ? '🎵 ON' : '🔇 OFF'}
      </button>

      {/* Volume Slider */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolume}
        className="w-20 accent-emerald-500 cursor-pointer"
      />

      {/* Volume % */}
      <span className="text-xs text-gray-400 font-mono w-8">
        {Math.round(volume * 100)}%
      </span>
    </div>
  );
}