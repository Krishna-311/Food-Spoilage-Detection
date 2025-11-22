import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const StorageTimeChart = () => {
  const data = [
    { hours: 0, spoilage: 0 },
    { hours: 5, spoilage: 10 },
    { hours: 10, spoilage: 20 },
    { hours: 15, spoilage: 35 },
    { hours: 20, spoilage: 55 },
    { hours: 25, spoilage: 70 },
    { hours: 30, spoilage: 90 },
  ];

  return (
    <>
      {/* -------- CSS inside same JSX file -------- */}
      <style>{`
        .storage-card {
          padding: 15px;
          background-color: #141716;
          border-radius: 10px;
          border: 1px solid #1f331e;
          box-shadow: 0px 0px 8px rgba(0,255,0,0.15);
        }

        .storage-title {
          color: #76ff68;
          margin-bottom: 12px;
          font-size: 18px;
          text-align: center;
        }

        .tooltip-box {
          background-color: #1c1f1d !important;
          border: 1px solid #76ff68 !important;
          color: white !important;
        }
      `}</style>

      <div className="storage-card">
        <h3 className="storage-title">Storage Time vs Spoilage</h3>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b3b2b" />

            <XAxis
              dataKey="hours"
              stroke="#9aff95"
              label={{
                value: "Hours",
                position: "insideBottom",
                fill: "#9aff95",
              }}
            />
            <YAxis
              stroke="#9aff95"
              label={{
                value: "Spoilage %",
                angle: -90,
                fill: "#9aff95",
              }}
            />

            <Tooltip contentStyle={{}} wrapperClassName="tooltip-box" />

            <Line
              type="monotone"
              dataKey="spoilage"
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
