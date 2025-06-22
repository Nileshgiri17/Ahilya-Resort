
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-marcellus text-resort-navy">
              Ahilya Resort
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm font-medium transition-colors hover:text-resort-blue ${
                  isActive(item.path) ? 'text-resort-blue' : 'text-resort-dark'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="font-rubik border-resort-blue text-resort-blue hover:bg-resort-blue hover:text-white"
              asChild
            >
              <Link to="/search">Book Now</Link>
            </Button>
            <Button
              size="sm"
              className="font-rubik bg-resort-blue hover:bg-resort-navy"
              asChild
            >
              <a href="tel:+919425046824" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-resort-dark"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 font-sans text-sm font-medium transition-colors ${
                    isActive(item.path) ? 'text-resort-blue bg-resort-light' : 'text-resort-dark hover:bg-resort-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-rubik border-resort-blue text-resort-blue"
                  asChild
                >
                  <Link to="/search" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full font-rubik bg-resort-blue hover:bg-resort-navy"
                  asChild
                >
                  <a href="tel:+919425046824" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
