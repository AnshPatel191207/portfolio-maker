import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import "../../styles/template.css";

const MinimalTemplate = () => {
  const { portfolioData } = useContext(PortfolioContext);

  return (
    <div className="minimal-template">
      <h1>{portfolioData.personal.name}</h1>
      <h4>{portfolioData.personal.title}</h4>

      <h3>Skills</h3>
      <p>{portfolioData.skills.join(", ")}</p>

      <h3>Projects</h3>
      {portfolioData.projects.map((p, i) => (
        <p key={i}>• {p.title}</p>
      ))}

      <h3>About</h3>
      <p>{portfolioData.personal.about}</p>

      <h3>Education</h3>
      {portfolioData.education.map((e, i) => (
        <p key={i}>{e.degree} – {e.institute}</p>
      ))}

      <h3>Achievements</h3>
      <p>{portfolioData.achievements.join(", ")}</p>

      <h3>Links</h3>
      <p>{portfolioData.links.github}</p>

    </div>
  );
};

export default MinimalTemplate;
