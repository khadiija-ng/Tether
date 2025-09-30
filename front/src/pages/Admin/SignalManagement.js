import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Trash2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SignalManagement() {
  const [items, setItems] = useState([
    { id: 1, type: "Vol", lieu: "Dakar", time: "10:30" },
    { id: 2, type: "Agression", lieu: "Plateau", time: "11:15" },
    { id: 3, type: "Cyberattaque", lieu: "Médina", time: "12:00" },
    { id: 4, type: "Incendie", lieu: "Pikine", time: "13:45" },
  ]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ type: "", lieu: "", time: "" });

  // Supprimer un signalement
  const remove = (id) => {
    if (!window.confirm("Supprimer ce signalement ?")) return;
    setItems(items.filter((i) => i.id !== id));
  };

  // Sauvegarder les modifications
  const save = () => {
    setItems(
      items.map((i) => (i.id === editing ? { ...i, ...form } : i))
    );
    setEditing(null);
    setForm({ type: "", lieu: "", time: "" });
  };

  // Préparer les données pour le graphe
  const signalementCount = items.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(signalementCount).map(([type, count]) => ({
    type,
    count,
  }));

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <h2 className="text-cyan-300 text-2xl font-extrabold mb-4">
        Gestion des signalements
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Historique des signalements */}
        <div>
          <div className="space-y-3">
            {items.map((it) => (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-3 rounded-lg border border-cyan-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-semibold">
                      {it.type} — {it.lieu}
                    </div>
                    <div className="text-cyan-300 text-sm">{it.time}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditing(it.id);
                        setForm({
                          type: it.type,
                          lieu: it.lieu,
                          time: it.time,
                        });
                      }}
                      className="p-2 rounded-md hover:bg-gray-700"
                    >
                      <Edit2 />
                    </button>
                    <button
                      onClick={() => remove(it.id)}
                      className="p-2 rounded-md hover:bg-red-800"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Graphe récapitulatif */}
        <div className="bg-gray-800 p-4 rounded-xl border border-cyan-700">
          <h3 className="text-cyan-300 text-lg font-bold mb-3">
            Signalements par type
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="type" stroke="#00ffff" />
              <YAxis stroke="#00ffff" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Formulaire d'édition */}
      {editing && (
        <div className="mt-6 bg-gray-800 p-4 rounded-xl border border-cyan-700">
          <h3 className="text-cyan-300 font-bold mb-2">Modifier un signalement</h3>
          <input
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            placeholder="Type de signalement"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            value={form.lieu}
            onChange={(e) => setForm({ ...form, lieu: e.target.value })}
            placeholder="Lieu"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            placeholder="Heure"
            className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
          />
          <button
            onClick={save}
            className="bg-cyan-600 px-4 py-2 rounded-lg font-bold"
          >
            Enregistrer
          </button>
        </div>
      )}
    </div>
  );
}
