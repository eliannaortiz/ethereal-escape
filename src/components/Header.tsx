import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ethereal Escape
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('rooms')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('dining')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Dining
            </button>
            <button 
              onClick={() => scrollToSection('wellness')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Wellness
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="tel:+91-9876543210"
                className={`flex items-center space-x-2 transition-colors duration-300 hover:opacity-80 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a 
                href="mailto:inquire@etherealescape.in"
                className={`flex items-center space-x-2 transition-colors duration-300 hover:opacity-80 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                <Mail size={16} />
                <span>Inquire</span>
              </a>
            </div>
            <button
              onClick={onBookingClick}
              className="btn-primary"
            >
              Experience Retreat
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('rooms')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Rooms
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('dining')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Dining
              </button>
              <button 
                onClick={() => scrollToSection('wellness')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Wellness
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 font-medium text-left hover:text-sage-600 transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={onBookingClick}
                  className="btn-primary w-full"
                >
                  Experience Retreat
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;