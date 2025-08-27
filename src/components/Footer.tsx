import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Wellness & Spa', href: '#wellness' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const services = [
    { name: 'Wellness Programs', href: '#wellness' },
    { name: 'Spa Treatments', href: '#wellness' },
    { name: 'Yoga & Meditation', href: '#wellness' },
    { name: 'Private Dining', href: '#dining' },
    { name: 'Airport Transfer', href: '#contact' },
    { name: 'Concierge Service', href: '#contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ethereal Escape
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Where tranquility meets luxury in the pristine Himalayan foothills. 
                Experience authentic wellness and sustainable hospitality.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sage-400" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sage-400" />
                  <span className="text-gray-300">inquire@etherealescape.in</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-sage-400 mt-1" />
                  <div className="text-gray-300">
                    <p>Village Kanatal, Tehri Garhwal</p>
                    <p>Uttarakhand 249130, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-sage-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-300 hover:text-sage-400 transition-colors duration-300 text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Information</h4>
              <ul className="space-y-3 mb-8">
                {policies.map((policy, index) => (
                  <li key={index}>
                    <a
                      href={policy.href}
                      className="text-gray-300 hover:text-sage-400 transition-colors duration-300"
                    >
                      {policy.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media Links */}
              <div>
                <h5 className="font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="py-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Awards & Recognition</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <span>🏆 Best Wellness Retreat 2024 - Luxury Travel India</span>
              <span>🌿 Sustainable Hospitality Excellence - Green Hotels Association</span>
              <span>⭐ TripAdvisor Travelers' Choice Award</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© {currentYear} Ethereal Escape. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for conscious travelers</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="bg-sage-900 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get exclusive offers and wellness tips delivered to your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
              <button className="px-6 py-2 bg-sage-600 hover:bg-sage-700 rounded-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;