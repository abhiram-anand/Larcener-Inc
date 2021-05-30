import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import "./nav.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <span className="nav-logo">CliniPedia</span>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <span className="navs">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/aboutus"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-login"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            </span>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <GoThreeBars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
