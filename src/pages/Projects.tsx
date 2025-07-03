import React from 'react';
import ProjectCard from '../components/ProjectCard';
import proje1Resmi from '../assets/CineFix.png';
import proje2Resmi from '../assets/Mindora.png';
import proje3Resmi from '../assets/AirCast.png';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    id: 1,
    title: 'CineFix',
    description: 'CineFix, kullanıcıların film, dizi ve animeleri görüntüleyip yorum yapmasını/okumasını ve puan vermesini sağlayan bir web uygulamasıdır. Üniversite Projesidir.',
    image: proje1Resmi,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    liveUrl: '#',
    githubUrl: 'https://github.com/enessaydin0/CineFix',
  },
  {
    id:2,
    title: 'Mindora',
    description: 'Mindora, C# ve SQL Server kullanılarak geliştirilen bir masaüstü kütüphane otomasyon sistemidir. Sistemde 3 farklı kullanıcı rolü bulunmaktadır: Üye, Kütüphane Görevlisi ve Admin. Her rol, kendine özgü arayüz ve yetkilere sahiptir.',
    image: proje2Resmi,
    tags: ['C#', "SQL Server"],
    liveUrl: '#',
    githubUrl: 'https://github.com/enessaydin0/Mindora',
  },
  {
    id:3,
    title: 'AirCast',
    description: 'AirCast, OpenWeather APIsi kullanarak dünya genelindeki şehirlerin hava durumu bilgilerini sunan ve sıcaklık değişimlerini grafiksel olarak gösteren bir masaüstü C# uygulamasıdır.',
    image: proje3Resmi,
    tags: ['C#', "OpenWeather API"],
    liveUrl: '#',
    githubUrl: 'https://github.com/enessaydin0/AirCast',
  }
  
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="min-h-screen bg-slate-700 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-12">
          {t('projects_title')}
        </h2>
        <div className="container mx-auto">
            
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;