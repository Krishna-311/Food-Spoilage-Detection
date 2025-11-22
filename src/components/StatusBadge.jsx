export default function StatusBadge({ status }) {
  const color =
    status === "Fresh"
      ? "#00ff88"       // green
      : status === "Slightly Spoiled"
      ? "#ffd24d"       // yellow
      : "#ff4d4d";      // red

  return (
    <>
      <style>{`
        .status-badge {
          padding: 16px;
          text-align: center;
          background: var(--poison-card);
          border-radius: 12px;
        }

        .status-text {
          font-size: 28px;
          font-weight: bold;
        }
      `}</style>

      <div className="status-badge">
        <span className="status-text" style={{ color: color }}>
          {status}
        </span>
      </div>
    </>
  );
}
