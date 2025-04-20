
export function FAQ() {
  const faqs = [
    {
      question: "How quickly can I expect to see results from the churn reduction service?",
      answer: "Most clients begin to see measurable improvements in retention metrics within 4-6 weeks. However, the full impact of our churn reduction strategies typically becomes apparent after 2-3 months, as we continuously refine our approach based on incoming data and market response."
    },
    {
      question: "Is the reputation management service suitable for all types of businesses?",
      answer: "Our reputation management service is particularly effective for local service businesses, healthcare providers, professional services, and retail establishments. While we can adapt our approach for various industries, businesses with physical locations that depend on local customers tend to see the most dramatic results."
    },
    {
      question: "How do you build the machine learning models for churn prediction?",
      answer: "We start by analyzing your historical customer data to identify patterns indicating potential churn. Our data scientists use a combination of algorithms (primarily XGBoost, Random Forests, and neural networks) to build customized models. We then validate these models using a holdout dataset and continuously refine them as new data becomes available."
    },
    {
      question: "Do I need to have technical expertise to implement your recommendations?",
      answer: "No technical expertise is required. Our team works alongside yours to implement all recommendations, and we provide comprehensive documentation and training. For more technical solutions, our engineers can directly integrate with your systems or provide your technical team with detailed implementation guides."
    },
    {
      question: "How do you measure the ROI of your services?",
      answer: "We establish clear metrics at the beginning of our engagement based on your business goals. These typically include retention rate improvements, LTV increases, reduced CAC, increased review scores, search ranking improvements, and ultimately, revenue impact. We provide regular reports showing direct ROI calculations based on these agreed-upon metrics."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-saillent-darkblue mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? We've got answers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-saillent-darkblue mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see your question here? Contact us for more information.
            </p>
            <a 
              href="mailto:info@saillent.com" 
              className="text-saillent-orange font-medium hover:text-saillent-darkblue transition"
            >
              info@saillent.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
