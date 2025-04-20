
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <li><Link to="/case-studies" className="text-gray-600 hover:text-saillent-orange transition">Case Studies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-y-3 flex-col md:flex-row md:space-y-0 md:space-x-6">
              <span className="text-gray-600">Email: albochi@saillent.com</span>
              <span className="text-gray-600">Call: (613) 301-1944</span>
              <span className="text-gray-600">1525 Carling Avenue</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-saillent-orange transition">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-saillent-orange transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
