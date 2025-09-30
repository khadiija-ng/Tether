// src/pages/Laws.js
import React from "react";
import { FileText, ExternalLink } from "lucide-react";

const laws = [
  {
    id: 1,
    title: "Loi n° 2008-11 du 25 janvier 2008",
    description:
      "Relative à la cybercriminalité au Sénégal, elle définit et réprime les infractions commises via les technologies de l’information.",
    link: "https://www.itu.int/ITU-D/cyb/cybersecurity/docs/senegal-cybercrime-law.pdf",
  },
  {
    id: 2,
    title: "Loi sur la Protection des Données Personnelles",
    description:
      "Encadrée par la CDP (Commission de Protection des Données Personnelles), cette loi régule la collecte et le traitement des données personnelles.",
    link: "https://cdp.sn/",
  },
  {
    id: 3,
    title: "Convention de Budapest sur la Cybercriminalité",
    description:
      "Instrument juridique international ratifié par le Sénégal, fixant les standards de lutte contre la cybercriminalité.",
    link: "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=185",
  },
];

export default function Laws() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FileText className="w-8 h-8 text-blue-600" /> Lois et Réglementations
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {laws.map((law) => (
          <div
            key={law.id}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {law.title}
            </h2>
            <p className="text-gray-600 mb-4">{law.description}</p>
            <a
              href={law.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Consulter <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
