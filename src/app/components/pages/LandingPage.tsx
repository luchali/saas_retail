import { Navbar } from "../Navbar";
import { HeroSection } from "../HeroSection";
import { FeaturesSection } from "../FeaturesSection";
import { HowItWorks } from "../HowItWorks";
import { DashboardPreview } from "../DashboardPreview";
import { PricingSection } from "../PricingSection";
import { IntegrationsSection } from "../IntegrationsSection";
import { TestimonialsSection } from "../TestimonialsSection";
import { Footer } from "../Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <DashboardPreview />
      <PricingSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
