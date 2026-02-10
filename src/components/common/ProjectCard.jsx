import { useState } from "react";
import { techs } from "../../data";
import { useFilter } from "../../context/FilterContext";
import Icon from "./Icon";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { selectedTechs } = useFilter();
  const { name, type, img, description, techs: projectTechs, features, links } = project;

  // Get full tech objects from IDs
  const techObjects = techs.filter((t) => projectTechs.includes(t.id));

  // Helper to get tech objects for features
  const getFeatureTechs = (featureTechIds) => 
    techs.filter((t) => featureTechIds?.includes(t.id));

  return (
    <>
      {/* Compact Card */}
      <article 
        className="project-card"
        onClick={() => setIsExpanded(true)}
      >
        <div className="project-card__image">
          {img ? (
            <img src={img} alt={name} />
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

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="project-modal-overlay" onClick={() => setIsExpanded(false)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="project-modal__close" 
              onClick={() => setIsExpanded(false)}
              aria-label="Close"
            >
              ×
            </button>
            
            {img && (
              <div className="project-modal__image">
                <img src={img} alt={name} />
              </div>
            )}
            
            <div className="project-modal__content">
              <div className="project-modal__header">
                <h3 className="project-modal__name">{name}</h3>
                <span className={`project-card__type project-card__type--${type}`}>
                  {type}
                </span>
              </div>
              
              <p className="project-modal__description">{description}</p>

              {techObjects.length > 0 && (
                <div className="project-modal__section">
                  <span className="project-modal__label">Tech:</span>
                  <div className="project-modal__tags">
                    {techObjects.map((tech) => (
                      <span
                        key={tech.id}
                        className={`tag tag--tech ${
                          selectedTechs.includes(tech.id) ? "tag--highlighted" : ""
                        }`}
                      >
                        <Icon src={tech.icon} alt={tech.name} className="icon--small" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {features && features.length > 0 && (
                <div className="project-modal__section">
                  <span className="project-modal__label">Features:</span>
                  <ul className="project-modal__features">
                    {features.map((feature, index) => {
                      const featureTechObjs = getFeatureTechs(feature.techs);
                      
                      return (
                        <li key={index} className="project-modal__feature">
                          {feature.img && (
                            <div className="project-modal__feature-image">
                              <img src={feature.img} alt={feature.name} />
                            </div>
                          )}
                          <div className="project-modal__feature-content">
                            <strong>{feature.name}</strong>
                            {feature.description && <p>{feature.description}</p>}
                            
                            {featureTechObjs.length > 0 && (
                              <div className="project-modal__feature-tags">
                                {featureTechObjs.map((tech) => (
                                  <span
                                    key={tech.id}
                                    className={`tag tag--tech tag--small ${
                                      selectedTechs.includes(tech.id) ? "tag--highlighted" : ""
                                    }`}
                                  >
                                    <Icon src={tech.icon} alt={tech.name} className="icon--small" />
                                    {tech.name}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {links && links.length > 0 && (
                <div className="project-modal__links">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal__link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
