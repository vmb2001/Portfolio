import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "./Hamburger";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="header">
          <Link to="/">
            <h1>Portfolio</h1>
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/blog">Blogs</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
