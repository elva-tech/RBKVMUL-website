import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Procurement() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.procurement.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.procurement.title")}</h1>
          <div className="about-banner">
        <img src="/activities/Animal _2.jpg" alt="Animal Health Services" />
      </div>
        <p>{t("activitiesExtra.procurement.desc")}</p>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}