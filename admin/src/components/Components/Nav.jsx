import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-blue-500 text-white px-5 py-4 flex justify-between items-center">
      <h2 className="text-xl font-bold m-0">Admin Dashboard</h2>
      <ul className="flex list-none">
        <li className="mx-4">
          <Link 
            to="/customer" 
            className="text-white font-bold no-underline hover:underline transition duration-300"
          >
            Manage Users
          </Link>
        </li>
        <li className="mx-4">
          <Link 
            to="/record" 
            className="text-white font-bold no-underline hover:underline transition duration-300"
          >
            Reports & Stats
          </Link>
        </li>
        <li className="mx-4">
          <Link 
            to="/files" 
            className="text-white font-bold no-underline hover:underline transition duration-300"
          >
            Upload files
          </Link>
        </li>
        <li className="mx-4">
          <Link 
            to="/ai" 
            className="text-white font-bold no-underline hover:underline transition duration-300"
          >
            Diet
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;