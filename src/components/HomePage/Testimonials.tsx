
export function Testimonials() {
  const testimonials = [
    {
      quote: "Saillent's approach to churn reduction was eye-opening. Their data-driven insights helped us identify problems we didn't even know existed. Within months, our retention rate improved significantly.",
      author: "Sarah Johnson",
      title: "COO, CloudSoft Solutions",
      image: "/placeholder.svg"
    },
    {
      quote: "The reputation management service is incredible. Our Google rankings improved within weeks, and we're now the top result for our key search terms. The ROI has been phenomenal.",
      author: "Michael Chen",
      title: "Owner, West Side Dental",
      image: "/placeholder.svg"
    },
    {
      quote: "Their machine learning prediction model has completely transformed how we approach retention. We can now identify at-risk customers before they even think about leaving.",
      author: "Laura Hernandez",
      title: "CTO, FinTech Innovations",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-saillent-darkblue mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Saillent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-md relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-saillent-mint text-6xl font-serif opacity-20">
                "
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-saillent-darkblue">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
