import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Atenciones">Atenciones</Link>
        </li>
        <li>
          <Link to="/Derivaciones">Derivaciones</Link>
        </li>
        <li>
          <Link to="/Examenes">Examenes</Link>
        </li>
        <li>
          <Link to="/Prescripciones">Prescripciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
