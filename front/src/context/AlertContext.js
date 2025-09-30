import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  // Fonction pour ajouter une alerte
  const addAlert = (alert) => {
    setAlerts((prev) => [
      { ...alert, id: Date.now(), date: new Date().toISOString() },
      ...prev, // ✅ ajoute en haut pour avoir les plus récents en premier
    ]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlerts = () => useContext(AlertContext);
