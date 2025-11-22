import { useState } from "react";

export default function ManualInputForm() {
  const [input, setInput] = useState({ temp: "", humidity: "", gas: "" });

  return (
    <div className="p-6 bg-[var(--poison-card)] rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-[var(--poison-green)] mb-3">
        Manual Spoilage Prediction
      </h2>

      <div className="flex flex-col gap-3">
        {["temp", "humidity", "gas"].map((field) => (
          <input
            key={field}
            className="p-3 rounded bg-black text-white border border-gray-700"
            placeholder={field.toUpperCase()}
            value={input[field]}
            onChange={(e) => setInput({ ...input, [field]: e.target.value })}
          />
        ))}

        <button className="p-3 mt-2 bg-[var(--poison-green)] text-black font-bold rounded">
          Predict
        </button>
      </div>
    </div>
  );
}
