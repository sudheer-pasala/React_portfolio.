import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navigation-menu">
        <nav className="navbar  navbar-expand-sm bg-dark  fixed-top">
          <div className="container-fluid">
            <a href="/" className="navbar-brand name">
              SUDHEER
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#About" className="nav-link " aria-current="page">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link" aria-current="page">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Services" className="nav-link" aria-current="page">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Contact" className="nav-link" aria-current="page">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
      </div>
    </>
  );
}

export default Navbar;
