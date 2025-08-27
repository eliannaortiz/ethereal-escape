import React, { useEffect, useState } from 'react';
import { Clock, Users, Award, Leaf, Wine, ChefHat } from 'lucide-react';

const Dining: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRestaurant, setActiveRestaurant] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('dining');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const restaurants = [
    {
      name: 'Serenity Restaurant',
      cuisine: 'Contemporary Indian & International',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Our signature restaurant offers an elevated dining experience with panoramic valley views. Chef Arjun creates innovative dishes using locally sourced ingredients and traditional techniques.',
      features: ['Farm-to-Table', 'Valley Views', 'Wine Pairing', 'Private Dining'],
      timings: 'Breakfast: 7:00 AM - 11:00 AM | Lunch: 12:30 PM - 3:00 PM | Dinner: 7:00 PM - 11:00 PM',
      specialties: ['Tandoor Specialties', 'Organic Salads', 'Artisanal Breads', 'Signature Cocktails']
    },
    {
      name: 'Garden Café',
      cuisine: 'Light Bites & Wellness Cuisine',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Nestled in our organic gardens, this charming café serves healthy, nutritious meals perfect for wellness-focused guests. Fresh juices, herbal teas, and light Mediterranean fare.',
      features: ['Organic Menu', 'Garden Setting', 'Wellness Focus', 'Fresh Juices'],
      timings: 'All Day: 8:00 AM - 8:00 PM',
      specialties: ['Cold-Pressed Juices', 'Buddha Bowls', 'Herbal Teas', 'Raw Desserts']
    },
    {
      name: 'Moonlight Terrace',
      cuisine: 'Fine Dining & Wine Bar',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'An intimate rooftop dining experience under the stars. Our sommelier-curated wine collection pairs perfectly with Chef\'s tasting menu featuring seasonal ingredients.',
      features: ['Rooftop Dining', 'Wine Cellar', 'Tasting Menu', 'Stargazing'],
      timings: 'Dinner Only: 7:30 PM - 11:30 PM (Closed Mondays)',
      specialties: ['7-Course Tasting Menu', 'Wine Pairings', 'Molecular Gastronomy', 'Artisan Cheeses']
    }
  ];

  const chefHighlights = [
    {
      icon: Award,
      title: 'Award-Winning Chef',
      description: 'Michelin-trained Chef Arjun brings 15 years of international experience'
    },
    {
      icon: Leaf,
      title: 'Farm-to-Table',
      description: 'Ingredients sourced from our organic garden and local sustainable farms'
    },
    {
      icon: Wine,
      title: 'Curated Wine Cellar',
      description: 'Over 200 carefully selected wines from India and around the world'
    },
    {
      icon: Users,
      title: 'Private Dining',
      description: 'Intimate dining experiences tailored to your preferences and dietary needs'
    }
  ];

  return (
    <section id="dining" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Culinary Excellence
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Embark on a gastronomic journey where every meal becomes a celebration of local flavors, 
            sustainable ingredients, and culinary artistry in breathtaking settings.
          </p>
        </div>

        {/* Restaurant Showcase */}
        <div className="mb-20">
          {/* Restaurant Tabs */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {restaurants.map((restaurant, index) => (
              <button
                key={index}
                onClick={() => setActiveRestaurant(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeRestaurant === index
                    ? 'bg-sage-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sage-100 hover:text-sage-700 shadow-md'
                }`}
              >
                {restaurant.name}
              </button>
            ))}
          </div>

          {/* Active Restaurant Details */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="heading-tertiary mb-4">{restaurants[activeRestaurant].name}</h3>
                <p className="text-sage-600 font-medium mb-4">{restaurants[activeRestaurant].cuisine}</p>
                <p className="text-body mb-6">{restaurants[activeRestaurant].description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {restaurants[activeRestaurant].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Timings */}
                <div className="bg-sage-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-sage-600" />
                    <span className="font-medium text-gray-800">Operating Hours</span>
                  </div>
                  <p className="text-sm text-gray-600">{restaurants[activeRestaurant].timings}</p>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold mb-3">Signature Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurants[activeRestaurant].specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-cream-100 text-sage-700 text-sm rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={restaurants[activeRestaurant].image}
                  alt={restaurants[activeRestaurant].name}
                  className="w-full h-96 object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Chef Highlights */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">Culinary Philosophy</h3>
            <p className="text-body max-w-2xl mx-auto">
              Our culinary team is dedicated to creating extraordinary dining experiences that celebrate 
              local ingredients, sustainable practices, and innovative techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefHighlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 group-hover:scale-110 transition-all duration-300">
                  <highlight.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-sage-600 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chef's Story */}
        <div className={`bg-sage-50 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Chef Arjun in the kitchen"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <ChefHat className="w-8 h-8 text-sage-600" />
                <h3 className="heading-tertiary">Meet Chef Arjun</h3>
              </div>
              <p className="text-body mb-6">
                "Cooking is my meditation, and every dish tells a story. At Ethereal Escape, 
                I blend traditional Indian flavors with modern techniques, creating experiences 
                that nourish both body and soul. Our organic garden provides the canvas, 
                and local traditions provide the inspiration."
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Trained at Le Cordon Bleu, Paris</p>
                <p>• Former Sous Chef at Michelin-starred restaurants</p>
                <p>• Specialist in farm-to-table and wellness cuisine</p>
                <p>• Author of "Mindful Indian Cooking"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="heading-tertiary mb-4">Reserve Your Culinary Journey</h3>
          <p className="text-body mb-6 max-w-2xl mx-auto">
            Experience our signature dining experiences with advance reservations. 
            Our culinary team can accommodate dietary preferences and create personalized menus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4">
              Make Dining Reservation
            </button>
            <button className="btn-secondary px-8 py-4">
              View Full Menus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;