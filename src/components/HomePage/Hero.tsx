import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative bg-white pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-saillent-mint rounded-bl-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-saillent-orange rounded-tr-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-saillent-darkblue">Decoding churn.</span><br />
              <span className="text-saillent-orange">Driving growth.</span><br />
              <span className="text-saillent-darkblue">Empowering success.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether it’s churn, low LTV, or disengaged users —{" "}
              <span className="text-saillent-darkblue font-semibold">
                we turn your data into winning retention strategies.
              </span>
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 bg-white rounded-lg shadow-2xl p-1">
                <img
                  src="/lovable-uploads/ffbee77b-4e55-4f81-9eda-8f5f134cd420.png"
                  alt="Saillent Logo"
                  className="w-full rounded-md"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-saillent-mint rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-saillent-orange rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
