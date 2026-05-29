import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyElotrica from "@/components/WhyElotrica";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyElotrica />
      <Fleet />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
