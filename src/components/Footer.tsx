import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import AuraLogo from './AuraLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-gray-400 pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1 border-r border-gray-800 pr-8">
            <Link to="/" onClick={handleScrollToTop} className="inline-block mb-6">
              <AuraLogo className="[&_span]:text-white" />
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Elevating your natural beauty through artistry, science, and bespoke aesthetic treatments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">About Our Clinic</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Our Programs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Book Consultation</Link></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">Patient Success Stories</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>123 Medical Center Blvd<br/>Suite 400<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>contact@auraaesthetics.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Clinic Hours</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-primary-400">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Aura Aesthetics. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-500 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
            <Link to="/imprint" className="text-gray-500 hover:text-white transition-colors text-sm">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
