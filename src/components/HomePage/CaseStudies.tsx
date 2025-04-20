
import { Link } from "react-router-dom";
import { linkedin } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "30% Churn Reduction for SaaS Platform",
      company: "Analytics Cloud",
      description: "How we helped a growing SaaS platform identify and fix key churn drivers to reduce monthly customer loss by 30%.",
      image: "/lovable-uploads/a6b8b645-d579-4cf1-a122-73f81572b294.png",
      stats: [
        { label: "Churn Reduction", value: "30%" },
        { label: "LTV Increase", value: "25%" },
        { label: "ROI", value: "7.5x" }
      ]
    },
    {
      title: "Local Business SEO Transformation",
      company: "City Dental Care",
      description: "How our reputation management service helped a local dental practice dominate local searches and grow bookings.",
      image: "/lovable-uploads/84678f11-34bc-4d6b-ae9c-3bf50459899d.png",
      stats: [
        { label: "Search Visibility", value: "+58%" },
        { label: "Review Score", value: "4.7 → 4.9" },
        { label: "New Patients", value: "+22%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-16 space-x-3">
          <h2 className="text-3xl md:text-4xl font-bold text-saillent-darkblue">Success Stories</h2>
          <a 
            href="https://www.linkedin.com/in/yaman-al-bochi" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-saillent-orange hover:text-saillent-darkblue transition"
          >
            <linkedin size={28} />
          </a>
        </div>
        <div className="text-center mb-4">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Saillent has helped businesses reduce churn and improve their online reputation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="text-sm text-saillent-orange font-medium mb-2">{study.company}</div>
                <h3 className="text-2xl font-bold text-saillent-darkblue mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-saillent-orange">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center font-medium text-saillent-orange hover:text-saillent-darkblue transition"
                >
                  Read full case study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/case-studies" 
            className="bg-white border-2 border-saillent-orange text-saillent-orange font-medium px-8 py-3 rounded-full hover:bg-saillent-orange hover:text-white transition inline-flex items-center"
          >
            View All Case Studies
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

