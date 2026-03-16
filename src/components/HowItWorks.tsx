import { motion } from 'framer-motion';
import { Sparkles, CalendarHeart, ClipboardCheck, Smile } from 'lucide-react';

const steps = [
  {
    icon: <CalendarHeart size={32} />,
    title: "1. Schedule Consultation",
    description: "Book your complimentary private consultation online or by phone. We offer flexible scheduling to accommodate your lifestyle."
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "2. Bespoke Analysis",
    description: "Our certified aesthetic providers analyze your facial anatomy, listen to your goals, and formulate a personalized enhancement plan."
  },
  {
    icon: <Sparkles size={32} />,
    title: "3. Artful Treatment",
    description: "Experience your treatment in our luxuriant, clinical environment. We prioritize your comfort and precise, natural-looking results."
  },
  {
    icon: <Smile size={32} />,
    title: "4. Radiant Reveal",
    description: "Leave feeling refreshed and confident. We provide detailed aftercare instructions and follow-up to ensure optimal satisfaction."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3"
          >
            The Aura Experience
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6"
          >
            Your Journey to <span className="text-primary-600 text-5xl md:text-6xl font-normal italic">Radiance.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-light"
          >
            From your first inquiry to your final reveal, every step of our process is designed around your comfort, safety, and ultimate beauty goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="relative group p-8 bg-surface rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-primary-50"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold font-heading text-dark mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
