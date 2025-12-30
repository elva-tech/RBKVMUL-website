import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProductGroup, setOpenProductGroup] = useState(null);

  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenProductGroup(null);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "kn" : "en");
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

        <img
          style={{ height: "60px", borderRadius: "5px" }}
          src="/images/puneet-rajumumar-nandini.jpeg"
          alt="logo"
        />
        <img
          style={{ height: "53px", borderRadius: "5px" }}
          src="/images/logo.png"
          alt="logo"
        />

        {/* Language Toggle */}
       <button
       className="lang-toggle"
  onClick={() => {
    i18n.changeLanguage(i18n.language === "en" ? "ka" : "en");
  }}
>
  {i18n.language === "en" ? "ಕನ್ನಡ " : "English"}
</button>


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
            {t("nav.home")}
          </NavLink>

          {/* ABOUT */}
          <div className="dropdown">
            <span className="dropdown-title">
              {t("nav.aboutUs")}
            </span>
            <div className="dropdown-menu">
              <NavLink to="/about/company-profile" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.companyProfile")}
              </NavLink>
              <NavLink to="/about/mission-vision" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.missionVision")}
              </NavLink>
              <NavLink to="/about/board" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.boardOfDirectors")}
              </NavLink>
              <NavLink to="/about/human-resources" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.humanResources")}
              </NavLink>
              <NavLink to="/about/objectives" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.objectives")}
              </NavLink>
              <NavLink to="/about/culture" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.culturalHeritage")}
              </NavLink>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="dropdown">
            <span className="dropdown-title">
              {t("nav.products")}
            </span>
            <div className="dropdown-menu">
              <NavLink to="/products" onClick={closeMenu}>
                {t("products.filterAll", "All Products")}
              </NavLink>
              <NavLink to="/products/kmf" onClick={closeMenu}>
                {t("products.filterKMF", "KMF Products")}
              </NavLink>
              <NavLink to="/products/rbkvmul" onClick={closeMenu}>
                {t("products.filterRBKVMUL", "RBKVMUL Products")}
              </NavLink>
            </div>
          </div>

          <NavLink to="/news" onClick={closeMenu}>
            {t("nav.news")}
          </NavLink>

          {/* ACTIVITIES */}
          <div className="dropdown">
            <span className="dropdown-title">
              {t("nav.activities")}
            </span>
            <div className="dropdown-menu">
              <NavLink to="/about/activities" onClick={closeMenu}>
                {t("nav.activitiesDropdown.activities")}
              </NavLink>
              <NavLink to="/about/animal-health-services" onClick={closeMenu}>
                {t("nav.activitiesDropdown.animalHealthServices")}
              </NavLink>
              <NavLink to="/about/artificial-insemination" onClick={closeMenu}>
                {t("nav.activitiesDropdown.artificialInsemination")}
              </NavLink>
              <NavLink to="/about/fodder-activity" onClick={closeMenu}>
                {t("nav.activitiesDropdown.fodderActivity")}
              </NavLink>
              <NavLink to="/about/step-processing" onClick={closeMenu}>
                {t("nav.activitiesDropdown.stepProcessing")}
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" onClick={closeMenu}>
            {t("nav.contact")}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
