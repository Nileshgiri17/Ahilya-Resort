import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-resort-navy text-white py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-marcellus mb-4">Ahilya Resort</h3>
            <p className="font-sans text-sm opacity-80">
              Experience luxury and tranquility on the banks of the sacred Narmada River in historic Maheshwar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-resort-blue transition-colors duration-300 hover-scale">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-resort-blue transition-colors duration-300 hover-scale">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-resort-blue transition-colors duration-300 hover-scale">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-rubik font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/rooms" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Rooms & Suites
              </Link>
              <Link to="/facilities" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Facilities
              </Link>
              <Link to="/gallery" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Gallery
              </Link>
              <Link to="/reviews" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Reviews
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-rubik font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                Terms & Conditions
              </Link>
              <Link to="/about" className="block font-sans text-sm opacity-80 hover:text-resort-blue hover:opacity-100 transition-all duration-300 story-link">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-rubik font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-resort-blue" />
                <a href="tel:+919425046824" className="font-sans text-sm hover:text-resort-blue transition-colors duration-300">
                  +91 9425046824
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-resort-blue" />
                <a href="mailto:ahilyaresort@gmail.com" className="font-sans text-sm hover:text-resort-blue transition-colors duration-300">
                  ahilyaresort@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-resort-blue mt-1" />
                <address className="font-sans text-sm opacity-80 not-italic">
                  Ahilya Resort, Mandleshwar,<br />
                  Maheshwar, Tulya,<br />
                  Madhya Pradesh 451224
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-sans text-sm opacity-60">
            © 2024 Ahilya Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
