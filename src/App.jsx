import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Atenciones from "./pages/Atenciones";
import Derivaciones from "./pages/Derivaciones";
import Examenes from "./pages/Examenes";
import Prescripciones from "./pages/Prescripciones";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Atenciones" element={<Atenciones />} />
        <Route path="/Derivaciones" element={<Derivaciones />} />
        <Route path="/Examenes" element={<Examenes />} />
        <Route path="/Prescripciones" element={<Prescripciones />} />
      </Routes>
    </Router>
  );
}

export default App;
