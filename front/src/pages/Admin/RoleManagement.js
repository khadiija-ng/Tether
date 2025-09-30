import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function RoleManagement() {
  const [roles, setRoles] = useState([
    { id: 1, name: "SuperAdmin", perms: ["all"] },
    { id: 2, name: "Gestionnaire", perms: ["publish", "view_stats"] },
    { id: 3, name: "ServicePublic", perms: ["receive_reports"] },
  ]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", perms: "" });

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const newRole = {
      id: Date.now(),
      name: form.name.trim(),
      perms: form.perms.split(",").map((p) => p.trim()).filter(Boolean),
    };
    setRoles([newRole, ...roles]);
    setForm({ name: "", perms: "" });
  };

  const handleUpdate = () => {
    setRoles(roles.map(r => r.id === editing ? { ...r, name: form.name, perms: form.perms.split(",").map(p=>p.trim()).filter(Boolean)} : r));
    setEditing(null);
    setForm({ name: "", perms: "" });
  };

  const handleEditClick = (r) => {
    setEditing(r.id);
    setForm({ name: r.name, perms: r.perms.join(", ") });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Supprimer ce rôle ?")) return;
    setRoles(roles.filter(r => r.id !== id));
  };

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <h2 className="text-cyan-300 text-2xl font-extrabold mb-4">Gestion des rôles</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white font-bold mb-2">Créer / Modifier</h3>
          <div className="space-y-3">
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
              placeholder="Nom du rôle" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 text-white" />
            <input value={form.perms} onChange={e=>setForm({...form,perms:e.target.value})}
              placeholder="Permissions (comma separated) ex: publish, view_stats" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 text-white" />
            <div className="flex gap-3">
              {editing ? (
                <button onClick={handleUpdate} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold">Mettre à jour</button>
              ) : (
                <button onClick={handleAdd} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2"><Plus/>Ajouter</button>
              )}
              <button onClick={()=>{setEditing(null); setForm({name:"",perms:""})}} className="px-4 py-2 rounded-lg border border-gray-700">Annuler</button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-2">Rôles existants</h3>
          <div className="space-y-2">
            {roles.map(r => (
              <motion.div key={r.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg border border-cyan-700"
                initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
                <div>
                  <div className="text-white font-semibold">{r.name}</div>
                  <div className="text-sm text-cyan-300">{r.perms.join(", ") || "Aucune"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>handleEditClick(r)} className="p-2 rounded-md hover:bg-gray-700"><Edit2/></button>
                  <button onClick={()=>handleDelete(r.id)} className="p-2 rounded-md hover:bg-red-800"><Trash2/></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
