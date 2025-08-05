import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 border-none">
          <CardContent className="p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to take control of your healthcare?
              </h2>
              <p className="text-lg mb-8 text-extralight">
                Join thousands of users who have simplified their healthcare
                journey with our platform. Get started today and experience
                healthcare the way it should be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-black hover:bg-black/80 text-white"
                >
                  <Link href="/sign-up">Sign Up Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:bg-muted/80"
                >
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            {/* Decorative healthcare elements */}
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-yellow-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-yellow-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
