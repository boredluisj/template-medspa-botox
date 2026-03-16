import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import AuraLogo from './AuraLogo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
            <AuraLogo />
          </Link>  <span className="text-xs font-medium text-gray-400 tracking-wider uppercase ml-4 hidden sm:block">Aesthetics Clinic</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                location.pathname === link.path ? 'text-primary-600' : 'text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2.5 rounded-full bg-dark text-white text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-dark/10"
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-2xl font-heading font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary-600' : 'text-dark hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="mt-4 px-8 py-4 rounded-full bg-primary-600 text-white text-lg font-medium shadow-lg shadow-primary-600/30"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
