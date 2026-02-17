import { experience, techs } from "../../data";
import { useFilter } from "../../context/FilterContext";
import Icon from "../common/Icon";
import CrossRefText from "../common/CrossRefText";

function Experience() {
  const { selectedTechs } = useFilter();

  return (
    <section id="experience" className="section experience">
      <h2 className="section__title">Experience</h2>
      <div className="experience__list">
        {experience.map((exp) => {
          const techObjects = techs.filter((t) => exp.techs?.includes(t.id));

          return (
            <article key={exp.id} className="experience-card">
              <div className="experience-card__header">
                <h3 className="experience-card__role">{exp.role}</h3>
                <span className="experience-card__company">{exp.company}</span>
              </div>
              <div className="experience-card__duration">
                {exp.duration.start} - {exp.duration.end || "Present"}
              </div>
              <CrossRefText text={exp.description} className="experience-card__description" />

              {techObjects.length > 0 && (
                <div className="experience-card__techs">
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
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
