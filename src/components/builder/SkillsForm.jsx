import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const SkillsForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill) return;
    setPortfolioData({
      ...portfolioData,
      skills: [...portfolioData.skills, skill]
    });
    setSkill("");
  };

  return (
    <div className="form-card">
      <h2>Skills</h2>
      <input value={skill} onChange={e => setSkill(e.target.value)} placeholder="Enter skill" />
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
};

export default SkillsForm;
