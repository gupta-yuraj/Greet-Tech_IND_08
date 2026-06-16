import React from 'react';

export default function CompanyCard() {
  const info = [
    { label: "Company Name", val: "Memories Pvt. Ltd.", accent: true },
    { label: "Corporate Trainer", val: "Abdul Sir", accent: true },
    { label: "Curriculum Course", val: "Tally Prime & Accounts Process" },
    { label: "Operational Tenure", val: "35 Days Comprehensive" },
    { label: "System Audit Status", val: "Completed & Verified Successfully", success: true }
  ];

  return (
    <div className="border dark:border-[#007acc] border-slate-300 rounded overflow-hidden shadow-lg font-mono dark:bg-[#001c3d] bg-white transition-colors duration-300">
      <div className="dark:bg-[#007acc] bg-blue-700 text-white text-xs px-4 py-2 font-bold uppercase tracking-wider flex justify-between">
        <span>Company Information Profile</span>
        <span>F11: Features</span>
      </div>
      <div className="p-4 divide-y dark:divide-[#002b5c] divide-slate-100 text-sm">
        {info.map((row, idx) => (
          <div key={idx} className="py-2.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 hover:bg-slate-50 dark:hover:bg-[#002b5c]/30 px-2 transition-all">
            <span className="text-slate-500 text-xs uppercase tracking-wide">{row.label}</span>
            <span className={`font-bold ${
              row.success ? 'text-emerald-500' : row.accent ? 'dark:text-[#ffd700] text-blue-700' : 'dark:text-slate-200 text-slate-800'
            }`}>
              {row.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}