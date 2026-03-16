import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80"
          alt="Premium Medspa Facial"
          className="w-full h-full object-cover object-center opacity-70"
        />
        {/* Soft Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-5" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent-100/20 rounded-full blur-[100px] translate-y-1/2 z-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-primary-100 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-800 tracking-wide uppercase">Beverly Hills Premier MedSpa</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold font-heading text-dark mb-6 leading-[1] tracking-tight"
            >
              Refine Your <br/>
              <span className="text-primary-600 italic font-normal">Natural Beauty.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-light"
            >
              Elevate your confidence with state-of-the-art non-surgical enhancements. Guided by Beverly Hills' leading board-certified aesthetic specialists.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-dark text-white font-medium hover:bg-gray-800 transition-all shadow-xl shadow-dark/10 text-lg group"
              >
                Book Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-white/80 backdrop-blur-md text-dark font-medium hover:bg-white transition-all shadow-sm border border-primary-100 text-lg"
              >
                Explore Treatments
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-10 border-t border-primary-100 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-sm font-semibold text-dark leading-tight uppercase tracking-wider">Board-Certified<br/>Providers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Sparkles size={24} />
                </div>
                <span className="text-sm font-semibold text-dark leading-tight uppercase tracking-wider">FDA-Approved<br/>Modalities</span>
              </div>
              <div className="flex items-center gap-3 hidden md:flex">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Heart size={24} />
                </div>
                <span className="text-sm font-semibold text-dark leading-tight uppercase tracking-wider">Bespoke<br/>Treatment</span>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Elements */}
          <div className="hidden lg:block relative h-[600px] w-full">
             <motion.div 
               initial={{ opacity: 0, x: 20, rotate: 2 }}
               animate={{ opacity: 1, x: 0, rotate: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="absolute right-0 top-10 w-80 bg-white/40 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] shadow-2xl"
             >
                <div className="flex items-center justify-between mb-6">
                   <div className="flex -space-x-4">
                      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100" className="w-14 h-14 rounded-full border-4 border-white object-cover" alt="Patient" />
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100" className="w-14 h-14 rounded-full border-4 border-white object-cover" alt="Patient" />
                      <div className="w-14 h-14 rounded-full border-4 border-white bg-primary-500 flex items-center justify-center text-xs text-white font-bold">+500</div>
                   </div>
                   <div className="flex gap-0.5 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                </div>
                <h4 className="text-dark font-heading font-bold text-2xl mb-2 italic">Flawless Results.</h4>
                <p className="text-gray-600 text-sm leading-relaxed">"The most natural-looking results I've ever had. Aura is truly in a league of its own."</p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: -20, rotate: -2 }}
               animate={{ opacity: 1, x: 0, rotate: 0 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               className="absolute left-1/4 bottom-0 w-72 bg-dark/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl text-white border border-white/10"
             >
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                      <Sparkles size={24} />
                   </div>
                   <div className="text-xs font-bold uppercase tracking-widest text-primary-400">Clinical Excellence</div>
                </div>
                <div className="text-4xl font-bold font-heading mb-1 tracking-tight">100%</div>
                <p className="text-white/60 text-sm">Patient satisfaction rate across all surgical and non-surgical procedures.</p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
