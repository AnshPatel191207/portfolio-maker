const NextButton = ({ label = "Next", onNext }) => {
  return (
    <div style={{ textAlign: "right", marginTop: "40px" }}>
      <button
        onClick={onNext}
        style={{
          background: "#38bdf8",
          color: "#020617",
          padding: "10px 22px",
          borderRadius: "999px",
          border: "none",
          fontWeight: 600,
          cursor: "pointer"
        }}
      >
        {label} →
      </button>
    </div>
  );
};

export default NextButton;
