import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Aura Aesthetics</title>
        <meta name="description" content="Privacy Policy and patient data handling information for Aura Aesthetics." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-gray-400 font-light tracking-wide uppercase text-sm">Last Updated: October 2023</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>1. Introduction & HIPAA Compliance</h2>
          <p>
            Aura Aesthetics ("we," "our," or "us") is deeply committed to protecting the privacy of our patients and website visitors. As a medical facility, we adhere strictly to the Health Insurance Portability and Accountability Act (HIPAA) guidelines regarding the security of Protected Health Information (PHI).
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li><strong>Personal Contact Information:</strong> Names, phone numbers, email addresses, and physical addresses collected during booking.</li>
            <li><strong>Medical History (PHI):</strong> Intake forms detailing explicit medical history, prior cosmetic procedures, and current medications necessary for safe treatment.</li>
            <li><strong>Clinical Photography:</strong> Before and after photographs necessary for medical charting and treatment planning.</li>
            <li><strong>Usage Data:</strong> Analytics data regarding your interaction with our website (cookies, IP addresses).</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected data exclusively to:</p>
          <ul>
            <li>Determine medical eligibility for requested aesthetic treatments.</li>
            <li>Maintain accurate clinical records and chart patient progress.</li>
            <li>Process payments for services rendered.</li>
            <li>Send necessary communications regarding pre- and post-treatment care.</li>
          </ul>

          <h2>4. Information Sharing & Photography</h2>
          <p>
            We strictly do not sell or rent your personal information. Clinical photography will <strong>never</strong> be used for marketing purposes (social media, website portfolio) without your explicit, separate, and revocable written consent. Your medical data is only shared with specialized electronic medical record (EMR) software providers who are intrinsically HIPAA compliant.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We deploy strict physical and digital security protocols. All patient intake forms, charts, and photographs are stored in a fully encrypted, HIPAA-compliant EMR system. Staff access is strictly compartmentalized based on clinical necessity.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For questions or requests regarding your personal health information, please contact our HIPAA Privacy Officer:<br/>
            Email: privacy@auraaesthetics.com<br/>
            Phone: (555) 123-4567
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
