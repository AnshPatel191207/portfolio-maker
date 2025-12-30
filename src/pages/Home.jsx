import "../styles/home.css";

const Home = ({ setPage }) => {
  return (
    <section className="home">
      <div className="hero">
        <h1>Create Your <span>Professional Portfolio</span></h1>
        <p>No coding required. Build, preview, export.</p>
        <button onClick={() => setPage("builder")}>
          Start Building →
        </button>
      </div>
    </section>
  );
};

export default Home;
