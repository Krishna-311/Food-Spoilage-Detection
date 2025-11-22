export default function CSVUpload() {
  return (
    <>
      <style>{`
        .csv-card {
          padding: 24px;
          background-color: var(--poison-card);
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(0,255,0,0.15);
        }

        .csv-title {
          font-size: 20px;
          font-weight: bold;
          color: var(--poison-green);
          margin-bottom: 12px;
        }

        .csv-input {
          padding: 12px;
          background: black;
          border: 1px solid #555;
          border-radius: 6px;
          color: white;
          width: 100%;
        }

        .csv-btn {
          margin-top: 12px;
          padding: 12px;
          background-color: var(--poison-green);
          color: black;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
        }

        .csv-btn:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="csv-card">
        <h2 className="csv-title">Upload CSV for Bulk Prediction</h2>

        <input
          type="file"
          accept=".csv"
          className="csv-input"
        />

        <button className="csv-btn">
          Upload & Predict
        </button>
      </div>
    </>
  );
}
