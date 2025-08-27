import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="heading-primary mb-6 text-white">
            Where Tranquility
            <br />
            <span className="text-cream-200">Meets Luxury</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200 font-light max-w-2xl mx-auto">
            Escape to a world of serene beauty and unparalleled comfort in the heart of India's most breathtaking landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onBookingClick}
              className="btn-primary px-12 py-4 text-lg"
            >
              Experience Retreat
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-12 py-4 text-lg text-white border-white hover:bg-white hover:text-gray-800"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm font-light tracking-wide">Scroll to explore</span>
          <ChevronDown 
            className="animate-bounce" 
            size={24}
          />
        </button>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-white/10 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-2000 hidden lg:block"></div>
    </section>
  );
};

export default Hero;