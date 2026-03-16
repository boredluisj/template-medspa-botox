import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  if (formStatus === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary-50 border border-primary-200 rounded-3xl p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold font-heading text-dark mb-4">Request Received</h3>
        <p className="text-gray-600 text-lg">
          Thank you for reaching out. A member of our clinical team will contact you within 24 hours to schedule your consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
      <h3 className="text-3xl font-bold font-heading text-dark mb-8">Request a Consultation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="Doe"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-gray-400"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you?</label>
        <textarea 
          id="message" 
          rows={4} 
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all placeholder:text-gray-400 resize-none"
          placeholder="I'm interested in the medical weight loss program..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={formStatus === 'submitting'}
        className={`w-full py-4 rounded-xl text-white font-medium text-lg transition-all shadow-lg ${
          formStatus === 'submitting' ? 'bg-primary-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700 hover:shadow-primary-600/25'
        }`}
      >
        {formStatus === 'submitting' ? 'Sending Request...' : 'Submit Request'}
      </button>
      <p className="mt-4 text-xs text-gray-500 text-center">
        Your information is secure and HIPAA compliant. We will never share your personal data.
      </p>
    </form>
  );
};

export default ContactForm;
