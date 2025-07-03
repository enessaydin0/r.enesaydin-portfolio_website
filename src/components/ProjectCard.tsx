import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top -mt-1" />
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-">
          {project.tags.map(tag => (
            <span key={tag} className="bg-sky-500/20 text-sky-300 font-medium px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors flex items-center gap-2 mt-4">
            <FaGithub /> Kod
          </a>
        </div>
      </div>
  );
};

export default ProjectCard;