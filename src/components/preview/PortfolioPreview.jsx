import React, { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import TemplateOne from "../templates/ModernTemplate";
import TemplateTwo from "../templates/MinimalTemplate";

const LivePreview = () => {
  const { portfolioData, template, theme } =
    useContext(PortfolioContext);

  return (
    <div className={`preview ${theme}`}>
      {template === "one" ? (
        <TemplateOne data={portfolioData} />
      ) : (
        <TemplateTwo data={portfolioData} />
      )}
    </div>
  );
};

export default LivePreview;
