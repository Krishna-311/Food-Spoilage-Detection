export default function SensorCard({ title, value }) {
  return (
    <>
      <style>{`
        .sensor-card {
          padding: 16px;
          background: var(--poison-card);
          border-radius: 12px;
          text-align: center;
          box-shadow: 0px 0px 10px rgba(0,255,0,0.15);
        }

        .sensor-title {
          font-size: 18px;
          color: #cccccc;
        }

        .sensor-value {
          color: var(--poison-green);
          font-size: 28px;
          font-weight: bold;
        }
      `}</style>

      <div className="sensor-card">
        <h3 className="sensor-title">{title}</h3>
        <p className="sensor-value">{value}</p>
      </div>
    </>
  );
}
