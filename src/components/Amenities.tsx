import React, { useEffect, useState } from 'react';
import { 
  Waves, 
  Leaf, 
  Users, 
  BookOpen, 
  Coffee, 
  Car, 
  Headphones, 
  Plane,
  Dumbbell,
  Utensils,
  Wifi,
  Shield
} from 'lucide-react';

const Amenities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('amenities');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const amenities = [
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Stunning infinity pool overlooking the valley with temperature-controlled water and poolside service.',
      category: 'Recreation'
    },
    {
      icon: Leaf,
      title: 'Wellness Spa',
      description: 'Award-winning spa offering Ayurvedic treatments, aromatherapy, and holistic healing experiences.',
      category: 'Wellness'
    },
    {
      icon: Users,
      title: 'Yoga Pavilion',
      description: 'Open-air yoga pavilion with expert instructors offering daily sunrise and sunset sessions.',
      category: 'Wellness'
    },
    {
      icon: Utensils,
      title: 'Organic Garden',
      description: 'Farm-to-table organic garden supplying fresh herbs, vegetables, and fruits for our restaurants.',
      category: 'Dining'
    },
    {
      icon: BookOpen,
      title: 'Library Lounge',
      description: 'Curated collection of books in a serene setting with comfortable reading nooks and tea service.',
      category: 'Relaxation'
    },
    {
      icon: Coffee,
      title: 'Private Dining',
      description: 'Intimate dining experiences with personal chef service in scenic locations around the property.',
      category: 'Dining'
    },
    {
      icon: Headphones,
      title: 'Concierge Services',
      description: '24/7 personalized concierge service to arrange experiences, transportation, and special requests.',
      category: 'Service'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet parking service with secure covered parking for all guest vehicles.',
      category: 'Service'
    },
    {
      icon: Plane,
      title: 'Airport Transfer',
      description: 'Luxury airport transfer service with professional chauffeurs and premium vehicles.',
      category: 'Transportation'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art fitness center with modern equipment and personal training services.',
      category: 'Recreation'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet access throughout the property and in all accommodations.',
      category: 'Technology'
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security service ensuring guest safety and privacy throughout your stay.',
      category: 'Service'
    }
  ];

  const categories = ['All', 'Wellness', 'Dining', 'Recreation', 'Service', 'Transportation', 'Technology', 'Relaxation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAmenities = activeCategory === 'All' 
    ? amenities 
    : amenities.filter(amenity => amenity.category === activeCategory);

  return (
    <section id="amenities" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            World-Class Amenities
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Indulge in our carefully curated collection of luxury amenities, each designed to enhance 
            your retreat experience and provide moments of pure tranquility and rejuvenation.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-sage-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-sage-100 hover:text-sage-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAmenities.map((amenity, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-sage-200 group-hover:scale-110 transition-all duration-300">
                  <amenity.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-sage-600 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {amenity.description}
                </p>
                <span className="inline-block px-3 py-1 bg-sage-50 text-sage-700 text-xs font-medium rounded-full">
                  {amenity.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="heading-tertiary mb-4">Experience Every Amenity</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              Our amenities are included in your stay, designed to create unforgettable moments 
              and provide everything you need for the perfect retreat experience.
            </p>
            <button className="btn-primary px-8 py-4">
              Plan Your Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;