import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function RaichurDairy() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.units.raichur.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.units.raichur.title")}</h1>
          <div className="about-banner">
        <img src="/union-operations/img-16.jpeg" alt="raichur dairy" />
      </div>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}