import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-500 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <ul className="flex items-center">
            <li className="mx-2">
              <Link
                to="/Atenciones"
                className="text-white hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Atenciones
              </Link>
            </li>
            <li className="mx-2">
              <Link
                to="/Derivaciones"
                className="text-white hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Derivaciones
              </Link>
            </li>
            <li className="mx-2">
              <Link
                to="/Examenes"
                className="text-white hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Examenes
              </Link>
            </li>
            <li className="mx-2">
              <Link
                to="/Prescripciones"
                className="text-white hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Prescripciones
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
