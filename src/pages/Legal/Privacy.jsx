import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("privacy.title")}</h1>

        <div className="about-block">
          <h2>{t("privacy.overview.title")}</h2>
          <p>{t("privacy.overview.text")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.children.title")}</h2>
          <p>{t("privacy.children.text")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.personalInfo.title")}</h2>
          <p>{t("privacy.personalInfo.text")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.location.title")}</h2>
          <p>{t("privacy.location.para1")}</p>
          <p>{t("privacy.location.para2")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.advertising.title")}</h2>
          <p>{t("privacy.advertising.text")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.sharing.title")}</h2>
          <p>{t("privacy.sharing.para1")}</p>
          <p>{t("privacy.sharing.para2")}</p>
          <p>{t("privacy.sharing.para3")}</p>
          <p>{t("privacy.sharing.para4")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.support.title")}</h2>
          <p>{t("privacy.support.text")}</p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.contact.title")}</h2>
          <p>{t("privacy.contact.text")}</p>
          <p>
            <strong>{t("privacy.contact.emailLabel")}</strong>{" "}
            {t("privacy.contact.email")}
          </p>
        </div>

        <div className="about-block">
          <h2>{t("privacy.changes.title")}</h2>
          <p>{t("privacy.changes.text")}</p>
        </div>
      </div>
    </section>
  );
}
