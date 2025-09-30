import React, { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function LawManagement() {
  const [laws, setLaws] = useState([
    { id: 1, title: "Code de la route", text: "Règles de circulation et sanctions", published: true },
    { id: 2, title: "Loi sur cybercriminalité", text: "Sanctions pour fraude en ligne", published: true },
  ]);
  const [form, setForm] = useState({ title: "", text: "" });
  const [editing, setEditing] = useState(null);

  const add = () => { if(!form.title) return; setLaws([{id:Date.now(),...form,published:false}, ...laws]); setForm({title:"",text:""}); };
  const save = () => { setLaws(laws.map(l=> l.id === editing ? {...l,...form} : l)); setEditing(null); setForm({title:"",text:""}); };
  const remove = (id) => { if(!window.confirm("Supprimer la loi ?")) return; setLaws(laws.filter(l=>l.id!==id)); };
  const toggle = (id) => setLaws(laws.map(l => l.id===id? {...l, published: !l.published} : l));

  return (
    <div className="bg-gray-900 bg-opacity-90 p-6 rounded-2xl border border-cyan-500 shadow-2xl">
      <h2 className="text-cyan-300 text-2xl font-extrabold mb-4">Gestion des lois</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Titre loi" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-2 text-white"/>
          <textarea value={form.text} onChange={e=>setForm({...form,text:e.target.value})} placeholder="Texte / résumé" className="w-full p-3 bg-gray-800 rounded-lg border border-cyan-600 mb-3 text-white"/>
          <div className="flex gap-3">
            {editing ? <button onClick={save} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold">Enregistrer</button> : <button onClick={add} className="bg-cyan-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2"><Plus/>Ajouter</button>}
            <button onClick={()=>{setEditing(null); setForm({title:"",text:""})}} className="px-4 py-2 rounded-lg border border-gray-700">Annuler</button>
          </div>
        </div>

        <div>
          <div className="space-y-3">
            {laws.map(l => (
              <motion.div key={l.id} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="bg-gray-800 p-3 rounded-lg border border-cyan-700">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-white font-semibold">{l.title}</div>
                    <div className="text-cyan-300 text-sm">{l.text}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <button onClick={()=>{ setEditing(l.id); setForm({title:l.title,text:l.text}) }} className="p-2 rounded-md hover:bg-gray-700"><Edit2/></button>
                      <button onClick={()=>remove(l.id)} className="p-2 rounded-md hover:bg-red-800"><Trash2/></button>
                    </div>
                    <button onClick={()=>toggle(l.id)} className={`px-3 py-1 rounded-md ${l.published ? "bg-green-600" : "bg-yellow-600"}`}>{l.published ? "Publié" : "Brouillon"}</button>
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
