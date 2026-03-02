import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

export default function RaichurDairy() {
  const { t } = useTranslation();
  const points = t("activitiesExtra.units.raichur.points", { returnObjects: true }) || [];

  return (
    <div className="about-page">
      <div className="about-banner">
        <img 
          src="/union-operations/img-16.jpeg" 
          alt="raichur dairy" 
          style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain', backgroundColor: '#f9f9f9' }} 
        />
      </div>

      <div className="about-container">
        <h1>{t("activitiesExtra.units.raichur.title")}</h1>
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