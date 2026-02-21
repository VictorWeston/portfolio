import { techs } from "../../data";
import { useFilter } from "../../context/FilterContext";
import Icon from "./Icon";
import CyclingImage from "./CyclingImage";

function ProjectCard({ project }) {
  const { selectedTechs, openProject } = useFilter();
  const { name, type, img, techs: projectTechs } = project;

  // Get full tech objects from IDs
  const techObjects = techs.filter((t) => projectTechs.includes(t.id));

  const hasImage = Array.isArray(img) ? img.length > 0 : !!img;

  return (
    <article 
      className="project-card"
      onClick={() => openProject(project.id)}
    >
      <div className="project-card__image">
        {hasImage ? (
          <CyclingImage src={img} alt={name} />
        ) : (
          <div className="project-card__image-placeholder" />
        )}
        <span className={`project-card__type project-card__type--${type}`}>
          {type}
        </span>
      </div>
      <div className="project-card__compact-content">
        <h3 className="project-card__name">{name}</h3>
        <div className="project-card__tags">
          {techObjects.slice(0, 4).map((tech) => (
            <span
              key={tech.id}
              className={`tag tag--small ${
                selectedTechs.includes(tech.id) 
                  ? "tag--highlighted" 
                  : ""
              }`}
            >
              <Icon src={tech.icon} alt={tech.name} className="icon--small" />
              {tech.name}
            </span>
          ))}
          {techObjects.length > 4 && (
            <span className="tag tag--small tag--more">+{techObjects.length - 4}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
