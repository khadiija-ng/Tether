// src/pages/Emergency.js
import React from "react";

export default function Emergency() {
  const emergencyNumbers = [
    { label: "Police", number: "17", color: "bg-blue-600" },
    { label: "Gendarmerie", number: "117", color: "bg-indigo-600" },
    { label: "Sapeurs-pompiers", number: "18", color: "bg-red-600" },
    { label: "Urgences", number: "15", color: "bg-green-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">🚨 Urgence</h1>
      <p className="mb-6 text-center text-gray-700">
        Appuyez sur un bouton pour appeler directement le service d'urgence correspondant.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {emergencyNumbers.map((service) => (
          <a
            key={service.number}
            href={`tel:${service.number}`}  // <-- Lance un appel téléphonique
            className={`px-6 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:scale-105 transition transform ${service.color}`}
          >
            {service.label} ({service.number})
          </a>
        ))}
      </div>
    </div>
  );
}
