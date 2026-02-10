import { hobbies } from "../../data";
import Icon from "../common/Icon";

function Hobbies() {
  if (hobbies.length === 0) return null;

  return (
    <section id="hobbies" className="section hobbies">
      <h2 className="section__title">Hobbies</h2>
      <div className="hobbies__list">
        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-card">
            <Icon src={hobby.icon} alt={hobby.name} />
            <h3 className="hobby-card__name">{hobby.name}</h3>
            {hobby.description && (
              <p className="hobby-card__description">{hobby.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
