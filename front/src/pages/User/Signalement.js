// src/pages/ReportTracking.js
import React, { useEffect, useState } from "react";
import { Clock, CheckCircle, AlertTriangle, Eye } from "lucide-react";

export default function ReportTracking() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupération des signalements depuis l'API
  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch("/api/reports"); // Remplace par ton endpoint backend
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des signalements :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "En attente":
        return (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            <Clock className="w-4 h-4" /> En attente
          </span>
        );
      case "En cours":
        return (
          <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            <AlertTriangle className="w-4 h-4" /> En cours
          </span>
        );
      case "Résolu":
        return (
          <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            <CheckCircle className="w-4 h-4" /> Résolu
          </span>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Chargement des signalements...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        📊 Suivi de mes signalements
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {reports.length === 0 ? (
          <p className="text-center text-gray-500">Aucun signalement trouvé.</p>
        ) : (
          reports.map((report) => (
            <div
              key={report.id}
              className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{report.title}</h2>
                {getStatusBadge(report.status)}
              </div>

              <p className="text-gray-600 mb-3">{report.description}</p>

              <div className="flex flex-wrap justify-between items-center text-sm text-gray-500">
                <p>📅 Signalé le : {new Date(report.date).toLocaleDateString()}</p>
                {report.attachment && (
                  <a
                    href={report.attachment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Eye className="w-4 h-4" /> Voir pièce jointe
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
