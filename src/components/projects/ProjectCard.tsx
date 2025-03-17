
import { Link } from "react-router-dom";
import { Project as ProjectType } from "../../components/projects/ProjectDetail";

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-subtle group hover:shadow-md transition-all duration-500 reveal"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="font-medium">{project.location}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Year</p>
            <p className="font-medium">{project.year}</p>
          </div>
        </div>
        <Link 
          to={`/projects/${project.id}`}
          className="w-full py-3 border border-primary/20 rounded-md text-primary font-medium transition-all hover:bg-primary hover:text-white group-hover:border-primary button-hover inline-block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
