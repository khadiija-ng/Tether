// src/pages/Campaigns.js
import React from "react";
import { ShieldCheck, Globe, Smartphone, Users } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Sensibilisation à la Sécurité Numérique",
    description:
      "Formation des citoyens sur les bonnes pratiques en ligne : mots de passe robustes, mises à jour régulières, et protection contre le phishing.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    link: "#",
  },
  {
    id: 2,
    title: "Cyber Hygiène dans les Écoles",
    description:
      "Programme éducatif pour initier les jeunes aux dangers du cyberharcèlement, de l’addiction et de la désinformation.",
    icon: <Users className="w-10 h-10 text-green-600" />,
    link: "#",
  },
  {
    id: 3,
    title: "Lutte contre la Désinformation",
    description:
      "Campagnes de fact-checking et diffusion d’outils pour identifier les fake news, protéger la démocratie et renforcer la confiance.",
    icon: <Globe className="w-10 h-10 text-purple-600" />,
    link: "#",
  },
  {
    id: 4,
    title: "Usage Responsable du Smartphone",
    description:
      "Conseils pratiques pour sécuriser ses appareils mobiles, gérer ses données personnelles et éviter les applications frauduleuses.",
    icon: <Smartphone className="w-10 h-10 text-red-600" />,
    link: "#",
  },
];

export default function Campaigns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bannière */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Campagnes de Prévention
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Protéger la société grâce à l’éducation, la sensibilisation et
          l’innovation numérique.
        </p>
      </div>

      {/* Section campagnes */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 flex flex-col"
          >
            <div className="flex items-center justify-center mb-6">
              {campaign.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
              {campaign.title}
            </h2>
            <p className="text-gray-600 mb-6 flex-grow">{campaign.description}</p>
            <a
              href={campaign.link}
              className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition font-medium"
            >
              En savoir plus
            </a>
          </div>
        ))}
      </div>

      {/* Section appel à action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Rejoignez le Mouvement pour un Internet plus sûr !
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Participez à nos programmes de sensibilisation, contribuez à la
          protection des générations futures et devenez acteur de la sécurité
          numérique.
        </p>
            <a href="#" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Participer
        </a>
      </div>
    </div>
  );
}
