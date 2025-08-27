import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Rooms',
      title: 'Deluxe Garden View Suite',
      description: 'Elegant bedroom with garden views and premium amenities'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Rooms',
      title: 'Premium Valley Suite',
      description: 'Spacious suite with panoramic valley views'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Dining',
      title: 'Serenity Restaurant',
      description: 'Fine dining with panoramic valley views'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Dining',
      title: 'Garden Café',
      description: 'Charming café nestled in our organic gardens'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Spa',
      title: 'Wellness Treatment Room',
      description: 'Serene spa environment for ultimate relaxation'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Spa',
      title: 'Meditation Garden',
      description: 'Tranquil outdoor space for mindfulness practices'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Property',
      title: 'Infinity Pool at Sunset',
      description: 'Breathtaking sunset views from our infinity pool'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Property',
      title: 'Main Lobby',
      description: 'Elegant reception area with contemporary design'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Experiences',
      title: 'Sunrise Yoga Session',
      description: 'Morning yoga practice with valley views'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Experiences',
      title: 'Culinary Experience',
      description: 'Chef-led cooking classes and tastings'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Dining',
      title: 'Moonlight Terrace',
      description: 'Romantic rooftop dining under the stars'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'Rooms',
      title: 'Presidential Spa Villa',
      description: 'Our most exclusive accommodation with private amenities'
    }
  ];

  const categories = ['All', 'Rooms', 'Dining', 'Spa', 'Property', 'Experiences'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = lightboxImage ? filteredImages.find(img => img.id === lightboxImage) : null;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxImage]);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-secondary mb-6">
            Gallery
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Immerse yourself in the beauty and elegance of Ethereal Escape through our curated collection 
            of stunning photography showcasing every aspect of your luxury retreat experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center space-x-2 text-gray-600 mr-4">
            <Filter size={20} />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-sage-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-sage-100 hover:text-sage-700 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <h3 className="font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-700">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-sage-50 rounded-2xl p-8 md:p-12">
            <h3 className="heading-tertiary mb-4">Experience It Yourself</h3>
            <p className="text-body mb-6 max-w-2xl mx-auto">
              These images capture just a glimpse of the beauty and tranquility that awaits you. 
              Come experience the magic of Ethereal Escape in person.
            </p>
            <button className="btn-primary px-8 py-4">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && currentLightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{currentLightboxImage.title}</h3>
              <p className="text-white/90 text-sm">{currentLightboxImage.description}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                {currentLightboxImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;