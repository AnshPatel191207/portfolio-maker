import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const ProjectsForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);
  const [project, setProject] = useState({ title: "", desc: "" });

  const addProject = () => {
    if (!project.title) return;

    setPortfolioData({
      ...portfolioData,
      projects: [...portfolioData.projects, project]
    });

    setProject({ title: "", desc: "" });
  };

  return (
    <div className="form-card">
      <h2>Projects</h2>

      <input
        placeholder="Project Title"
        value={project.title}
        onChange={(e) =>
          setProject({ ...project, title: e.target.value })
        }
      />

      <textarea
        placeholder="Project Description"
        value={project.desc}
        onChange={(e) =>
          setProject({ ...project, desc: e.target.value })
        }
      />

      <button type="button" onClick={addProject}>
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
