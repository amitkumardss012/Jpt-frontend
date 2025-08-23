import React from 'react';
import AboutPreview from '../components/home/AboutPreview';
import CTABanner from '../components/home/CTABanner';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      {/* <FeaturedProjects /> */}
      <WhyChooseUs />
      <TestimonialsCarousel />
      <CTABanner />
    </div>
  );
};

export default Home;