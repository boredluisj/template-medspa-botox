import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      {/* Elegant Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-800 to-primary-500 opacity-90" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center p-5 bg-white/10 rounded-full backdrop-blur-md mb-8 ring-1 ring-white/20 shadow-xl"
        >
          <Sparkles size={32} className="text-white" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 tracking-tight"
        >
          Reveal Your Most <br />
          <span className="font-normal italic">Radiant Self.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-primary-50 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Your journey to flawless, natural-looking enhancement begins with a private facial assessment. Schedule your complimentary consultation today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white text-primary-800 font-semibold hover:bg-primary-50 transition-all shadow-xl text-sm uppercase tracking-[0.15em] group"
          >
            Book Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="tel:555-123-4567" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium hover:bg-white/20 transition-all border border-white/30 text-sm uppercase tracking-[0.15em]"
          >
            Call (555) 123-4567
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
