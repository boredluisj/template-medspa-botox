import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica Montgomery",
    text: "I've visited three different MedSpas in the city, but Aura is in a class of its own. The injector took the time to map my face perfectly. My lips look incredibly full but entirely natural. They've earned a client for life.",
    role: "Regular Patient"
  },
  {
    name: "Sarah Lin",
    text: "The Morpheus8 treatments absolutely transformed my jawline and acne scarring. Beyond the stunning results, the clinical staff is deeply knowledgeable and prioritizes your comfort above all else.",
    role: "Aesthetic Client"
  },
  {
    name: "Amanda Reynolds",
    text: "I originally came in for preventative Botox, but it was their holistic aesthetic approach that won me over. I look five years younger, and my skin has an undeniable glow. The clinic itself is breathtakingly beautiful.",
    role: "Bridal Prep Patient"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3"
          >
            Patient Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-dark mb-6"
          >
            Words From Our <span className="text-primary-600 italic font-normal">Muses.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-primary-50 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex text-primary-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 flex-grow italic leading-relaxed font-light">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-dark text-lg font-heading">{testimonial.name}</p>
                <p className="text-primary-600 text-[11px] uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
