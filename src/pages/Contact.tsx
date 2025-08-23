import { motion } from 'framer-motion';
import { Check, Clock, Mail, MessageSquare, Phone, Send, User } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { axiosInstance } from '../api/apiClient';
import { zodResolver } from '@hookform/resolvers/zod';
import { Resolver, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { EnquiryType, EnquiryValidator } from '../validator/enquiry';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<EnquiryType>({
    resolver: zodResolver(EnquiryValidator) as Resolver<EnquiryType>,
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: EnquiryType) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/enquiry/create', data);
      toast.success(response.data.message || 'Enquiry submitted successfully!');
      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '7635097119  |  7209705244',
      subtitle: 'Call us Mon-Fri 9AM-6PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'mtr6200builder@gmail.com',
      subtitle: 'We reply within 24 hours',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      subtitle: 'Saturday: 10AM - 4PM',
    },
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
              Get In Touch
            </h1>
            <p className="font-open-sans text-xl leading-relaxed text-gray-300">
              Ready to transform your space? Let's discuss your vision and create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
                Request a Free Consultation
              </h2>
              <p className="font-open-sans text-gray-600 text-lg mb-8">
                Fill out the form below and our team will get back to you within 24 hours to discuss your project.
              </p>

              {!isSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-montserrat font-semibold text-primary mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="name"
                          {...register('fullName')}
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block font-montserrat font-semibold text-primary mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-montserrat font-semibold text-primary mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block font-montserrat font-semibold text-primary mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        {...register('subject')}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter the subject"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-montserrat font-semibold text-primary mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200 resize-vertical ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Tell us about your project, style preferences, and any specific requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-primary text-white px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Check size={48} className="text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800 font-montserrat">Message Sent!</h2>
                  <p className="text-base text-gray-600 mb-6 font-open-sans">
                    Thank you for reaching out! We've received your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      reset();
                    }}
                    className="bg-primary text-white px-8 py-3 rounded-full font-montserrat font-bold text-base hover:bg-opacity-90 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
                  Contact Information
                </h2>
                <p className="font-open-sans text-gray-600 text-lg mb-8">
                  Get in touch with our team using any of the methods below. We're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-accent rounded-xl hover:shadow-lg transition-shadow duration-300">
                    <div className="bg-secondary p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">
                        {info.title}
                      </h3>
                      <p className="font-open-sans text-gray-800 mb-1">
                        {info.details}
                      </p>
                      <p className="font-open-sans text-gray-600 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;