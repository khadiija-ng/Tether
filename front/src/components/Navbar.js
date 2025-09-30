import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const tabs = [
    { name: "Accueil", path: "/" },
    { name: "Services Proches", path: "/map" },
    { name: "Lois & Conseils", path: "/laws" },
    { name: "Campagnes de prevention", path: "/awareness" },
    { name: "Suivi Signalements ", path: "/signalement" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 text-white p-6 flex justify-between items-center w-full rounded-xl mb-8 text-lg relative">
      {/* Logo à gauche */}
      <div className="flex items-center mr-8">
        <img
          src={require("../assets/LOGO_portail.png")}
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover bg-white"
        />
      </div>
      <div className="flex space-x-6 flex-1 ml-4">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`font-semibold hover:text-gray-200 ${
              location.pathname === tab.path ? "underline" : ""
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="absolute right-4 flex items-center gap-3">
        <Link
          to="/report"
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-600 transition transform hover:scale-105 text-base"
        >
          🚨 Lancer une alerte
        </Link>
        <Link
          to="/emergency"
          className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-800 transition transform hover:scale-105 text-base"
        >
          ⚡ Urgence
        </Link>
      </div>
    </nav>
  );
}
