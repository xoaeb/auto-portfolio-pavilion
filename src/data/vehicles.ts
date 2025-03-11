
export interface Vehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  description: string;
  imageUrl: string;
  featured: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Mercedes-Benz S-Class",
    make: "Mercedes-Benz",
    model: "S-Class",
    year: 2023,
    price: 112000,
    mileage: 1250,
    fuelType: "Hybrid",
    transmission: "Automatic",
    description: "Experience the epitome of luxury with the all-new Mercedes-Benz S-Class. Featuring cutting-edge technology and unmatched comfort.",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000",
    featured: true
  },
  {
    id: "2",
    name: "BMW 7 Series",
    make: "BMW",
    model: "7 Series",
    year: 2023,
    price: 98500,
    mileage: 850,
    fuelType: "Hybrid",
    transmission: "Automatic",
    description: "The new BMW 7 Series represents the pinnacle of automotive luxury and innovation with its sleek design and powerful performance.",
    imageUrl: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1000",
    featured: true
  },
  {
    id: "3",
    name: "Audi A8",
    make: "Audi",
    model: "A8",
    year: 2023,
    price: 89000,
    mileage: 1020,
    fuelType: "Hybrid",
    transmission: "Automatic",
    description: "The Audi A8 combines sophisticated design with state-of-the-art technology for an unparalleled driving experience.",
    imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000",
    featured: true
  },
  {
    id: "4",
    name: "Porsche 911",
    make: "Porsche",
    model: "911",
    year: 2023,
    price: 134500,
    mileage: 650,
    fuelType: "Gasoline",
    transmission: "Automatic",
    description: "The iconic Porsche 911 continues to set the standard for sports cars with its timeless design and exhilarating performance.",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    featured: true
  },
  {
    id: "5",
    name: "Range Rover Sport",
    make: "Land Rover",
    model: "Range Rover Sport",
    year: 2022,
    price: 95000,
    mileage: 2800,
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "The Range Rover Sport offers exceptional off-road capability without compromising on luxury and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000",
    featured: true
  },
  {
    id: "6",
    name: "Lexus LS",
    make: "Lexus",
    model: "LS",
    year: 2023,
    price: 82000,
    mileage: 980,
    fuelType: "Hybrid",
    transmission: "Automatic",
    description: "The Lexus LS redefines luxury with its meticulous craftsmanship and innovative technology.",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000",
    featured: true
  }
];
