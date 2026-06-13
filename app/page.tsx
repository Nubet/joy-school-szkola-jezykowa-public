import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SummerCampsSection } from "@/components/sections/SummerCampsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { GoogleReviewsSection } from "@/components/sections/GoogleReviewsSection";
import { LocationMapSection } from "@/components/sections/LocationMapSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <BenefitsSection />
        <OfferSection />
        <PricingSection />
        <SummerCampsSection />
        <TrustSection />
        <GoogleReviewsSection />
        <LocationMapSection />
      </main>
      <Footer />
    </>
  );
}
