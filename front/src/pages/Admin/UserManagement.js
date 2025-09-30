import React, { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin Principal", email: "admin@ex.com", role: "SuperAdmin", active: true },
    { id: 2, name: "Police Dakar", email: "police@dkr.gov", role: "ServicePublic", active: true },
  ]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editing, setEditing] = useState(null);

  const addUser = () => {
    if (!form.name || !form.email) return;
    setUsers([{ id: Date.now(), ...form, active: true }, ...users]);
    setForm({ name: "", email: "", role: "" });
  };

  const saveEdit = () => {
    setUsers(users.map(u => u.id === editing ? {...u, ...form} : u));
    setEditing(null); setForm({name:"",email:"",role:""});
  };

  const toggleActive = (id) => setUsers(users.map(u => u.id === id ? {...u, active: !u.active} : u));

  const remove = (id) => { if(!window.confirm("Supprimer l'utilisateur ?")) return; setUsers(users.filter(u=>u.id !== id)); };

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <h2 className="text-cyan-300 text-2xl font-extrabold mb-4">Gestion des utilisateurs</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white mb-2 font-bold">Créer / Modifier compte</h3>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nom" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-2 text-white"/>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-2 text-white"/>
          <input value={form.role} onChange={e=>setForm({...form,role:e.target.value})} placeholder="Rôle (ex: ServicePublic)" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-3 text-white"/>
          <div className="flex gap-3">
            {editing ? <button onClick={saveEdit} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold">Enregistrer</button> : <button onClick={addUser} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2"><Plus/>Créer</button>}
            <button onClick={()=>{setEditing(null); setForm({name:"",email:"",role:""})}} className="px-4 py-2 rounded-lg border border-gray-700">Annuler</button>
          </div>
        </div>

        <div>
          <h3 className="text-white mb-2 font-bold">Liste des comptes</h3>
          <div className="space-y-2">
            {users.map(u => (
              <motion.div key={u.id} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg border border-cyan-700">
                <div>
                  <div className="text-white font-semibold">{u.name}</div>
                  <div className="text-sm text-cyan-300">{u.email} • {u.role}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={()=>{ setEditing(u.id); setForm({name:u.name,email:u.email,role:u.role}); }} className="p-2 rounded-md hover:bg-gray-700"><Edit2/></button>
                  <button onClick={()=>remove(u.id)} className="p-2 rounded-md hover:bg-red-800"><Trash2/></button>
                  <button onClick={()=>toggleActive(u.id)} className={`px-3 py-1 rounded-md ${u.active ? "bg-green-600" : "bg-yellow-600"}`}>{u.active ? "Actif" : "Inactif"}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
