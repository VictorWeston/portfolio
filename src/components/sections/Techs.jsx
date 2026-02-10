import { useFilter } from "../../context/FilterContext";
import Icon from "../common/Icon";

function Techs() {
  const { techsByType, techTypes, selectedTechs, toggleTech } = useFilter();

  return (
    <section id="techs" className="section techs">
      <h2 className="section__title">Technologies</h2>
      <div className="techs__groups">
        {Object.entries(techTypes).map(([type, label]) => {
          const techsInType = techsByType[type];
          if (!techsInType || techsInType.length === 0) return null;

          return (
            <div key={type} className="techs__group">
              <h3 className="techs__group-title">{label}</h3>
              <div className="techs__list">
                {techsInType.map((tech) => (
                  <button
                    key={tech.id}
                    className={`tech-tag ${
                      selectedTechs.includes(tech.id) ? "tech-tag--active" : ""
                    }`}
                    onClick={() => toggleTech(tech.id)}
                  >
                    <Icon src={tech.icon} alt={tech.name} />
                    {tech.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Techs;
