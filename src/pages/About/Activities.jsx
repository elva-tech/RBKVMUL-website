import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Activities() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-banner">
        <img src="/images/about-cow-2.b8e1a0b1.png" alt="Activities" />
      </div>

      <div className="about-container">
        <h1>{t("activities.title")}</h1>

        <div className="about-block">
          <p>{t("activities.procurementIntro")}</p>
          <p>{t("activities.breakdown")}</p>

          <h2>{t("activities.sourcing.title")}</h2>
          <ul className="values-list">
            {t("activities.sourcing.points", { returnObjects: true }).map(
              (p, i) => <li key={i}>{p}</li>
            )}
          </ul>
        </div>

        <div className="about-block">
          <h2>{t("activities.testing.title")}</h2>
          <ul className="values-list">
            {t("activities.testing.points", { returnObjects: true }).map(
              (p, i) => <li key={i}>{p}</li>
            )}
          </ul>
        </div>

        <div className="about-block">
          <h2>{t("activities.transport.title")}</h2>
          <p>{t("activities.transport.p1")}</p>
          <p>{t("activities.transport.p2")}</p>
        </div>

        <div className="about-block">
          <h2>{t("activities.payment.title")}</h2>
          {t("activities.payment.points", { returnObjects: true }).map(
            (p, i) => <p key={i}>{p}</p>
          )}
        </div>

        <div className="about-block">
          <h2>{t("activities.goals.title")}</h2>
          {t("activities.goals.points", { returnObjects: true }).map(
            (p, i) => <p key={i}>{p}</p>
          )}
          <p>{t("activities.goals.summary")}</p>
        </div>
      </div>
    </section>
  );
}
