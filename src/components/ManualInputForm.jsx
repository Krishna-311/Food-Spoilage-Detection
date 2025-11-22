import { useState } from "react";

export default function ManualInputForm() {
  const [input, setInput] = useState({ temp: "", humidity: "", gas: "" });

  return (
    <>
      <style>{`
        .manual-card {
          padding: 24px;
          background: var(--poison-card);
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(0,255,0,0.15);
        }

        .manual-title {
          font-size: 20px;
          font-weight: bold;
          color: var(--poison-green);
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
          background: black;
          color: white;
          border: 1px solid #555;
        }

        .manual-btn {
          padding: 12px;
          margin-top: 8px;
          background: var(--poison-green);
          color: black;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
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
              onChange={(e) => setInput({ ...input, [field]: e.target.value })}
            />
          ))}

          <button className="manual-btn">Predict</button>
        </div>
      </div>
    </>
  );
}
