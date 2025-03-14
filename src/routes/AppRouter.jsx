// src/routes/AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"; // Vérifie que le chemin est correct
import About from "../pages/About"; // Vérifie que le chemin est correct

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page À propos */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
