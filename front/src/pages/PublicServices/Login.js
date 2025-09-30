import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/LOGO_portail.png"; // ton logo

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login : username = "police", password = "1234"
    if (username === "police" && password === "1234") {
      navigate("/public/dashboard");
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-gray-900 via-purple-900 to-black 
                    relative overflow-hidden">

      {/* Arrière-plan animé cyber */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full opacity-30"
          style={{
            background: "repeating-linear-gradient(45deg, rgba(0,255,255,0.05) 0, rgba(0,255,255,0.05) 1px, transparent 1px, transparent 10px)",
            backgroundSize: "200% 200%"
          }}
          animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Formulaire */}
      <div className="relative z-10 bg-gray-900 bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full max-w-md 
                      backdrop-blur-md border border-cyan-500">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <motion.img 
            src={Logo} 
            alt="Logo" 
            className="w-28 h-28" 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Titre */}
        <h1 className="text-3xl text-cyan-400 font-extrabold mb-6 text-center tracking-wider drop-shadow-lg">
          Connexion Services Publics
        </h1>

        {/* Formulaire Inputs */}
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px cyan" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 text-black py-3 rounded-xl font-bold tracking-wide
                       hover:bg-cyan-500 transition duration-300 drop-shadow-lg"
          >
            Se connecter
          </motion.button>
        </form>

        {/* Bas du formulaire */}
        <p className="mt-6 text-cyan-400 text-sm text-center drop-shadow-md">
          Bienvenue au portail de signalement des services publics
        </p>
      </div>
    </div>
  );
}
