const BackButton = ({ onBack }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "none",
          color: "#38bdf8",
          fontSize: "15px",
          cursor: "pointer",
          fontWeight: 600
        }}
      >
        ← Back
      </button>
    </div>
  );
};

export default BackButton;
