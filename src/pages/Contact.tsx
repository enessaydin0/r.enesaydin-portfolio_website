import React, { useState } from 'react'; 
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form gönderildiğinde (butona tıklandığında) çalışacak olan ana fonksiyon
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Gönderiliyor...');

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Bir sunucu hatası oluştu.');
      }
    } catch (error: any) {
      console.error('Form gönderme hatası:', error);
      setStatus(error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-800 py-20 px-4 flex items-center">
      <div className="container mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('contact_title')}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">{t('contact_subtitle')}</p>
        <div className="flex justify-center space-x-6 mb-12 text-slate-700 dark:text-white">
            <a 
                href="mailto:enesaydinnn@gmail.com" 
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" 
                aria-label="Email"
            >
                <FaEnvelope size={32} />
            </a>
            
            <a 
                href="https://github.com/enessaydin0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" 
                aria-label="GitHub"
            >
                <FaGithub size={32} />
            </a>
            
            <a 
                href="https://linkedin.com/in/enesaydin0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" 
                aria-label="LinkedIn"
            >
                <FaLinkedin size={32} />
            </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 mb-2">{t('form_name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full bg-slate-300 dark:bg-slate-700 border border-slate-400 dark:border-slate-500 rounded-lg py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 mb-2">{t('form_email')}</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full bg-slate-300 dark:bg-slate-700 border border-slate-400 dark:border-slate-500 rounded-lg py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-slate-700 dark:text-slate-300 mb-2">{t('form_message')}</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5} 
              className="w-full bg-slate-300 dark:bg-slate-700 border border-slate-400 dark:border-slate-500 rounded-lg py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              {t('form_button')}
            </button>
          </div>
        </form>

        {status && <p className="mt-4 text-center text-slate-900 dark:text-white">{status}</p>}

      </div>
    </section>
  );
};

export default Contact;