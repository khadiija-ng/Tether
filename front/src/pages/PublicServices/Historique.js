import React, { useEffect, useState } from "react";

export default function Historique() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Mock data signalements
    setReports([
      {
        id: 1,
        type: "Vol",
        description: "Vol à l'arraché",
        status: "En cours",
        location: "Dakar",
      },
      {
        id: 2,
        type: "Agression",
        description: "Agression rue X",
        status: "Traité",
        location: "Plateau",
      },
      {
        id: 3,
        type: "Cyberattaque",
        description: "Hameçonnage email",
        status: "Traité",
        location: "Médina",
      },
    ]);
  }, []);

  // On filtre uniquement les signalements traités
  const treatedReports = reports.filter((report) => report.status === "Traité");

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl shadow-2xl border border-cyan-500">
      <h2 className="text-cyan-400 text-xl font-bold mb-4">
        Historique des signalements traités
      </h2>

      {treatedReports.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-white rounded-xl shadow-lg border border-cyan-500">
            <thead className="bg-gray-800 border-b border-cyan-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Lieu</th>
                <th className="px-4 py-2">Statut</th>
              </tr>
            </thead>
            <tbody>
              {treatedReports.map((report) => (
                <tr
                  key={report.id}
                  className="text-center border-b border-cyan-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{report.id}</td>
                  <td className="px-4 py-2">{report.type}</td>
                  <td className="px-4 py-2">{report.description}</td>
                  <td className="px-4 py-2">{report.location}</td>
                  <td className="px-4 py-2 text-green-400 font-bold">
                    {report.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-300">Aucun signalement traité pour le moment.</p>
      )}
    </div>
  );
}
