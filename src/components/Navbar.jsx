import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();

  const handleRadioChange = (event) => {
    setSelected(event.target.value);
  };

  useEffect(() => {
    const currentPathname = location.pathname;
    const currentOption = currentPathname.slice(1);
    setSelected(currentOption);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <ul className="flex items-center">
            <li className="mx-2">
              <label>
                <input
                  type="radio"
                  name="navbar-option"
                  value="Atenciones"
                  checked={selected === "Atenciones"}
                  onChange={handleRadioChange}
                />
                <Link
                  to="/Atenciones"
                  className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  Atenciones
                </Link>
              </label>
            </li>
            <li className="mx-2">
              <label>
                <input
                  type="radio"
                  name="navbar-option"
                  value="Examenes"
                  checked={selected === "Examenes"}
                  onChange={handleRadioChange}
                />
                <Link
                  to="/Examenes"
                  className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  Examenes
                </Link>
              </label>
            </li>
            <li className="mx-2">
              <label>
                <input
                  type="radio"
                  name="navbar-option"
                  value="Prescripciones"
                  checked={selected === "Prescripciones"}
                  onChange={handleRadioChange}
                />
                <Link
                  to="/Prescripciones"
                  className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  Prescripciones
                </Link>
              </label>
            </li>
            <li className="mx-2">
              <label>
                <input
                  type="radio"
                  name="navbar-option"
                  value="Derivaciones"
                  checked={selected === "Derivaciones"}
                  onChange={handleRadioChange}
                />
                <Link
                  to="/Derivaciones"
                  className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
                >
                  Derivaciones
                </Link>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
