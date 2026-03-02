import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function BudhagumpaDairy() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.units.budhagumpa.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.units.budhagumpa.title")}</h1>
          <div className="about-banner">
        <img src="/union-operations/union-objectives.png" alt="budhgumpa dairy" />
      </div>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}