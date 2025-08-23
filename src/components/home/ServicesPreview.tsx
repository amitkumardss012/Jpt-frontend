import { motion } from 'framer-motion';
import { Bath, Bed, Building, ChefHat, Flower, Hammer, Home, Palette, TreePine } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import LivingSpace6 from "../../assets/image/interior/living-space6.jpeg";

import ExteriorSpace1 from "../../assets/image/exterior/exterior-1.jpeg";
import ExteriorSpace2 from "../../assets/image/exterior/exterior-2.jpeg";
import ExteriorSpace3 from "../../assets/image/exterior/exterior-3.jpeg";
import ExteriorSpace4 from "../../assets/image/exterior/exterior-4.jpeg";

const ServicesPreview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const constructionServices = [
    {
      icon: Building,
      title: 'Full Residential Construction',
      description: 'Complete home construction from foundation to finish with premium materials and expert craftsmanship.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Hammer,
      title: 'Renovations & Extensions',
      description: 'Transform existing spaces with structural modifications, additions, and complete renovations.',
      image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Structural Design & Engineering',
      description: 'Professional structural analysis and engineering solutions for safe, durable construction.',
      image: 'https://images.pexels.com/photos/1216545/pexels-photo-1216545.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const interiorServices = [
    {
      icon: Bed,
      title: 'Bedroom Design',
      description: 'Luxurious and comfortable bedroom designs that create your personal sanctuary.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Design',
      description: 'Modern, functional kitchens that combine style with culinary excellence.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Bath,
      title: 'Bathroom Design',
      description: 'Spa-like bathrooms that transform your daily routine into a luxury experience.',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Palette,
      title: 'Living Spaces',
      description: 'Complete interior design services that reflect your style and personality.',
      image: LivingSpace6
    }
  ];

  // Updated Exterior Services with 4 items
  const exteriorServices = [
    {
      icon: TreePine,
      title: 'Contemporary Facade Design',
      description: 'Striking geometric shapes, stone accents, and a modern color palette for timeless curb appeal.',
      image: ExteriorSpace3
    },
    {
      icon: Flower,
      title: 'Luxury Balcony & Terrace Concepts',
      description: 'Glass railings, integrated planters, and ambient lighting for stunning elevated outdoor spaces.',
      image: ExteriorSpace2
    },
    {
      icon: TreePine,
      title: 'Modern Landscape Architecture',
      description: 'Harmonious blend of greenery, stone pathways, and minimalistic garden structures.',
      image: ExteriorSpace1
    },
    {
      icon: Flower,
      title: 'Architectural Lighting Design',
      description: 'Strategic LED lighting that highlights textures, shapes, and creates a captivating night view.',
      image: ExteriorSpace4
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Premium Services
          </h2>
          <p className="font-open-sans text-gray-600 text-lg max-w-2xl mx-auto">
            From construction to interior and exterior design, we offer comprehensive services to bring your vision to life.
          </p>
        </motion.div>

        {/* Construction Services */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-primary mb-2">
              Construction Services
            </h3>
            <p className="font-open-sans text-gray-600">
              Building strong foundations with expert craftsmanship and premium materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {constructionServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 border border-gray-50"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-8 bg-gradient-to-br from-white to-gray-100">
                  <h4 className="font-montserrat font-bold text-2xl text-primary mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h4>
                  <p className="font-open-sans text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interior Services */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-primary mb-2">
              Interior Design Services
            </h3>
            <p className="font-open-sans text-gray-600">
              Creating beautiful, functional spaces that reflect your lifestyle and personality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {interiorServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 border border-gray-50"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-8 bg-gradient-to-br from-white to-gray-100">
                  <h4 className="font-montserrat font-bold text-2xl text-primary mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h4>
                  <p className="font-open-sans text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exterior Services */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-primary mb-2">
              Exterior Design Services
            </h3>
            <p className="font-open-sans text-gray-600">
              Enhancing your property with stunning outdoor spaces and landscape design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exteriorServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-3 border border-gray-50"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-fill group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-8 bg-gradient-to-br from-white to-gray-100">
                  <h4 className="font-montserrat font-bold text-2xl text-primary mb-4 tracking-tight leading-tight">
                    {service.title}
                  </h4>
                  <p className="font-open-sans text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
