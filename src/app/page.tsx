'use client';

import HeroSectionSplit from '@/components/lp_new/HeroSectionSplit';
import HeroQuickNav from '@/components/lp_new/HeroQuickNav';
import ArchaiveIntroSection from '@/components/lp_new/ArchaiveIntroSection';
import BeforeAfterSection from '@/components/lp_new/BeforeAfterSection';
import FeaturesSection from '@/components/lp_new/FeaturesSection';
import ProcessSection from '@/components/lp_new/ProcessSection';
import CaseSection from '@/components/lp_new/CaseSection';
import NewsSection from '@/components/lp_new/NewsSection';
import CTASection from '@/components/lp_new/CTASection';
import SecuritySection from '@/components/lp_new/SecuritySection';
import Header from '@/components/lp_new/Header';
import Footer from '@/components/lp_new/Footer';

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <div id="hero">
          <HeroSectionSplit />
        </div>
        <HeroQuickNav />
        {/* ARCHAIVEとは？セクション */}
        <div id="demo" className="mt-16">
          <ArchaiveIntroSection />
        </div>
        {/* 導入前後の比較セクション */}
        <div id="before-after" className="mt-16">
          <BeforeAfterSection />
        </div>
        <div id="features" className="mt-16">
          <FeaturesSection />
        </div>
        <div id="case" className="mt-16">
          <CaseSection />
        </div>
        <div id="process" className="mt-8">
          <ProcessSection />
        </div>
        <div id="news" className="mt-16">
          <NewsSection />
        </div>
        <div id="security" className="mt-16">
          <SecuritySection />
        </div>
        <div id="cta" className="mt-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}