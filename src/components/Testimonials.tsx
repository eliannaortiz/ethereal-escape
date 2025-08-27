import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      review: 'Ethereal Escape exceeded every expectation. The wellness programs were transformative, and the staff\'s attention to detail was impeccable. The sunrise yoga sessions with valley views were absolutely magical. This place truly lives up to its name.',
      experience: 'Wellness Retreat Package',
      stayDuration: '5 days'
    },
    {
      id: 2,
      name: 'Rajesh & Meera Gupta',
      location: 'Delhi, NCR',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      review: 'Our anniversary celebration at Ethereal Escape was perfect. The Presidential Spa Villa was luxurious beyond words, and the private dining experience under the stars was unforgettable. The staff made us feel like royalty throughout our stay.',
      experience: 'Anniversary Celebration',
      stayDuration: '3 days'
    },
    {
      id: 3,
      name: 'Dr. Arjun Patel',
      location: 'Bangalore, Karnataka',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      review: 'As a busy surgeon, I needed complete disconnection and rejuvenation. The stress relief retreat program was exactly what I needed. The Ayurvedic treatments, meditation sessions, and organic cuisine helped me find balance again.',
      experience: 'Stress Relief Retreat',
      stayDuration: '7 days'
    },
    {
      id: 4,
      name: 'Kavya Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      review: 'The attention to sustainability and local culture at Ethereal Escape impressed me greatly. The farm-to-table dining was exceptional, and learning about organic farming in their gardens was enlightening. A truly conscious luxury experience.',
      experience: 'Solo Retreat',
      stayDuration: '4 days'
    },
    {
      id: 5,
      name: 'Vikram & Family',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      review: 'Brought our teenage children here for a family bonding retreat. The variety of activities kept everyone engaged - from nature trails to cooking classes. The kids loved the infinity pool, and we adults enjoyed the spa treatments.',
      experience: 'Family Retreat',
      stayDuration: '6 days'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Guest Testimonials
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Discover what our guests say about their transformative experiences at Ethereal Escape, 
            where every stay becomes a cherished memory of tranquility and luxury.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-sage-50 rounded-2xl p-8 md:p-12">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-sage-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-sage-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-sage-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-sage-600" />
            </button>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Guest Photo */}
              <div className="text-center lg:text-left">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{currentReview.name}</h3>
                <p className="text-gray-600 mb-3">{currentReview.location}</p>
                <div className="flex justify-center lg:justify-start space-x-1 mb-3">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-sage-600">
                  <p className="font-medium">{currentReview.experience}</p>
                  <p>{currentReview.stayDuration}</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="lg:col-span-2">
                <Quote className="w-12 h-12 text-sage-300 mb-4" />
                <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 italic mb-6">
                  "{currentReview.review}"
                </blockquote>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-sage-600' : 'bg-sage-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Guest Statistics */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-sage-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-sage-600 mb-2">2000+</div>
              <div className="text-gray-600">Happy Guests</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-sage-600 mb-2">95%</div>
              <div className="text-gray-600">Return Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-sage-600 mb-2">15+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>

        {/* Review Highlights */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">What Guests Love Most</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-sage-600" />
              </div>
              <h4 className="font-semibold mb-2">Exceptional Service</h4>
              <p className="text-gray-600 text-sm">"Staff anticipates every need with genuine warmth and professionalism"</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8 text-sage-600" />
              </div>
              <h4 className="font-semibold mb-2">Transformative Wellness</h4>
              <p className="text-gray-600 text-sm">"Life-changing wellness programs that create lasting positive impact"</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-sage-600" />
              </div>
              <h4 className="font-semibold mb-2">Stunning Location</h4>
              <p className="text-gray-600 text-sm">"Breathtaking natural beauty that provides the perfect escape from city life"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;