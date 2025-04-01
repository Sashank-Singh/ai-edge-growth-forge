
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    title: "Increased Conversion Rates",
    description: "Our AI solutions help optimize your customer journey, leading to higher conversion rates and improved ROI on your marketing efforts."
  },
  {
    title: "Data-Driven Decision Making",
    description: "Make informed business decisions based on actionable insights derived from your own data, analyzed through our advanced AI models."
  },
  {
    title: "Personalized Customer Experiences",
    description: "Deliver tailored experiences to your customers through AI-powered personalization, increasing engagement and satisfaction."
  },
  {
    title: "Operational Efficiency",
    description: "Automate routine tasks and optimize workflows, allowing your team to focus on high-value activities that drive growth."
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with cutting-edge AI technology that continuously learns and adapts to market changes."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our AI Solutions?</h2>
            <p className="text-lg text-legac-gray mb-8">
              Partnering with LegaC.dev gives you access to cutting-edge AI technology tailored specifically to your business needs. Our solutions provide numerous benefits:
            </p>
            
            <div className="bg-legac-lightgray rounded-xl p-6 border-l-4 border-legac-blue">
              <p className="text-legac-slate text-lg italic">
                "LegaC.dev's AI solutions helped us increase our conversion rate by 43% and streamline our customer service operations, resulting in significant cost savings."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-legac-blue/20 flex items-center justify-center text-legac-blue font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-sm text-legac-gray">CEO, Tech Innovators</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-legac-lightgray rounded-xl p-6">
            <Accordion type="single" collapsible className="w-full">
              {benefits.map((benefit, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg py-4">
                    {benefit.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-legac-gray pb-4">
                    {benefit.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
