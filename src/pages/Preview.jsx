import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import MinimalTemplate from "../components/templates/MinimalTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import EliteTemplate from "../components/templates/EliteTemplate";
import { exportHTML } from "../utils/exportHTML";
import BackButton from "../components/common/BackButton";
import PageNavButtons from "../components/common/PageNavButtons";

const Preview = ({ setPage }) => {
  const { portfolioData, template } = useContext(PortfolioContext);

  return (
    <div className="page-bg">
      {/* Preview container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "40px",
          background: "transparent"
        }}
      >
        {template === "minimal" && <MinimalTemplate />}
        {template === "modern" && <ModernTemplate />}
        {template === "elite" && <EliteTemplate />}
        <PageNavButtons
          onBack={() => setPage("templates")}
          onNext={() => exportHTML(portfolioData, template)}
          nextLabel="Export Portfolio"
        />

      </div>
    </div>
  );
};

export default Preview;