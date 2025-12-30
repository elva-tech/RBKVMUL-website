import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function STEPAndProcessing() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-banner">
        <img src="/activities/Step-1.jpg" alt="STEP Activities" />
      </div>

      <div className="about-container">
        <h1>{t("step.title")}</h1>

        <div className="about-block">
          <h2>{t("step.stepTitle")}</h2>
          <p>{t("step.stepDesc")}</p>
          <ul className="values-list">
            {t("step.stepPoints", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>

        <div className="about-banner">
          <img src="/activities/Step-2.jpg" alt="STEP Processing" />
        </div>

        <div className="about-block">
          <h2>{t("step.processingTitle")}</h2>
          <p>{t("step.processingDesc")}</p>

          <h3>Core Processing Steps</h3>
          <ul className="values-list">
            {t("step.coreSteps", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>

          <h3>Product-Specific Processing</h3>
          <ul className="values-list">
            {t("step.productSteps", { returnObjects: true }).map(
              (point, i) => <li key={i}>{point}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
