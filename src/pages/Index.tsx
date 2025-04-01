
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import ProcessSection from "../components/ProcessSection";
import BenefitsSection from "../components/BenefitsSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolutionsSection />
        <ProcessSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
