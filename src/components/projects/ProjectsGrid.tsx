
import { Project as ProjectType } from "../../components/projects/ProjectDetail";
import ProjectCard from "./ProjectCard";

type ProjectsGridProps = {
  visibleProjects: ProjectType[];
};

const ProjectsGrid = ({ visibleProjects }: ProjectsGridProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {visibleProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
