'use client';

import {
  HeroSectionSplit,
  ArchaiveIntroSection,
  BeforeAfterSection,
  FeaturesSection,
  ProcessSection,
  CaseSection,
  NewsSection,
  SecuritySection,
  CTASection,
} from '@/components/feature';

import {
  Header,
  Footer,
  HeroQuickNav,
} from '@/components/layout';

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <HeroSectionSplit />
        <HeroQuickNav />
        <ArchaiveIntroSection />
        <BeforeAfterSection />
        <FeaturesSection />
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