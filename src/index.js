import ReactDOM from "react-dom/client";
import App from "./App";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
);
