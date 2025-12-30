import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import "../../styles/template.css";

const ModernTemplate = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <div className="modern-template">
      <header className="modern-header">
        <h1>{portfolioData.personal.name || "Your Name"}</h1>
        <p>{portfolioData.personal.title || "Professional Title"}</p>
      </header>

      <section className="modern-section">
        <h2>About Me</h2>
        <p>{portfolioData.personal.about}</p>
      </section>

      <section className="modern-section">
        <h2>Skills</h2>
        <div className="modern-skills">
          {portfolioData.skills.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </section>

      <section className="modern-section">
        <h2>Projects</h2>
        {portfolioData.projects.map((p, i) => (
          <div key={i} className="modern-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="modern-section">
        <h2>Education</h2>
        {portfolioData.education.map((e, i) => (
          <p key={i}>
            <b>{e.degree}</b> – {e.institute} ({e.year})
          </p>
        ))}
      </section>

      <section className="modern-section">
        <h2>Achievements</h2>
        <ul>
          {portfolioData.achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="modern-section">
        <h2>Links</h2>
        <p>{portfolioData.links.github}</p>
        <p>{portfolioData.links.linkedin}</p>
      </section>
    </div>
  );
};

export default ModernTemplate;
