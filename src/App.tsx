// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero"; // Import the Hero component
import Services from "./components/layout/Services"; // Import the Services component
const App = () => {
  return (
    <Router>
      {/* Header is displayed on all pages */}
      <Header />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home Page */}
        <Route path="/services" element={<Services />} /> {/* Services Page */}
      </Routes>
    </Router>
  );
};

export default App;
