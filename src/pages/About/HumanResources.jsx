import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function HumanResources() {
  const { t } = useTranslation();

  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/founder-of-milk verghese Kurien Photo 2.jpg"
          alt="Human Resources Department"
        />
      </div>

      <div className="about-container">
        <h1>{t("humanResources.title")}</h1>

        {/* Objectives */}
        <div className="about-block">
          <h2>{t("humanResources.objectives.title")}</h2>
          <p>{t("humanResources.objectives.description")}</p>
        </div>

        {/* Main Functions */}
        <div className="about-block">
          <h2>{t("humanResources.functions.title")}</h2>

          <ul className="values-list">
            {t("humanResources.functions.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <p>{t("humanResources.functions.summary")}</p>
        </div>
      </div>

    </section>
  );
}
