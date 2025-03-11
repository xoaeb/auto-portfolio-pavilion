
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dealership-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">
              Elite<span className="text-dealership-secondary">Motors</span>
            </h3>
            <p className="text-white/70 mb-6">
              Your premier destination for luxury cars, offering an unparalleled selection of the world's finest vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#vehicles" className="text-white/70 hover:text-dealership-secondary transition-colors">Vehicles</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-dealership-secondary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-dealership-secondary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-dealership-secondary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">New Vehicles</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">Pre-Owned Vehicles</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">Financing Options</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">Vehicle Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-dealership-secondary transition-colors">Parts & Accessories</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-dealership-secondary" />
                <span className="text-white/70">
                  123 Luxury Lane, Prestige Hills<br />
                  California, CA 90210
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-dealership-secondary" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-dealership-secondary" />
                <span className="text-white/70">info@elitemotors.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Elite Motors. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/70">
            <a href="#" className="hover:text-dealership-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dealership-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-dealership-secondary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
