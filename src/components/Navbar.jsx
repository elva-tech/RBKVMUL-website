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
        {/* <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            RBKVMUL
          </NavLink>
        </div> */}

        <img
          style={{ height: "55px", borderRadius: "5px" }}
          src="/images/puneet-rajumumar-nandini.jpeg"
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

    {/* SUB-PARENT: Management */}
    <div className="dropdown-sub">
      <span className="dropdown-sub-title">
        {t("nav.management", "Management")} ▸
      </span>
      <div className="dropdown-sub-menu">
        <NavLink to="/management/president-message" onClick={closeMenu}>
          {t("nav.managementDropdown.presidentMessage", "President's Message")}
        </NavLink>
        <NavLink to="/about/board" onClick={closeMenu}>
          {t("nav.managementDropdown.boardOfDirectors", "Board of Directors")}
        </NavLink>
      </div>
    </div>

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
              {/* <NavLink to="/products" onClick={closeMenu}>
                {t("products.filterAll", "All Products")}
              </NavLink> */}
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

          <NavLink to="/notifications" onClick={closeMenu}>
            {t("nav.notifications", "Notifications")}
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
              <NavLink to="/activities/human-resources" onClick={closeMenu}>
                {t("nav.aboutUsDropdown.humanResources")}
              </NavLink>
              <NavLink to="/activities/programs" onClick={closeMenu}>
               {t("nav.activitiesDropdown.fieldPrograms")}
              </NavLink>

            </div>
          </div>
      {/* UNION */}
<div className="dropdown">
  <span className="dropdown-title">{t("nav.union")}</span>
  <div className="dropdown-menu">
    <NavLink to="/union/profile" onClick={closeMenu}>{t("nav.unionDropdown.profile")}</NavLink>
    <NavLink to="/union/objectives" onClick={closeMenu}>{t("nav.unionDropdown.objectives")}</NavLink>
    <NavLink to="/union/quality-policy" onClick={closeMenu}>{t("nav.unionDropdown.qualityPolicy")}</NavLink>
    <NavLink to="/union/corporate" onClick={closeMenu}>{t("nav.unionDropdown.corporate")}</NavLink>
  </div>
</div>

{/* OPERATIONS */}
<div className="dropdown">
  <span className="dropdown-title">{t("nav.operations")}</span>
  <div className="dropdown-menu">
    <NavLink to="/operations/procurement" onClick={closeMenu}>{t("nav.operationsDropdown.procurement")}</NavLink>
    <NavLink to="/operations/dairy-engineering" onClick={closeMenu}>{t("nav.operationsDropdown.dairyEngineering")}</NavLink>
    <NavLink to="/operations/marketing" onClick={closeMenu}>{t("nav.operationsDropdown.marketing")}</NavLink>
    <NavLink to="/operations/finance" onClick={closeMenu}>{t("nav.operationsDropdown.finance")}</NavLink>
  </div>
</div>

{/* UNITS */}
<div className="dropdown">
  <span className="dropdown-title">{t("nav.units")}</span>
  <div className="dropdown-menu">
    <NavLink to="/unit/raichur-dairy" onClick={closeMenu}>{t("nav.unitsDropdown.raichur")}</NavLink>
    <NavLink to="/unit/budhagumpa-dairy" onClick={closeMenu}>{t("nav.unitsDropdown.budhagumpa")}</NavLink>
    <NavLink to="/unit/chilling-centers" onClick={closeMenu}>{t("nav.unitsDropdown.chilling")}</NavLink>
    <NavLink to="/unit/ballari-dairy" onClick={closeMenu}>{t("nav.unitsDropdown.ballari", "Ballari Dairy")}</NavLink>
  </div>
</div>

          <NavLink to="/contact" onClick={closeMenu}>
            {t("nav.contact")}
          </NavLink>
        </nav>
          <img
          style={{ height: "83px", borderRadius: "5px" }}
          src="/images/logo2.png"
          alt="logo"
        />
      </div>
    </header>
  );
}
