import React, { useState, useEffect } from 'react';
import { Wifi, Car, Coffee, Waves, Leaf, Users, Bed, Bath } from 'lucide-react';

interface RoomsProps {
  onBookingClick: () => void;
}

interface Room {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  size: string;
  occupancy: string;
  amenities: string[];
  features: { icon: React.ElementType; text: string }[];
  isPopular?: boolean;
}

const Rooms: React.FC<RoomsProps> = ({ onBookingClick }) => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
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

    const element = document.getElementById('rooms');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const rooms: Room[] = [
    {
      id: 'deluxe-garden',
      name: 'Deluxe Garden View',
      price: '₹12,000',
      originalPrice: '₹15,000',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Serene garden views with contemporary luxury amenities and private balcony overlooking our organic gardens.',
      size: '450 sq ft',
      occupancy: '2 Adults',
      amenities: ['King Size Bed', 'Private Balcony', 'Garden View', 'Premium Linens', 'Mini Bar', 'Work Desk'],
      features: [
        { icon: Bed, text: 'King Size Bed' },
        { icon: Leaf, text: 'Garden View' },
        { icon: Wifi, text: 'High-Speed WiFi' },
        { icon: Coffee, text: 'Premium Mini Bar' }
      ]
    },
    {
      id: 'premium-valley',
      name: 'Premium Valley Suite',
      price: '₹18,000',
      originalPrice: '₹22,000',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Spacious suite with panoramic valley views, separate living area, and luxury bathroom with soaking tub.',
      size: '650 sq ft',
      occupancy: '2-3 Adults',
      amenities: ['Separate Living Area', 'Valley Views', 'Soaking Tub', 'Walk-in Closet', 'Private Terrace', 'Butler Service'],
      features: [
        { icon: Waves, text: 'Soaking Tub' },
        { icon: Users, text: 'Separate Living' },
        { icon: Car, text: 'Valet Parking' },
        { icon: Bath, text: 'Luxury Bathroom' }
      ],
      isPopular: true
    },
    {
      id: 'luxury-wellness',
      name: 'Luxury Wellness Retreat',
      price: '₹25,000',
      originalPrice: '₹30,000',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Ultimate wellness experience with private yoga deck, meditation corner, and direct spa access.',
      size: '800 sq ft',
      occupancy: '2 Adults',
      amenities: ['Private Yoga Deck', 'Meditation Corner', 'Spa Access', 'Wellness Minibar', 'Aromatherapy', 'Personal Trainer'],
      features: [
        { icon: Leaf, text: 'Yoga Deck' },
        { icon: Waves, text: 'Spa Access' },
        { icon: Users, text: 'Personal Trainer' },
        { icon: Coffee, text: 'Wellness Bar' }
      ]
    },
    {
      id: 'presidential-villa',
      name: 'Presidential Spa Villa',
      price: '₹35,000',
      originalPrice: '₹42,000',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Our most exclusive accommodation featuring private spa, infinity pool, and dedicated concierge service.',
      size: '1200 sq ft',
      occupancy: '4 Adults',
      amenities: ['Private Infinity Pool', 'Personal Spa', 'Concierge Service', 'Private Chef', 'Helicopter Pad Access', 'Wine Cellar'],
      features: [
        { icon: Waves, text: 'Private Pool' },
        { icon: Users, text: 'Concierge' },
        { icon: Car, text: 'Helicopter Access' },
        { icon: Coffee, text: 'Private Chef' }
      ]
    }
  ];

  const RoomModal = ({ room, onClose }: { room: Room; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-64 md:h-80 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-3xl font-semibold mb-2">{room.name}</h3>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>{room.size}</span>
                <span>•</span>
                <span>{room.occupancy}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-3xl font-bold text-sage-600">{room.price}</div>
              {room.originalPrice && (
                <div className="text-lg text-gray-400 line-through">{room.originalPrice}</div>
              )}
              <div className="text-sm text-gray-500">per night</div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">{room.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="w-5 h-5 text-sage-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Amenities</h4>
              <div className="space-y-2">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBookingClick}
              className="btn-primary flex-1"
            >
              Experience This Retreat
            </button>
            <button
              onClick={onClose}
              className="btn-secondary flex-1"
            >
              View Other Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="rooms" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Rooms & Suites
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Each accommodation is a sanctuary of comfort, thoughtfully designed to provide 
            the perfect balance of luxury and tranquility for your ultimate retreat experience.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => setSelectedRoom(room)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {room.isPopular && (
                    <div className="absolute top-4 left-4 bg-sage-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-lg font-bold text-sage-600">{room.price}</div>
                    {room.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{room.originalPrice}</div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-sage-600 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{room.size}</span>
                    <span>{room.occupancy}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {room.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <feature.icon className="w-4 h-4 text-sage-600" />
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-secondary group-hover:btn-primary transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-sage-50 rounded-2xl p-8 md:p-12">
            <h3 className="heading-tertiary mb-4">Can't Decide?</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              Our hospitality experts are here to help you choose the perfect accommodation 
              for your unique retreat experience. Every room comes with our signature 
              wellness amenities and personalized service.
            </p>
            <button
              onClick={onBookingClick}
              className="btn-primary px-8 py-4"
            >
              Speak with Our Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  );
};

export default Rooms;