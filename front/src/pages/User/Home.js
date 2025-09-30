import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dangerImg from "../../assets/danger.jpg";
import danger1Img from "../../assets/danger1.jpg";
import danger2Img from "../../assets/danger2.jpeg";
import {
  ShieldCheck,
  AlertTriangle,
  MapPin,
  FileText,
  Bell,
  Users,
} from "lucide-react";

const carouselImages = [dangerImg, danger1Img, danger2Img];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center overflow-hidden">
      {/* ===== Section Hero avec carrousel ===== */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center">
        {/* Images défilantes */}
        {carouselImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ filter: "brightness(0.5)" }}
          />
        ))}

        {/* Titre */}
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-md px-4">
          Bienvenue sur votre plateforme de signalements <br />
          Ici votre sécurité est notre priorité !
        </h1>
      </div>

      {/* ===== Section avec cartes ===== */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Nos Services
          </h2>
      <div className="relative z-10 grid md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl px-6 py-16">
        {/* Carte : Lois & Conseils */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <ShieldCheck className="text-blue-600 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Lois & Conseils</h2>
          <p className="text-gray-600 text-sm mb-4">
            Consultez les lois et recommandations pour rester protégé.
          </p>
          <Link to="/laws" className="text-blue-600 font-semibold hover:underline">
            Voir plus →
          </Link>
        </div>

        {/* Carte : Campagnes */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <Users className="text-purple-600 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Campagnes</h2>
          <p className="text-gray-600 text-sm mb-4">
            Accédez aux campagnes de sensibilisation interactives.
          </p>
          <Link
            to="/awareness"
            className="text-purple-600 font-semibold hover:underline"
          >
            Explorer →
          </Link>
        </div>

        {/* Carte : Signaler */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <AlertTriangle className="text-red-600 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Signaler un incident</h2>
          <p className="text-gray-600 text-sm mb-4">
            Déclarez un incident et suivez son état en temps réel.
          </p>
          <Link to="/report" className="text-red-600 font-semibold hover:underline">
            Signaler →
          </Link>
        </div>

        {/* Carte : Services publics proches */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <MapPin className="text-green-600 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Services publics proches</h2>
          <p className="text-gray-600 text-sm mb-4">
            Trouvez les services de sécurité les plus proches sur la carte.
          </p>
          <Link to="/map" className="text-green-600 font-semibold hover:underline">
            Localiser →
          </Link>
        </div>

        {/* Carte : Mes signalements */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <FileText className="text-orange-600 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Mes signalements</h2>
          <p className="text-gray-600 text-sm mb-4">
            Consultez l’historique et le suivi de vos signalements.
          </p>
          <Link
            to="/Signalement"
            className="text-orange-600 font-semibold hover:underline"
          >
            Voir mes signalements →
          </Link>
        </div>

        {/* Carte : Notifications */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <Bell className="text-yellow-500 w-12 h-12 mb-4" />
          <h2 className="font-bold text-lg mb-2">Notifications</h2>
          <p className="text-gray-600 text-sm mb-4">
            Recevez des alertes en temps réel pour vos suivis.
          </p>
          <Link
            to="/notifications"
            className="text-yellow-500 font-semibold hover:underline"
          >
            Voir →
          </Link>
        </div>
      </div>

      {/* ===== Section vidéos ===== */}
      <div className="relative z-10 flex flex-col gap-16 mb-12 w-full max-w-4xl px-6">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Cyberattaques
          </h2>
          <video controls className="rounded-xl shadow-lg w-full">
            <source src={require("../../assets/cyberattaque.mp4")} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Violences urbaines
          </h3>
          <video controls className="rounded-xl shadow-lg w-full">
            <source src={require("../../assets/violences.mp4")} type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </div>
  );
}
