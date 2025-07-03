import React from 'react';
import { useTranslation } from 'react-i18next';
import { GB, TR } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Dili değiştirecek olan fonksiyon
  const changeLanguage = (lng: 'tr' | 'en') => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-md text-gray-800 dark:text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md dark:shadow-none">
    
      <div className="container mx-auto flex justify-between items-center">

        <a href="/" className="text-xl font-bold tracking-wider hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
          Ramazan Enes AYDIN
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav_about')}</a>
          <a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav_projects')}</a>
          <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{t('nav_contact')}</a>
          
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>

          
          <div className="flex items-center space-x-3">
            <button onClick={() => changeLanguage('tr')} title="Türkçe" className="opacity-70 hover:opacity-100 transition-opacity">
              <TR className="w-6 h-6 rounded-sm" />
            </button>
            <button onClick={() => changeLanguage('en')} title="English" className="opacity-70 hover:opacity-100 transition-opacity">
              <GB className="w-6 h-6 rounded-sm" />
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;