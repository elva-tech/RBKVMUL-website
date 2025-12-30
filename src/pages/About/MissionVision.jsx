import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/Vision_and_Mission_min.png"
          alt="Mission and Vision"
        />
      </div>

      <div className="about-container">
        <h1>{t("missionVision.title")}</h1>

        {/* Mission */}
        <div className="about-block">
          <h2>{t("missionVision.mission.title")}</h2>

          <ul>
            {t("missionVision.mission.points", { returnObjects: true }).map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>

          <p className="about-note">
            {t("missionVision.mission.note")}
          </p>
        </div>

        {/* Values */}
        <div className="about-block">
          <h2>{t("missionVision.values.title")}</h2>
          <ul className="values-list">
            {t("missionVision.values.list", { returnObjects: true }).map(
              (value, index) => (
                <li key={index}>{value}</li>
              )
            )}
          </ul>
        </div>
      </div>

    </section>
  );
}
