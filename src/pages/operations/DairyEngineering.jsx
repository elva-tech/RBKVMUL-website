import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function DairyEngineering() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.dairyEngineering.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.dairyEngineering.title")}</h1>
          <div className="about-banner">
        <img src="/union-operations/image-17.png" alt="Dairy Engineering" />
      </div>
        <p>{t("activitiesExtra.dairyEngineering.desc")}</p>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}