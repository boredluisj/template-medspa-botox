import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-primary-50">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-primary-50/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium MedSpa Treatment Room" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-200 shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
            <span className="text-sm font-medium text-primary-800 tracking-wide uppercase">Beverly Hills Premier MedSpa</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading text-dark mb-6 leading-[1.1]"
          >
            Refine Your <br/>
            <span className="text-primary-600">Natural Beauty.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
          >
            Elevate your confidence with state-of-the-art non-surgical enhancements. From precision injectables to advanced clinical skincare, guided by board-certified aesthetic specialists.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 text-lg group"
            >
              Book Complimentary Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-dark font-medium hover:bg-primary-50 transition-all shadow-sm border border-primary-100 text-lg"
            >
              Explore Treatments
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-primary-200/60 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-medium text-dark leading-tight">Board-Certified<br/>Providers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                <Sparkles size={20} />
              </div>
              <span className="text-sm font-medium text-dark leading-tight">FDA-Approved<br/>Treatments</span>
            </div>
            <div className="flex items-center gap-3 hidden md:flex">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                <Heart size={20} />
              </div>
              <span className="text-sm font-medium text-dark leading-tight">Bespoke<br/>Care Plans</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
