import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Edit2, Trash2, Plus } from "lucide-react";

// Icône pour les crimes
const crimeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function MapDashboard() {
  const [incidents, setIncidents] = useState([]);
  const [form, setForm] = useState({ type: "", lat: "", lng: "", dangerLevel: "" });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    // Mock data initiale
    setIncidents([
      { id: 1, type: "Vol", position: [14.6928, -17.4467], dangerLevel: 200 },
      { id: 2, type: "Agression", position: [14.6950, -17.4440], dangerLevel: 300 },
      { id: 3, type: "Cybercrime", position: [14.7000, -17.4500], dangerLevel: 150 },
    ]);
  }, []);

  // Ajouter une zone
  const addZone = () => {
    if (!form.type || !form.lat || !form.lng || !form.dangerLevel) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    const newZone = {
      id: Date.now(),
      type: form.type,
      position: [parseFloat(form.lat), parseFloat(form.lng)],
      dangerLevel: parseInt(form.dangerLevel),
    };
    setIncidents([newZone, ...incidents]);
    setForm({ type: "", lat: "", lng: "", dangerLevel: "" });
  };

  // Modifier une zone
  const saveEdit = () => {
    setIncidents(
      incidents.map((z) =>
        z.id === editing
          ? {
              ...z,
              type: form.type,
              position: [parseFloat(form.lat), parseFloat(form.lng)],
              dangerLevel: parseInt(form.dangerLevel),
            }
          : z
      )
    );
    setEditing(null);
    setForm({ type: "", lat: "", lng: "", dangerLevel: "" });
  };

  // Supprimer une zone
  const removeZone = (id) => {
    if (!window.confirm("Supprimer cette zone dangereuse ?")) return;
    setIncidents(incidents.filter((z) => z.id !== id));
  };

  return (
    <div className="min-h-screen p-6 relative z-10">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500 mb-6">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 tracking-wide">
          Gestion des zones dangereuses
        </h1>

        {/* Formulaire ajout/modif */}
        <div className="grid md:grid-cols-5 gap-3 mb-4">
          <input
            type="text"
            placeholder="Type (Vol, Agression...)"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="p-2 rounded-lg bg-gray-800 border border-cyan-500 text-white"
          />
          <input
            type="number"
            placeholder="Latitude"
            value={form.lat}
            onChange={(e) => setForm({ ...form, lat: e.target.value })}
            className="p-2 rounded-lg bg-gray-800 border border-cyan-500 text-white"
          />
          <input
            type="number"
            placeholder="Longitude"
            value={form.lng}
            onChange={(e) => setForm({ ...form, lng: e.target.value })}
            className="p-2 rounded-lg bg-gray-800 border border-cyan-500 text-white"
          />
          <input
            type="number"
            placeholder="Niveau danger (m)"
            value={form.dangerLevel}
            onChange={(e) => setForm({ ...form, dangerLevel: e.target.value })}
            className="p-2 rounded-lg bg-gray-800 border border-cyan-500 text-white"
          />
          {editing ? (
            <button
              onClick={saveEdit}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg p-2 flex items-center justify-center gap-2"
            >
              <Edit2 /> Modifier
            </button>
          ) : (
            <button
              onClick={addZone}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg p-2 flex items-center justify-center gap-2"
            >
              <Plus /> Ajouter
            </button>
          )}
        </div>

        {/* Liste des zones */}
        <div className="space-y-2">
          {incidents.map((z) => (
            <div
              key={z.id}
              className="bg-gray-800 p-3 rounded-lg flex justify-between items-center border border-cyan-600"
            >
              <div>
                <div className="text-white font-bold">{z.type}</div>
                <div className="text-cyan-300 text-sm">
                  Lat: {z.position[0]} | Lng: {z.position[1]}
                </div>
                <div className="text-gray-400 text-xs">
                  Danger: {z.dangerLevel}m
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditing(z.id);
                    setForm({
                      type: z.type,
                      lat: z.position[0],
                      lng: z.position[1],
                      dangerLevel: z.dangerLevel,
                    });
                  }}
                  className="p-2 rounded-md hover:bg-yellow-500 hover:text-black"
                >
                  <Edit2 />
                </button>
                <button
                  onClick={() => removeZone(z.id)}
                  className="p-2 rounded-md hover:bg-red-600"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carte */}
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500">
        <MapContainer
          center={[14.6928, -17.4467]}
          zoom={13}
          className="h-[600px] w-full rounded-2xl shadow-2xl border border-cyan-500"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {incidents.map((incident) => (
            <React.Fragment key={incident.id}>
              <Marker position={incident.position} icon={crimeIcon}>
                <Popup>
                  <div className="text-black">
                    <h2 className="font-bold">{incident.type}</h2>
                    <p>Zone dangereuse : {incident.dangerLevel}m</p>
                  </div>
                </Popup>
              </Marker>
              <Circle
                center={incident.position}
                radius={incident.dangerLevel}
                pathOptions={{ color: "red", fillOpacity: 0.2 }}
              />
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
