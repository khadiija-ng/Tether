import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // Icône moderne 🚨

export default function AlertButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/report");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 flex items-center gap-2 
                 bg-gradient-to-r from-red-600 via-orange-500 to-red-700
                 text-white font-bold px-6 py-4 rounded-full shadow-lg 
                 hover:scale-105 hover:shadow-2xl transition-all 
                 animate-pulse"
    >
      <AlertTriangle size={22} className="animate-bounce" />
      Lancer une alerte
    </button>
  );
}
