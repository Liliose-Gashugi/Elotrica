import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyElotrica from "@/components/WhyElotrica";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
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
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
    </main>
  );
}
