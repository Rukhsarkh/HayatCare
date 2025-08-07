import Hero from "../components/LandingPage/HeroSection/Hero";
import FeatureSection from "../components/LandingPage/Features";
import PricingSection from "../components/LandingPage/PricingSection/PricingSection";
import Testimonials from "../components/LandingPage/Testimonials";
import CTA from "../components/LandingPage/CTA";

const index = () => {
  return (
    <>
      <div className="lg:-mx-20">
        <Hero />
      </div>
      <FeatureSection />
      <PricingSection />
      <Testimonials />
      <CTA />
    </>
  );
};

export default index;
