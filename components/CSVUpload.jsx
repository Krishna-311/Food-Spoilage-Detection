export default function CSVUpload() {
  return (
    <div className="p-6 bg-[var(--poison-card)] rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-[var(--poison-green)] mb-3">
        Upload CSV for Bulk Prediction
      </h2>

      <input
        type="file"
        accept=".csv"
        className="p-3 bg-black border border-gray-700 rounded"
      />

      <button className="p-3 mt-3 bg-[var(--poison-green)] text-black font-bold rounded">
        Upload & Predict
      </button>
    </div>
  );
}
