
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-legac-lightgray tech-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-legac-gray max-w-2xl mx-auto">
            Our streamlined process turns your business data into powerful AI-driven solutions customized for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Data Collection & Analysis",
              description:
                "We collect and analyze your business data to understand your unique challenges and opportunities.",
              color: "bg-legac-blue"
            },
            {
              number: "02",
              title: "AI Model Training",
              description:
                "Our experts train custom AI models using your data to create solutions specific to your business objectives.",
              color: "bg-legac-teal"
            },
            {
              number: "03",
              title: "Implementation & Growth",
              description:
                "We implement our AI solutions and continuously monitor and optimize for maximum business impact.",
              color: "bg-legac-purple"
            }
          ].map((step, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
              <div className={`${step.color} text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold mb-6`}>
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-legac-gray mb-4">{step.description}</p>
              {index < 2 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="bg-legac-blue/10 p-2 rounded-full">
                    <ArrowRight className="h-5 w-5 text-legac-blue" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Learn More About Our Process
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
