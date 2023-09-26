import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import "./Hamburger.css";

const Hamburger = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  return (
    <div className="ham-body">
      <div className="ham">
        <Link to="#" className="menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={sidebar ? "ham-menu.active" : "ham-menu"}>
        <ul className="nav-menu-items">
          <li>
            <Link to="/todo" className="nav-menu-item">
              <Fa6Icons.FaNoteSticky />
              Todo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
