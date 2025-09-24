import HeroSection from '@/components/lp1/HeroSection';
import ProblemSection from '@/components/lp1/ProblemSection';
import SolutionSection from '@/components/lp1/SolutionSection';
import FeaturesSection from '@/components/lp1/FeaturesSection';
import ProductSection from '@/components/lp1/ProductSection';
import CaseSection from '@/components/lp1/CaseSection';
import ProcessSection from '@/components/lp1/ProcessSection';
import FAQSection from '@/components/lp1/FAQSection';
import ContactSection from '@/components/lp1/ContactSection';
import Header from '@/components/lp1/Header';
import Footer from '@/components/lp1/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ProductSection />
        <CaseSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
