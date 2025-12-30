const About = ({ setPage }) => {
  return (
    <div className="page-bg">
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.9)",
          color: "#020617",
          padding: "50px",
          borderRadius: "24px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.25)"
        }}
      >
        <h1>About This Project</h1>

        <p>
          Portfolio Maker is a React-based web application that helps students
          create professional portfolios using predefined templates.
        </p>

        <h3>Technologies Used</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Context API</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Multiple templates</li>
          <li>Live preview</li>
          <li>One-click export</li>
        </ul>

        </div>
        {/* Go to Home Button */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button
            className="export-btn"
            onClick={() => setPage("home")}
          >
            Go to Home
          </button>
      </div>
    </div>
  );
};

export default About;
