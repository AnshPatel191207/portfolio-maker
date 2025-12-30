import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import "../../styles/eliteTemplate.css";

const EliteTemplate = () => {
    const { portfolioData } = useContext(PortfolioContext);

    return (
        <div className="elite-wrapper">
            <header className="elite-header">
                <h1>{portfolioData.personal.name || "Your Name"}</h1>
                <p>{portfolioData.personal.title || "Professional Title"}</p>
            </header>

            <section className="elite-section">
                <h2>Skills</h2>
                <div className="elite-skills">
                    {portfolioData.skills.map((s, i) => (
                        <span key={i}>{s}</span>
                    ))}
                </div>
            </section>

            <section className="elite-section">
                <h2>Projects</h2>
                <div className="elite-projects">
                    {portfolioData.projects.map((p, i) => (
                        <div key={i} className="elite-project-card">
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="elite-section">
                <h2>About Me</h2>
                <p>{portfolioData.personal.about || "No description provided."}</p>
            </section>

            {/* EDUCATION */}
            <section className="elite-section">
                <h2>Education</h2>
                {portfolioData.education.map((e, i) => (
                    <div key={i} className="elite-project-card">
                        <h3>{e.degree}</h3>
                        <p>{e.institute} • {e.year}</p>
                    </div>
                ))}
            </section>

            {/* ACHIEVEMENTS */}
            <section className="elite-section">
                <h2>Achievements</h2>
                <ul>
                    {portfolioData.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                    ))}
                </ul>
            </section>

            {/* LINKS */}
            <section className="elite-section">
                <h2>Links</h2>
                <p>GitHub: {portfolioData.links.github}</p>
                <p>LinkedIn: {portfolioData.links.linkedin}</p>
                <p>Website: {portfolioData.links.website}</p>
            </section>

        </div>
    );
};

export default EliteTemplate;
