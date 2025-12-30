import { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const EducationForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);
  const [edu, setEdu] = useState({ degree: "", institute: "", year: "" });

  const addEducation = () => {
    if (!edu.degree) return;

    setPortfolioData({
      ...portfolioData,
      education: [...portfolioData.education, edu]
    });

    setEdu({ degree: "", institute: "", year: "" });
  };

  return (
    <div className="form-card">
      <h2>Education</h2>

      <input
        placeholder="Degree / Course"
        value={edu.degree}
        onChange={(e) => setEdu({ ...edu, degree: e.target.value })}
      />
      <input
        placeholder="Institute"
        value={edu.institute}
        onChange={(e) => setEdu({ ...edu, institute: e.target.value })}
      />
      <input
        placeholder="Year"
        value={edu.year}
        onChange={(e) => setEdu({ ...edu, year: e.target.value })}
      />

      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
