
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="md:col-span-1">
            <div className="relative inline-block mb-6">
              <div className="bg-saillent-mint text-saillent-orange font-bold text-xl px-6 py-2 rounded-full">
                SAILLENT
                <div className="absolute -right-1 -bottom-1 w-full h-full bg-saillent-orange rounded-full -z-10"></div>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Decoding churn. Driving growth.<br />Empowering success.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Saillent.<br />All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-saillent-orange transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-saillent-orange transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-saillent-orange transition">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 hover:text-saillent-orange transition">Case Studies</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-saillent-orange transition">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Our Services</h5>
            <ul className="space-y-3">
              <li><Link to="/services#retention" className="text-gray-600 hover:text-saillent-orange transition">Churn Reduction</Link></li>
              <li><Link to="/services#winback" className="text-gray-600 hover:text-saillent-orange transition">Win-Back Campaigns</Link></li>
              <li><Link to="/services#ml" className="text-gray-600 hover:text-saillent-orange transition">ML-Powered Prediction</Link></li>
              <li><Link to="/services#reputation" className="text-gray-600 hover:text-saillent-orange transition">Reputation Management</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-saillent-orange shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">1525 Analytics Drive, Suite 300<br />Data City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-saillent-orange shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@saillent.com" className="text-gray-600 hover:text-saillent-orange transition">info@saillent.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-saillent-orange shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+15551234567" className="text-gray-600 hover:text-saillent-orange transition">(555) 123-4567</a>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-saillent-orange transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-saillent-orange transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">Turning churn into growth. One insight at a time.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-saillent-orange transition">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-saillent-orange transition">Terms of Service</Link>
              <a href="#" className="flex items-center text-gray-500 text-sm hover:text-saillent-orange transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                SOC 2 Compliant
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
