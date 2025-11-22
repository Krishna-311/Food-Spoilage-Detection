import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export const SpoilageDistributionChart = () => {
  const data = [
    { name: "Fresh", value: 45 },
    { name: "Slightly Spoiled", value: 30 },
    { name: "Spoiled", value: 25 },
  ];

  const COLORS = ["#4aff4a", "#ffd24d", "#ff4d4d"];

  return (
    <>
      {/* ------------- CSS INSIDE SAME FILE ------------- */}
      <style>{`
        .spoilage-card {
          padding: 15px;
          background-color: #141716;
          border-radius: 10px;
          border: 1px solid #1f331e;
          box-shadow: 0px 0px 8px rgba(0,255,0,0.15);
        }

        .spoilage-title {
          color: #76ff68;
          margin-bottom: 12px;
          font-size: 18px;
          text-align: center;
        }
      `}</style>

      <div className="spoilage-card">
        <h3 className="spoilage-title">Spoilage Distribution</h3>

        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} stroke="#0f0f0f" />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1c1f1d",
                border: "1px solid #76ff68",
                color: "white",
              }}
            />

            <Legend wrapperStyle={{ color: "white" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
