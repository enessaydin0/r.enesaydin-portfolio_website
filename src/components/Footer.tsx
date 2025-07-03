import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400 py-6 text-center">
      <div className="container mx-auto">
        <p>{t('footer_text', { year: currentYear })}</p>
      </div>
    </footer>
  );
};

export default Footer;