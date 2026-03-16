import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Award, Heart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  link: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'shield': return <Shield size={24} />;
    case 'star': return <Star size={24} />;
    case 'award': return <Award size={24} />;
    case 'heart': return <Heart size={24} />;
    case 'smile': return <Smile size={24} />;
    default: return <Shield size={24} />;
  }
};

const ServiceCard = ({ title, description, icon, imageUrl, link }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(182,143,121,0.15)] transition-all duration-500 border border-primary-50/50 flex flex-col h-full hover:-translate-y-2"
    >
      {/* Optional Image Header */}
      {imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-xl group-hover:scale-110 transition-transform">
            {getIcon(icon)}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow relative">
        {!imageUrl && (
          <div className="w-16 h-16 rounded-[1.5rem] bg-primary-50 text-primary-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm border border-primary-100">
            {getIcon(icon)}
          </div>
        )}
        
        <h3 className="text-2xl font-black font-heading text-dark mb-4 tracking-tight group-hover:text-primary-600 transition-colors uppercase">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-10 flex-grow font-light text-lg">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary-600 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:tracking-[0.3em] mt-auto"
        >
          Explore Service 
          <ArrowRight size={16} className="ml-3 group-hover:translate-x-3 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
