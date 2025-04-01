import { Link } from "react-router-dom";
import { Project as ProjectType } from "../../components/projects/ProjectDetail";

type ProjectCardProps = {
  project: ProjectType;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block rounded-xl overflow-hidden group transition-all duration-500 reveal"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative h-80 w-full overflow-hidden">
        {/* Image - Full height by default */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Black Contrast Overlay - Appears on hover for premium look */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* Title - Only shown on hover */}
          <h3 className="text-white text-xl font-medium px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;