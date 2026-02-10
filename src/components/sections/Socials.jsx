import { socials } from "../../data";
import Icon from "../common/Icon";

function Socials() {
  if (socials.length === 0) return null;

  return (
    <section id="socials" className="section socials">
      <h2 className="section__title">Connect</h2>
      <div className="socials__list">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.platform}
          >
            <Icon src={social.icon} alt={social.platform} />
            <span className="social-link__platform">{social.platform}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;
