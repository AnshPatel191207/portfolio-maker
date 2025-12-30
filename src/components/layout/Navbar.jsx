import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import "../../styles/navbar.css";

const Navbar = ({ setPage }) => {
  const { template } = useContext(PortfolioContext);

  return (
    <nav className="navbar">
      <h2 className="logo">
        Portfo<span>lio</span>
      </h2>

      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("builder")}>Builder</li>
        <li onClick={() => setPage("templates")}>Templates</li>
        <li onClick={() => setPage("preview")}>Preview</li>
        <li onClick={() => setPage("about")}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
