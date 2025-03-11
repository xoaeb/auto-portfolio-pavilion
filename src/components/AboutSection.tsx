
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Elite Motors</h2>
            <p className="text-dealership-tertiary mb-6">
              Since 2005, Elite Motors has been the premier destination for luxury automotive enthusiasts. 
              We pride ourselves on offering an unparalleled selection of the world's finest vehicles 
              and delivering a purchasing experience that exceeds all expectations.
            </p>
            <p className="text-dealership-tertiary mb-6">
              Our team of automotive experts is passionate about helping you find the perfect vehicle 
              that aligns with your lifestyle and preferences. We believe in building lasting relationships 
              with our clients based on trust, integrity, and exceptional service.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dealership-light rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-dealership-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Quality Assured</h4>
                  <p className="text-sm text-dealership-tertiary">Premium vehicles only</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-dealership-light rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-dealership-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">18+ Years</h4>
                  <p className="text-sm text-dealership-tertiary">Industry experience</p>
                </div>
              </div>
            </div>
            <Button className="bg-dealership-secondary hover:bg-dealership-secondary/90 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-dealership-secondary/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-dealership-secondary/10 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000"
                alt="Elite Motors Showroom"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-dealership-light p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Award className="w-8 h-8 text-dealership-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
            <p className="text-dealership-tertiary">
              Curated collection of the world's most prestigious luxury vehicles
            </p>
          </div>
          
          <div className="bg-dealership-light p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Shield className="w-8 h-8 text-dealership-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p className="text-dealership-tertiary">
              Rigorous inspection process ensures every vehicle meets our high standards
            </p>
          </div>
          
          <div className="bg-dealership-light p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Users className="w-8 h-8 text-dealership-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
            <p className="text-dealership-tertiary">
              Dedicated specialists to guide you through every step of your journey
            </p>
          </div>
          
          <div className="bg-dealership-light p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <Clock className="w-8 h-8 text-dealership-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lifetime Support</h3>
            <p className="text-dealership-tertiary">
              Continued assistance and maintenance services after your purchase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
