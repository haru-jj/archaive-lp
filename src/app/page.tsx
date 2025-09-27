'use client';

import {
  HeroSection,
  // ArchaiveIntroSection,
  ArchaiveIntroSection2,
  BeforeAfterSection,
  MainFeaturesSection,
  SubFeaturesSection,
  ProcessSection,
  CaseSection,
  NewsSection,
  SecuritySection,
  CTASection,
} from '@/components/feature';

import {
  Header,
  Footer,
} from '@/components/layout';

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <HeroSection />
        {/* <ArchaiveIntroSection /> */}
        <ArchaiveIntroSection2 />
        <BeforeAfterSection />
        <MainFeaturesSection />
        <SubFeaturesSection />
        <CaseSection />
        <ProcessSection />
        <NewsSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}