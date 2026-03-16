import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Imprint = () => {
  return (
    <>
      <Helmet>
        <title>Imprint / Legal Notice | Aura Aesthetics</title>
        <meta name="description" content="Legal notice and company information for Aura Aesthetics." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Imprint / Legal Notice
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>Provider Identification</h2>
          <p>
            <strong>Aura Aesthetics, PC</strong><br />
            123 Medical Center Blvd, Suite 400<br />
            Beverly Hills, CA 90210<br />
            United States
          </p>

          <h2>Contact</h2>
          <ul>
            <li><strong>Phone:</strong> (555) 123-4567</li>
            <li><strong>Email:</strong> contact@auraaesthetics.com</li>
            <li><strong>Website:</strong> www.auraaesthetics.com</li>
          </ul>

          <h2>Responsible for Medical Content</h2>
          <p>
            Dr. Elizabeth Sterling, MD, FAAD<br />
            Medical Director
          </p>

          <h2>Certifications & Licensing</h2>
          <p>
            Aura Aesthetics operates under the medical licensure of Dr. Elizabeth Sterling, certified by the American Board of Dermatology.<br/>
            <strong>State Medical License:</strong> MD-99124-CA
          </p>

          <h2>Copyright Notice</h2>
          <p>
            The content, clinical photography, and brand assets published on this website are governed by the copyright laws of the United States. Any unauthorized duplication, distribution, or utilization—especially of patient before-and-after imagery—is strictly prohibited and will be prosecuted under HIPAA and civil laws.
          </p>
        </div>
      </section>
    </>
  );
};

export default Imprint;
