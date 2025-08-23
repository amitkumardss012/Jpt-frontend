import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const CTABanner: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Your Vision, Our Expertise
          </h2>
          <p className="font-open-sans text-primary text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ready to build your dream home? Get in touch with our expert construction and design team today for a free consultation and discover how we can bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <motion.a
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </motion.a> */}
            
            <motion.a
              href="tel:+917635097119" // Replace with your actual phone number
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </motion.a>
          </div>
          
          <motion.p
            className="font-open-sans text-primary text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Free consultation • No obligation • Professional advice
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;