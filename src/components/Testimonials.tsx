
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-dealership-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from our valued clients about their experiences with Elite Motors
            and how we've helped them find their perfect luxury vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
