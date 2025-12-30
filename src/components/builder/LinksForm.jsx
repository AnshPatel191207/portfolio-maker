import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const LinksForm = () => {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);

  return (
    <div className="form-card">
      <h2>Links</h2>

      <input
        placeholder="GitHub URL"
        value={portfolioData.links.github}
        onChange={(e) =>
          setPortfolioData({
            ...portfolioData,
            links: { ...portfolioData.links, github: e.target.value }
          })
        }
      />

      <input
        placeholder="LinkedIn URL"
        value={portfolioData.links.linkedin}
        onChange={(e) =>
          setPortfolioData({
            ...portfolioData,
            links: { ...portfolioData.links, linkedin: e.target.value }
          })
        }
      />

      <input
        placeholder="Personal Website"
        value={portfolioData.links.website}
        onChange={(e) =>
          setPortfolioData({
            ...portfolioData,
            links: { ...portfolioData.links, website: e.target.value }
          })
        }
      />
    </div>
  );
};

export default LinksForm;
