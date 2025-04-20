
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      id: "retention",
      title: "Churn Reduction & Retention Analytics",
      description: "Reverse-engineer why your best customers leave and arm you with actionable strategies to stop it.",
      features: [
        "Combine advanced analytics, cohort modeling, and machine learning",
        "Deliver comprehensive retention playbooks for your team",
        "Automate workflows like personalized re-engagement emails",
        "Set up alerts for at-risk users before they churn"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: "winback",
      title: "Win-Back Campaigns & UX Optimization",
      description: "Target high-LTV churned users with tailored offers and optimize your product experience.",
      features: [
        "Develop personalized win-back campaigns with discounts or incentives",
        "Recommend product/UX fixes to enhance engagement",
        "Simplify confusing UIs and add helpful tooltips",
        "Partner with dev teams to integrate APIs and run A/B tests"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: "ml",
      title: "ML-Powered Churn Prediction",
      description: "Build custom churn-prediction models for enterprise clients using cutting-edge machine learning.",
      features: [
        "Develop tailored models using XGBoost or TensorFlow",
        "Deploy real-time scoring APIs via FastAPI",
        "Identify high-risk accounts daily with automated scoring",
        "Push scores directly into CRMs for immediate actionability"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: "reputation",
      title: "Reputation Management & Local SEO Boost",
      description: "A sleek, no-nonsense solution for small businesses drowning in mediocre reviews and invisible Google rankings.",
      features: [
        "Turbocharge your profile with authentic 5-star reviews",
        "Bury negativity with stealth SEO tactics",
        "Optimize local search to dominate local service queries",
        "Turn casual scrollers into loyal customers"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-saillent-darkblue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer four tiers of services designed to help businesses reduce churn, increase customer retention, and boost online reputation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8 border border-gray-100"
            >
              <div className="text-saillent-orange mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold text-saillent-darkblue mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saillent-orange mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={`/services#${service.id}`} 
                className="inline-flex items-center font-medium text-saillent-orange hover:text-saillent-darkblue transition"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="bg-saillent-orange text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-flex items-center shadow-lg hover:shadow-xl"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
