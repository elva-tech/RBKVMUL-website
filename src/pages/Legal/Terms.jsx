import "../../styles/pages.css";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("terms.title")}</h1>

        {/* Introduction */}
        <div className="about-block">
          <p>{t("terms.introduction.paragraph")}</p>
        </div>

        {/* Contents Posted on Site */}
        <div className="about-block">
          <h2>{t("terms.contents_posted.title")}</h2>
          <p>{t("terms.contents_posted.paragraph")}</p>
        </div>

        {/* Conduct on Site */}
        <div className="about-block">
          <h2>{t("terms.conduct.title")}</h2>
          <p>{t("terms.conduct.paragraph1")}</p>
          <p>{t("terms.conduct.paragraph2")}</p>
          <p>{t("terms.conduct.paragraph3")}</p>
          <p>{t("terms.conduct.paragraph4")}</p>
          <p>{t("terms.conduct.paragraph5")}</p>
          <p>{t("terms.conduct.paragraph6")}</p>
          <p>{t("terms.conduct.paragraph7")}</p>
          <p>{t("terms.conduct.paragraph8")}</p>
          <p>{t("terms.conduct.paragraph9")}</p>
        </div>

        {/* Links */}
        <div className="about-block">
          <h2>{t("terms.links.title")}</h2>
          <p>{t("terms.links.paragraph")}</p>
        </div>

        {/* Your Account */}
        <div className="about-block">
          <h2>{t("terms.your_account.title")}</h2>
          <p>{t("terms.your_account.paragraph")}</p>
        </div>

        {/* Privacy */}
        <div className="about-block">
          <h2>{t("terms.privacy.title")}</h2>
          <p>{t("terms.privacy.paragraph")}</p>
        </div>

        {/* Mandatory declaration */}
        <div className="about-block">
          <h2>{t("terms.mandatory_declaration.title")}</h2>
          <p>{t("terms.mandatory_declaration.paragraph")}</p>
        </div>

        {/* Disclaimer of Warranties and Liability */}
        <div className="about-block">
          <h2>{t("terms.disclaimer.title")}</h2>
          <p>{t("terms.disclaimer.paragraph1")}</p>
          <p>{t("terms.disclaimer.paragraph2")}</p>
          <p>{t("terms.disclaimer.paragraph3")}</p>
        </div>

        {/* Applicable Laws */}
        <div className="about-block">
          <h2>{t("terms.applicable_laws.title")}</h2>
          <p>{t("terms.applicable_laws.paragraph")}</p>
        </div>

        {/* Sale in India Only */}
        <div className="about-block">
          <h2>{t("terms.sale_in_india.title")}</h2>
          <p>{t("terms.sale_in_india.paragraph")}</p>
        </div>

        {/* Trademark, Copyright and Restriction */}
        <div className="about-block">
          <h2>{t("terms.trademark_copyright.title")}</h2>
          <p>{t("terms.trademark_copyright.paragraph")}</p>
        </div>

        {/* Risk of loss */}
        <div className="about-block">
          <h2>{t("terms.risk_of_loss.title")}</h2>
          <p>{t("terms.risk_of_loss.paragraph")}</p>
        </div>

        {/* Product Description */}
        <div className="about-block">
          <h2>{t("terms.product_description.title")}</h2>
          <p>{t("terms.product_description.paragraph")}</p>
        </div>

        {/* Cancellation of order */}
        <div className="about-block">
          <h2>{t("terms.cancellation_of_order.title")}</h2>
          <p>{t("terms.cancellation_of_order.paragraph")}</p>
        </div>
      </div>
    </section>
  );
}