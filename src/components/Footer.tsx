
import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-legac-slate text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              LegaC<span className="text-legac-blue">.dev</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leveraging AI to transform businesses through data-driven insights and cutting-edge solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Website Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Customer Acquisition</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Customer Retention</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Operations Streamlining</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Our Process</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-legac-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-legac-blue" />
                <a href="mailto:info@legac.dev" className="text-gray-300 hover:text-legac-blue transition-colors">info@legac.dev</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-legac-blue" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-legac-blue transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-legac-blue" />
                <a href="https://legac.dev" className="text-gray-300 hover:text-legac-blue transition-colors">legac.dev</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LegaC.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
