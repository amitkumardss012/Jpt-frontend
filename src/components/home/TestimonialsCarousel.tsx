import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const TestimonialsCarousel: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      name: 'Ananya Sharma',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      rating: 5,
      text: 'JPT Construction transformed our 3BHK apartment into a luxurious and modern home. They understood our cultural preferences and blended them beautifully with contemporary design.'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      rating: 5,
      text: 'From planning to execution, JPT handled our restaurant renovation flawlessly. The finishing is top-notch, and customers keep complimenting the ambience. Truly value for money!'
    },
    {
      id: 3,
      name: 'Priya Menon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      rating: 5,
      text: 'As a fellow professional, I appreciate JPT’s meticulous work and adherence to deadlines. Their craftsmanship reflects both skill and respect for Indian architectural traditions.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
            What Our Clients Say
          </h2>
          <p className="font-open-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our happy clients across India who have experienced JPT Construction’s commitment to quality and trust.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="h-12 w-12 text-secondary mb-6" />

            <p className="font-open-sans text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h4 className="font-montserrat font-semibold text-lg text-primary">
                  {testimonials[currentIndex].name}
                </h4>
              </div>

              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
