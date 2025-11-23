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
        background: "#e0f7e0", // light green card
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 0 12px rgba(42,127,42,0.2)",
        border: "1px solid #c1e6c1",
      }}
    >
      <h3 style={{ color: "#2a7f2a", marginBottom: "10px" }}>
        Temperature & Humidity Trends
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#cce6cc" />
          <XAxis dataKey="time" stroke="#2a7f2a" />
          <YAxis stroke="#2a7f2a" />
          <Tooltip
            contentStyle={{
              background: "#f7fff7",
              border: "1px solid #2a7f2a",
              color: "#2a7f2a",
            }}
          />

          {/* Temperature Line */}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#4caf50"
            strokeWidth={2}
            dot={{ fill: "#4caf50" }}
          />

          {/* Humidity Line */}
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="#ffd24d"
            strokeWidth={2}
            dot={{ fill: "#ffd24d" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TempHumidityChart;
