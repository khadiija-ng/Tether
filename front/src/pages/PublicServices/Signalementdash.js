import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react"; // Icône œil
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix pour l'icône Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Signalements() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    // Mock data signalements avec coordonnées et médias
    setReports([
      {
        id: 1,
        type: "Vol",
        description: "Vol à l'arraché",
        status: "En cours",
        location: "Dakar",
        lat: 14.6928,
        lng: -17.4467,
        media: "https://via.placeholder.com/400", // Exemple image
      },
      {
        id: 2,
        type: "Agression",
        description: "Agression rue X",
        status: "Traité",
        location: "Plateau",
        lat: 14.6665,
        lng: -17.4391,
        media: null, // Pas de média
      },
      {
        id: 3,
        type: "Cyberattaque",
        description: "Hameçonnage email",
        status: "En cours",
        location: "Médina",
        lat: 14.6694,
        lng: -17.4376,
        media: "https://www.w3schools.com/html/mov_bbb.mp4", // Exemple vidéo
      },
    ]);
  }, []);

  const updateStatus = (id, newStatus) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    setSelectedReport((prev) =>
      prev && prev.id === id ? { ...prev, status: newStatus } : prev
    );
  };

  return (
    <div className="min-h-screen p-6 relative z-10">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 tracking-wide">
          Signalements reçus
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-white rounded-xl shadow-lg border border-cyan-500">
            <thead className="bg-gray-800 border-b border-cyan-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Statut</th>
                <th className="px-4 py-2">Lieu</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="text-center border-b border-cyan-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{report.id}</td>
                  <td className="px-4 py-2">{report.type}</td>
                  <td className="px-4 py-2">{report.description}</td>
                  <td className="px-4 py-2">{report.status}</td>
                  <td className="px-4 py-2">{report.location}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="p-2 bg-cyan-600 rounded-full hover:bg-cyan-500"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Détails avec Map */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-3xl border border-cyan-500 shadow-2xl relative overflow-auto max-h-[90vh]">
            <h2 className="text-xl font-bold text-cyan-300 mb-4">
              Détails du signalement #{selectedReport.id}
            </h2>
            <p>
              <span className="font-bold">Type:</span> {selectedReport.type}
            </p>
            <p>
              <span className="font-bold">Description:</span> {selectedReport.description}
            </p>
            <p>
              <span className="font-bold">Lieu:</span> {selectedReport.location}
            </p>
            <p>
              <span className="font-bold">Statut:</span> {selectedReport.status}
            </p>

            {/* Média */}
            {selectedReport.media && selectedReport.media.endsWith(".mp4") ? (
              <video
                controls
                className="mt-4 w-full rounded-xl"
                src={selectedReport.media}
              />
            ) : selectedReport.media ? (
              <img
                src={selectedReport.media}
                alt="Preuve"
                className="mt-4 w-full rounded-xl"
              />
            ) : (
              <p className="mt-4 italic text-gray-400">Aucun média disponible</p>
            )}

            {/* Map */}
            <div className="mt-4 h-64 w-full rounded-lg overflow-hidden border border-cyan-500">
              <MapContainer
                center={[selectedReport.lat, selectedReport.lng]}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
                <Marker position={[selectedReport.lat, selectedReport.lng]}>
                  <Popup>
                    <b>{selectedReport.type}</b> <br />
                    {selectedReport.description} <br />
                    <i>{selectedReport.status}</i>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Modifier le statut */}
            <div className="mt-4">
              <label className="block mb-2 text-cyan-300 font-bold">
                Changer le statut :
              </label>
              <select
                value={selectedReport.status}
                onChange={(e) => updateStatus(selectedReport.id, e.target.value)}
                className="p-2 rounded bg-gray-800 border border-cyan-500 text-white"
              >
                <option>En cours</option>
                <option>Traité</option>
                <option>Rejeté</option>
              </select>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedReport(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
