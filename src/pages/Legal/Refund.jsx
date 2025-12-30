import "../../styles/pages.css";
import { useTranslation } from "react-i18next";

export default function Refund() {
  const { t } = useTranslation();

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t("refund.title")}</h1>

        {/* Cancellation & Returns */}
        <div className="about-block">
          <h2>{t("refund.cancellation_returns.title")}</h2>
          <p>{t("refund.cancellation_returns.paragraph1")}</p>
          <p>{t("refund.cancellation_returns.paragraph2")}</p>
          <p>{t("refund.cancellation_returns.paragraph3")}</p>
          <p>{t("refund.cancellation_returns.paragraph4")}</p>
        </div>

        {/* Processing Time */}
        <div className="about-block">
          <h2>{t("refund.processing_time.title")}</h2>
          <p>{t("refund.processing_time.paragraph1")}</p>
          <p>{t("refund.processing_time.paragraph2")}</p>
          <p>
            {t("refund.processing_time.contactText")}{" "}
            <strong>{t("refund.processing_time.websiteLabel")}</strong>{" "}
            <a
              href={t("refund.processing_time.websiteUrl")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("refund.processing_time.websiteUrl")}
            </a>
          </p>
        </div>

        {/* Exclusions */}
        <div className="about-block">
          <h2>{t("refund.exclusions.title")}</h2>
          <p>{t("refund.exclusions.paragraph1")}</p>
          <p>{t("refund.exclusions.paragraph2")}</p>
          <p>{t("refund.exclusions.paragraph3")}</p>
        </div>

        {/* Cancellation Policy */}
        <div className="about-block">
          <h2>{t("refund.cancellation_policy.title")}</h2>
          <p>{t("refund.cancellation_policy.paragraph1")}</p>
        </div>

        {/* Out of Stock */}
        <div className="about-block">
          <h2>{t("refund.out_of_stock.title")}</h2>
          <p>{t("refund.out_of_stock.paragraph1")}</p>
        </div>

        {/* Payments */}
        <div className="about-block">
          <h2>{t("refund.payments.title")}</h2>
          <p>{t("refund.payments.paragraph1")}</p>
          <ul className="values-list">
            <li>{t("refund.payments.list.credit_cards")}</li>
            <li>{t("refund.payments.list.debit_cards")}</li>
            <li>{t("refund.payments.list.net_banking")}</li>
            <li>{t("refund.payments.list.cash_on_delivery")}</li>
            <li>{t("refund.payments.list.upi")}</li>
            <li>{t("refund.payments.list.bank_transfer")}</li>
          </ul>
          <p>{t("refund.payments.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}