import React, { useEffect, useState } from 'react';
import { Leaf, Heart, Brain, Droplets, Sun, Moon, Users, Clock } from 'lucide-react';

const Wellness: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePackage, setActivePackage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('wellness');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const treatments = [
    {
      icon: Leaf,
      title: 'Ayurvedic Therapies',
      description: 'Traditional healing treatments using ancient Indian wisdom and natural herbs',
      duration: '60-90 minutes',
      price: '₹4,500 - ₹8,000'
    },
    {
      icon: Droplets,
      title: 'Aromatherapy Massage',
      description: 'Relaxing full-body massage with essential oils to rejuvenate mind and body',
      duration: '60 minutes',
      price: '₹3,500'
    },
    {
      icon: Heart,
      title: 'Couples Retreat',
      description: 'Intimate spa experience designed for couples in our private treatment suite',
      duration: '120 minutes',
      price: '₹12,000'
    },
    {
      icon: Brain,
      title: 'Meditation Sessions',
      description: 'Guided meditation and mindfulness practices in serene natural settings',
      duration: '45 minutes',
      price: '₹1,500'
    },
    {
      icon: Sun,
      title: 'Sunrise Yoga',
      description: 'Energizing yoga sessions at dawn with panoramic valley views',
      duration: '60 minutes',
      price: '₹2,000'
    },
    {
      icon: Moon,
      title: 'Evening Sound Bath',
      description: 'Therapeutic sound healing sessions under the stars for deep relaxation',
      duration: '75 minutes',
      price: '₹2,500'
    }
  ];

  const wellnessPackages = [
    {
      name: 'Detox & Renewal',
      duration: '3 Days',
      price: '₹25,000',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete body detoxification program with specialized treatments, organic meals, and wellness consultations.',
      includes: ['Daily Ayurvedic treatments', 'Detox meal plan', 'Yoga & meditation', 'Wellness consultation', 'Herbal supplements'],
      ideal: 'Perfect for those seeking to reset and rejuvenate their system'
    },
    {
      name: 'Stress Relief Retreat',
      duration: '5 Days',
      price: '₹45,000',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Comprehensive stress management program combining ancient wisdom with modern wellness techniques.',
      includes: ['Stress assessment', 'Personalized treatment plan', 'Daily spa treatments', 'Mindfulness training', 'Nutritional guidance'],
      ideal: 'Designed for busy professionals seeking deep relaxation and stress relief'
    },
    {
      name: 'Holistic Healing Journey',
      duration: '7 Days',
      price: '₹65,000',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Transformative wellness experience addressing mind, body, and spirit through integrated healing approaches.',
      includes: ['Comprehensive health assessment', 'Personalized treatment protocols', 'Daily wellness activities', 'Life coaching sessions', 'Take-home wellness kit'],
      ideal: 'For those seeking profound transformation and long-term wellness strategies'
    }
  ];

  const facilities = [
    {
      icon: Droplets,
      title: 'Hydrotherapy Pool',
      description: 'Temperature-controlled therapeutic pool with mineral-rich waters'
    },
    {
      icon: Leaf,
      title: 'Herbal Steam Room',
      description: 'Traditional steam therapy infused with healing Ayurvedic herbs'
    },
    {
      icon: Sun,
      title: 'Meditation Garden',
      description: 'Tranquil outdoor space designed for contemplation and mindfulness'
    },
    {
      icon: Users,
      title: 'Private Treatment Suites',
      description: 'Luxurious individual and couples treatment rooms with garden views'
    }
  ];

  return (
    <section id="wellness" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Wellness & Spa
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Embark on a transformative journey of healing and rejuvenation through our holistic wellness programs, 
            combining ancient Ayurvedic wisdom with modern therapeutic techniques.
          </p>
        </div>

        {/* Wellness Packages */}
        <div className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="heading-tertiary mb-4">Signature Wellness Packages</h3>
            <p className="text-body max-w-2xl mx-auto">
              Curated wellness journeys designed to address your specific needs and goals for optimal well-being.
            </p>
          </div>

          {/* Package Tabs */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {wellnessPackages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => setActivePackage(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePackage === index
                    ? 'bg-sage-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sage-100 hover:text-sage-700 shadow-md'
                }`}
              >
                {pkg.name}
              </button>
            ))}
          </div>

          {/* Active Package Details */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={wellnessPackages[activePackage].image}
                  alt={wellnessPackages[activePackage].name}
                  className="w-full h-96 object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h4 className="heading-tertiary mb-4">{wellnessPackages[activePackage].name}</h4>
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-sage-600" />
                    <span className="text-sage-600 font-medium">{wellnessPackages[activePackage].duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-sage-600">{wellnessPackages[activePackage].price}</div>
                </div>
                <p className="text-body mb-6">{wellnessPackages[activePackage].description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Package Includes:</h5>
                  <div className="space-y-2">
                    {wellnessPackages[activePackage].includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-sage-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-sage-700 italic">{wellnessPackages[activePackage].ideal}</p>
                </div>

                <button className="btn-primary px-8 py-3">
                  Book Wellness Package
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Treatments */}
        <div className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="heading-tertiary mb-4">Individual Treatments</h3>
            <p className="text-body max-w-2xl mx-auto">
              Choose from our extensive menu of therapeutic treatments, each designed to promote healing and relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 transition-colors">
                    <treatment.icon className="w-8 h-8 text-sage-600" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{treatment.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{treatment.duration}</span>
                    <span className="font-semibold text-sage-600">{treatment.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spa Facilities */}
        <div className={`mb-16 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">Spa Facilities</h3>
            <p className="text-body max-w-2xl mx-auto">
              Our world-class spa facilities provide the perfect environment for relaxation and rejuvenation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-200 group-hover:scale-110 transition-all duration-300">
                  <facility.icon className="w-8 h-8 text-sage-600" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-sage-600 transition-colors">
                  {facility.title}
                </h4>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="heading-tertiary mb-4">Begin Your Wellness Journey</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              Our wellness experts will create a personalized program tailored to your specific needs and goals. 
              Start your transformation today with a complimentary consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Book Wellness Consultation
              </button>
              <button className="btn-secondary px-8 py-4">
                Download Treatment Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wellness;