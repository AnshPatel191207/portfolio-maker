import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    personal: {
      name: "",
      title: "",
      email: "",
      about: ""
    },
    skills: [],
    projects: [],
    education: [],
    achievements: [],
    links: {
      github: "",
      linkedin: "",
      website: ""
    }
  });

  const [template, setTemplate] = useState("modern");

  return (
    <PortfolioContext.Provider
      value={{
        portfolioData,
        setPortfolioData,
        template,
        setTemplate
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
