import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-white">
          <img src="https://www.matter.in/public/assets/images/logo.svg" alt="Logo" className="w-200 h-10" />
        </Link>
        <ul className="flex space-x-4 font-bold">
          <li>
            <Link to="/Provisioning" className="text-white">
              Provisioning
            </Link>
          </li>
          <li>
            <Link to="/Sim-Provisioning" className="text-white">
              eSIM Provisioning
            </Link>
          </li>
          <li>
            <Link to="/device-provisioning" className="text-white">
              Cloud Galaxy Provisioning
            </Link>
          </li>
          <li>
            <Link to="/mmi-provisioning" className="text-white">
              MMI Provisioning
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
