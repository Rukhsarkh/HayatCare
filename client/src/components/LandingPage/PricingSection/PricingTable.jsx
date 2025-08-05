import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Pricing = ({ title, subtitle, price, validity, credits, highlight }) => {
  return (
    <Card className="flex flex-col justify-between p-6 transition-shadow duration-300 hover:shadow-lg bg-secondary-foreground border-none">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold text-white">
              {title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {subtitle}
            </CardDescription>
          </div>
          {highlight && (
            <Badge
              variant="outline"
              className="text-xs text-yellow-600 rounded-sm"
            >
              Popular
            </Badge>
          )}
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="my-4">
        <div className="text-3xl font-bold text-yellow-400">{price}</div>
        <div className="text-sm text-muted-foreground">{validity}</div>

        <div className="flex items-center space-x-2 mt-9">
          <CheckCircle className="w-5 h-5 text-yellow-400" />
          <span className="text-sm text-white">{credits} Credits Included</span>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col gap-4">
        <Button
          className="w-full mt-4 hover:bg-white bg-muted/90 border-none"
          variant="outline"
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingTable = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
      <Pricing
        title="Basic (Free)"
        subtitle="1 Free Consultation using 2 free Credits"
        price="$0/Month"
        validity="Always Free"
        credits={2}
      />
      <Pricing
        title="Standard"
        subtitle="Get 10 Credits for up to 5 Consultations"
        price="$100/Month"
        validity="Only billed Monthly"
        credits={10}
        highlight
      />
      <Pricing
        title="Premium"
        subtitle="Get 24 Credits for up to 12 Consultations"
        price="$200/Month"
        validity="Only billed Monthly"
        credits={24}
      />
    </div>
  );
};

export default PricingTable;
