import { personalInfo } from "../../data";

function PersonalInfo() {
  const { name, title, bio, location, email, phone, avatar } = personalInfo;

  return (
    <section id="personal-info" className="section personal-info">
      <div className="personal-info__avatar">
        {avatar && <img src={avatar} alt={name} />}
      </div>
      <div className="personal-info__content">
        <h1 className="personal-info__name">{name}</h1>
        <h2 className="personal-info__title">{title}</h2>
        <p className="personal-info__bio">{bio}</p>
        <div className="personal-info__contact">
          {location && <span className="personal-info__location">{location}</span>}
          {email && <span className="personal-info__email">{email}</span>}
          {phone && <span className="personal-info__phone">{phone}</span>}
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
