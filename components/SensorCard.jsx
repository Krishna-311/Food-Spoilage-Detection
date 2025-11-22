export default function SensorCard({ title, value }) {
  return (
    <div className="p-4 bg-[var(--poison-card)] rounded-xl text-center shadow-lg">
      <h3 className="text-lg text-gray-300">{title}</h3>
      <p className="text-[var(--poison-green)] text-2xl font-bold">{value}</p>
    </div>
  );
}
