import React from "react";
import { useTranslation } from "react-i18next";

const PresidentMessage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>{t("management.president.title")}</h1>

        <div className="about-block" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
          
          {/* President Image */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <img 
              src="/board/president-message.png" 
              alt="President" 
              style={{ 
                width: '100%', 
                borderRadius: '15px', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                border: '4px solid #fff'
              }} 
            />
            <h3 style={{ marginTop: '15px', color: '#0a4da2', textAlign: 'center' }}>
               {t("management.president.name")}
            </h3>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>President, RBKVMUL</p>
          </div>

          {/* Message Text */}
          <div style={{ flex: '2', minWidth: '300px' }}>
            <h2 style={{ color: '#0a4da2', marginBottom: '15px' }}>
              {t("management.president.messageTitle")}
            </h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '20px' }}>
              {t("management.president.description")}
            </p>
            
            <div style={{ background: '#f4f8fc', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #0a4da2' }}>
               <h4 style={{ marginBottom: '10px' }}>{t("management.president.visionTitle")}</h4>
               <p>{t("management.president.visionDesc")}</p>
            </div>
            
            <p style={{ marginTop: '30px', fontStyle: 'italic', fontWeight: '600', color: '#555' }}>
              "{t("management.president.closing")}"
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;