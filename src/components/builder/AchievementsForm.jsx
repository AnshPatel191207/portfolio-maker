import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const AchievementsForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);
  const [item, setItem] = useState("");

  const addAchievement = () => {
    if (!item) return;

    setPortfolioData({
      ...portfolioData,
      achievements: [...portfolioData.achievements, item]
    });

    setItem("");
  };

  return (
    <div className="form-card">
      <h2>Achievements / Certifications</h2>

      <input
        placeholder="Achievement or Certification"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button type="button" onClick={addAchievement}>
        Add
      </button>
    </div>
  );
};

export default AchievementsForm;
