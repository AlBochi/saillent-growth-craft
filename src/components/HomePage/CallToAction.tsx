
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-saillent-orange to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Turn Churn into Growth?</h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you're fighting customer churn or battling bad reviews, we're here to help you decode the data and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-saillent-orange font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition text-center shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </Link>
            <a 
              href="tel:+15551234567" 
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-saillent-orange transition text-center inline-flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
