import { passion } from "../../data";
import Icon from "../common/Icon";

function Passion() {
  if (passion.length === 0) return null;

  return (
    <section id="passion" className="section passion">
      <h2 className="section__title">Passion</h2>
      <div className="passion__list">
        {passion.map((item) => (
          <div key={item.id} className="passion-card">
            <Icon src={item.icon} alt={item.name} />
            <h3 className="passion-card__name">{item.name}</h3>
            {item.description && (
              <p className="passion-card__description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Passion;
