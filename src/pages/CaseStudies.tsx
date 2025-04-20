
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/HomePage/CallToAction";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "30% Churn Reduction for SaaS Platform",
      company: "Analytics Cloud",
      category: "Churn Reduction",
      description: "Analytics Cloud, a growing SaaS data visualization platform, was experiencing a troubling 8% monthly churn rate that threatened their growth trajectory. Their team had tried several internal initiatives but couldn't identify the root causes of customer departures.",
      challenge: "Identify the key drivers of churn and implement a data-driven retention strategy to reduce monthly customer loss.",
      solution: [
        "Conducted comprehensive customer journey mapping across all user segments",
        "Analyzed product usage patterns to identify friction points and drop-off triggers",
        "Implemented cohort analysis to identify at-risk user segments",
        "Developed automated email sequences for different churn risk categories",
        "Created a retention dashboard for real-time monitoring of key metrics"
      ],
      results: [
        "Reduced monthly churn rate from 8% to 5.6% within 90 days",
        "Further reduction to 5% by month 6, representing a 37.5% overall improvement",
        "Increased average customer lifetime value by 25%",
        "ROI of 7.5x on Saillent's services within the first year"
      ],
      testimonial: {
        quote: "Saillent's approach was eye-opening. They uncovered churn drivers we never suspected and provided actionable strategies that delivered measurable results. The ROI has been incredible.",
        author: "Mark Johnson",
        title: "COO, Analytics Cloud"
      },
      image: "/lovable-uploads/a6b8b645-d579-4cf1-a122-73f81572b294.png"
    },
    {
      title: "Local Dental Practice SEO Transformation",
      company: "City Dental Care",
      category: "Reputation Management",
      description: "City Dental Care, a local dental practice with three locations, was struggling with visibility in local search results and had a mediocre 3.8 average rating across review platforms. Despite providing excellent service, they weren't appearing in top results for key search terms.",
      challenge: "Improve local search rankings, increase the quality and quantity of reviews, and establish the practice as the premier dental option in their service areas.",
      solution: [
        "Optimized Google Business Profiles for all three locations",
        "Implemented a systematic review acquisition strategy for satisfied patients",
        "Developed a review response protocol for both positive and negative feedback",
        "Created location-specific landing pages optimized for local search",
        "Built and cleaned up local citations across directory sites"
      ],
      results: [
        "Increased Google review average from 3.8 to 4.9 stars",
        "Achieved top 3 ranking for all target keywords including '[city] dentist'",
        "Grew new patient appointments by 22% year-over-year",
        "Expanded visibility for specialty services like Invisalign and cosmetic dentistry"
      ],
      testimonial: {
        quote: "The transformation of our online presence has been remarkable. We're now the first result when people search for a dentist in our area, and our appointment book reflects that change. The ROI on Saillent's services has exceeded our expectations.",
        author: "Dr. Rebecca Chen",
        title: "Owner, City Dental Care"
      },
      image: "/lovable-uploads/84678f11-34bc-4d6b-ae9c-3bf50459899d.png"
    },
    {
      title: "Predictive Churn Model for FinTech Platform",
      company: "WealthTrack",
      category: "ML-Powered Prediction",
      description: "WealthTrack, a subscription-based financial planning platform, was experiencing unexpected customer departures despite high initial engagement. They needed a way to identify at-risk accounts before they showed obvious signs of disengagement.",
      challenge: "Develop a predictive model to identify customers at risk of churning 30-60 days in advance, allowing for targeted intervention.",
      solution: [
        "Built a custom machine learning model using XGBoost with 23 behavioral and transactional features",
        "Deployed a real-time scoring API that assessed churn risk daily",
        "Integrated with Salesforce CRM to flag high-risk accounts for the customer success team",
        "Created automated trigger workflows for different risk tiers",
        "Implemented a feedback loop to continuously improve model accuracy"
      ],
      results: [
        "Achieved 87% accuracy in predicting churns 45 days in advance",
        "Reduced overall churn rate by 24% through early intervention",
        "Saved an estimated $1.2M in annual recurring revenue",
        "Improved customer success team efficiency by prioritizing at-risk accounts"
      ],
      testimonial: {
        quote: "The predictive model Saillent built for us has transformed how we approach retention. We no longer wait for warning signs – we can now proactively reach out to customers before they've even decided to leave. It's been a game-changer for our business.",
        author: "Sophia Patel",
        title: "CTO, WealthTrack"
      },
      image: "/lovable-uploads/84b47e55-42ff-42f1-9497-c1436b6fc53a.png"
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
              <h1 className="text-4xl md:text-5xl font-bold text-saillent-darkblue mb-6">Case Studies</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore how Saillent has helped businesses reduce churn, enhance retention, and improve their online reputation with data-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-16">
                {caseStudies.map((study, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden" id={`case-${index}`}>
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-1/2 p-8 lg:p-12">
                        <div className="text-sm text-saillent-orange font-medium mb-2">{study.category}</div>
                        <h2 className="text-3xl font-bold text-saillent-darkblue mb-2">{study.title}</h2>
                        <div className="text-lg font-medium text-gray-700 mb-6">{study.company}</div>
                        
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-saillent-darkblue mb-3">Challenge</h3>
                          <p className="text-gray-600 mb-3">{study.description}</p>
                          <p className="text-gray-700 font-medium">{study.challenge}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-8 lg:px-12 pb-12">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-saillent-darkblue mb-4">Solution</h3>
                        <ul className="space-y-3">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saillent-orange mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-saillent-darkblue mb-4">Results</h3>
                        <ul className="space-y-3">
                          {study.results.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="text-lg italic text-gray-600 mb-4">"{study.testimonial.quote}"</div>
                        <div className="font-medium text-saillent-darkblue">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-500">{study.testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
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

export default CaseStudies;
