import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits } from "@/lib/constants";
import { Stethoscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PricingTable from "./PricingTable";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center lg:mb-10">
          <Badge
            variant="outline"
            className="bg-yellow-200 px-4 py-1 text-yellow-600 text-lg font-extralight mb-4 rounded-sm"
          >
            Affordable Healthcare
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Consultation Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect consultation package that fits your healthcare
            needs
          </p>
        </div>

        <div className="mx-auto">
          <PricingTable />
          <Card className="mt-12 bg-secondary-foreground border-none">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-white flex items-center">
                <Stethoscope className="h-5 w-5 mr-2 text-yellow-400" />
                How Our Credit System Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {creditBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 p-1 bg-muted/30 rounded-full">
                      <svg
                        className="h-5 w-5 text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p
                      className="text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
