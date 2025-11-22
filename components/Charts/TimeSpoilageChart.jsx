import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Fresh", value: 50 },
  { name: "Slightly Spoiled", value: 30 },
  { name: "Spoiled", value: 20 },
];

const colors = ["#00ff88", "#cccc00", "#ff4444"];

export default function SpoilagePie() {
  return (
    <div className="p-6 bg-[var(--poison-card)] rounded-xl shadow-lg">
      <h2 className="text-lg mb-4 text-[var(--poison-green)]">Spoilage Distribution</h2>

      <PieChart width={350} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
