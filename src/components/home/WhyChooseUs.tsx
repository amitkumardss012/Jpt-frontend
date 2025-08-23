import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Leaf, Clock, Users, Shield, DollarSign } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on schedule without compromising quality or craftsmanship.'
    },
    {
      icon: Shield,
      title: 'Quality Materials',
      description: 'We use only premium, durable materials sourced from trusted suppliers for lasting results.'
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Our team consists of licensed contractors, certified architects, and skilled craftsmen.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Decades of combined experience in construction, architecture, and design excellence.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront cost estimates with no hidden fees — you know exactly what you’re paying for.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Building',
      description: 'Eco-friendly construction practices and energy-efficient solutions for modern living.'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            Why Choose JPT Construction?
          </h2>
          <p className="font-open-sans text-gray-300 text-lg max-w-2xl mx-auto">
            We combine innovation, craftsmanship, and dedication to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-secondary p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
