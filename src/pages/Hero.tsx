import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-700 to-slate-900">
      
      <div className="max-w-4xl mx-auto px-4">
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {t('hero_greeting')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-sky-600 dark:text-sky-300 mb-8"
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 text-slate-800 dark:text-white"
        >
          <a 
            href="https://github.com/enessaydin0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a 
            href="https://linkedin.com/in/enesaydin0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;