import React, { useState, useEffect } from 'react';
import TallyLoader from './components/Loader/TallyLoader';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import MusicToggle from './components/MusicPlayer/MusicToggle';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  // ⏳ SLOW PROGRESS SIMULATION
  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8;

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 800);
        }

        return next > 100 ? 100 : next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {loading ? (
        <TallyLoader progress={progress} />
      ) : (
        <div className={`${darkMode ? 'dark bg-[#001c3d]' : 'light bg-slate-100'} min-h-screen transition-colors duration-300 pb-12`}>
          
          {/* RESPONSIVE HEADER */}
          <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b dark:border-[#007acc]/40 border-slate-300/80 dark:bg-[#001c3d]/90 bg-white/90 transition-colors shadow-sm">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-[3.5rem] py-2 flex flex-col xs:flex-row items-center justify-between gap-2 sm:gap-4 font-mono text-xs">
              
              {/* Left Panel: Branding and Metadata */}
              <div className="flex items-center justify-between w-full xs:w-auto gap-2">
                <span className="font-bold tracking-wider text-blue-700 dark:text-[#ffd700] text-sm sm:text-base uppercase whitespace-nowrap">
                  Gateway of Memories
                </span>

                <span className="bg-slate-100 dark:bg-[#002b5c] text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px] sm:text-xs border dark:border-[#007acc]/30">
                  Gold v7.0
                </span>
              </div>

              {/* Right Panel: Controls Widget Array */}
              <div className="flex items-center justify-end w-full xs:w-auto gap-3 border-t xs:border-t-0 pt-2 xs:pt-0 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                  <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" /> {/* Clean Divider */}
                  <MusicToggle />
                </div>
              </div>

            </div>
          </header>

          {/* DYNAMIC MAIN CONTENT */}
          <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
            <Home />
          </main>

        </div>
      )}
    </>
  );
}