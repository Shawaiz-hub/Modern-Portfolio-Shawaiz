
import React, { useEffect, useState } from 'react';
import { Project, ProjectManager } from '@/services/ProjectManager';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <motion.div 
      className="cyber-panel overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className="relative h-32 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
      </div>
      <div className="p-2">
        <h3 className="text-white/90 text-sm font-display tracking-wider">{project.title}</h3>
        <p className="text-white/60 text-xs mt-1">{project.category}</p>
      </div>
    </motion.div>
  );
};

const PortfolioGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Load projects from local storage
    setProjects(ProjectManager.getProjects());
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project, index) => (
        <PortfolioItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};

export default PortfolioGrid;
