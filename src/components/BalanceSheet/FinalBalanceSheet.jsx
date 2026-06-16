import React from 'react';

export default function FinalBalanceSheet() {
  const liabilities = [
  "Rozana ke Corporate Sessions ki Yaad (Kabhi Recover Nahi Hoga 😭)",
  "Shaam ki Chai Break Baatein Miss Kar Rahe Hain (Dukh ka Provision Bana Diya ☕💀)",
  "Class mein Late tak Hansna Miss Kar Rahe Hain (Write Off, Par Bhula Nahi Payenge 😂)",
  "Abdul Sir ki Real-time Guidance Miss Kar Rahe Hain (Anamol Asset Chali Gayi 😢📊)",
  "Vidaai ke Overwhelming Jazbaat (Baaki Balance — Zindagi Bhar Carry Forward 😭🥹)",
];

const assets = [
  "Tally ka Gehra Gyaan Mila (Dimaag ke Cells Poori Tarah Ghas Gaye 💀📒)",
  "Poora Professional Confidence Bana (Opening Balance: Zero → Closing: Anmol 😂✅)",
  "Zindagi Bhar ki Dosti Bani (Non-Current Asset — Kabhi Expire Nahi Hogi 🥹❤️)",
  "Career Mein Zabardast Unnati (Future Value: Unlimited 📈🔥)",
  "Anginat Khushi ki Yaadein (Audit Nahi Ho Sakti 😂📖)",
  "Poori Urja aur Motivation (Fully Charged, Koi Depreciation Nahi ⚡💪)",
  "Atoot Team Bonding (Goodwill Entry — Hamesha ke Liye 🤝❤️)",
];

  return (
    <div className="border-2 dark:border-[#ffd700] border-blue-700 rounded overflow-hidden shadow-2xl font-mono bg-white dark:bg-[#001c3d] text-xs transition-colors duration-300">
      <div className="dark:bg-[#002b5c] bg-blue-900 text-[#ffd700] px-4 py-3 font-bold uppercase text-sm border-b-2 dark:border-[#007acc] border-blue-700 flex justify-between items-center">
        <span>MEMORIES PVT. LTD. — FINAL AUDITED BALANCE SHEET</span>
        <span className="text-xs font-normal text-white italic">As of Closing Farewell Matrix</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x-2 dark:divide-[#007acc] divide-blue-700">
        
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-sm dark:text-slate-200 text-slate-800 border-b dark:border-slate-700 border-slate-200 pb-1 uppercase tracking-wide">
            Liabilities (Things We Will Miss Deeply)
          </h3>
          <ul className="space-y-2 min-h-[220px]">
            {liabilities.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>{item}</span>
                <span className="font-bold text-red-500">Secured</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-bold text-sm dark:text-slate-200 text-slate-800 border-b dark:border-slate-700 border-slate-200 pb-1 uppercase tracking-wide">
            Assets (Valuable Takeaways Maintained)
          </h3>
          <ul className="space-y-2 min-h-[220px]">
            {assets.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                <span>{item}</span>
                <span className="font-bold text-emerald-500">Infinite</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 dark:border-[#007acc] border-blue-700 font-bold bg-slate-50 dark:bg-[#002b5c]/50 text-sm p-4 gap-4">
        <div className="flex justify-between items-center text-red-600 dark:text-red-400">
          <span>NET PROFIT VALUE BALANCE</span>
          <span>Priceless Memories ❤️</span>
        </div>
        <div className="flex justify-between items-center text-emerald-600 dark:text-emerald-400">
          <span>CLOSING CAPITAL ASSORTMENT</span>
          <span>Forever Grateful ❤️</span>
        </div>
      </div>
    </div>
  );
}