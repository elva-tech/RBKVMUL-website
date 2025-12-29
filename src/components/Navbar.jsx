import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProductGroup, setOpenProductGroup] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenProductGroup(null);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            RBKVMUL
          </NavLink>
        </div>
        <img style={{ height: "60px", borderRadius: "5px" }} src="/images/puneet-rajumumar-nandini.jpeg" alt="logo" srcset="" />
        <img style={{ height: "53px", borderRadius: "5px" }} src="/images/logo.png" alt="logo" srcset="" />

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        {/* Links */}
        <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          {/* ABOUT */}
          <div className="dropdown">
            <span className="dropdown-title">About Us</span>
            <div className="dropdown-menu">
              <NavLink to="/about/company-profile" onClick={closeMenu}>Company Profile</NavLink>
              <NavLink to="/about/mission-vision" onClick={closeMenu}>Mission & Vision</NavLink>
              <NavLink to="/about/board" onClick={closeMenu}>Board of Directors</NavLink>
              {/* <NavLink to="/about/section-heads" onClick={closeMenu}>Section Heads</NavLink> */}
              <NavLink to="/about/human-resources" onClick={closeMenu}>Human Resources</NavLink>
              <NavLink to="/about/objectives" onClick={closeMenu}>Objectives</NavLink>
              {/* <NavLink to="/about/quality-policies" onClick={closeMenu}>Quality Policies</NavLink> */}
              {/* <NavLink to="/about/milestones" onClick={closeMenu}>Milestones</NavLink> */}
              <NavLink to="/about/culture" onClick={closeMenu}>Cultural Heritage</NavLink>

            </div>
          </div>


          {/* PRODUCTS */}
          <div className="dropdown">
            <span className="dropdown-title">Products</span>
            <div className="dropdown-menu">

              <NavLink to="/products" onClick={closeMenu}>
                All Products
              </NavLink>

              <NavLink to="/products/kmf" onClick={closeMenu}>
                KMF Products
              </NavLink>

               <NavLink to="/products/rbkvmul" onClick={closeMenu}>
                RBKVMUL Products
              </NavLink>
            </div>
          </div>

          {/* <NavLink to="/units" onClick={closeMenu}>Units</NavLink> */}
          <NavLink to="/news" onClick={closeMenu}>News</NavLink>
          {/* <NavLink to="/notifications" onClick={closeMenu}>Notifications</NavLink> */}

         {/* ACTIVITIES */}
          <div className="dropdown">
            <span className="dropdownititle">Activities</span>
            <div className="dropdown-menu">
              <NavLink to="/about/activities" onClick={closeMenu}>Activities</NavLink>
              <NavLink to="/about/animal-health-services" onClick={closeMenu}>Animal Health</NavLink>
              <NavLink to="/about/artificial-insemination" onClick={closeMenu}>Artificial Insemination Emergency activities</NavLink>
              <NavLink to="/about/fodder-activity" onClick={closeMenu}>Fooder Activity</NavLink>
              <NavLink to="/about/step-processing" onClick={closeMenu}>Step & Production Activities</NavLink>

            </div>
          </div>

          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

         
        </nav>
      </div>
    </header>
  );
}
