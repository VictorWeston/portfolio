import { links } from "../../data";
import Icon from "../common/Icon";

function Links() {
  if (links.length === 0) return null;

  return (
    <section id="links" className="section links">
      <h2 className="section__title">Links</h2>
      <div className="links__list">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <Icon src={link.icon} alt={link.name} />
            <span className="link-card__name">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Links;
