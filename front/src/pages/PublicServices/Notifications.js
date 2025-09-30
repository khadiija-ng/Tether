import React, { useState, useEffect } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock notifications
    setNotifications([
      { id: 1, message: "Nouveau signalement Vol reçu à Dakar", time: "10:30" },
      { id: 2, message: "Nouveau signalement Agression reçu au Plateau", time: "11:15" },
      { id: 3, message: "Nouveau signalement Cyberattaque reçu à Médina", time: "12:00" },
    ]);
  }, []);

  return (
    <div className="min-h-screen p-6 relative z-10">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500 max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-cyan-400 tracking-wide">
          Notifications
        </h1>

        <div className="flex flex-col gap-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="bg-gray-800 bg-opacity-80 p-4 rounded-xl shadow-lg border border-cyan-600 hover:bg-gray-700 transition"
            >
              <p className="text-white font-medium">{note.message}</p>
              <span className="text-cyan-300 text-sm">{note.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
