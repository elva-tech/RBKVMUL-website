import { useTranslation } from "react-i18next";
import "../styles/home.css";
import { FaCheckCircle, FaUsers, FaIndustry } from "react-icons/fa";

export default function Highlights() {
  const { t } = useTranslation();

  return (
    <section className="highlights">
      <div className="highlights-container">

        <div className="highlight-card animate-slide-up">
          <div className="highlight-icon">
            <FaCheckCircle />
          </div>
          <h3>{t("highlights.quality.title")}</h3>
          <p>{t("highlights.quality.description")}</p>
        </div>

        <div className="highlight-card animate-slide-up delay-1">
          <div className="highlight-icon">
            <FaUsers />
          </div>
          <h3>{t("highlights.farmers.title")}</h3>
          <p>{t("highlights.farmers.description")}</p>
        </div>

        <div className="highlight-card animate-slide-up delay-2">
          <div className="highlight-icon">
            <FaIndustry />
          </div>
          <h3>{t("highlights.processing.title")}</h3>
          <p>{t("highlights.processing.description")}</p>
        </div>

      </div>
    </section>
  );
}
