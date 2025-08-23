import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import luxiryVilla from '../assets/image/exterior/exterior-1.jpeg';
import LivingRoom from "../assets/image/interior/living-space6.jpeg";

const Portfolio: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'Full Home',
      image: luxiryVilla,
      description: 'A stunning contemporary home featuring floor-to-ceiling windows, open-plan living, and premium finishes throughout.'
    },
    {
      id: 2,
      title: 'Master Bedroom Suite',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant master bedroom with custom built-ins, luxurious textiles, and a sophisticated color palette.'
    },
    {
      id: 3,
      title: 'Gourmet Kitchen',
      category: 'Kitchen',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'State-of-the-art kitchen with custom cabinetry, marble countertops, and professional-grade appliances.'
    },
    {
      id: 4,
      title: 'Spa Bathroom',
      category: 'Bathroom',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious bathroom featuring natural stone, modern fixtures, and a freestanding soaking tub.'
    },
    {
      id: 5,
      title: 'Contemporary Living Room',
      category: 'Interior Design',
      image: LivingRoom,
      description: 'Sophisticated living space with custom furniture, curated art, and dramatic lighting design.'
    },
    {
      id: 6,
      title: 'Penthouse Renovation',
      category: 'Full Home',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete penthouse transformation with panoramic city views and ultra-modern design elements.'
    },
    {
      id: 7,
      title: 'Guest Bedroom',
      category: 'Bedroom',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Welcoming guest bedroom with warm tones, comfortable furnishings, and thoughtful details.'
    },
    {
      id: 8,
      title: 'Chef\'s Kitchen',
      category: 'Kitchen',
      image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional-grade kitchen designed for culinary enthusiasts with premium appliances and ample workspace.'
    },
    {
      id: 9,
      title: 'Master Bathroom',
      category: 'Bathroom',
      image: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant master bathroom with dual vanities, walk-in shower, and luxury finishes.'
    }
  ];

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + projects.length) % projects.length);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
              Our Portfolio
            </h1>
            <p className="font-open-sans text-xl leading-relaxed text-gray-300">
              Explore our collection of exceptional residential projects that showcase our commitment to excellence, innovation, and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setLightboxImage(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-fill group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary px-3 py-1 rounded-full">
                    <span className="font-montserrat font-medium text-sm text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                    {project.title}
                  </h3>

                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors z-10"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors z-10"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={projects[lightboxImage].image}
              alt={projects[lightboxImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="font-montserrat font-bold text-2xl mb-2">
                {projects[lightboxImage].title}
              </h3>
              <p className="font-open-sans text-gray-300">
                {projects[lightboxImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;