import JsonLd from "@/components/JsonLd";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import SiteHeader from "@/components/sections/SiteHeader";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import Services from "@/components/sections/Services";
import TrustGrid from "@/components/sections/TrustGrid";
import ProductBlueprint from "@/components/sections/ProductBlueprint";
import Process from "@/components/sections/Process";
import Faq from "@/components/sections/Faq";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema()]} />
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ImpactStats />
        <Services />
        <TrustGrid />
        <ProductBlueprint />
        <Process />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
