import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Fresh", value: 50 },
  { name: "Slightly Spoiled", value: 30 },
  { name: "Spoiled", value: 20 },
];

// Softer colors for light green-white theme
const colors = ["#4caf50", "#ffd24d", "#ff6666"];

export default function SpoilagePie() {
  return (
    <>
      <style>{`
        .sp-card {
          padding: 24px;
          background-color: #e0f7e0; /* light green card */
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(42,127,42,0.2);
        }

        .sp-title {
          font-size: 18px;
          margin-bottom: 16px;
          color: #2a7f2a; /* dark green title */
          text-align: center;
        }
      `}</style>

      <div className="sp-card">
        <h2 className="sp-title">Spoilage Distribution</h2>

        <PieChart width={350} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} stroke="#f7fff7" />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
}
