
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Data-Driven Strategies to Reduce Subscription Churn",
      category: "Churn Reduction",
      date: "April 14, 2025",
      author: "Jessica Martinez",
      excerpt: "Learn five proven strategies backed by data analytics that can help subscription businesses identify and address the root causes of customer churn.",
      image: "/lovable-uploads/e729c407-d7b5-4d27-9e80-c5beb53c3bdc.png",
      readTime: "8 min read"
    },
    {
      title: "How Machine Learning is Transforming Customer Retention",
      category: "ML Prediction",
      date: "April 10, 2025",
      author: "David Kim",
      excerpt: "Explore how predictive analytics and machine learning models are revolutionizing the way businesses approach customer retention and churn prediction.",
      image: "/lovable-uploads/f5eb2d4e-28a8-4e02-90e2-60c1d4cd5193.png",
      readTime: "6 min read"
    },
    {
      title: "The Hidden Costs of Customer Churn",
      category: "Business Growth",
      date: "April 5, 2025",
      author: "Alex Johnson",
      excerpt: "Beyond lost revenue, customer churn impacts your business in numerous ways. Discover the true cost of churn and why retention should be your priority.",
      image: "/lovable-uploads/43528d76-14a5-4073-9105-3576836b774e.png",
      readTime: "5 min read"
    },
    {
      title: "How to Dominate Local Search Rankings in 2025",
      category: "Reputation Management",
      date: "March 29, 2025",
      author: "Sarah Wilson",
      excerpt: "Local SEO has evolved significantly. Learn the latest strategies to ensure your business ranks at the top of local search results and attracts more customers.",
      image: "/lovable-uploads/84678f11-34bc-4d6b-ae9c-3bf50459899d.png",
      readTime: "7 min read"
    },
    {
      title: "Building Effective Win-Back Campaigns: A Step-by-Step Guide",
      category: "Win-Back Strategies",
      date: "March 22, 2025",
      author: "Jessica Martinez",
      excerpt: "Not all churned customers are gone forever. This comprehensive guide shows you how to create targeted campaigns to win back valuable former customers.",
      image: "/lovable-uploads/59851c75-64b2-4eb1-81ab-befbaefae4b0.png",
      readTime: "9 min read"
    },
    {
      title: "The Psychology of Customer Loyalty",
      category: "Customer Experience",
      date: "March 15, 2025",
      author: "Michael Chen",
      excerpt: "Understanding the psychological factors that drive customer loyalty can help you design better experiences and reduce churn. Dive into the science behind loyalty.",
      image: "/lovable-uploads/a6b8b645-d579-4cf1-a122-73f81572b294.png",
      readTime: "6 min read"
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
              <h1 className="text-4xl md:text-5xl font-bold text-saillent-darkblue mb-6">Blog</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Insights, strategies, and expert advice on customer retention, churn reduction, and reputation management.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                    <a href="#" className="block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    </a>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-saillent-orange font-medium">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <a href="#" className="block">
                        <h3 className="text-xl font-bold text-saillent-darkblue mb-3 hover:text-saillent-orange transition">{post.title}</h3>
                      </a>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <button className="bg-white border-2 border-saillent-orange text-saillent-orange font-medium px-8 py-3 rounded-full hover:bg-saillent-orange hover:text-white transition inline-flex items-center">
                  Load More Articles
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-saillent-darkblue mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest insights on customer retention, churn reduction, and reputation management delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-saillent-orange"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-saillent-orange text-white font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
