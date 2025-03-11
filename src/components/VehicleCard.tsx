
import { Vehicle } from "@/data/vehicles";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Gauge, Fuel, BarChart3 } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={vehicle.imageUrl}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {vehicle.featured && (
          <div className="absolute top-4 right-4 bg-dealership-secondary text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-dealership-primary mb-1">{vehicle.name}</h3>
          <p className="text-2xl font-bold text-dealership-secondary">{formatPrice(vehicle.price)}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-dealership-tertiary" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center">
            <Gauge className="mr-2 h-4 w-4 text-dealership-tertiary" />
            <span>{vehicle.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center">
            <Fuel className="mr-2 h-4 w-4 text-dealership-tertiary" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center">
            <BarChart3 className="mr-2 h-4 w-4 text-dealership-tertiary" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <p className="text-dealership-tertiary text-sm mb-6">{vehicle.description}</p>

        <div className="mt-auto flex flex-col space-y-2">
          <Button className="w-full bg-dealership-primary hover:bg-dealership-primary/90">View Details</Button>
          <Button variant="outline" className="w-full border-dealership-secondary text-dealership-secondary hover:bg-dealership-secondary hover:text-white">
            Schedule Test Drive
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
