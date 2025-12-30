import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function CompanyProfile() {
  const { t } = useTranslation();

  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/Bellary Dairy Photo.jpg"
          alt="Company Profile"
        />
      </div>

      <div className="about-container">
        <h1>{t("companyProfile.title")}</h1>

        <div className="about-block">
          <p>{t("companyProfile.description")}</p>
        </div>
      </div>

    </section>
  );
}
