import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import RoleManagement from "./RoleManagement";
import UserManagement from "./UserManagement";
import PreventionManagement from "./PreventionManagement";
import LawManagement from "./LawManagement";
import SignalManagement from "./SignalManagement";
import StatsDashboard from "./StatsDashboard";
import CarteManagement from "./CarteManagement";
import TableCard from "./Components/TableCard";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Déconnexion -> retour login admin
    navigate("/admin/login");
  };

  const renderActive = () => {
    switch (activeTab) {
      case "roles":
        return <RoleManagement />;
      case "users":
        return <UserManagement />;
      case "preventions":
        return <PreventionManagement />;
      case "laws":
        return <LawManagement />;
      case "signalements":
        return <SignalManagement />;
      case "stats":
        return <StatsDashboard />;
      case "carte":
        return <CarteManagement />;

      default:
        return (
          <>
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <h2 className="text-cyan-300 font-extrabold text-2xl mb-4">
                  Résumé
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <TableCard title="Nombre d'utilisateurs" value="1240" />
                  <TableCard title="Signalements totaux" value="3 542" />
                  <TableCard title="Préventions publiées" value="128" />
                  <TableCard title="Services actifs" value="18" />
                </div>
              </div>

              <div>
                <h2 className="text-cyan-300 font-extrabold text-2xl mb-4">
                  Derniers signalements
                </h2>
                <div className="bg-gray-900 bg-opacity-90 p-4 rounded-2xl border border-cyan-500 shadow-lg">
                  <ul className="space-y-3 text-white">
                    <li className="flex justify-between">
                      <span>Vol — Dakar</span>
                      <span className="text-cyan-300">10 min</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cyberattaque — Médina</span>
                      <span className="text-cyan-300">30 min</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Incendie — Pikine</span>
                      <span className="text-cyan-300">1h</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-cyan-300 font-extrabold text-2xl mb-4">
                Graphiques rapides
              </h2>
              <StatsDashboard compact />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* arrière-plan animé */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(0,255,255,0.03) 0, rgba(0,255,255,0.03) 1px, transparent 1px, transparent 10px)",
          backgroundSize: "200% 200%",
        }}
      />
      
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <div className="flex-1 p-6 relative z-10 text-white">
        <div className="flex justify-between items-center">
          <Header />
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-500 transition"
          >
            Déconnexion
          </button>
        </div>
        <div className="mt-6">{renderActive()}</div>
      </div>
    </div>
  );
}
