import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const SpoilagePie = () => {
  const data = [
    { name: "Fresh", value: 50 },
    { name: "Slightly Spoiled", value: 30 },
    { name: "Spoiled", value: 20 },
  ];

  const COLORS = ["#4aff4a", "#ffd24d", "#ff4d4d"];

  return (
    <>
      {/* ----------- CSS Inside Same File ----------- */}
      <style>{`
        .spoilagePie-card {
          background-color: #141716;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #1f331e;
          box-shadow: 0px 0px 10px rgba(0,255,0,0.15);
        }

        .spoilagePie-title {
          color: #76ff68;
          text-align: center;
          margin-bottom: 10px;
          font-size: 18px;
        }
      `}</style>

      <div className="spoilagePie-card">
        <h3 className="spoilagePie-title">Spoilage Status Pie</h3>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={90}
              label
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} stroke="#0f0f0f" />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#1c1f1d",
                border: "1px solid #76ff68",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
