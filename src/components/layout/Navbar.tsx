
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-saillent-orange transition">Home</Link>
          <Link to="/case-studies" className="font-medium text-gray-700 hover:text-saillent-orange transition">Case Studies</Link>
        </div>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link 
            to="/" 
            className="bg-saillent-orange text-white font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white pb-4 px-4",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-3">
          <Link to="/" className="font-medium text-gray-700 hover:text-saillent-orange transition py-2">Home</Link>
          <Link to="/case-studies" className="font-medium text-gray-700 hover:text-saillent-orange transition py-2">Case Studies</Link>
          
          <Link 
            to="/" 
            className="bg-saillent-orange text-white font-medium px-6 py-2 rounded-full hover:bg-opacity-90 transition text-center mt-4"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
