import { useState } from "react";

export default function ManualInputForm() {
  const [input, setInput] = useState({ temp: "", humidity: "", gas: "" });

  return (
    <>
      <style>{`
        .manual-card {
          padding: 24px;
          background: #e0f7e0; /* light green card */
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(42,127,42,0.2);
        }

        .manual-title {
          font-size: 20px;
          font-weight: bold;
          color: #2a7f2a; /* dark green heading */
          margin-bottom: 12px;
        }

        .manual-input-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .manual-input {
          padding: 12px;
          border-radius: 8px;
          background: #f7fff7; /* light input background */
          color: #333;
          border: 1px solid #c1e6c1;
        }

        .manual-btn {
          padding: 12px;
          margin-top: 8px;
          background: #2a7f2a; /* dark green button */
          color: #f7fff7; /* white text */
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          border: none;
        }

        .manual-btn:hover {
          opacity: 0.9;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 480px) {
          .manual-card {
            padding: 16px;
          }

          .manual-title {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .manual-input {
            padding: 10px;
          }

          .manual-btn {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="manual-card">
        <h2 className="manual-title">Manual Spoilage Prediction</h2>

        <div className="manual-input-container">
          {["temp", "humidity", "gas"].map((field) => (
            <input
              key={field}
              className="manual-input"
              placeholder={field.toUpperCase()}
              value={input[field]}
              onChange={(e) =>
                setInput({ ...input, [field]: e.target.value })
              }
            />
          ))}

          <button className="manual-btn">Predict</button>
        </div>
      </div>
    </>
  );
}
