
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectDetail from "../components/projects/ProjectDetail";
import { projects } from "../data/ProjectsData";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project doesn't exist, redirect to projects page
    if (!projects.find(p => p.id === Number(id)) && projects.length > 0) {
      navigate("/projects");
    }
  }, [id, navigate]);
  
  if (!id) {
    return (
      <div className="container-custom py-32 text-center">
        <h2>Project not found</h2>
        <Link to="/projects" className="text-primary inline-flex items-center mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProjectDetail projects={projects} />
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
