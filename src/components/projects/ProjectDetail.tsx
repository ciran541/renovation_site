
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Maximize, ArrowRight } from "lucide-react";
import { useEffect } from "react";

// Project type definition
export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  area: string;
  longDescription?: string;
  images?: string[];
};

type ProjectDetailProps = {
  projects: Project[];
};

const ProjectDetail = ({ projects }: ProjectDetailProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project by ID
  const project = projects.find(p => p.id === Number(id));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project doesn't exist, redirect to projects page
    if (!project && projects.length > 0) {
      navigate("/projects");
    }
  }, [project, projects, navigate]);
  
  if (!project) {
    return (
      <div className="container-custom py-32 text-center">
        <h2>Project not found</h2>
        <Link to="/projects" className="text-primary inline-flex items-center mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </div>
    );
  }
  
  // Default images if not provided
  const projectImages = project.images || [project.image, project.image, project.image];
  
  // Find next and previous projects
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  
  return (
    <div className="py-32">
      <div className="container-custom">
        <Link to="/projects" className="text-primary inline-flex items-center mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="mb-6">{project.title}</h1>
            
            <div className="prose max-w-none mb-8">
              <p className="text-muted-foreground text-lg">
                {project.longDescription || project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="p-4 rounded-lg bg-accent/30">
                <MapPin className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-medium">Location</h3>
                <p>{project.location}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/30">
                <Calendar className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-medium">Year</h3>
                <p>{project.year}</p>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/30">
                <Maximize className="h-5 w-5 text-primary mb-2" />
                <h3 className="text-sm font-medium">Area</h3>
                <p>{project.area}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-accent/30 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-medium mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us to discuss how we can transform your space with a design inspired by this project.
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-primary text-white py-3 rounded-md font-medium text-center transition-all hover:bg-primary/90"
                >
                  Get in Touch
                </Link>
              </div>
              
              <div className="bg-accent/30 p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">More Projects</h3>
                
                {prevProject && (
                  <div className="flex items-center gap-4 mb-4 p-3 hover:bg-accent rounded-lg transition-colors">
                    <img 
                      src={prevProject.image} 
                      alt={prevProject.title} 
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">Previous Project</p>
                      <Link 
                        to={`/projects/${prevProject.id}`} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {prevProject.title}
                      </Link>
                    </div>
                  </div>
                )}
                
                {nextProject && (
                  <div className="flex items-center gap-4 p-3 hover:bg-accent rounded-lg transition-colors">
                    <img 
                      src={nextProject.image} 
                      alt={nextProject.title} 
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">Next Project</p>
                      <Link 
                        to={`/projects/${nextProject.id}`} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {nextProject.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
