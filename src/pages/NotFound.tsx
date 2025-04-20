
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl font-bold text-saillent-orange mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            We couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
          <Link 
            to="/" 
            className="bg-saillent-orange text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-block"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
