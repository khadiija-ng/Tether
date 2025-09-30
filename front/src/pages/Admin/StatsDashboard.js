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
  LineChart,
  Line,
  Legend,
} from "recharts";

export default function StatsDashboard({ compact = false }) {
  // Données mockées
  const byType = [
    { name: "Vol", value: 120 },
    { name: "Violence", value: 80 },
    { name: "Accident", value: 100 },
    { name: "Cyberattaque", value: 40 },
  ];

  const byMonth = [
    { month: "Jan", count: 120 },
    { month: "Feb", count: 140 },
    { month: "Mar", count: 100 },
    { month: "Apr", count: 180 },
    { month: "May", count: 160 },
    { month: "Jun", count: 200 },
  ];

  const byZone = [
    { zone: "Dakar", signalements: 200 },
    { zone: "Thiès", signalements: 150 },
    { zone: "Saint-Louis", signalements: 90 },
    { zone: "Kaolack", signalements: 70 },
    { zone: "Ziguinchor", signalements: 60 },
  ];

  const COLORS = ["#FF0000", "#FFA500", "#00FF00", "#800080", "#00FFFF"];

  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 bg-opacity-90 p-4 rounded-xl border border-cyan-500">
          <PieChart width={200} height={180}>
            <Pie
              data={byType}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
            >
              {byType.map((e, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="bg-gray-900 bg-opacity-90 p-4 rounded-xl border border-cyan-500">
          <LineChart width={200} height={180} data={byMonth}>
            <CartesianGrid strokeDasharray="3 3" stroke="#0ff" opacity={0.2} />
            <XAxis dataKey="month" stroke="#0ff" />
            <YAxis stroke="#0ff" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#00FFFF"
              strokeWidth={2}
            />
          </LineChart>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Graphe par type */}
      <div className="bg-gray-900 bg-opacity-90 p-4 rounded-2xl border border-cyan-500">
        <h3 className="text-cyan-300 font-bold mb-3">Par type</h3>
        <PieChart width={350} height={250}>
          <Pie
            data={byType}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
          >
            {byType.map((e, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Graphe par mois */}
      <div className="bg-gray-900 bg-opacity-90 p-4 rounded-2xl border border-cyan-500">
        <h3 className="text-cyan-300 font-bold mb-3">Par mois</h3>
        <BarChart width={400} height={250} data={byMonth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0ff" opacity={0.2} />
          <XAxis dataKey="month" stroke="#0ff" />
          <YAxis stroke="#0ff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#00FFFF" />
        </BarChart>
      </div>

      {/* Graphe tendance */}
      <div className="bg-gray-900 bg-opacity-90 p-4 rounded-2xl border border-cyan-500">
        <h3 className="text-cyan-300 font-bold mb-3">Tendance</h3>
        <LineChart width={400} height={250} data={byMonth}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0ff" opacity={0.2} />
          <XAxis dataKey="month" stroke="#0ff" />
          <YAxis stroke="#0ff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#00FFFF"
            strokeWidth={2}
          />
        </LineChart>
      </div>

      {/* Nouveau graphe par zones */}
      <div className="bg-gray-900 bg-opacity-90 p-4 rounded-2xl border border-cyan-500">
        <h3 className="text-cyan-300 font-bold mb-3">Signalements par zone</h3>
        <BarChart width={400} height={250} data={byZone}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0ff" opacity={0.2} />
          <XAxis dataKey="zone" stroke="#0ff" />
          <YAxis stroke="#0ff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="signalements" fill="#FF6347" />
        </BarChart>
      </div>
    </div>
  );
}
