import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "./Hamburger";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="header">
          <Hamburger />
          <Link to="/">
            <h1>Portfolio</h1>
          </Link>
        </div>
        <div className="nav-content">
          <ul className="nav-list">
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
