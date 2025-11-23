export default function CSVUpload() {
  return (
    <>
      <style>{`
        .csv-card {
          padding: 24px;
          background-color: #e0f7e0; /* light green card */
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(42,127,42,0.2);
        }

        .csv-title {
          font-size: 20px;
          font-weight: bold;
          color: #2a7f2a; /* dark green heading */
          margin-bottom: 12px;
        }

        .csv-input {
          padding: 12px;
          background: #f7fff7; /* light background for input */
          border: 1px solid #c1e6c1;
          border-radius: 6px;
          color: #333;
          width: 100%;
        }

        .csv-btn {
          margin-top: 12px;
          padding: 12px;
          background-color: #2a7f2a; /* dark green button */
          color: #f7fff7; /* white text */
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          border: none;
        }

        .csv-btn:hover {
          opacity: 0.9;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 480px) {
          .csv-card {
            padding: 16px;
          }

          .csv-title {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .csv-input {
            padding: 10px;
          }

          .csv-btn {
            padding: 10px;
            font-size: 14px;
          }
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
