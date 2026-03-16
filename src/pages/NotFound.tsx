import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Aura Aesthetics</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-surface relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="text-[30rem] font-bold font-heading text-primary-900 leading-none">404</div>
        </div>

        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 text-primary-500 rounded-full mb-8 shadow-sm border border-primary-100"
          >
            <Search size={32} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6"
          >
            Looking for a Little <span className="italic font-normal text-primary-500">Touch-Up?</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed font-light"
          >
            We specialize in smoothing out life's imperfections, but it seems this page has completely disappeared. Let's get you back to looking your best.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all shadow-md text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={18} />
              Return Home
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-800 font-medium hover:bg-primary-50 transition-all border border-primary-100 shadow-sm text-sm uppercase tracking-widest"
            >
              View Treatments
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
