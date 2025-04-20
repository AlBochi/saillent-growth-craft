
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    size: "",
    industry: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    
    // Simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll be in touch soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      size: "",
      industry: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-saillent-darkblue mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to reduce churn and drive growth? Get in touch with our team to learn how Saillent can help your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-saillent-darkblue mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Whether you have questions about our services, want to schedule a demo, or are ready to start reducing churn, our team is here to help.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-saillent-mint rounded-full flex items-center justify-center mr-4 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-saillent-darkblue mb-1">Phone</h3>
                        <p className="text-gray-600 mb-1">(555) 123-4567</p>
                        <p className="text-gray-500 text-sm">Monday-Friday, 9AM-6PM EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-saillent-mint rounded-full flex items-center justify-center mr-4 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-saillent-darkblue mb-1">Email</h3>
                        <p className="text-gray-600 mb-1">info@saillent.com</p>
                        <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-saillent-mint rounded-full flex items-center justify-center mr-4 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saillent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-saillent-darkblue mb-1">Office</h3>
                        <p className="text-gray-600 mb-1">1525 Analytics Drive, Suite 300</p>
                        <p className="text-gray-600">Data City, ST 12345</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-semibold text-saillent-darkblue mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-saillent-orange hover:text-white transition">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-saillent-orange hover:text-white transition">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Form */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h2 className="text-2xl font-bold text-saillent-darkblue mb-6">Send Us a Message</h2>
                  
                  {formStatus.submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                      {formStatus.message}
                    </div>
                  ) : formStatus.error ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      {formStatus.message}
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="size" className="block text-gray-700 font-medium mb-2">Company Size</label>
                        <select 
                          id="size" 
                          name="size" 
                          value={formData.size}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange appearance-none bg-white"
                          required
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="industry" className="block text-gray-700 font-medium mb-2">Industry</label>
                        <select 
                          id="industry" 
                          name="industry" 
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange appearance-none bg-white"
                          required
                        >
                          <option value="">Select industry</option>
                          <option value="SaaS">SaaS</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="HealthTech">HealthTech</option>
                          <option value="FinTech">FinTech</option>
                          <option value="Media/Entertainment">Media & Entertainment</option>
                          <option value="Education">Education</option>
                          <option value="LocalBusiness">Local Business</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-saillent-orange focus:border-saillent-orange"
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="bg-saillent-orange text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition shadow-lg hover:shadow-xl w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-96 bg-gray-300">
                  {/* In a real implementation, this would be a Google Maps or similar embed */}
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/71152a0c-8220-44b0-98e3-62f72ce829b9.png" 
                      alt="Office location" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
