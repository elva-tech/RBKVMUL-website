import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function ChillingCenters() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.units.raichurCenter.points", { returnObjects: true }) || [];

  return (
    <div className="about-page">
      <div className="about-banner">
        <img src="/union-operations/image.png" alt="chilling center" style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      <div className="about-container">
        <h1>{t("activitiesExtra.units.raichurCenter.title")}</h1>

        <div className="about-block">
          <ul className="values-list">
            {points.map((p, i) => (
              <li key={i} style={{ marginBottom: "12px", fontSize: "15px" }}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}