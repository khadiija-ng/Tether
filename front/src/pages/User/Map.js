import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import du fichier JSON
import policeStations from "../../data/policeStations.json";

const policeIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

export default function Map() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Carte des postes de police du Sénégal
      </h1>

      <MapContainer
        center={[14.6928, -17.4467]}
        zoom={8}
        className="h-[600px] w-full rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {policeStations.map((station) => (
          <Marker key={station.id} position={station.position} icon={policeIcon}>
            <Popup>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-lg">{station.name}</h2>
                <p>
                  <strong>Téléphone :</strong> {station.phone}
                </p>
                <p>
                  <strong>Adresse :</strong> {station.address}
                </p>
                <p>
                  <strong>Horaires :</strong> {station.hours}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
