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
      whileHover={{ y: -8 }}
      className="group rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Optional Image Header */}
      {imageUrl && (
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-dark/40 z-10 group-hover:bg-dark/20 transition-colors" />
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
            {getIcon(icon)}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        {!imageUrl && (
          <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
            {getIcon(icon)}
          </div>
        )}
        
        <h3 className="text-2xl font-bold font-heading text-dark mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary-600 font-bold uppercase tracking-wide text-sm group-hover:text-primary-700 transition-colors mt-auto"
        >
          Explore Service 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
