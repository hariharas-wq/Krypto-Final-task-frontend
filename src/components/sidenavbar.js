import React, { useState } from "react";

// ICONS


import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE



// STYLES
import "./Navbar.css";

export default function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
          
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                
              </Link>
            </li>

            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
