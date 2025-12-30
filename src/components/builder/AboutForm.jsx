import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const AboutForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);

  return (
    <div className="form-card">
      <h2>About Me</h2>

      <textarea
        placeholder="Write a short professional summary about yourself..."
        value={portfolioData.personal.about}
        onChange={(e) =>
          setPortfolioData({
            ...portfolioData,
            personal: {
              ...portfolioData.personal,
              about: e.target.value
            }
          })
        }
      />
    </div>
  );
};

export default AboutForm;
