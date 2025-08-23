import { motion } from 'framer-motion';
import { ArrowRight, Bath, Bed, Building, ChefHat, Eye, Flower, Palette, X } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import constructionBefore from '../assets/image/construction/construction (2).jpeg';
import outDoorLivingBefore from "../assets/image/construction/outdoor-living.jpeg";
import constructionAfter from '../assets/image/exterior/exterior-3.jpeg';
import outDoorLivingAfter from "../assets/image/interior/living-space6.jpeg";
import kitchenAfter from "../assets/image/kitchen/kitchen.mp4";


const Services: React.FC = () => {
  const [lightboxContent, setLightboxContent] = useState<{ type: 'image' | 'video'; url: string; title: string } | null>(null);

  const services: Array<{
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    features: string[];
    beforeAfter: {
      before: { type: 'image' | 'video'; url: string; title: string };
      after: { type: 'image' | 'video'; url: string; title: string };
    };
  }> = [
      {
        id: 'full-residential-construction',
        icon: Building,
        title: 'Full Residential Construction',
        description: 'Complete home construction from foundation to finish with premium materials.',
        fullDescription: 'Our comprehensive construction services cover every aspect of home building, from site preparation and foundation work to final finishing touches. We manage the entire construction process, working with skilled tradespeople and using premium materials to ensure your new home exceeds expectations in both quality and craftsmanship.',
        image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Site Preparation', 'Foundation & Framing', 'Electrical & Plumbing', 'Premium Finishes', 'Final Inspection'],
        beforeAfter: {
          before: { type: 'image', url: constructionBefore, title: 'Before' },
          after: { type: 'image', url: constructionAfter, title: 'After' }
        }
      },
      // {
      //   id: 'renovations-extensions',
      //   icon: Hammer,
      //   title: 'Renovations & Extensions',
      //   description: 'Transform existing spaces with structural modifications and additions.',
      //   fullDescription: 'Whether you\'re looking to expand your current home or completely renovate existing spaces, our renovation and extension services bring new life to your property. We handle everything from structural modifications to complete room makeovers, ensuring seamless integration with your existing home.',
      //   image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=800',
      //   features: ['Structural Assessment', 'Design Planning', 'Permit Management', 'Construction Execution', 'Quality Finishing'],
      //   beforeAfter: {
      //     before: { type: 'image', url: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Before' },
      //     after: { type: 'image', url: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'After' }
      //   }
      // },
      {
        id: 'bedroom-design',
        icon: Bed,
        title: 'Bedroom Design',
        description: 'Luxurious and comfortable bedroom designs that create your personal sanctuary.',
        fullDescription: 'Transform your bedroom into a personal retreat with our expert design services. We focus on creating spaces that promote rest and relaxation while reflecting your personal style and preferences.',
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Color Coordination', 'Storage Solutions'],
        beforeAfter: {
          before: { type: 'image', url: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Before' },
          after: { type: 'image', url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'After' }
        }
      },
      {
        id: 'kitchen-design',
        icon: ChefHat,
        title: 'Kitchen Design',
        description: 'Modern, functional kitchens that combine style with culinary excellence.',
        fullDescription: 'The kitchen is the heart of the home. Our kitchen designs seamlessly blend functionality with aesthetics, creating spaces that inspire culinary creativity while serving as gathering places for family and friends.',
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Layout Optimization', 'Custom Cabinetry', 'Appliance Integration', 'Island Design', 'Smart Storage'],
        beforeAfter: {
          before: { type: 'image', url: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Before' },
          after: { type: 'video', url: kitchenAfter, title: 'After' }
        }
      },
      {
        id: 'bathroom-design',
        icon: Bath,
        title: 'Bathroom Design',
        description: 'Spa-like bathrooms that transform your daily routine into a luxury experience.',
        fullDescription: 'Create your own personal spa with our luxury bathroom designs. We combine premium materials, innovative fixtures, and thoughtful layouts to create spaces that offer both functionality and indulgence.',
        image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Luxury Fixtures', 'Tile & Stone Selection', 'Lighting Design', 'Storage Solutions', 'Accessibility Features'],
        beforeAfter: {
          before: { type: 'image', url: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Before' },
          after: { type: 'image', url: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'After' }
        }
      },
      {
        id: 'interior-design',
        icon: Palette,
        title: 'Interior Design',
        description: 'Complete interior design services that reflect your style and personality.',
        fullDescription: 'Our comprehensive interior design services cover every aspect of your home\'s interior, from space planning and furniture selection to color schemes and decorative accessories.',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Space Planning', 'Furniture Selection', 'Color Consultation', 'Textile & Materials', 'Styling & Accessories'],
        beforeAfter: {
          before: { type: 'image', url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Before' },
          after: { type: 'image', url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'After' }
        }
      },
      {
        id: 'outdoor-living',
        icon: Flower,
        title: 'Outdoor Living Spaces',
        description: 'Patios, decks, and outdoor entertainment areas for year-round enjoyment.',
        fullDescription: 'Extend your living space outdoors with custom-designed patios, decks, pergolas, and outdoor entertainment areas. We create functional and beautiful outdoor spaces perfect for relaxation, dining, and entertaining guests throughout the year.',
        image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: ['Patio Design', 'Deck Construction', 'Pergola Installation', 'Outdoor Kitchens', 'Fire Features'],
        beforeAfter: {
          before: { type: 'image', url: outDoorLivingBefore, title: 'Before' },
          after: { type: 'image', url: outDoorLivingAfter, title: 'After' }
        }
      }
    ];

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
              Construction & Design Services
            </h1>
            <p className="font-open-sans text-xl leading-relaxed text-gray-300">
              From ground-up construction to interior design and outdoor living spaces, we offer comprehensive services to transform your vision into reality with uncompromising quality and expert craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={service.id}
                ref={ref}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-secondary p-4 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-open-sans text-gray-600 text-lg leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-montserrat font-semibold text-xl text-primary mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="font-open-sans text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>

                {/* Image & Before/After */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    {/* Main Service Image */}
                    <div className="relative overflow-hidden rounded-lg shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="font-montserrat font-semibold text-lg">{service.title}</div>
                      </div>
                    </div>

                    {/* Before/After */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div
                          onClick={() => setLightboxContent({ type: service.beforeAfter.before.type, url: service.beforeAfter.before.url, title: service.beforeAfter.before.title })}
                          className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg group"
                        >
                          {service.beforeAfter.before.type === 'image' ? (
                            <img
                              src={service.beforeAfter.before.url}
                              alt="Before"
                              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <video
                              controls
                                className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                                autoPlay
                                muted
                            >
                              <source src={service.beforeAfter.before.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Eye className="h-8 w-8 text-white" />
                          </div>
                          <span className="font-open-sans text-sm text-gray-600">Before</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          onClick={() => setLightboxContent({ type: service.beforeAfter.after.type, url: service.beforeAfter.after.url, title: service.beforeAfter.after.title })}
                          className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg group"
                        >
                          {service.beforeAfter.after.type === 'image' ? (
                            <img
                              src={service.beforeAfter.after.url}
                              alt="After"
                              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <video
                              controls
                                className="w-full h-32 object-cover rounded-lg shadow-lg mb-2"
                                autoPlay
                                muted
                            >
                              <source src={service.beforeAfter.after.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Eye className="h-8 w-8 text-white" />
                          </div>
                          <span className="font-open-sans text-sm text-gray-600">After</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxContent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxContent(null)}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-4xl w-full">
            {lightboxContent.type === 'image' ? (
              <img
                src={lightboxContent.url}
                alt={lightboxContent.title}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video
                  controls
                className="w-full h-auto rounded-lg"
                autoPlay
              >
                <source src={lightboxContent.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="text-center mt-4 text-white">
              <h3 className="font-montserrat font-bold text-2xl mb-2">
                {lightboxContent.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;