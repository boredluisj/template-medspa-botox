import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AuraLogo from './AuraLogo';
import { motion, AnimatePresence } from 'framer-motion';
import { useLuxuryClick } from '../hooks/useLuxuryClick';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const playClick = useLuxuryClick();

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

  // Determine if we should use transparent navbar (only on pages with dark hero)
  const isDarkHeroPage = location.pathname === '/services' || location.pathname === '/contact';
  const showTransparent = isDarkHeroPage && !isScrolled && !isMobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showTransparent 
          ? 'py-6 bg-transparent border-transparent' 
          : 'py-3 bg-white/95 backdrop-blur-md border-b border-primary-50/50 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50 mr-4" onClick={() => window.scrollTo(0, 0)}>
          <AuraLogo light={showTransparent} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 ${
                showTransparent
                  ? (location.pathname === link.path ? 'text-white border-b border-white/30' : 'text-white/80 hover:text-white')
                  : (location.pathname === link.path ? 'text-primary-600' : 'text-gray-600')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onMouseDown={playClick}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500 shadow-lg active:scale-95 ${
              showTransparent
                ? 'bg-white text-dark hover:bg-primary-50 shadow-white/10'
                : 'bg-dark text-white hover:bg-gray-800 shadow-dark/10'
            }`}
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden z-50 p-2 transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-dark'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40"
            >
              <div className="absolute top-8 left-8">
                <AuraLogo />
              </div>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-3xl font-heading font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary-600' : 'text-dark hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onMouseDown={playClick}
                className="mt-4 px-10 py-4 rounded-full bg-dark text-white text-lg font-medium shadow-xl shadow-dark/20 active:scale-95"
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
