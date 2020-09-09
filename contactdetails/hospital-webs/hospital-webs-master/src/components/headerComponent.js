import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import profile from "../assets/images/Profile.png";

const Header = ({ user = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Priority Pulse
        <p>Hospital Website</p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarPP"
        aria-controls="navbarPP"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${!isOpen ? "collapse" : ""} navbar-collapse`}
        id="navbarPP"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item my-auto mx-2">
            <NavLink className="nav-link primary-text-color px-3" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item my-auto mx-2">
            <NavLink
              className="nav-link primary-text-color px-3"
              to="/activeRides"
            >
              Active Rides
            </NavLink>
          </li>
          <li className="nav-item my-auto mx-2">
            <NavLink className="nav-link primary-text-color px-3" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item my-auto mx-2">
            <NavLink className="nav-link primary-text-color px-3" to="/login">
              Logout
            </NavLink>
          </li>
          {!user && (
            <>
              <li className="nav-item my-auto mx-2">
                <NavLink
                  className="nav-link primary-text-color px-3"
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item my-auto mx-2">
                <NavLink
                  className="nav-link primary-text-color px-3"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item my-auto mx-2">
            <img
              className="nav-link profile ml-2"
              src={profile}
              alt="Profile"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
