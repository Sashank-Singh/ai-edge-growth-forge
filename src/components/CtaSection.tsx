
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CtaSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend
    toast.success("Thank you! We'll be in touch soon.", {
      description: "We've received your request and will contact you shortly.",
    });
  };

  return (
    <section className="py-16 bg-blue-purple-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-8 text-white/90">
            Let's discuss how we can leverage your data to create custom AI solutions that give your business a competitive edge.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" className="bg-white text-legac-blue hover:bg-white/90 hover:text-legac-darkblue whitespace-nowrap">
              Get Started
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
