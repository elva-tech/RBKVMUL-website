import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function ArtificialInsemination() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      {/* banner */}
      <div className="about-banner">
        <img src="/activities/AI -1.jpg" alt="Artificial Insemination" />
      </div>

      <div className="about-container">
        <h1>{t("ai.title")}</h1>

        <div className="about-block">
          <p>{t("ai.intro")}</p>
        </div>

        {/* <div className="about-block">
          <h2>{t("ai.processTitle")}</h2>
          <p>{t("ai.processDesc")}</p>
        </div> */}

        <div className="about-block">
          <h2>{t("ai.semenTitle")}</h2>
          <ul className="values-list">
            {t("ai.semenPoints", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
