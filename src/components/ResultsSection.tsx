import { motion } from 'framer-motion';

const stats = [
  { value: "10k+", label: "Treatments Performed" },
  { value: "15+", label: "Years Expertise" },
  { value: "4.9", label: "Average Rating" },
  { value: "3", label: "MD Specialists" }
];

const ResultsSection = () => {
  return (
    <section className="py-24 bg-dark text-white relative leading-relaxed overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-primary-800 rounded-full mix-blend-multiply filter blur-[150px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              Artistry Backed by <span className="text-primary-400 font-normal italic">Medical Excellence.</span>
            </h2>
            <p className="text-xl text-gray-300 font-light">
              We believe that the best cosmetic enhancements are subtle, sophisticated, and fundamentally safe. Our clinic has built a reputation for excellence based on natural-looking outcomes.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
              <div className="absolute -left-3 -top-3 text-6xl text-primary-500/30 font-serif leading-none">"</div>
              <p className="text-lg italic text-gray-200 relative z-10 mb-6 font-light">
                "I was nervous about getting Botox for the first time, but the team at Aura made me feel completely at ease. The results are incredible—I look refreshed and rested, but totally like myself. Nobody knows my secret!"
              </p>
              <div>
                <p className="font-bold text-white tracking-wider text-sm uppercase">Eleanor V.</p>
                <p className="text-primary-400 text-sm">Botox & Filler Patient</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-white/5 border border-primary-900/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm hover:bg-white/10 transition-colors"
               >
                 <div className="text-4xl md:text-5xl font-light font-heading text-primary-400 mb-2">
                   {stat.value}
                 </div>
                 <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                   {stat.label}
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
