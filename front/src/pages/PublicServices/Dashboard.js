import React, { useState } from "react"; 
import { motion } from "framer-motion";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// //import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Bell, User, AlertTriangle, MapPin, FileText } from "lucide-react";

// Import des pages
import DashboardContent from "./DashboardContent";
import Signalementdash from "./Signalementdash";
import Notifications from "./Notifications";
import MapDashboard from "./MapDashboard";
import Historique from "./Historique";

const signalements = [
  { type: "Vol", position: [14.7, -17.4], color: "red" },
  { type: "Violence", position: [14.6, -17.5], color: "orange" },
  { type: "Accident", position: [14.65, -17.35], color: "green" },
  { type: "Cyberattaque", position: [14.72, -17.42], color: "purple" },
  { type: "Incendie", position: [14.68, -17.38], color: "yellow" },
  { type: "Inondation", position: [14.66, -17.45], color: "blue" }
];

const stats = [
  { name: "Vol", value: 40 },
  { name: "Violence", value: 25 },
  { name: "Accident", value: 35 },
  { name: "Cyberattaque", value: 15 },
  { name: "Incendie", value: 20 },
  { name: "Inondation", value: 10 }
];

const COLORS = ["#FF0000", "#FFA500", "#00FF00", "#800080", "#FFFF00", "#0000FF"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLoginLogout = () => {
    setLoggedIn(!loggedIn);
    window.location.href = loggedIn ? "/public/login" : "/public/dashboard";
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent stats={stats} COLORS={COLORS} signalements={signalements} />;
      case "signalements":
        return <Signalementdash />;
      case "notifications":
        return <Notifications />;
      case "carte":
        return <MapDashboard />;
      case "historique":
        return <Historique />;
      default:
        return <DashboardContent stats={stats} COLORS={COLORS} signalements={signalements} />;
    }
  };

  return (
    <div className="flex min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Arrière-plan animé cyber */}
      <motion.div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          background: "repeating-linear-gradient(45deg, rgba(0,255,255,0.05) 0, rgba(0,255,255,0.05) 1px, transparent 1px, transparent 10px)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Sidebar */}
      <aside className="relative z-10 w-64 bg-gray-900 bg-opacity-90 backdrop-blur-md p-6 flex flex-col justify-between border-r border-cyan-500 shadow-lg">
        <div>
          <h2 className="text-2xl font-extrabold mb-8 text-cyan-400 tracking-wide drop-shadow-lg">Services Publics</h2>
          {["Dashboard", "Signalements", "Carte", "Historique"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`flex items-center gap-3 p-3 rounded-xl mb-2 font-medium transition
                ${activeTab === tab.toLowerCase() ? "bg-cyan-600 text-black shadow-lg" : "text-white hover:bg-gray-800"}`}
            >
              {tab === "Dashboard" && <User />}
              {tab === "Signalements" && <AlertTriangle />}
              {tab === "Carte" && <MapPin />}
              {tab === "Historique" && <FileText />}
              {tab}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <div className="relative z-10 flex-1 p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setActiveTab("notifications")}
            className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-xl hover:bg-gray-700 transition flex items-center gap-2 shadow-lg"
          >
            <Bell /> Notifications
          </button>
          <button
            onClick={handleLoginLogout}
            className="bg-cyan-600 text-black px-4 py-2 rounded-xl font-bold tracking-wide hover:bg-cyan-500 transition shadow-lg"
          >
            {loggedIn ? "Déconnexion" : "Connexion"}
          </button>
        </div>

        {/* Contenu dynamique */}
        {renderActiveTab()}
      </div>
    </div>
  );
}
