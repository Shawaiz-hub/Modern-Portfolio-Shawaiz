
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Project, ProjectManager } from '@/services/ProjectManager';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, Edit, Trash, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    imageUrl: '/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png',
    date: new Date().toISOString().split('T')[0],
    category: '',
    featured: false
  });
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setProjects(ProjectManager.getProjects());
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
  };

  const handleUpdateProject = () => {
    if (editingProject) {
      const success = ProjectManager.updateProject(editingProject);
      if (success) {
        toast({
          title: "Project updated",
          description: `${editingProject.title} has been updated successfully`,
        });
        setEditingProject(null);
        loadProjects();
      } else {
        toast({
          title: "Update failed",
          description: "Failed to update project",
          variant: "destructive",
        });
      }
    }
  };

  const handleDeleteProject = (id: string) => {
    const success = ProjectManager.deleteProject(id);
    if (success) {
      toast({
        title: "Project deleted",
        description: "The project has been deleted successfully",
      });
      loadProjects();
    } else {
      toast({
        title: "Delete failed",
        description: "Failed to delete project",
        variant: "destructive",
      });
    }
  };

  const handleAddProject = () => {
    // Basic validation
    if (!newProject.title || !newProject.description || !newProject.category) {
      toast({
        title: "Validation error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    ProjectManager.addProject(newProject);
    toast({
      title: "Project added",
      description: `${newProject.title} has been added successfully`,
    });
    setIsAdding(false);
    setNewProject({
      title: '',
      description: '',
      imageUrl: '/lovable-uploads/044a01a8-2343-4896-89aa-5b4588b583b4.png',
      date: new Date().toISOString().split('T')[0],
      category: '',
      featured: false
    });
    loadProjects();
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-2">
      <Navbar />
      
      <motion.div 
        className="flex-grow flex flex-col items-center py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl w-full">
          <div className="cyber-panel p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="cyber-text text-4xl font-display">ADMIN PANEL</h1>
              <Button 
                className="cyber-button" 
                onClick={() => setIsAdding(!isAdding)}
              >
                {isAdding ? "CANCEL" : "ADD PROJECT"}
              </Button>
            </div>

            {/* Add Project Form */}
            {isAdding && (
              <motion.div 
                className="mb-8 cyber-panel p-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="cyber-text text-xl mb-4">ADD NEW PROJECT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="new-title">Title</Label>
                    <Input 
                      id="new-title"
                      value={newProject.title} 
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})} 
                      className="bg-cyber-dark/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-category">Category</Label>
                    <Input 
                      id="new-category"
                      value={newProject.category} 
                      onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                      className="bg-cyber-dark/50" 
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label htmlFor="new-description">Description</Label>
                  <Textarea 
                    id="new-description"
                    value={newProject.description} 
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="bg-cyber-dark/50 min-h-[100px]" 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="new-date">Date</Label>
                    <Input 
                      id="new-date"
                      type="date"
                      value={newProject.date} 
                      onChange={(e) => setNewProject({...newProject, date: e.target.value})}
                      className="bg-cyber-dark/50" 
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Switch 
                      id="new-featured" 
                      checked={newProject.featured} 
                      onCheckedChange={(checked) => setNewProject({...newProject, featured: checked})}
                    />
                    <Label htmlFor="new-featured">Featured</Label>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleAddProject} className="cyber-button">
                    <Plus className="mr-2 h-4 w-4" />
                    ADD PROJECT
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Projects Table */}
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Title</TableHead>
                    <TableHead className="hidden md:table-cell">Category</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">
                        {editingProject?.id === project.id ? (
                          <Input 
                            value={editingProject.title} 
                            onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                            className="bg-cyber-dark/50"
                          />
                        ) : (
                          project.title
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {editingProject?.id === project.id ? (
                          <Input 
                            value={editingProject.category} 
                            onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                            className="bg-cyber-dark/50"
                          />
                        ) : (
                          project.category
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {editingProject?.id === project.id ? (
                          <Input 
                            type="date"
                            value={editingProject.date} 
                            onChange={(e) => setEditingProject({...editingProject, date: e.target.value})}
                            className="bg-cyber-dark/50"
                          />
                        ) : (
                          new Date(project.date).toLocaleDateString()
                        )}
                      </TableCell>
                      <TableCell>
                        {editingProject?.id === project.id ? (
                          <Switch 
                            checked={editingProject.featured} 
                            onCheckedChange={(checked) => setEditingProject({...editingProject, featured: checked})}
                          />
                        ) : (
                          <div className={`h-5 w-5 rounded-full ${project.featured ? 'bg-cyber-blue' : 'bg-gray-600'}`} />
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {editingProject?.id === project.id ? (
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={handleUpdateProject} 
                            className="mr-2"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleEditProject(project)} 
                            className="mr-2"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Admin;
