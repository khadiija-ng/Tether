import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function PreventionManagement() {
  const [items, setItems] = useState([
    { id: 1, title: "Prévention vol", summary: "Conseils pour éviter vol à l'arraché", published: true },
    { id: 2, title: "Sécurité en ligne", summary: "Reconnaître le phishing et sécuriser comptes", published: true },
  ]);
  const [form, setForm] = useState({ title: "", summary: "" });
  const [editing, setEditing] = useState(null);

  const create = () => {
    if (!form.title) return;
    setItems([{ id: Date.now(), ...form, published: false }, ...items]);
    setForm({ title: "", summary: "" });
  };

  const save = () => {
    setItems(items.map(i => i.id === editing ? {...i, ...form} : i));
    setEditing(null); setForm({title:"",summary:""});
  };

  const remove = (id) => { if(!window.confirm("Supprimer cet élément ?")) return; setItems(items.filter(i=>i.id !== id)); };
  const togglePublish = (id) => setItems(items.map(i => i.id === id ? {...i, published: !i.published} : i));

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <h2 className="text-cyan-300 text-2xl font-extrabold mb-4">Gestion des préventions</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Titre" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-2 text-white"/>
          <textarea value={form.summary} onChange={e=>setForm({...form,summary:e.target.value})} placeholder="Résumé" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-3 text-white"/>
          <div className="flex gap-3">
            {editing ? <button onClick={save} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold">Enregistrer</button> : <button onClick={create} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2"><Plus/>Ajouter</button>}
            <button onClick={()=>{setEditing(null); setForm({title:"",summary:""})}} className="px-4 py-2 rounded-lg border border-gray-700">Annuler</button>
          </div>
        </div>

        <div>
          <div className="space-y-3">
            {items.map(it => (
              <motion.div key={it.id} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="bg-gray-800 p-3 rounded-lg border border-cyan-700">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-semibold">{it.title}</div>
                    <div className="text-cyan-300 text-sm">{it.summary}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <button onClick={()=>{setEditing(it.id); setForm({title:it.title, summary:it.summary})}} className="p-2 rounded-md hover:bg-gray-700"><Edit2/></button>
                      <button onClick={()=>remove(it.id)} className="p-2 rounded-md hover:bg-red-800"><Trash2/></button>
                    </div>
                    <button onClick={()=>togglePublish(it.id)} className={`px-3 py-1 rounded-md ${it.published ? "bg-green-600" : "bg-yellow-600"}`}>{it.published ? "Publié" : "Brouillon"}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
