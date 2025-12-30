import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Templates from "./pages/Templates";
import Preview from "./pages/Preview";
import About from "./pages/About";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "builder" && <Builder setPage={setPage} />}
      {page === "templates" && <Templates setPage={setPage} />}
      {page === "preview" && <Preview setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
    </>
  );
}

export default App;
