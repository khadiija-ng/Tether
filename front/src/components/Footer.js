import { Link } from "react-router-dom";
import logo from "../assets/LOGO_portail.png";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12 px-6 mt-12 w-full">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Colonne 1 : Logo + Présentation */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Logo Portail Alerte Sénégal"
            className="h-28 w-auto mb-4"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            <span className="font-bold">Portail Alerte Sénégal (PAS)</span> est une
            plateforme nationale permettant à chaque citoyen de signaler en toute
            sécurité les cybercrimes et infractions au Sénégal.
          </p>
        </div>

        {/* Colonne 2 : Nos Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Nos Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/alerts" className="hover:underline">
                Signaler une alerte
              </Link>
            </li>
            <li>
              <Link to="/map" className="hover:underline">
                Trouver un service proche
              </Link>
            </li>
            <li>
              <Link to="/laws" className="hover:underline">
                Lois & Conseils
              </Link>
            </li>
            <li>
              <Link to="/awareness" className="hover:underline">
                Campagnes de prévention
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Numéros d’Urgence */}
        <div>
          <h3 className="text-lg font-bold mb-4">Numéros d’Urgence</h3>
          <ul className="space-y-2">
            <li>
              🚨 Police : <span className="font-semibold">17</span>
            </li>
            <li>
              🔥 Sapeurs-pompiers : <span className="font-semibold">18</span>
            </li>
            <li>
              ⚡ Urgences médicales : <span className="font-semibold">15</span>
            </li>
            <li>
              📞 Cellule cybercriminalité :{" "}
              <span className="font-semibold">33 860 XXXX</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-blue-400 mt-10 pt-6">
        {/* Nos Partenaires */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Nos Partenaires</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">
                ONU-DC : Nations Unies Office contre la drogue et le crime
              </span>
            </li>
            <li>
              <span className="font-semibold">
                TETHER : En adéquation avec Nations Unies
              </span>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} Portail Alerte Sénégal. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
