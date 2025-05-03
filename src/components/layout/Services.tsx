import React from "react";

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Data-Backed Insights</h3>
            <p>Analyze user behavior to uncover hidden churn triggers.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Segment-Level LTV</h3>
            <p>Predict churn risk and identify high-value customer segments.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Campaigns & UX Changes</h3>
            <p>Implement targeted campaigns and UX improvements to retain customers.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Customer Acquisition Funnel</h3>
            <p>Capture leads using QR codes and convert them into loyal customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
