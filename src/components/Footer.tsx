import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./Logo"; // Import the Logo component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            {/* Replace the text-based logo with the Logo component */}
            <div className="inline-block mb-4">
              <Logo />
            </div>
            <p className="text-white/80 max-w-md">
              Elevating Singapore interiors through innovative design and quality craftsmanship since 2010.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors button-hover" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors button-hover" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors button-hover" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors button-hover">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-white transition-colors button-hover">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors button-hover">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-white/70 mt-0.5" />
                <span className="text-white/80">123 Orchard Road, #05-01 Design Building, Singapore 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-white/70" />
                <a href="tel:+6591234567" className="text-white/80 hover:text-white transition-colors">+65 9123 4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-white/70" />
                <a href="mailto:info@renohaven.sg" className="text-white/80 hover:text-white transition-colors">info@renohaven.sg</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} RenoHaven Singapore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white/90 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white/90 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;