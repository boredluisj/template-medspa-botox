import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Aura Aesthetics</title>
        <meta name="description" content="Terms and Conditions for Aura Aesthetics clinical services and website usage." />
      </Helmet>

      <section className="pt-32 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Terms & Conditions
          </motion.h1>
          <p className="text-gray-400 font-light tracking-wide uppercase text-sm">Last Updated: October 2023</p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing our website and engaging Aura Aesthetics for medical consultations or aesthetic treatments, you agree to be bound by these Terms and Conditions.
          </p>

          <h2>2. Consultations and Medical Clearance</h2>
          <p>
            All procedures require a prior medical consultation. We reserve the right to refuse treatment to any individual if our attending providers determine that the treatment is medically contraindicated or if the patient's aesthetic expectations are deemed unrealistic.
          </p>

          <h2>3. Payment and Booking Policy</h2>
          <p>
            A valid credit card is required to secure an appointment. Payment for all services is due in full at the time of treatment. We do not accept medical insurance for cosmetic procedures. 
          </p>

          <h2>4. Cancellation Protocol</h2>
          <p>
            We require a minimum of 48 hours notice to cancel or reschedule an appointment. Late cancellations or "no-shows" will be subject to a $150 cancellation fee charged to the card on file, as late changes significantly impact our providers' clinical schedules.
          </p>

          <h2>5. Treatment Outcomes</h2>
          <p>
            Aesthetic medicine is not an exact science. While we utilize industry-leading techniques and superlative products (e.g., Botox Cosmetic®, Juvéderm®), human anatomy varies. Therefore, absolute guarantees regarding exact treatment outcomes, symmetry, or the complete absence of wrinkles cannot be made.
          </p>

          <h2>6. Refunds</h2>
          <p>
            Due to the nature of medical products and services, treatments and opened skincare products are strictly non-refundable. If you experience an adverse reaction or are dissatisfied, we encourage you to schedule a follow-up assessment so we may address your concerns clinically.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For questions regarding these Terms, please contact:<br/>
            Aura Aesthetics<br/>
            123 Medical Center Blvd, Suite 400<br/>
            Beverly Hills, CA 90210<br/>
            legal@auraaesthetics.com
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
