import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      year: '2024',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      style: 'Contemporary'
    },
    {
      id: 2,
      title: 'Classic Family Home',
      location: 'Manhattan, NY',
      year: '2023',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      style: 'Traditional'
    },
    {
      id: 3,
      title: 'Minimalist Penthouse',
      location: 'Miami, FL',
      year: '2024',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      style: 'Modern'
    },
    {
      id: 4,
      title: 'Rustic Mountain Retreat',
      location: 'Aspen, CO',
      year: '2023',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      style: 'Rustic'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Featured Projects
          </h2>
          <p className="font-open-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our portfolio of stunning residential projects that showcase our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Project Display */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="font-montserrat font-bold text-3xl md:text-4xl mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="font-open-sans text-sm">{projects[currentIndex].location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span className="font-open-sans text-sm">{projects[currentIndex].year}</span>
                    </div>
                  </div>
                  <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full font-montserrat font-medium text-sm">
                    {projects[currentIndex].style}
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <a
                    href="/portfolio"
                    className="inline-block bg-white text-primary px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-secondary hover:text-primary transition-all duration-300"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;