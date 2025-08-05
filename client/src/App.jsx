import Header from "@/components/global/Header";
import Hero from "@/components/LandingPage/HeroSection/Hero";
import FeatureSection from "@/components/LandingPage/Features";
import Pricing from "@/components/LandingPage/PricingSection/PricingSection";
import Testimonials from "@/components/LandingPage/Testimonials";
import CTA from "@/components/LandingPage/CTA";
import Footer from "@/components/global/Footer";
import CreditFooter from "@/components/global/CreditFooter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureSection />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <CreditFooter />
    </>
  );
}

export default App;
