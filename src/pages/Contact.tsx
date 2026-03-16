import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Aura | Book Your Consultation</title>
        <meta name="description" content="Schedule your complimentary aesthetic facial assessment at Aura Beverly Hills. Contact our clinic to begin your transformation." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-800 rounded-full mix-blend-screen filter blur-[150px] opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6"
          >
            Begin Your <span className="text-primary-400 italic font-normal">Journey.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Whether you are seeking preventative care or restorative enhancement, our patient concierge is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-surface relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold font-heading text-dark mb-6">Clinic Information</h2>
                <p className="text-gray-600 leading-relaxed font-light">
                  Aura Aesthetics is a private, appointment-only medical facility located in the heart of Beverly Hills. Valet parking is complimentary for all patients.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-heading">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      123 Medical Center Blvd<br />
                      Suite 400 (Private Elevator Access)<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-heading">Call or Text</h3>
                    <p className="text-gray-600 font-light">(555) 123-4567</p>
                    <p className="text-sm text-gray-400 mt-1 font-light">Our concierge replies to texts within 15 minutes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-heading">Email Inquiries</h3>
                    <p className="text-gray-600 font-light">contact@auraaesthetics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 font-heading">Clinical Hours</h3>
                    <p className="text-gray-600 font-light">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-light">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600 font-light">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-primary-50 relative"
            >
              <h2 className="text-2xl font-bold font-heading text-dark mb-2">Request an Appointment</h2>
              <p className="text-gray-500 mb-8 font-light">Please submit your details and our patient coordinator will reach out to confirm your private consultation.</p>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Interactive Map */}
      <div className="h-[500px] w-full bg-gray-200 relative overflow-hidden border-t border-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105650.04169557458!2d-118.49015094396263!3d34.07297129528655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1709664556485!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Aura Aesthetics Clinic Location"
          className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
