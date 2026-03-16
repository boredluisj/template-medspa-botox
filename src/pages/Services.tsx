import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const servicesList = [
  {
    category: "Injectables & Neuromodulators",
    items: [
      {
        title: "Botox® / Dysport / Xeomin",
        description: "Precisely administered neuromodulators to smooth dynamic wrinkles, prevent fine lines, and create a subtle brow lift without freezing your natural expression.",
        features: ["15-30 Min Duration", "No Downtime", "Lasts 3-4 Months"]
      },
      {
        title: "Dermal Fillers (Juvéderm® & Restylane®)",
        description: "Restore volume loss in the mid-face, contour the jawline, and enhance lip symmetry utilizing advanced blunt-tip cannula techniques to minimize bruising.",
        features: ["Instant Results", "12-24 Month Longevity", "Reversible"]
      },
      {
        title: "Kybella (Double Chin Reduction)",
        description: "The first FDA-approved injectable treatment that permanently destroys fat cells beneath the chin, refining the jawline profile without surgery.",
        features: ["Permanent Fat Destruction", "2-4 Sessions Required", "Non-Surgical"]
      }
    ]
  },
  {
    category: "Advanced Skin Rejuvenation",
    items: [
      {
        title: "Morpheus8 RF Microneedling",
        description: "A profound skin resurfacing treatment combining traditional microneedling with localized radiofrequency to stimulate collagen and dramatically tighten skin.",
        features: ["Tightens Skin", "Acne Scar Revision", "Safe for All Skin Types"]
      },
      {
        title: "HydraFacial MD Platinum",
        description: "A medical-grade resurfacing procedure that clears out your pores and deeply hydrates your skin using patented vortex technology and custom boosters.",
        features: ["Immediate Glow", "Painless Extractions", "Zero Downtime"]
      },
      {
        title: "Chemical Peels (VI Peel®)",
        description: "Transformative medium-depth peels that target stubborn melasma, hyperpigmentation, active acne, and uneven texture with a strategic blend of potent acids.",
        features: ["Improves Tone & Texture", "Safe for Active Acne", "7 Day Peeling Process"]
      }
    ]
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Aesthetic Treatments | Aura MedSpa</title>
        <meta name="description" content="Explore our curated directory of premium aesthetic treatments including Botox, Dermal Fillers, Morpheus8, and Medical-Grade Skincare." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-800 rounded-full mix-blend-screen filter blur-[150px] opacity-30" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6"
          >
            Curated <span className="text-primary-400 italic font-normal">Treatments.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 leading-relaxed font-light"
          >
            A comprehensive portfolio of FDA-approved, non-surgical modalities designed to refine, restore, and rejuvenate.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-5xl mx-auto px-6">
          {servicesList.map((category, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-semibold text-dark mb-12 border-b border-primary-100 pb-4 inline-block"
              >
                {category.category}
              </motion.h2>

              <div className="space-y-8">
                {category.items.map((service, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-primary-50 grid md:grid-cols-3 gap-8 items-start group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-semibold font-heading text-dark group-hover:text-primary-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center text-primary-600 font-medium uppercase tracking-widest text-xs mt-4 group-hover:text-primary-700 transition-colors"
                      >
                        Book Consultation <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                    
                    <div className="bg-primary-50/50 p-6 rounded-xl border border-primary-50 h-full">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Treatment Profile</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 font-light">
                            <Sparkles size={14} className="text-primary-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
