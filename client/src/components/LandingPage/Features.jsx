import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/lib/constants";

const FeatureSection = () => {
  return (
    <section className="py-20 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
            How It Works
          </h2>
          <p className="text-xl font-extralight max-w-2xl mx-auto">
            Our platform makes healthcare accessible with just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary-foreground border-none">
              <CardHeader className="pb-2">
                <div className="bg-black p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
