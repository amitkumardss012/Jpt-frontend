import { Facebook, Home, Instagram, Mail, Phone, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-secondary" />
              <span className="font-montserrat font-bold text-xl">JPT Construction Pvt. Ltd</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming homes into timeless masterpieces with premium architecture and interior design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CVQCeHN7h" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/jpt_construction_pvt_ltd?igsh=MW5udXg4N3J6dml0NA==" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              </a>
              <a href="https://youtube.com/@jptconstruction?si=M5RwMduhf14OUfqN" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/" className="text-gray-300 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/about" className="text-gray-300 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/services" className="text-gray-300 hover:text-secondary transition-colors text-sm">Services</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/portfolio" className="text-gray-300 hover:text-secondary transition-colors text-sm">Portfolio</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/testimonials" className="text-gray-300 hover:text-secondary transition-colors text-sm">Testimonials</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/contact" className="text-gray-300 hover:text-secondary transition-colors text-sm">Contact</Link></li>
              <li><Link onClick={() => window.scrollTo(0, 0)} to="/admin/login" className="text-gray-300 hover:text-secondary transition-colors text-sm">Admin</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Full Home Architecture</li>
              <li className="text-gray-300 text-sm">Interior Design</li>
              <li className="text-gray-300 text-sm">Kitchen Design</li>
              <li className="text-gray-300 text-sm">Bathroom Design</li>
              <li className="text-gray-300 text-sm">Bedroom Design</li>
              <li className="text-gray-300 text-sm">3D Visualization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-gray-300 text-sm">+7635097119  |
                7209705244</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-gray-300 text-sm">mtr6200builder@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-gray-300 text-sm">123 Design Ave, City, ST 12345</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 JPT Construction Pvt. Ltd Pvt Ltd Marz to MTRR Home decor All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;