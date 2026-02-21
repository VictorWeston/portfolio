import { useState } from "react";
import { techs, projects } from "../../data";
import { useFilter } from "../../context/FilterContext";
import Icon from "./Icon";
import CrossRefText from "./CrossRefText";
import CyclingImage from "./CyclingImage";

function ProjectModal() {
  const { selectedTechs, activeProjectId, closeProject } = useFilter();
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!activeProjectId) return null;

  const project = projects.find((p) => p.id === activeProjectId);
  if (!project) return null;

  const { name, type, img, description, techs: projectTechs, features, links } = project;
  const techObjects = techs.filter((t) => projectTechs.includes(t.id));
  const getFeatureTechs = (featureTechIds) =>
    techs.filter((t) => featureTechIds?.includes(t.id));

  return (
    <div className="project-modal-overlay" onClick={() => closeProject()}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="project-modal__close"
          onClick={() => closeProject()}
          aria-label="Close"
        >
          ×
        </button>

        {(Array.isArray(img) ? img.length > 0 : !!img) && (
          <div className="project-modal__image">
            <CyclingImage src={img} alt={name} />
          </div>
        )}

        <div className="project-modal__content">
          <div className="project-modal__header">
            <h3 className="project-modal__name">{name}</h3>
            <span className={`project-card__type project-card__type--${type}`}>
              {type}
            </span>
          </div>

          <CrossRefText text={description} className="project-modal__description" />

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
                    <li
                      key={index}
                      className={`project-modal__feature${feature.img ? ' project-modal__feature--clickable' : ''}`}
                      onClick={(e) => {
                        if (feature.img) {
                          e.stopPropagation();
                          setLightboxImg(feature.img);
                        }
                      }}
                    >
                      <div className="project-modal__feature-content">
                        <strong>{feature.name}</strong>
                        {feature.description && (
                          <CrossRefText text={feature.description} />
                        )}

                        {featureTechObjs.length > 0 && (
                          <div className="project-modal__feature-tags">
                            {featureTechObjs.map((tech) => (
                              <span
                                key={tech.id}
                                className={`tag tag--tech tag--small ${
                                  selectedTechs.includes(tech.id)
                                    ? "tag--highlighted"
                                    : ""
                                }`}
                              >
                                <Icon
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="icon--small"
                                />
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

      {lightboxImg && (
        <div
          className="feature-lightbox-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxImg(null);
          }}
        >
          <img src={lightboxImg} alt="Full view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default ProjectModal;
