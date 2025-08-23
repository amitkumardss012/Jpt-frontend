import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Send } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    rating: 5,
    review: ''
  });

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      project: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'JPT Construction transformed our house into a dream home. Their attention to detail and commitment to quality is unmatched. The 3D visualizations helped us make confident decisions throughout the process. The team was professional, punctual, and exceeded our expectations at every turn.',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      project: 'Penthouse Renovation',
      location: 'Manhattan, NY',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with JPT was an absolute pleasure. They delivered our luxury penthouse renovation on time and exceeded all our expectations. The team is professional, creative, and truly understands modern design. Every detail was perfectly executed.',
      date: 'January 2024'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      project: 'Full Home Design',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As a fellow designer, I can appreciate the craftsmanship and innovation that JPT brings to every project. They seamlessly blend functionality with aesthetics, creating spaces that are both beautiful and livable. Their collaborative approach made the entire process enjoyable.',
      date: 'February 2024'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Architect',
      project: 'Kitchen Renovation',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'JPT Construction delivered exceptional results on our kitchen renovation. Their expertise in space planning and material selection created a kitchen that perfectly balances form and function. The project was completed on schedule and within budget.',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      role: 'Homeowner',
      project: 'Master Bedroom Suite',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The master bedroom suite designed by JPT is beyond our wildest dreams. They created a peaceful sanctuary that perfectly reflects our style. The quality of workmanship and attention to detail is outstanding. We couldn\'t be happier with the results.',
      date: 'November 2023'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Real Estate Developer',
      project: 'Luxury Condo Design',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'JPT Construction has been our go-to partner for luxury residential projects. Their innovative designs and impeccable execution have helped us achieve premium market positioning. They consistently deliver projects that exceed client expectations.',
      date: 'October 2023'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Review submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      rating: 5,
      review: ''
    });
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
              Client Testimonials
            </h1>
            <p className="font-open-sans text-xl leading-relaxed text-gray-300">
              Hear from our satisfied clients about their experience working with JPT Construction. Your success story could be next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-accent rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Quote className="h-10 w-10 text-secondary mb-6" />
                
                <p className="font-open-sans text-gray-600 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-montserrat font-bold text-lg text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="font-open-sans text-gray-600 text-sm">
                        {testimonial.role} • {testimonial.location}
                      </p>
                      <p className="font-open-sans text-secondary text-sm font-semibold">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                      ))}
                    </div>
                    <p className="font-open-sans text-gray-500 text-xs">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Review Submission Form */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-4xl text-primary mb-4">
                Share Your Experience
              </h2>
              <p className="font-open-sans text-gray-600 text-lg">
                We'd love to hear about your project with JPT Construction. Your feedback helps us continue delivering exceptional results.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-montserrat font-semibold text-primary mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-montserrat font-semibold text-primary mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="Full Home Architecture">Full Home Architecture</option>
                    <option value="Bedroom Design">Bedroom Design</option>
                    <option value="Kitchen Design">Kitchen Design</option>
                    <option value="Bathroom Design">Bathroom Design</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="3D Visualization">3D Visualization</option>
                  </select>
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-primary mb-2">
                    Rating *
                  </label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                  >
                    <option value={5}>5 Stars - Excellent</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Good</option>
                    <option value={2}>2 Stars - Fair</option>
                    <option value={1}>1 Star - Poor</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-montserrat font-semibold text-primary mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Share your experience working with JPT Construction..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Submit Review</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;