import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <br />

      <h1 style={{ textAlign: "center" }}>
        {t("contact.title")}
      </h1>

      <h4 style={{ textAlign: "center" }}>
        {t("contact.subtitle")}
      </h4>

      <div style={{ textAlign: "center" }}>
        <img
          src="/images/founder-of-milk verghese Kurien Photo.png"
          alt={t("contact.title")}
          className="responsive-img"
        />
      </div>
    </div>
  );
};

export default Contact;
