import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function FodderActivity() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-banner">
        <img src="/activities/Fooder-4.jpg" alt="Fodder Activity" />
      </div>

      <div className="about-container">
        <h1>{t("fodder.title")}</h1>

        <div className="about-block">
          <p>{t("fodder.intro")}</p>
        </div>

        <div className="about-block">
          <h2>{t("fodder.traditionalTitle")}</h2>
          <ul className="values-list">
            {t("fodder.traditionalPoints", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>

        <div className="about-banner">
          <img src="/activities/Fooder-3.jpg" alt="Fodder" />
        </div>

        <div className="about-block">
          <h2>{t("fodder.conservationTitle")}</h2>
          <ul className="values-list">
            {t("fodder.conservationPoints", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
