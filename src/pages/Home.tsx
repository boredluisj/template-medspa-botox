import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import HowItWorks from '../components/HowItWorks';
import ResultsSection from '../components/ResultsSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aura Aesthetics | Premium MedSpa & Injectables</title>
        <meta name="description" content="Discover your most radiant self with premium aesthetic treatments. Aura offers Botox, dermal fillers, and laser therapies by specialized medical professionals." />
      </Helmet>

      <Hero />

      {/* Trust Badges Bar */}
      <section className="bg-surface border-b border-primary-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-6">Recognized Providers Of</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-light font-heading tracking-wider">Botox® Cosmetic</div>
            <div className="text-xl font-light font-heading tracking-wider">Juvéderm®</div>
            <div className="text-xl font-light font-heading tracking-wider">Morpheus8</div>
            <div className="text-xl font-light font-heading tracking-wider">HydraFacial</div>
            <div className="text-xl font-light font-heading tracking-wider">Skinceuticals</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Signature Treatments</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-dark mb-6">Curated Aesthetic <span className="font-normal italic text-primary-600">Solutions.</span></h3>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              We leverage the industry's most advanced non-surgical modalities to restore volume, smooth texture, and enhance your innate beauty profile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Neuromodulators"
              description="Relax dynamic wrinkles and prevent new lines from forming. Botox, Dysport, and Xeomin expertly administered for natural, expressive results."
              icon="smile"
              imageUrl="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
              link="/services#neuromodulators"
            />
            <ServiceCard 
              title="Dermal Fillers"
              description="Restore youthful volume, contour cheekbones, and refine your lips with our premium selection of hyaluronic acid and biostimulatory fillers."
              icon="heart"
              imageUrl="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1935&auto=format&fit=crop"
              link="/services#fillers"
            />
            <ServiceCard 
              title="Laser Skin Resurfacing"
              description="Reverse sun damage, target hyperpigmentation, and stimulate rampant collagen production with our state-of-the-art fractional laser systems."
              icon="star"
              imageUrl="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
              link="/services#laser"
            />
            <ServiceCard 
              title="RF Microneedling"
              description="Harness the power of Morpheus8 to remodel skin on a cellular level. Dramatically improve laxity, acne scars, and overall skin texture."
              icon="shield"
              imageUrl="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
              link="/services#microneedling"
            />
            <ServiceCard 
              title="IV Hydration Therapy"
              description="Optimize your wellness from the inside out. Custom-blended nutrient infusions designed for immunity, energy, and radiant skin health."
              icon="award"
              imageUrl="https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2014&auto=format&fit=crop"
              link="/services#iv-therapy"
            />
            <ServiceCard 
              title="Medical-Grade Skincare"
              description="Extend your clinical results at home. Curated regimens featuring potent, clinically proven actives tailored to your exact skin type."
              icon="smile" 
              imageUrl="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop"
              link="/services#skincare"
            />
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <ResultsSection />

      <TestimonialSection />

      <CTASection />
    </>
  );
};

export default Home;
