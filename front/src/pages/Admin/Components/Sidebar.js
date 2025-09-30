import React from "react";
import { User, Users, FileText, PieChart, Settings } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: <PieChart/> },
    { key: "roles", label: "Rôles", icon: <Users/> },
    { key: "users", label: "Utilisateurs", icon: <User/> },
    { key: "preventions", label: "Préventions", icon: <FileText/> },
    { key: "laws", label: "Lois", icon: <FileText/> },
    { key: "signalements", label: "Signalements", icon: <FileText/> },
    { key: "stats", label: "Statistiques", icon: <PieChart/> },
    { key: "carte", label: "Carte", icon: <FileText/> },
  ];

  return (
    <aside className="relative z-10 w-72 bg-gray-900 bg-opacity-90 backdrop-blur-md p-6 flex flex-col justify-between border-r border-cyan-500 shadow-lg">
      <div>
        <div className="mb-6">
          <div className="text-cyan-300 font-extrabold text-2xl">Administrateur</div>
          <div className="text-sm text-cyan-400 mt-1">Gestion & supervision</div>
        </div>

        <nav className="space-y-2">
          {items.map(i => (
            <button key={i.key} onClick={()=>setActiveTab(i.key)} className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition ${activeTab === i.key ? "bg-cyan-600 text-black shadow-lg" : "text-white hover:bg-gray-800"}`}>
              <span className="w-6">{i.icon}</span>
              <span className="font-medium">{i.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div>
        <button onClick={()=>setActiveTab("settings")} className="flex items-center gap-2 p-3 rounded-xl mb-2 font-medium text-white hover:bg-gray-800 transition shadow-lg">
          <Settings/> Paramètres
        </button>
        <div className="text-xs text-gray-400 mt-3">v1.0 • © Portail d'alerte du Sénégal</div>
      </div>
    </aside>
  );
}
