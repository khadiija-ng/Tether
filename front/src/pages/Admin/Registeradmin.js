import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import Logo from "../../assets/LOGO_portail.png";

export default function Registeradmin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    lieuDeNaissance: "",
    dateDeNaissance: "",
    password: "",
  });

  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8082/users/register", user)
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: response.data,
        });
        navigate("/loginadmin");
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          setValidationError(error.response.data.errors);
        } else {
          Swal.fire({
            text: error.response?.data?.message || "Une erreur est survenue",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-gray-900 via-purple-900 to-black 
                    relative overflow-hidden">

      {/* Effet animé en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full opacity-30"
          style={{
            background:
              "repeating-linear-gradient(45deg, rgba(0,255,255,0.05) 0, rgba(0,255,255,0.05) 1px, transparent 1px, transparent 10px)",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Formulaire */}
      <div className="relative z-10 bg-gray-900 bg-opacity-90 p-10 rounded-3xl shadow-2xl w-full max-w-lg 
                      backdrop-blur-md border border-cyan-500">
        
        {/* Logo animé */}
        <div className="flex justify-center mb-6">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-28 h-28"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <h1 className="text-3xl text-cyan-400 font-extrabold mb-6 text-center tracking-wider drop-shadow-lg">
          Inscription Administrateur
        </h1>

        {Object.keys(validationError).length > 0 && (
          <div className="bg-red-700 text-white p-3 rounded-lg mb-4 text-sm">
            <ul className="mb-0">
              {Object.entries(validationError).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={registerUser} className="flex flex-col gap-4">
          <input
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={user.firstname}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Nom"
            value={user.lastname}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="text"
            name="lieuDeNaissance"
            placeholder="Lieu de naissance"
            value={user.lieuDeNaissance}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="date"
            name="dateDeNaissance"
            value={user.dateDeNaissance}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-cyan-600 p-3 rounded-xl 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-300
                       transition duration-300 hover:scale-105"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={user.password}
            onChange={handleChange}
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
            S’inscrire
          </motion.button>
        </form>

        <p className="mt-4 text-center text-cyan-400">
          Déjà un compte ?{" "}
          <button
            onClick={() => navigate("/login")}
            className="underline hover:text-white font-semibold"
          >
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
}
