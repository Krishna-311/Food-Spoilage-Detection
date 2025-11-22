import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Fresh", value: 50 },
  { name: "Slightly Spoiled", value: 30 },
  { name: "Spoiled", value: 20 },
];

const colors = ["#00ff88", "#cccc00", "#ff4444"];

export default function SpoilagePie() {
  return (
    <>
      <style>{`
        .sp-card {
          padding: 24px;
          background-color: var(--poison-card);
          border-radius: 12px;
          box-shadow: 0px 0px 10px rgba(0,255,0,0.15);
        }

        .sp-title {
          font-size: 18px;
          margin-bottom: 16px;
          color: var(--poison-green);
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
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
}
