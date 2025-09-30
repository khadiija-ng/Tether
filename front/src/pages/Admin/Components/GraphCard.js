// src/components/GraphCard.js
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from "recharts";

export default function GraphCard({ title, type, data, COLORS }) {
  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500 transition hover:scale-105">
      <h3 className="font-bold text-xl mb-4 text-cyan-400">{title}</h3>

      {/* Graphique dynamique selon le type */}
      {type === "pie" && (
        <PieChart width={400} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}

      {type === "bar" && (
        <BarChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#00FFFF">
            {data.map((entry, index) => (
              <Cell
                key={`cell-bar-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      )}

      {type === "line" && (
        <LineChart width={400} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#00FFFF"
            strokeWidth={2}
          />
        </LineChart>
      )}
    </div>
  );
}
