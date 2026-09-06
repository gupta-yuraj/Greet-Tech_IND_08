import React, { useState, useEffect } from "react";
import TallyLoader from "./components/Loader/TallyLoader";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import MusicToggle from "./components/MusicPlayer/MusicToggle";
// import MemorySnaps from "./MemorySnaps";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  // Popup state
  const [showPopup, setShowPopup] = useState(false);

  // Loader Progress
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

  // Show popup after loader finishes
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <TallyLoader progress={progress} />
      ) : (
        <div
          className={`${
            darkMode ? "dark bg-[#001c3d]" : "light bg-slate-100"
          } min-h-screen transition-colors duration-300 pb-12`}
        >
          {/* HEADER */}
          <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b dark:border-[#007acc]/40 border-slate-300/80 dark:bg-[#001c3d]/90 bg-white/90 transition-colors shadow-sm">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 min-h-[3.5rem] py-2 flex flex-col xs:flex-row items-center justify-between gap-2 sm:gap-4 font-mono text-xs">
              <div className="flex items-center justify-between w-full xs:w-auto gap-2">
                <span className="font-bold tracking-wider text-blue-700 dark:text-[#ffd700] text-sm sm:text-base uppercase whitespace-nowrap">
                  Gateway of Memories
                </span>

                <span className="bg-slate-100 dark:bg-[#002b5c] text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px] sm:text-xs border dark:border-[#007acc]/30">
                  Gold v7.0
                </span>
              </div>

              <div className="flex items-center justify-end w-full xs:w-auto gap-3 border-t xs:border-t-0 pt-2 xs:pt-0 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <ThemeToggle
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                  <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
                  <MusicToggle />
                </div>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6">
            <Home darkMode={darkMode} />
              {/* Instagram-style Memory Notifications */}
  {/* {!showPopup && <MemorySnaps />} */}
          </main>

          {/* POPUP */}
{showPopup && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
    <div className="w-[90%] max-w-lg rounded-2xl border border-[#007acc]/40 bg-white dark:bg-[#002b5c] shadow-2xl overflow-hidden">

      {/* Title Bar */}
      <div className="bg-[#0057a8] px-6 py-4 border-b border-[#007acc]">
        <h2 className="text-xl font-bold text-yellow-300">
          💙 Before You Enter...
        </h2>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          I wish I could go back to our training days one more time.
        </p>

        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
          Who knew the days we couldn't wait to finish would become the days we'd miss the most?
        </p>

        <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
          I miss the fun we had with <span className="font-semibold text-yellow-400">Abdul Sir</span>, the laughs, the jokes, and all the unforgettable moments.
        </p>

        <p className="mt-4 text-slate-700 dark:text-slate-200 font-medium">
          I miss you all, guys.
        </p>

        <p className="mt-2 italic text-slate-500 dark:text-slate-400">
          And don't act like you don't miss us too. 😌
        </p>

        

        <p className="mt-2 font-bold  text-white">
          <strong className="font-mono text-amber-200">
            from
            
            </strong>
          <br />
          your beloved Yuraj
        </p>


        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setShowPopup(false)}
            className="bg-[#0057a8] hover:bg-[#007acc] text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Continue →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-100 dark:bg-[#001c3d] px-6 py-3 border-t border-slate-300 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 text-center">
        ❤️ Some memories never fade. See you all again someday.
      </div>
      <br />
      {/* Footer */}
      <div className="bg-slate-100 dark:bg-[#001c3d] px-6 py-3 border-t border-slate-300 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 text-center">
        Your Beloved <strong className="font-bold text-white">Yuraj</strong>
      </div>

    </div>
  </div>
)}
        </div>
      )}
    </>
  );
}
