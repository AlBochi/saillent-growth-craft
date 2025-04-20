
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/HomePage/Hero";
import { CaseStudies } from "@/components/HomePage/CaseStudies";
import { FAQ } from "@/components/HomePage/FAQ";
import { CallToAction } from "@/components/HomePage/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CaseStudies />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
