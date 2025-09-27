'use client';

import {
  HeroSection,
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
} from '@/components/layout';

export default function Home() {

  return (
    <div className="font-noto-sans-jp">
      <Header />
      <main className="pt-20">
        <HeroSection />
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