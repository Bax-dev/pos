import React, { useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import { initNavbarToggle } from "../utils/navbarToggle"; // adjust path if needed

const Navbar = () => {
  useEffect(() => {
    initNavbarToggle();
  }, []);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="index.html" className="logo">
                PayStock
              </a>

              {/* Main Nav Links */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#welcome" className="menu-item">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about" className="menu-item">
                    About
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#features" className="menu-item">
                    Features
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact-us" className="menu-item">
                    Contact Us
                  </a>
                </li>
                {/* Use Link from react-router-dom instead of <a> */}
                <li className="scroll-to-section">
                  <Link to="/register" className="menu-item">
                    Register
                  </Link>
                </li>

                <li className="scroll-to-section">
                  <Link to="/login" className="menu-item">
                    Login
                  </Link>
                </li>
              </ul>

              {/* Menu Trigger for Mobile */}
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
