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

function TempHumidityChart({ data }) {
  return (
    <div
      style={{
        background: "#0d0f10",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 12px rgba(0,255,100,0.2)",
        border: "1px solid rgba(0,255,100,0.3)",
      }}
    >
      <h3 style={{ color: "#64ff8f", marginBottom: "10px" }}>
        Temperature & Humidity Trends
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="rgba(0,255,100,0.15)" />
          <XAxis dataKey="time" stroke="#64ff8f" />
          <YAxis stroke="#64ff8f" />
          <Tooltip
            contentStyle={{
              background: "#0e0f10",
              border: "1px solid #64ff8f",
              color: "#64ff8f",
            }}
          />

          {/* Temperature Line */}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#39ff14"
            strokeWidth={2}
            dot={{ fill: "#39ff14" }}
          />

          {/* Humidity Line */}
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#00ffaa"
            strokeWidth={2}
            dot={{ fill: "#00ffaa" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default TempHumidityChart;
