import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroClients from "./HeroClients";
import HeroStatics from "./HeroStatics";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="font-sans mx-2 lg:rounded-b-3xl relative text-white bg-black overflow-hidden">
      <div className="grid lg:block grid-cols-1 gap-6 px-4 py-10 lg:px-0 lg:py-0">
        <div className="mt-10 lg:mt-0 lg:absolute lg:top-32 lg:-right-32 lg:h-[650px] lg:w-1/2 flex flex-col gap-5">
          <Badge
            variant="outline"
            className="px-2 py-1 text-sm md:text-base lg:text-xl font-extralight border rounded w-fit bg-yellow-200 text-yellow-600"
          >
            HealthCare Made Easy
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Connect With Doctors <br />
            <span className="text-yellow-400">Anytime, Anywhere</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl max-w-full lg:w-[610px]">
            Book appointments, consult via video, and manage your healthcare
            journey all in one secure platform.
          </p>

          <HeroClients />

          <div className="flex flex-col sm:flex-row gap-3 text-black mt-4 lg:ml-24">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-yellow-300 border-none"
            >
              <Link to="/onboarding">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-700/30 hover:bg-muted/80"
            >
              <Link to="/doctors">Find Doctors</Link>
            </Button>
          </div>
        </div>

        <div>
          <img
            src="../../../../src/assets/docBg2.webp"
            className="lg:rounded-b-3xl w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[710px] object-cover object-top"
            alt="Hero background"
          />
        </div>
      </div>

      <HeroStatics
        number="15+"
        title="Years of Experience"
        position="hidden lg:flex top-28 left-56"
      />
      <HeroStatics
        number="20+"
        title="Operation Specialists"
        position="hidden lg:flex bottom-40 left-20"
      />

      <img
        src="../../../../src/assets/hayatCareSign.webp"
        alt="hayatCare-signature"
        className="hidden lg:block absolute -bottom-24 right-28 h-96 w-96"
      />

      <img
        src="../../../../src/assets/text-highlighter-line.webp"
        alt="text-highlighter-line-img"
        className="hidden lg:block absolute -bottom-14 right-20 h-60 w-60"
      />
    </section>
  );
};

export default Hero;
