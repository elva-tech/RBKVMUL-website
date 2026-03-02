import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Marketing() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.marketing.points", { returnObjects: true });

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("activitiesExtra.marketing.title")}</h1>
          <div className="about-banner">
        <img src="/homeScreen-imgs/marketing.png" alt="etingarki" />
      </div>
        <p>{t("activitiesExtra.marketing.desc")}</p>

        <ul className="values-list">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </section>
  );
}