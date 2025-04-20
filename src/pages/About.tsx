
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CallToAction } from "@/components/HomePage/CallToAction";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-saillent-darkblue mb-6">About Saillent</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We decode churn and empower subscription-based companies to grow sustainably through data-driven strategies and machine learning.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-saillent-darkblue mb-6">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    At Saillent, we believe that retaining customers is just as important as acquiring them. Our mission is to help subscription-based businesses understand why their customers leave and provide actionable strategies to reduce churn.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We combine advanced analytics, machine learning, and industry expertise to deliver data-driven solutions that increase customer lifetime value and drive sustainable growth.
                  </p>
                  <p className="text-gray-600">
                    Our approach is straightforward: no fluff, just results. We're committed to providing clear, actionable insights that make a measurable difference to your bottom line.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/f5eb2d4e-28a8-4e02-90e2-60c1d4cd5193.png"
                    alt="Modern office building" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-saillent-mint rounded-full opacity-50 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-saillent-darkblue mb-12 text-center">Our Core Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-saillent-mint rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue mb-3">Data-Driven Integrity</h3>
                  <p className="text-gray-600">
                    We believe in letting the data guide our decisions. We maintain the highest standards of data privacy and security while delivering honest, data-backed insights.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-saillent-mint rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue mb-3">Results-Focused Innovation</h3>
                  <p className="text-gray-600">
                    We continuously innovate our approaches and technologies, but always with a clear focus on delivering measurable, meaningful results for our clients.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <div className="w-14 h-14 bg-saillent-mint rounded-full flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue mb-3">Collaborative Partnership</h3>
                  <p className="text-gray-600">
                    We don't just provide services; we build partnerships. We work closely with your team, understanding your unique challenges and co-creating solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-saillent-darkblue mb-12 text-center">Our Leadership Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-5 mx-auto w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="CEO" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue">Jessica Martinez</h3>
                  <p className="text-saillent-orange font-medium mb-3">CEO & Founder</p>
                  <p className="text-gray-600">
                    Former data science leader with 15+ years experience in customer retention and analytics.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-5 mx-auto w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="CTO" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue">David Kim</h3>
                  <p className="text-saillent-orange font-medium mb-3">CTO</p>
                  <p className="text-gray-600">
                    Machine learning expert with background in developing predictive models for Fortune 500 companies.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-5 mx-auto w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
                    <img src="/placeholder.svg" alt="COO" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-saillent-darkblue">Alex Johnson</h3>
                  <p className="text-saillent-orange font-medium mb-3">COO</p>
                  <p className="text-gray-600">
                    Operations specialist with extensive experience scaling SaaS businesses and optimizing customer journeys.
                  </p>
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

export default About;
