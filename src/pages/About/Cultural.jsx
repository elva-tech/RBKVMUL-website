import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function Cultural() {
  const { t } = useTranslation();

  return (
    <section className="culture-page-wrapper">
      <div className="culture-container">
        <h1 className="culture-main-title">
          {t("cultural.title")}
        </h1>

        {/* Ballari */}
        <div className="culture-card">
          <div className="culture-text-content">
            <h3>{t("cultural.ballari.title")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t("cultural.ballari.text")
              }}
            />
          </div>
          <div className="culture-image-wrapper">
            <img
              className="culture-img"
              src="/images/kanaka-d1.png"
              alt="Kanaka Durgamma Temple"
            />
          </div>
        </div>

        {/* Koppal */}
        <div className="culture-card reverse">
          <div className="culture-text-content">
            <h3>{t("cultural.koppal.title")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t("cultural.koppal.text")
              }}
            />
          </div>
          <div className="culture-image-wrapper">
            <img
              className="culture-img"
              src="/images/Gavi-sid.jpg"
              alt="Gavi Siddeshwara Matha"
            />
          </div>
        </div>

        {/* Raichur */}
        <div className="culture-card">
          <div className="culture-text-content">
            <h3>{t("cultural.raichur.title")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t("cultural.raichur.text")
              }}
            />
          </div>
          <div className="culture-image-wrapper">
            <img
              className="culture-img"
              src="/images/hatti.png"
              alt="Hatti Gold Mines"
            />
          </div>
        </div>

        {/* Vijayanagara */}
        <div className="culture-card reverse">
          <div className="culture-text-content">
            <h3>{t("cultural.vijayanagara.title")}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: t("cultural.vijayanagara.text")
              }}
            />
          </div>
          <div className="culture-image-wrapper">
            <img
              className="culture-img"
              src="/images/hampi.png"
              alt="Hampi"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
