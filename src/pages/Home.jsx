import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import CompanyCard from '../components/CompanyInfo/CompanyCard';
import VideoJournal from '../components/VideoJournal/VideoJournal';
import FunnyMomentsLedger from '../components/FunnyLedger/FunnyMomentsLedger';
import ShayariSection from '../components/Shayari/ShayariSection';
import TeamMessageWall from '../components/MessageWall/TeamMessageWall';
import AppreciationReport from '../components/Appreciation/AppreciationReport';
import StatisticsDashboard from '../components/Statistics/StatisticsDashboard';
import FinalBalanceSheet from '../components/BalanceSheet/FinalBalanceSheet';
import GrandFinale from '../components/Finale/GrandFinale';
import KnowledgeLedger from '../components/KnowledgeLedger/KnowledgeLedger';
import PhotoVoucherRegister from '../components/PhotoVoucher/PhotoVoucherRegister';

// 1. Accept the darkMode prop here
export default function Home({ darkMode }) {
  
  // 2. We explicitly use JavaScript to change the class name from white to black
  const headingStyle = `text-lg font-mono font-bold uppercase tracking-wider mb-4 flex items-center gap-2 ${
    darkMode ? 'text-white' : 'text-black'
  }`;

  return (
    <div className="space-y-12">
      <HeroSection />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1">
          <CompanyCard />
        </div>
        <div className="md:col-span-2">
          <AppreciationReport />
        </div>
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>🧾</span> 01 : Accounting Timeline Ledger
        </h2>
        <KnowledgeLedger />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>📊</span> 02 : Core Operational Statistics
        </h2>
        <StatisticsDashboard />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>😂</span> 03 : The Suspense Matrix
        </h2>
        <FunnyMomentsLedger />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>📸</span> 04 : Photo Voucher Register
        </h2>
        <PhotoVoucherRegister />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>🎥</span> 05 : Video Audit Journal
        </h2>
        <VideoJournal />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>✍️</span> 06 : Couplets & Shayari Books
        </h2>
        <ShayariSection />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <TeamMessageWall />
      </div>

      <div>
        <h2 className={headingStyle}>
          <span>⚖️</span> 07 : Final Evaluated Balance Sheet
        </h2>
        <FinalBalanceSheet />
      </div>

      <GrandFinale />
    </div>
  );
}