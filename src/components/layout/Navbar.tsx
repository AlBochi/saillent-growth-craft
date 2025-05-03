
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Linkedin, Phone, Mail } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative">
            <div className="bg-saillent-mint text-saillent-orange font-bold text-2xl px-8 py-2 rounded-full">
              SAILLENT
              <div className="absolute -right-2 -bottom-1 w-full h-full bg-saillent-orange rounded-full -z-10"></div>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="font-medium text-gray-700 hover:text-saillent-orange transition">Home</Link>
          <Link to="/case-studies" className="font-medium text-gray-700 hover:text-saillent-orange transition">Case Studies</Link>
          
          <a 
            href="https://www.linkedin.com/company/saillent/?viewAsMember=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-saillent-orange transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a 
            href="tel:+16133011944" 
            className="text-gray-700 hover:text-saillent-orange transition"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
          
          <a 
            href="mailto:albochi@saillent.com" 
            className="text-gray-700 hover:text-saillent-orange transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white pb-4 px-4",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-3">
          <Link to="/" className="font-medium text-gray-700 hover:text-saillent-orange transition py-2">Home</Link>
          <Link to="/case-studies" className="font-medium text-gray-700 hover:text-saillent-orange transition py-2">Case Studies</Link>
          
          <div className="flex space-x-4 py-2 justify-center">
            <a 
              href="https://www.linkedin.com/company/saillent/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-saillent-orange transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href="tel:+16133011944" 
              className="text-gray-700 hover:text-saillent-orange transition"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            
            <a 
              href="mailto:albochi@saillent.com" 
              className="text-gray-700 hover:text-saillent-orange transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
