import React, { useState } from "react";
import { Upload, AlertTriangle, FileText, Type, Send } from "lucide-react";
import { useAlerts } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

export default function Report() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [files, setFiles] = useState([]);

  const { addAlert } = useAlerts();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlert = {
      title,
      description,
      type,
      status: "nouveau",
      files,
    };

    addAlert(newAlert);

    alert("✅ Alerte soumise avec succès !");
    navigate("/alerts"); // Redirige vers la liste des alertes
  };

  return (
    <div className="min-h-screen p-6 flex justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl space-y-6 border border-gray-100 animate-fadeIn"
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <AlertTriangle size={32} className="text-red-600 animate-pulse" />
          <h1 className="text-3xl font-extrabold text-gray-800">
            Lancer une alerte
          </h1>
        </div>

        {/* Titre */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Type size={18} className="text-blue-500" /> Titre de l'alerte
          </label>
          <input
            type="text"
            placeholder="Ex: Tentative de cyberattaque détectée"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <FileText size={18} className="text-green-500" /> Description
          </label>
          <textarea
            placeholder="Décrivez la situation avec détails..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition"
            rows={5}
            required
          />
        </div>

        {/* Type */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700">Type d’alerte</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none transition"
            required
          >
            <option value="">-- Sélectionnez --</option>
            <option value="cybercrime">💻 Cyberattaque</option>
            <option value="violence">🧨 Violence</option>
            <option value="vol">🕵️ Vol</option>
            <option value="catastrophe">🌪️ Catastrophe</option>
          </select>
        </div>

        {/* Fichiers */}
        <div className="flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-blue-400 transition cursor-pointer">
          <label className="flex items-center gap-2 font-semibold text-gray-700">
            <Upload size={18} className="text-purple-500" /> Ajouter des fichiers
          </label>
          <input type="file" multiple onChange={handleFileChange} className="mt-3" />
          {files.length > 0 && (
            <ul className="mt-3 text-sm text-gray-600">
              {files.map((file, idx) => (
                <li key={idx}>📎 {file.name}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all font-bold text-lg"
        >
          <Send size={20} /> Envoyer l'alerte
        </button>
      </form>
    </div>
  );
}
