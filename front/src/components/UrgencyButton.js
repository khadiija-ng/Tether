import React from "react";

export default function UrgencyButton() {
  const handleUrgency = () => {
    // TODO: Ajouter logique pour envoyer un message urgence (SMS/email ou API backend)
    alert("Message d'urgence envoyé à la police !");
  };

  return (
    <button
      onClick={handleUrgency}
      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
    >
      Urgence 🚨
    </button>
  );
}
