import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Finance() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.finance.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.finance.title")}</h1>
          <div className="about-banner">
        <img src="/union-operations/finance.png" alt="Finance" />
      </div>
        <p>{t("activitiesExtra.finance.desc")}</p>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}