import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône générique pour les crimes
const crimeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Définir une couleur spécifique pour chaque type
const crimeColors = {
  Vol: "#FF0000",
  Agression: "#FFA500",
  Cybercrime: "#800080",
  Cambriolage: "#00FF00",
  Harcèlement: "#00FFFF",
  Escroquerie: "#FFC0CB",
  Vandalisme: "#FFFF00",
  "Trafic de drogue": "#8B0000",
  "Violence domestique": "#FF69B4",
  Homicide: "#000000",
  "Escalade de violence": "#FF4500",
  "Infraction routière": "#1E90FF",
  "Trouble à l'ordre public": "#32CD32",
  "Atteinte à la vie privée": "#8A2BE2",
  Corruption: "#DAA520",
  Contrebande: "#00CED1",
  Terrorisme: "#FF1493",
  Discrimination: "#ADFF2F",
  Prostitution: "#FF6347",
  "Blanchiment d'argent": "#B22222",
  "Cyberharcèlement": "#7FFF00",
  Extorsion: "#DC143C",
  "Escroquerie en ligne": "#FF8C00",
  "Vol à l'étalage": "#00FA9A",
};

export default function MapDashboard() {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    // Mock data incidents
    setIncidents([
      { id: 1, type: "Vol", position: [14.6928, -17.4467], dangerLevel: 200 },
      { id: 2, type: "Agression", position: [14.6950, -17.4440], dangerLevel: 300 },
      { id: 3, type: "Cybercrime", position: [14.7000, -17.4500], dangerLevel: 150 },
      { id: 4, type: "Cambriolage", position: [14.6900, -17.4400], dangerLevel: 250 },
      { id: 5, type: "Harcèlement", position: [14.6935, -17.4480], dangerLevel: 100 },
      // ... tu peux continuer à ajouter les autres incidents
    ]);
  }, []);

  return (
    <div className="min-h-screen p-6 relative z-10">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 tracking-wide">
          Carte des zones dangereuses
        </h1>

        {/* Légende */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(crimeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1 text-white">
              <span
                className="w-4 h-4 rounded-full inline-block"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm">{type}</span>
            </div>
          ))}
        </div>

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
                    <p>Zone dangereuse autour: {incident.dangerLevel}m</p>
                  </div>
                </Popup>
              </Marker>
              <Circle
                center={incident.position}
                radius={incident.dangerLevel}
                pathOptions={{
                  color: crimeColors[incident.type] || "red",
                  fillOpacity: 0.2,
                }}
              />
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
