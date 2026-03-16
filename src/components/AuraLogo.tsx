import { motion } from 'framer-motion';

const AuraLogo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={light ? "text-white" : "text-primary-500"}
      >
        <motion.path 
          d="M16 2C16 2 20 10 26 12C20 14 16 22 16 30C16 22 12 14 6 12C12 10 16 2 16 2Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M16 8C16 8 18 12 21 13C18 14 16 18 16 22C16 18 14 14 11 13C14 12 16 8 16 8Z" 
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.svg>
      <div className="flex flex-col justify-center translate-y-0.5">
        <span className={`font-heading text-2xl tracking-[0.15em] uppercase leading-none transition-colors duration-300 ${light ? "text-white" : "text-dark"}`}>
          AURA
        </span>
        <span className={`text-[9px] font-sans font-medium tracking-[0.3em] uppercase leading-none mt-1.5 opacity-80 transition-colors duration-300 ${light ? "text-white" : "text-primary-600"}`}>
          Aesthetics
        </span>
      </div>
    </div>
  );
};

export default AuraLogo;
