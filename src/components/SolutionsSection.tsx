
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Search, User, Settings } from "lucide-react";

const solutions = [
  {
    icon: <Globe className="h-10 w-10 text-legac-blue" />,
    title: "Website Optimization",
    description: "Enhance user experience and conversion rates with AI-driven website analysis and improvements."
  },
  {
    icon: <Search className="h-10 w-10 text-legac-teal" />,
    title: "Customer Acquisition",
    description: "Attract and convert more qualified leads using our advanced AI targeting algorithms."
  },
  {
    icon: <User className="h-10 w-10 text-legac-purple" />,
    title: "Customer Retention",
    description: "Leverage predictive analytics to identify and address customer needs before they arise."
  },
  {
    icon: <Settings className="h-10 w-10 text-legac-slate" />,
    title: "Operations Streamlining",
    description: "Automate repetitive tasks and optimize workflows with our intelligent process management."
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Solutions</h2>
          <p className="text-lg text-legac-gray max-w-2xl mx-auto">
            We leverage cutting-edge artificial intelligence to transform your business data into powerful growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-legac-lightgray hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{solution.icon}</div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-legac-gray text-base">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
