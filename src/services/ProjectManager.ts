
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
  featured: boolean;
}

const STORAGE_KEY = 'cyber_portfolio_projects';

export const ProjectManager = {
  getProjects: (): Project[] => {
    const projectsJson = localStorage.getItem(STORAGE_KEY);
    if (!projectsJson) return [];
    try {
      return JSON.parse(projectsJson);
    } catch (error) {
      console.error('Failed to parse projects from localStorage:', error);
      return [];
    }
  },

  saveProjects: (projects: Project[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  },

  addProject: (project: Omit<Project, 'id'>): Project => {
    const projects = ProjectManager.getProjects();
    const newProject = { ...project, id: crypto.randomUUID() };
    projects.push(newProject);
    ProjectManager.saveProjects(projects);
    return newProject;
  },

  updateProject: (project: Project): boolean => {
    const projects = ProjectManager.getProjects();
    const index = projects.findIndex(p => p.id === project.id);
    if (index === -1) return false;
    
    projects[index] = project;
    ProjectManager.saveProjects(projects);
    return true;
  },

  deleteProject: (id: string): boolean => {
    const projects = ProjectManager.getProjects();
    const filteredProjects = projects.filter(p => p.id !== id);
    if (filteredProjects.length === projects.length) return false;
    
    ProjectManager.saveProjects(filteredProjects);
    return true;
  },

  getProject: (id: string): Project | undefined => {
    const projects = ProjectManager.getProjects();
    return projects.find(p => p.id === id);
  },

  // Initialize with some default projects if empty
  initializeDefaultProjects: (): void => {
    const existingProjects = ProjectManager.getProjects();
    if (existingProjects.length > 0) return;

    const defaultProjects: Omit<Project, 'id'>[] = [
      {
        title: "NEURAL INTERFACE",
        description: "Advanced brain-computer interface for direct neural control of digital systems.",
        imageUrl: "/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png",
        date: "2069-12-15",
        category: "Hardware",
        featured: true
      },
      {
        title: "HOLOGRAPHIC DISPLAY",
        description: "Volumetric projection system with tactile feedback capabilities.",
        imageUrl: "/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png",
        date: "2070-01-20",
        category: "Display",
        featured: true,
        
      },
      {
        title: "AI COMPANION",
        description: "Autonomous digital assistant with advanced emotional intelligence.",
        imageUrl: "/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png",
        date: "2070-02-05",
        category: "Software",
        featured: false
      },
      {
        title: "QUANTUM PROCESSOR",
        description: "Next-generation computing architecture based on quantum principles.",
        imageUrl: "/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png",
        date: "2070-02-28",
        category: "Hardware",
        featured: false
      }
    ];

    defaultProjects.forEach(project => ProjectManager.addProject(project));
  }
};

// Initialize default projects when the module is imported
ProjectManager.initializeDefaultProjects();
