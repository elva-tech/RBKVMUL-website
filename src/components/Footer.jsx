import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/pages.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-col">
          <h4>{t("footer.quickLinks")}</h4>
          <ul>
            <li><Link to="/">{t("footer.links.home")}</Link></li>
            <li><Link to="/about/company-profile">{t("footer.links.companyProfile")}</Link></li>
            <li><Link to="/products">{t("footer.links.products")}</Link></li>
            <li><Link to="/news">{t("footer.links.newsEvents")}</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div className="footer-col">
          <h4>{t("footer.addressTitle")}</h4>
          <p>
            {t("footer.address.line1")}<br /><br />
            {t("footer.address.line2")}<br />
            {t("footer.address.line3")}
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>{t("footer.contactTitle")}</h4>
          <p>
            {t("footer.contact.phoneLabel")} {t("footer.contact.phone")}<br />
            {t("footer.contact.tollFreeLabel")} {t("footer.contact.tollFree")}
          </p>
          <p>{t("footer.contact.email")}</p>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>{t("footer.legalTitle")}</h4>
          <ul>
            <li><Link to="/privacy-policy">{t("footer.links.privacyPolicy")}</Link></li>
            <li><Link to="/terms">{t("footer.links.termsConditions")}</Link></li>
            <li><Link to="/refund-policy">{t("footer.links.refundPolicy")}</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {t("footer.address.line1")}. {t("footer.copyright")}
        </p>

        <br />

        <div className="developer-credit">
          <a href="https://www.elvatech.in/" target="_blank" rel="noopener noreferrer">
            <span style={{ fontSize: "12px" }}>
              {t("footer.designedBy")}
            </span>
            <img
              className="dev-logo-video"
              src="/assets/Elva.svg"
              alt="Elva Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
