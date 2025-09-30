import React from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function DashboardContent({ stats, COLORS, signalements }) {
  // Exemple de données spécifiques pour le BarChart
  const barStats = [
    { name: "Vol", value: 40, color: "#FF0000" },
    { name: "Violence", value: 25, color: "#FFA500" },
    { name: "Accident", value: 35, color: "#00FF00" },
    { name: "Cyberattaque", value: 15, color: "#800080" },
  ];

  return (
    <div>
      {/* Statistiques */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={stat.name}
            className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl flex flex-col items-center border border-cyan-500 transition hover:scale-105"
          >
            <h3 className="text-lg font-bold text-cyan-400">{stat.name}</h3>
            <p className="text-3xl font-extrabold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Graphiques côte à côte */}
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl mb-8 border border-cyan-500 flex flex-col md:flex-row gap-6 justify-around items-center">
        {/* PieChart */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-cyan-400 text-center">Répartition des incidents</h3>
          <PieChart width={300} height={300}>
            <Pie data={stats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {stats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* BarChart */}
        <div>
          <h3 className="font-bold text-xl mb-4 text-cyan-400 text-center">Incidents par type</h3>
          <BarChart width={300} height={300} data={barStats} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#0ff" opacity={0.3} />
            <XAxis dataKey="name" stroke="#0ff" />
            <YAxis stroke="#0ff" />
            <Tooltip />
            <Legend />
            {barStats.map((entry, index) => (
              <Bar key={entry.name} dataKey="value" fill={entry.color} />
            ))}
          </BarChart>
        </div>
      </div>

      {/* Carte */}
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500">
        <h3 className="font-bold text-xl mb-4 text-cyan-400">Carte du Sénégal</h3>
        <MapContainer center={[14.7, -17.4]} zoom={7} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {signalements.map((s, index) => (
            <Marker key={index} position={s.position}>
              <Popup>
                {s.type} signalé à {s.position[0].toFixed(2)}, {s.position[1].toFixed(2)}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
