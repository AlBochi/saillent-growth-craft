
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/HomePage/CallToAction";

const Services = () => {
  const services = [
    {
      id: "retention",
      title: "Churn Reduction & Retention Analytics",
      subtitle: "Stop your best customers from leaving",
      description: "Our flagship service helps subscription-based businesses identify why customers churn and provides actionable strategies to improve retention.",
      features: [
        "Comprehensive customer journey mapping and analysis",
        "Cohort analysis to identify at-risk segments",
        "Retention playbooks tailored to your business",
        "Automated workflows and re-engagement campaigns",
        "Customer feedback analysis and sentiment tracking",
        "Monthly retention metrics reporting and insights"
      ],
      benefits: [
        "Reduce monthly churn rate by 20-30%",
        "Increase customer lifetime value",
        "Improve product experience based on user insights",
        "Automate early intervention for at-risk accounts"
      ],
      image: "/lovable-uploads/43528d76-14a5-4073-9105-3576836b774e.png",
      ctaText: "Reduce My Churn Rate"
    },
    {
      id: "winback",
      title: "Win-Back Campaigns & UX Optimization",
      subtitle: "Recover lost customers and enhance experience",
      description: "Target high-value churned customers with personalized win-back campaigns while improving your product's user experience to prevent future churn.",
      features: [
        "Segmented win-back campaign development",
        "Personalized discount and incentive strategies",
        "A/B testing frameworks for campaigns",
        "UX audit and friction point identification",
        "UI simplification recommendations",
        "User onboarding workflow optimization"
      ],
      benefits: [
        "Recover 15-25% of churned customers",
        "Increase product adoption and engagement",
        "Reduce user friction and confusion",
        "Create continuous improvement feedback loops"
      ],
      image: "/lovable-uploads/e729c407-d7b5-4d27-9e80-c5beb53c3bdc.png",
      ctaText: "Start Win-Back Campaigns"
    },
    {
      id: "ml",
      title: "ML-Powered Churn Prediction",
      subtitle: "Enterprise-grade prediction models",
      description: "Leverage cutting-edge machine learning to predict which customers are at risk of churning before they show obvious signs, allowing for proactive intervention.",
      features: [
        "Custom ML model development using XGBoost/TensorFlow",
        "Feature engineering from behavioral and transactional data",
        "Real-time scoring API development via FastAPI",
        "CRM integration for actionable alerts",
        "Model retraining and performance monitoring",
        "Weekly high-risk account reporting"
      ],
      benefits: [
        "Predict churn with 80-90% accuracy",
        "Identify at-risk accounts 30-60 days in advance",
        "Prioritize retention efforts based on risk scores",
        "Gain deeper understanding of churn drivers"
      ],
      image: "/lovable-uploads/84b47e55-42ff-42f1-9497-c1436b6fc53a.png",
      ctaText: "Get Predictive Insights"
    },
    {
      id: "reputation",
      title: "Reputation Management & Local SEO Boost",
      subtitle: "Dominate local search and bury negative reviews",
      description: "A comprehensive solution for small businesses struggling with online reputation challenges and poor visibility in local search results.",
      features: [
        "Google Business Profile optimization",
        "Review acquisition and management strategy",
        "Competitor analysis and benchmarking",
        "Local citation building and cleanup",
        "Negative review suppression tactics",
        "Monthly reputation reporting and analysis"
      ],
      benefits: [
        "Increase authentic 5-star reviews by 200%",
        "Improve local search ranking for key service queries",
        "Outrank competitors for high-value keywords",
        "Convert more browsers into customers"
      ],
      image: "/lovable-uploads/59851c75-64b2-4eb1-81ab-befbaefae4b0.png",
      ctaText: "Boost My Reputation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-saillent-darkblue mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From churn reduction to reputation management, we offer data-driven solutions to help your business grow sustainably.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        {services.map((service, index) => (
          <section 
            key={index} 
            id={service.id} 
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                    <div className="text-saillent-orange font-medium mb-2">{service.subtitle}</div>
                    <h2 className="text-3xl font-bold text-saillent-darkblue mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-saillent-darkblue mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saillent-orange mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-saillent-darkblue mb-4">Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saillent-orange mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href="/contact" 
                      className="bg-saillent-orange text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-block shadow-lg hover:shadow-xl"
                    >
                      {service.ctaText}
                    </a>
                  </div>
                  
                  <div className={`relative ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                    <div className="relative z-10 bg-white rounded-lg shadow-2xl p-1">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full rounded-md"
                      />
                    </div>
                    <div className="absolute -top-6 -left-6 w-64 h-64 bg-saillent-mint rounded-full opacity-20 -z-10"></div>
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-saillent-orange rounded-full opacity-20 -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-saillent-darkblue mb-4">Flexible Pricing</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer customized pricing based on your business size and specific needs. Contact us for a personalized quote.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition hover:shadow-xl">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-saillent-darkblue mb-4">Starter</h3>
                    <p className="text-gray-600 mb-6">Perfect for small businesses looking to improve customer retention.</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-saillent-darkblue">$1,499</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Basic Churn Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Monthly Retention Reports</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Email Support</span>
                      </li>
                    </ul>
                    <a 
                      href="/contact" 
                      className="border-2 border-saillent-orange text-saillent-orange font-medium px-8 py-3 rounded-full hover:bg-saillent-orange hover:text-white transition block text-center"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-saillent-orange transition hover:shadow-2xl transform scale-105">
                  <div className="bg-saillent-orange text-white text-center py-2 font-medium">Most Popular</div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-saillent-darkblue mb-4">Professional</h3>
                    <p className="text-gray-600 mb-6">Comprehensive churn reduction and win-back campaigns for growing businesses.</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-saillent-darkblue">$2,999</span>
                      <span className="text-gray-500">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Advanced Churn Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Win-Back Campaign Setup</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">UX Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Weekly Progress Calls</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Priority Support</span>
                      </li>
                    </ul>
                    <a 
                      href="/contact" 
                      className="bg-saillent-orange text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition block text-center shadow-lg hover:shadow-xl"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition hover:shadow-xl">
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-saillent-darkblue mb-4">Enterprise</h3>
                    <p className="text-gray-600 mb-6">Full-suite solution with ML-powered prediction for large organizations.</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-saillent-darkblue">Custom</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">All Professional Features</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Custom ML Prediction Models</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">API Integration</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">Dedicated Account Manager</span>
                      </li>
                    </ul>
                    <a 
                      href="/contact" 
                      className="border-2 border-saillent-orange text-saillent-orange font-medium px-8 py-3 rounded-full hover:bg-saillent-orange hover:text-white transition block text-center"
                    >
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
