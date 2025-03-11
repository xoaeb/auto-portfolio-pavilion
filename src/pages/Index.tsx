
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedVehicles />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
