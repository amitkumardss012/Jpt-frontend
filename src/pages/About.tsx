import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Heart, Calendar, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const team = [
    {
      name: 'MD Tausif',
      role: 'Founder & Lead Architect',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACUCAMAAACnfDWKAAAANlBMVEXT1tv////Q09jT1Nv5+frX2t7r7O78/Pz///3b3ODv8PH09PXm5+ro6uvQ1dnN0Nbf4uTf4ed9xC5/AAAEPklEQVR4nO2dCXarMAxF8QSYKc7+N1tIPiW/oYklU4tHuBtA78iDLEumKE5OTk5OTk5OTk72hh6RtuHPMcOk0vlwDd4Xx9Z70aFr2tZaW1XWtk13WP8OQ2irSqm6rtWMdYdUa0KrVqg7acM2R7vOrkkdxaruWL7VRfmL1Bv+SGr1+gBe5q2RtnA7dF+91KpUeZG2cTMaVb8RW/V98K4YpC1Np3mj9Hswd07a1FT0e79O3HbeNmCvVLqP9Ot9OHfIk9eEd2vTD67AvjWv95wn6gpYbUd07BQrS9vMZHBEx06U0lZzudK1KuUw4ynNcCysax1Hq1LSZrO4lDyxQdpwDpq8FN8pEXcf5ihWFjGM6phiFaBndexx5wnAuEK/ysS8xAMebNlir9KW0/FVzEF2Dbzkqg5ssT3cMNbdR4llSoUUywwWT7F75xQbB95NV4pYadvJJKzGHyU24M1Zan58Ae8gkBAuAqYXvf0gsY59xNN4ageu2AowB8VLkY+0eGKdZ4sNaEko10bduK/TgKkNKkGsAqs34MdPE720+TT4x4AJsHH8UWLThvEpdr+wKgy+Abt99yk7D9pqzD8GTKBlobjB4kQFFlQUpKLFH7RY61NKCmpcjKWtp+L5k7ZCm7IpeeMWLuFWOHZ2ES+VWmhuXNGjDeIRY1jTtgKsqLhD32yBe/NKctCItsUuMDZbyMLFG/pKXpE7vAT5DHmJqjyuWEOtX7TSFidAnrSAtwELnjhp0c52/0EtTcULFB+g9eJhj+KiuJDGsZc2Nw1DWaJwI4qZ+N3Hgju2oOQZgaOnmeiyGbjM0xqREXKL79eJUe1731roLfaBmK68w7xVcYlYkZvDiI1Iz4AHTwuXiN3HwgcU/4iJGRHr2lYZ3muF7K1cxXyS2CJGrLSNW+FjxOKfAm7oECMWOiOzEJd2g7uUXSeuIbw5hlgTdaI9yrN1cWKlrdyGuA4fuHqgdSKzUEfIVOjY2y17hJc1o9OLB3AtoUQIrBj1J5pSaVCPaoFHsvbEC9oGdt4a89ujxr9jOwMZXOiC0chUqxZvKBtDHcELpQfzbijZpYtjMFUCveM2ejVB6k1uA1I2o12q1LtcgMI+k9is9UBZ7Ny7LqU34Il+x5WM2vdJHS7P2H6nUYZ2L/8WwJVb7nDuak0PlyLl7u5vKAP/wZH3VPvqGkhobIliR4U0V3ZkGE+zh6DK6ORwKY4xqBJ/msTQH1lny5UulBona53SKUtg/I4VHMvjzppH5yJYbNc14Y/X4DVsEBnLGWfrIxIz15jcQ/ibMnsig9zYsSGZyxwN9RcmW6vNKTehFXgTctacJ3W0b0K+ooSENxW3It+VnxNcnGayXfmlPRyzEZkiR8ldZ6HJsiAP3J96bEyezKPwtjOTZfu5SKucyVKhLC1yJoNUUnfdn5LhhWv+r2m2JkO1I//XNFtD76H4AjKpM3cRvcDAAAAAAElFTkSuQmCC',
      bio: 'Architectural excellence with a passion for sustainable design.'
    },
  ];

  const milestones = [
    { year: '2005', event: 'JPT Construction Pvt. Ltd. Founded', icon: Calendar },
    { year: '2010', event: 'First Major Award Won', icon: Trophy },
    { year: '2015', event: '100th Project Completed', icon: Users },
    { year: '2020', event: 'Sustainable Building Certification', icon: Award },
    { year: '2024', event: '300+ Projects & Counting', icon: Target }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            ref={heroRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
              About JPT Construction Pvt. Ltd
            </h1>
            <p className="font-open-sans text-xl leading-relaxed text-gray-300">
              Since 2005, we've been building dreams and transforming lives through exceptional construction, architecture, and design services. Our commitment to quality craftsmanship, innovation, and client satisfaction has made us a trusted name in premium residential construction and design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Mission"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-primary mb-3">Our Mission</h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed">
                      To build exceptional homes that reflect our clients' personalities, lifestyles, and dreams while setting new standards for quality construction, innovative design, and superior craftsmanship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-primary mb-3">Our Values</h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed">
                      Strength, reliability, precision, and creativity guide every project. We believe in honest communication, superior craftsmanship, and building lasting relationships with our clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="font-montserrat font-bold text-2xl text-primary mb-3">Our Commitment</h3>
                    <p className="font-open-sans text-gray-600 leading-relaxed">
                      We're dedicated to delivering projects on time, within budget, and beyond expectations while maintaining the highest standards of safety, quality, and professionalism in every aspect of our work.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <motion.div
            ref={teamRef}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="font-open-sans text-gray-600 text-lg max-w-2xl mx-auto">
              Our diverse team of architects, designers, and project managers brings decades of combined experience to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 place-items-center gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="font-open-sans text-secondary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Journey
            </h2>
            <p className="font-open-sans text-gray-600 text-lg max-w-2xl mx-auto">
              Key milestones in our company's growth and commitment to excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={teamInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full flex-shrink-0">
                  <milestone.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-2xl text-secondary mb-2">
                    {milestone.year}
                  </div>
                  <div className="font-open-sans text-lg text-primary">
                    {milestone.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;