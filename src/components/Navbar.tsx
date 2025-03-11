
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-heading font-bold text-dealership-primary">
            Elite<span className="text-dealership-secondary">Motors</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#vehicles" className="font-medium hover:text-dealership-secondary transition-colors">
            Vehicles
          </a>
          <a href="#about" className="font-medium hover:text-dealership-secondary transition-colors">
            About
          </a>
          <a href="#testimonials" className="font-medium hover:text-dealership-secondary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="font-medium hover:text-dealership-secondary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-dealership-secondary" />
            <span className="font-medium">+1 (555) 123-4567</span>
          </div>
          <Button className="bg-dealership-secondary hover:bg-dealership-secondary/90 text-white">
            Schedule Test Drive
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-dealership-primary" />
          ) : (
            <Menu className="h-6 w-6 text-dealership-primary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <a
              href="#vehicles"
              onClick={toggleMenu}
              className="py-2 px-4 hover:bg-dealership-light rounded transition-colors"
            >
              Vehicles
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="py-2 px-4 hover:bg-dealership-light rounded transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={toggleMenu}
              className="py-2 px-4 hover:bg-dealership-light rounded transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="py-2 px-4 hover:bg-dealership-light rounded transition-colors"
            >
              Contact
            </a>
            <div className="flex items-center py-2 px-4">
              <Phone className="w-4 h-4 mr-2 text-dealership-secondary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <Button className="bg-dealership-secondary hover:bg-dealership-secondary/90 text-white mx-4">
              Schedule Test Drive
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
