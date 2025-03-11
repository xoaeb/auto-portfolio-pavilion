
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  imageUrl?: string;
  vehicle: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Johnson",
    role: "Business Owner",
    comment: "The team at Elite Motors provided exceptional service. They helped me find the perfect luxury vehicle for my needs and made the buying process seamless.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    vehicle: "Mercedes-Benz S-Class"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Executive",
    comment: "I've purchased multiple vehicles from Elite Motors and have always been impressed by their attention to detail and customer service.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    vehicle: "Range Rover Sport"
  },
  {
    id: "3",
    name: "David Chen",
    role: "Tech Entrepreneur",
    comment: "Elite Motors has the best selection of high-end vehicles in the region. Their staff is knowledgeable and never pushy.",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    vehicle: "Porsche 911"
  },
];
