
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById("vehicles");
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1152')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dealership-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mt-16">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
            Experience Luxury <br />
            <span className="text-dealership-secondary">Beyond Imagination</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Elite Motors offers an unparalleled selection of premium vehicles
            with personalized service that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              className="bg-dealership-secondary hover:bg-dealership-secondary/90 text-white text-lg py-6 px-8"
              onClick={scrollToVehicles}
            >
              Explore Our Collection
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-dealership-primary text-lg py-6 px-8"
            >
              Schedule a Test Drive
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-10 h-10 text-white cursor-pointer" 
          onClick={scrollToVehicles}
        />
      </div>
    </section>
  );
};

export default Hero;
