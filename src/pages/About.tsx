import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();
  const birthDate = new Date('2005-10-12');

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  const skills = [
    'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 
    'React', 'Node.js', 'PHP', 'SQL'
  ];

  return (
    <section id="about" className="min-h-screen bg-slate-800 py-20 px-4 flex items-center">
      <div className="container mx-auto text-center md:text-left">
        
        <h2 className="text-4xl font-bold text-white mb-4">
          {t('about_title')}
        </h2>
        
        <p className="text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto md:mx-0">
          {t('about_text')}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-lg mx-auto md:mx-0">
          <div className="flex items-center gap-4">
            <FaBirthdayCake className="text-sky-400" size={24} />
            <div>
              <p className="font-semibold text-white">{t('info_age')}</p>
              <p className="text-slate-400">{age}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-sky-400" size={24} />
            <div>
              <p className="font-semibold text-white">{t('info_location')}</p>
              <p className="text-slate-400">İstanbul, Şişli</p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-4 mt-12">
          {t('skills_title')}
        </h3>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {skills.map(skill => (
            <span key={skill} className="bg-sky-500/20 text-sky-300 font-medium px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>

        <a 
        href="/RamazanEnesAydin_CV.pdf" 
        download="RamazanEnesAydin_CV.pdf"
        
        className="mt-12 inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
        {t('cv_button')}
        </a>

      </div>
    </section>
  );
};

export default About;