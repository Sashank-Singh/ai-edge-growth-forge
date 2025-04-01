
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 md:pt-28 md:pb-20 tech-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AI-Powered Solutions for 
              <span className="gradient-text block">Business Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-legac-gray leading-relaxed">
              At LegaC.dev, we leverage AI to optimize your website, attract customers, 
              and streamline operations. Your data, our expertise, your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-legac-blue hover:bg-legac-darkblue">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-blue-purple-gradient rounded-2xl blur opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-legac-lightgray p-6 text-center">
                  <div className="w-full h-64 rounded-lg bg-gradient-radial from-legac-blue/10 to-legac-purple/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-purple-gradient flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                      </div>
                      <div className="text-xl font-semibold text-legac-slate">Advanced AI Solutions</div>
                      <div className="text-legac-gray mt-2">Tailored to your business needs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
