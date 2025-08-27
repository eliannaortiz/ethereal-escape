import React, { useEffect, useState } from 'react';
import { MapPin, Car, Plane, Train, Clock, Mountain, Camera, Compass } from 'lucide-react';

const Location: React.FC = () => {
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

    const element = document.getElementById('location');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const transportOptions = [
    {
      icon: Plane,
      title: 'By Air',
      description: 'Nearest airport: Dehradun Airport (45 minutes drive)',
      details: ['Daily flights from Delhi, Mumbai', 'Complimentary airport transfer', 'Helicopter service available']
    },
    {
      icon: Car,
      title: 'By Road',
      description: 'Scenic 6-hour drive from Delhi via NH44',
      details: ['Well-maintained highways', 'Valet parking available', 'GPS coordinates provided']
    },
    {
      icon: Train,
      title: 'By Rail',
      description: 'Dehradun Railway Station (1 hour drive)',
      details: ['Regular trains from major cities', 'Luxury transfer service', 'Station pickup available']
    }
  ];

  const nearbyAttractions = [
    {
      icon: Mountain,
      title: 'Valley Viewpoint',
      distance: '2 km',
      description: 'Breathtaking panoramic views of the Himalayan foothills'
    },
    {
      icon: Camera,
      title: 'Ancient Temple',
      distance: '5 km',
      description: '12th-century temple with intricate stone carvings'
    },
    {
      icon: Compass,
      title: 'Nature Trail',
      distance: '1 km',
      description: 'Guided hiking trails through pristine forest paths'
    },
    {
      icon: Mountain,
      title: 'Waterfall',
      distance: '8 km',
      description: 'Hidden waterfall perfect for meditation and photography'
    }
  ];

  const locationHighlights = [
    { label: 'Altitude', value: '1,200 meters' },
    { label: 'Climate', value: 'Pleasant year-round' },
    { label: 'From Delhi', value: '280 kilometers' },
    { label: 'From Mumbai', value: '1,450 kilometers' }
  ];

  return (
    <section id="location" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Location & Surroundings
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Discover our secluded sanctuary nestled in the pristine Himalayan foothills, 
            where natural beauty meets accessibility, offering the perfect escape from urban life.
          </p>
        </div>

        {/* Location Overview */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="heading-tertiary mb-6">A Hidden Gem in Nature's Embrace</h3>
              <p className="text-body mb-6">
                Ethereal Escape is strategically located in the serene hills of Uttarakhand, 
                offering guests the perfect balance of seclusion and accessibility. Our 50-acre 
                property is surrounded by pristine forests, rolling hills, and crystal-clear streams.
              </p>
              <p className="text-body mb-8">
                The location provides a natural sanctuary where guests can disconnect from the 
                digital world and reconnect with nature, while still being within reach of 
                modern conveniences and transportation hubs.
              </p>
              
              {/* Location Stats */}
              <div className="grid grid-cols-2 gap-6">
                {locationHighlights.map((highlight, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-sage-600 mb-1">{highlight.value}</div>
                    <div className="text-sm text-gray-600">{highlight.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Scenic mountain landscape surrounding the hotel"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Transportation Options */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">How to Reach Us</h3>
            <p className="text-body max-w-2xl mx-auto">
              Multiple convenient transportation options ensure your journey to tranquility is as smooth as your stay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-sage-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{option.title}</h4>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="space-y-2">
                    {option.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">Nearby Attractions</h3>
            <p className="text-body max-w-2xl mx-auto">
              Explore the natural wonders and cultural treasures that surround our peaceful retreat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <attraction.icon className="w-6 h-6 text-sage-600" />
                </div>
                <h4 className="font-semibold mb-2">{attraction.title}</h4>
                <div className="text-sage-600 font-medium text-sm mb-2">{attraction.distance}</div>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="heading-tertiary mb-4">Plan Your Journey</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              Our concierge team is ready to assist with travel arrangements, local recommendations, 
              and ensuring your journey to Ethereal Escape is seamless and memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Get Directions
              </button>
              <button className="btn-secondary px-8 py-4">
                Arrange Transportation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;