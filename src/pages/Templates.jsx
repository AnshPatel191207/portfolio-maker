import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import "../styles/template.css";
import BackButton from "../components/common/BackButton";
import NextButton from "../components/common/NextButton";
import PageNavButtons from "../components/common/PageNavButtons";

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
      <PageNavButtons
  onBack={() => setPage("builder")}
  onNext={() => setPage("preview")}
  nextLabel="Preview Portfolio"
/>

    </div>
  );
};

export default Templates;
