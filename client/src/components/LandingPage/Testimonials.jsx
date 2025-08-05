import { testimonials } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="px-4 py-1 text-yellow-600 bg-yellow-200 text-lg font-medium mb-4 border-none rounded-sm"
          >
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from patients and doctors who use our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className=" border-none bg-secondary-foreground">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mr-4">
                    <span className="text-yellow-400 font-bold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
