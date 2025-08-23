import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: Calendar, number: '20+', label: 'Years of Experience' },
    { icon: Users, number: '300+', label: 'Projects Completed' },
    // { icon: Award, number: '15+', label: 'Awards Won' }
  ];

  return (
    <section id="about-preview" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
              Building Excellence Since 2005
            </h2>
            <p className="font-open-sans text-gray-600 text-lg leading-relaxed mb-8">
              At JPT Construction, we believe that strong foundations create lasting legacies. Our team of expert builders, architects, and designers work closely with you to construct homes that reflect your vision and exceed your expectations. From ground-up construction to complete renovations and stunning interior designs, we bring your dreams to reality with uncompromising quality and craftsmanship.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <stat.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <div className="font-montserrat font-bold text-2xl text-primary">{stat.number}</div>
                  <div className="font-open-sans text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              onClick={() => window.scrollTo(0, 0)}
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium Construction Work"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-lg shadow-lg">
              <div className="font-montserrat font-bold text-2xl text-primary">Quality Craftsmanship</div>
              <div className="font-open-sans text-primary">Built to Last</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;