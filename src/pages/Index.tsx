import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PatientApp from "@/components/PatientApp";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <PatientApp />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
