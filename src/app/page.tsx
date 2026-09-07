import JsonLd from "@/components/JsonLd";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import SiteHeader from "@/components/sections/SiteHeader";
import Hero from "@/components/sections/Hero";
import FlowBand from "@/components/sections/FlowBand";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Method from "@/components/sections/Method";
import Offer from "@/components/sections/Offer";
import CaseHighlight from "@/components/sections/CaseHighlight";
import Indicators from "@/components/sections/Indicators";
import About from "@/components/sections/About";
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
        <FlowBand />
        <BeforeAfter />
        <Method />
        <Offer />
        <CaseHighlight />
        <Indicators />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
