import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex justify-center items-center text-white"
      style={{ backgroundImage: "url('/office-photo.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">We Reverse-Engineer Customer Churn—and Turn It Into Growth.</h1>
        <p className="mt-4 text-xl">
          Transforming customer churn into growth—powered by data-driven strategies.
        </p>
      </div>
    </section>
  );
};

export default Hero;
