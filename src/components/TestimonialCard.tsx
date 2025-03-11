
import { Testimonial } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center mb-6">
          {testimonial.imageUrl && (
            <div className="mr-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-bold text-lg">{testimonial.name}</h4>
            <p className="text-dealership-tertiary text-sm">{testimonial.role}</p>
            <p className="text-dealership-secondary text-xs font-medium mt-1">
              {testimonial.vehicle}
            </p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-dealership-secondary fill-dealership-secondary"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-dealership-tertiary italic flex-grow">"{testimonial.comment}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
