
import { vehicles } from "@/data/vehicles";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FeaturedVehicles = () => {
  // Get only featured vehicles
  const featuredVehicles = vehicles.filter(vehicle => vehicle.featured);

  return (
    <section id="vehicles" className="section bg-dealership-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="text-dealership-tertiary max-w-2xl mx-auto">
            Discover our exclusive selection of premium vehicles, each representing the pinnacle of automotive excellence and luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-dealership-primary hover:bg-dealership-primary/90 text-white group"
          >
            View All Vehicles
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
