import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Aura | Beverly Hills Premier MedSpa</title>
        <meta name="description" content="Meet the board-certified experts behind Aura Aesthetics. We blend medical precision with artistic vision to deliver profound, natural-looking enhancements." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            alt="Aura Clinic Interior" 
            className="w-full h-full object-cover opacity-10 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-50 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 shadow-sm mb-8"
          >
            <span className="text-sm font-medium text-primary-600 tracking-widest uppercase">Our Philosophy</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading text-dark mb-6"
          >
            The Art of <span className="font-normal italic text-primary-500">Subtlety.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Aura Aesthetics was founded on a singular belief: the most profound cosmetic enhancements should whisper, never shout. We elevate your natural features through a synthesis of medical rigor and artistic restraint.
          </motion.p>
        </div>
      </section>

      {/* Story & Standards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-col-reverse">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary-50 rounded-3xl -z-10 transform -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Medical Director Consult" 
                className="rounded-3xl shadow-2xl object-cover h-[600px] w-full"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark">
                Led by Board-Certified Medical Experts.
              </h2>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Unlike franchised medi-spas that prioritize volume over precision, Aura Aesthetics is a boutique clinical environment directed by board-certified physicians and specialized aesthetic nurse practitioners.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                We dedicate a minimum of 45 minutes to every new patient consultation. This allows us to map facial anatomy, understand your intrinsic aging process, and build a bespoke, long-term care plan rather than pushing á la carte syringes.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-surface rounded-2xl border border-primary-50">
                  <Shield className="text-primary-500 mb-4" size={28} />
                  <h4 className="font-heading font-semibold text-lg mb-2">Uncompromising Safety</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">Rigorous anatomical knowledge and FDA-approved neuromodulators and fillers exclusively.</p>
                </div>
                <div className="p-6 bg-surface rounded-2xl border border-primary-50">
                  <Award className="text-primary-500 mb-4" size={28} />
                  <h4 className="font-heading font-semibold text-lg mb-2">Master Injectors</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">Our clinical team trains entirely in advanced, off-label Cannula techniques for zero downtime.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Standard */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800 rounded-full mix-blend-multiply filter blur-[150px] opacity-40" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Sparkles className="mx-auto text-primary-400 mb-6" size={40} />
            <h2 className="text-4xl md:text-5xl font-heading mb-8">The Clinical Experience</h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              Step into an environment where sterile medical precision meets the serenity of a day spa. We utilize 3D facial imaging and augmented reality to show you projected outcomes before a single needle is involved.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
