import React, { useEffect, useState } from 'react';
import { Award, Users, MapPin, Star } from 'lucide-react';

const About: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, number: '15+', label: 'Awards Won' },
    { icon: Users, number: '2000+', label: 'Happy Guests' },
    { icon: MapPin, number: '50+', label: 'Acres of Serenity' },
    { icon: Star, number: '4.9', label: 'Guest Rating' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="heading-secondary mb-6">
              A Sanctuary of 
              <span className="block text-sage-600">Tranquil Luxury</span>
            </h2>
            <div className="space-y-6 text-body">
              <p>
                Nestled amidst the pristine landscapes of India's most breathtaking region, 
                Ethereal Escape represents the pinnacle of luxury hospitality. Our boutique 
                retreat seamlessly blends contemporary elegance with timeless serenity.
              </p>
              <p>
                Founded on the philosophy that true luxury lies in authentic experiences, 
                we curate moments of profound tranquility. Every detail, from our 
                handcrafted furnishings to our organic gardens, reflects our commitment 
                to sustainable luxury and mindful hospitality.
              </p>
              <p>
                Our award-winning property spans 50 acres of untouched natural beauty, 
                offering an intimate escape for discerning travelers seeking rejuvenation 
                of mind, body, and spirit.
              </p>
            </div>
            
            {/* Awards & Recognition */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Recent Recognition</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• "Best Wellness Retreat 2024" - Luxury Travel India</p>
                <p>• "Sustainable Hospitality Excellence" - Green Hotels Association</p>
                <p>• "Outstanding Guest Experience" - TripAdvisor Travelers' Choice</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury hotel interior with elegant furnishings"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sage-600">50+</div>
                  <div className="text-sm text-gray-600">Acres of Serenity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-4 group-hover:bg-sage-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-sage-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-tertiary mb-6 text-sage-700">Our Philosophy</h3>
            <p className="text-xl leading-relaxed text-gray-600 italic">
              "We believe that true luxury is not about opulence, but about creating spaces 
              where the soul can breathe, the mind can rest, and the spirit can soar. 
              Every moment at Ethereal Escape is designed to reconnect you with what matters most."
            </p>
            <div className="mt-6 text-gray-500">
              — Founder & Creative Director
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;