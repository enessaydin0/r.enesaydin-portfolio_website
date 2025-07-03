import React from 'react';
import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  return (
    <motion.div
      // ANİMASYON AYARLARI
      initial="hidden" 
      whileInView="visible" 
      
      viewport={{ 
        once: true,     
        amount: 0.2    
      }}

      transition={{ 
        duration: 0.8,
        ease: "easeOut" 
      }}

      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;