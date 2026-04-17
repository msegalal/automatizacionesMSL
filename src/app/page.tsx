import Hero from "@/components/sections/Hero";
import TrustGrid from "@/components/sections/TrustGrid";
import Services from "@/components/sections/Services";
import ProductBlueprint from "@/components/sections/ProductBlueprint";
import ImpactStats from "@/components/sections/ImpactStats";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <TrustGrid />
        <ProductBlueprint />
        <ImpactStats />
        <Process />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
