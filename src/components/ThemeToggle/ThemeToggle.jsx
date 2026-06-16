import React from 'react';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded border font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-md bg-opacity-80 backdrop-blur-md z-40
        light:bg-white light:text-slate-800 light:border-slate-300 dark:bg-[#002b5c] dark:text-[#ffd700] dark:border-[#007acc]"
    >
      {darkMode ? '☀️ Alt+M: Light UI' : '🌙 Alt+M: Tally UI'}
    </button>
  );
}