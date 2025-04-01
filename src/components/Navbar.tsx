
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-legac-blue">LegaC<span className="text-legac-purple">.dev</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-legac-slate hover:text-legac-blue transition-colors">Solutions</a>
            <a href="#process" className="text-legac-slate hover:text-legac-blue transition-colors">Process</a>
            <a href="#benefits" className="text-legac-slate hover:text-legac-blue transition-colors">Benefits</a>
            <Button>Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-accordion-down">
            <div className="flex flex-col space-y-4">
              <a href="#solutions" className="px-4 py-2 text-legac-slate hover:text-legac-blue" onClick={toggleMenu}>Solutions</a>
              <a href="#process" className="px-4 py-2 text-legac-slate hover:text-legac-blue" onClick={toggleMenu}>Process</a>
              <a href="#benefits" className="px-4 py-2 text-legac-slate hover:text-legac-blue" onClick={toggleMenu}>Benefits</a>
              <div className="px-4">
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
