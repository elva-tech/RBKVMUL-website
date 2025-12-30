import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function AboutOverview() {
  const { t } = useTranslation();

  return (
    <section className="about-overview">
      <div className="about-container">

        {/* Top image */}
        <div className="about-banner">
          <img
            src="/images/milk-right.6710e7e5.png"
            alt="Dairy Operations"
          />
        </div>

        <h1>{t("aboutOverview.title")}</h1>

        <p>{t("aboutOverview.para1")}</p>
        <p>{t("aboutOverview.para2")}</p>
        <p>{t("aboutOverview.para3")}</p>
        <p>{t("aboutOverview.para4")}</p>

      </div>
    </section>
  );
}
