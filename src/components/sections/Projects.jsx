import { useFilter } from "../../context/FilterContext";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  const { filteredProjects, hasActiveFilters, clearFilters } = useFilter();

  // Split projects into two rows
  const row1 = filteredProjects.filter((_, i) => i % 2 === 0);
  const row2 = filteredProjects.filter((_, i) => i % 2 === 1);

  return (
    <section id="projects" className="section projects">
      <div className="projects__header">
        <h2 className="section__title">Projects</h2>
        {hasActiveFilters && (
          <div className="projects__filter-info">
            <span>Showing {filteredProjects.length} filtered projects</span>
            <button className="projects__clear-filter" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="projects__scroll-container">
          <div className="projects__grid">
            <div className="projects__row">
              {row1.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="projects__row">
              {row2.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="projects__empty">
          No projects match the selected filters.
        </p>
      )}
    </section>
  );
}

export default Projects;
