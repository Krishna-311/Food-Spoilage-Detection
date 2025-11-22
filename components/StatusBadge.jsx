export default function StatusBadge({ status }) {
  const color =
    status === "Fresh"
      ? "green"
      : status === "Slightly Spoiled"
      ? "yellow"
      : "red";

  return (
    <div className="p-4 text-center bg-[var(--poison-card)] rounded-xl">
      <span className={`text-${color}-400 text-3xl font-bold`}>
        {status}
      </span>
    </div>
  );
}
