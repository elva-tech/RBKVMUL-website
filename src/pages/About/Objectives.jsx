import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Objectives() {
  const { t } = useTranslation();

  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/about-cow-2.b8e1a0b1.png"
          alt="Objectives"
        />
      </div>

      <div className="about-container">
        <h1>{t("objectives.title")}</h1>

        {/* Key Objectives */}
        <div className="about-block">
          <h2>{t("objectives.key.title")}</h2>

          <ul className="values-list">
            {t("objectives.key.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <p className="about-note">
            {t("objectives.key.note")}
          </p>
        </div>

        {/* Quality & Food Safety */}
        <div className="about-block">
          <h2>{t("objectives.quality.title")}</h2>

          <ul className="values-list">
            {t("objectives.quality.list", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>

    </section>
  );
}
