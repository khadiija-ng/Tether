import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Composants communs
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages utilisateurs lambda
import Home from "./pages/User/Home";
import Map from "./pages/User/Map";
import Report from "./pages/User/Report";
import Laws from "./pages/User/Laws";
import Awareness from "./pages/User/Awareness";
import Signalement from "./pages/User/Signalement";
import Emergency from "./pages/User/Emergency";

// Pages Services Publics
import Login from "./pages/PublicServices/Login";
import Dashboard from "./pages/PublicServices/Dashboard";
import Signalementdash from "./pages/PublicServices/Signalementdash";
import Notifications from "./pages/PublicServices/Notifications";
import MapDashboard from "./pages/PublicServices/MapDashboard";

// Pages Admin
import AdminDashboard from "./pages/Admin/Admindashboard";
import Loginadmin from "./pages/Admin/Loginadmin";
import Registeradmin from "./pages/Admin/Registeradmin";

// Contexte des alertes
import { AlertProvider } from "./context/AlertContext";

function Layout({ children }) {
  const location = useLocation();

  // Masquer Navbar/Footer pour PublicServices et Admin
  const hideLayout = [
    "/public/login",
    "/public/dashboard",
    "/public/mapDashboard",
    "/public/signalementdash",
    "/public/notifications",

    // Admin
    "/admin/loginadmin",
    "/admin/Registeradmin",
    "/admin/admindashboard",
  ].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AlertProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Routes utilisateurs lambda */}
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/report" element={<Report />} />
            <Route path="/laws" element={<Laws />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/signalement" element={<Signalement />} />
            <Route path="/emergency" element={<Emergency />} />

            {/* Routes Services Publics */}
            <Route path="/public" element={<Navigate to="/public/login" replace />} />
            <Route path="/public/login" element={<Login />} />
            <Route path="/public/dashboard" element={<Dashboard />} />
            <Route path="/public/signalementdash" element={<Signalementdash />} />
            <Route path="/public/notifications" element={<Notifications />} />
            <Route path="/public/mapDashboard" element={<MapDashboard />} />

            {/* Routes Admin */}
            <Route path="/admin" element={<Navigate to="/admin/loginadmin" replace />} />
            <Route path="/admin/loginadmin" element={<Loginadmin />} />
            <Route path="/admin/registeradmin" element={<Registeradmin />} />
            <Route path="/admin/admindashboard" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </AlertProvider>
  );
}

export default App;
