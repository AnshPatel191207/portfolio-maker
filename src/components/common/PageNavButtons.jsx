const PageNavButtons = ({ onBack, onNext, nextLabel = "Next" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "50px"
      }}
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          background: "transparent",
          border: "1px solid #38bdf8",
          color: "#38bdf8",
          padding: "10px 22px",
          borderRadius: "999px",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* Next / Export Button */}
      <button
        onClick={onNext}
        className="export-btn"
        style={{
          background: "#38bdf8",
          color: "#020617"
        }}
      >
        {nextLabel} →
      </button>
    </div>
  );
};

export default PageNavButtons;
