import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export const GasChart = () => {
  const data = [
    { time: "1h", gas: 220 },
    { time: "2h", gas: 300 },
    { time: "3h", gas: 280 },
    { time: "4h", gas: 350 },
    { time: "5h", gas: 400 },
  ];

  return (
    <>
      {/* ----- CSS inside same file ----- */}
      <style>{`
        .gas-card {
          padding: 15px;
          background-color: #141716;
          border-radius: 10px;
          border: 1px solid #1f331e;
          box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.15);
        }

        .gas-title {
          color: #76ff68;
          margin-bottom: 12px;
          font-size: 18px;
          text-align: center;
        }
      `}</style>

      <div className="gas-card">
        <h3 className="gas-title">Gas Value Analysis</h3>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b3b2b" />
            <XAxis dataKey="time" stroke="#9aff95" />
            <YAxis stroke="#9aff95" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1c1f1d",
                border: "1px solid #76ff68",
                color: "white",
              }}
            />
            <Line
              type="monotone"
              dataKey="gas"
              stroke="#76ff68"
              strokeWidth={3}
              dot={{ r: 4, fill: "#76ff68" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
