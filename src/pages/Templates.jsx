import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import "../styles/template.css";
import NextButton from "../components/common/NextButton";

const Templates = ({setPage}) => {
  const { template, setTemplate } = useContext(PortfolioContext);

  return (
    <div className="templates-page">
      <h1>Select Your Portfolio Template</h1>

      <p style={{ marginBottom: "30px" }}>
        Current Template: <b>{template}</b>
      </p>

      <div className="template-grid">
        <div
          className={`template-card ${template === "minimal" ? "active" : ""}`}
          onClick={() => setTemplate("minimal")}
        >
          <h2>Minimal</h2>
          <p>Clean & simple layout</p>
        </div>

        <div
          className={`template-card ${template === "modern" ? "active" : ""}`}
          onClick={() => setTemplate("modern")}
        >
          <h2>Modern</h2>
          <p>Professional & balanced</p>
        </div>

        <div
          className={`template-card ${template === "elite" ? "active" : ""}`}
          onClick={() => setTemplate("elite")}
        >
          <h2>Elite 🌟</h2>
          <p>Premium & standout design</p>
        </div>
      </div>
      <NextButton
  label="Preview Portfolio"
  onNext={() => setPage("preview")}
/>
    </div>
  );
};

export default Templates;
