import React from "react";
//import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold text-cyan-300">Admin Dashboard</h1>
        <p className="text-sm text-gray-400">Gestion des contenus, comptes et statistiques</p>
      </div>
    </header>
  );
}
