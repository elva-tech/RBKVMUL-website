import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function AnimalHealthServices() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-banner">
        <img src="/activities/Animal _2.jpg" alt="Animal Health Services" />
      </div>

      <div className="about-container">
        <h1>{t("animalHealth.title")}</h1>

        <div className="about-block">
          <p>{t("animalHealth.intro")}</p>
        </div>

        <div className="about-block">
          <h2>{t("animalHealth.coreTitle")}</h2>
          <p>{t("animalHealth.coreP1")}</p>
          <p>{t("animalHealth.coreP2")}</p>
        </div>

        <div className="about-banner">
          <img src="/activities/Animal -1.png" alt="Animal Health" />
        </div>

        <div className="about-block">
          <h2>{t("animalHealth.bioTitle")}</h2>
          <ul className="values-list">
            {t("animalHealth.bioPoints", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
