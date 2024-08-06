import React from "react";
import "../index.css";

const Navbar = ({ handleNavClick }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My Portfolio</h1>
      <ul className="nav-links">
        <li>
          <button onClick={() => handleNavClick("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleNavClick("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
