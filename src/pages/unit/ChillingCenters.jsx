import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function ChillingCenters() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.units.raichurCenter.points", { returnObjects: true });

  return (
    <section className="about-page">
        
      <div className="about-container">
        <h1>{t("activitiesExtra.units.raichurCenter.title")}</h1>
  <div className="about-banner">
        <img src="/union-operations/image.png" alt="chilling center" />
      </div>
      <ul className="values-list">
  {points.map((p, i) => (
    <li key={i}>{p}</li>
  ))}
</ul>
      </div>
    </section>
  );
}