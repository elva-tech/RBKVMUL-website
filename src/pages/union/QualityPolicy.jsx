import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../styles/pages.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const QualityPolicy = () => {
  const { t } = useTranslation();

  const renderSwiper = (images) => (
    <div className="about-banner" style={{ margin: '20px 0' }}>
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]} 
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 4000 }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img 
              src={img} 
              alt={`Slide ${i}`} 
              style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain', backgroundColor: '#f9f9f9' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>{t("qualityPolicy.title")}</h1>
        
        <div className="about-block" style={{textAlign: 'center', backgroundColor: '#f0f4f8', padding: '30px', borderRadius: '12px', marginBottom: '30px'}}>
          <h2 style={{fontStyle: 'italic', color: '#0a4da2', margin: 0}}>{t("qualityPolicy.motto")}</h2>
        </div>

        <div className="about-block">
          <p>{t("qualityPolicy.intro")}</p>
        </div>

        {renderSwiper(["/union-operations/image-12.png"])}

        <div className="about-block">
          <h2>{t("qualityPolicy.qcTitle")}</h2>
          <p>{t("qualityPolicy.qcDesc")}</p>
        </div>

        <div className="about-block">
          <h2>{t("qualityPolicy.chemicalTitle")}</h2>
          <p>{t("qualityPolicy.chemicalDesc")}</p>
          <p className="about-note" style={{marginTop: '10px'}}><strong>{t("qualityPolicy.sampling")}</strong></p>
        </div>

        {renderSwiper(["/union-operations/image-11.png"])}

        <div className="about-block">
          <h2>{t("qualityPolicy.platformTitle")}</h2>
          <ul className="values-list">
            <li>{t("qualityPolicy.organo")}</li>
            <li>{t("qualityPolicy.cob")}</li>
            <li>{t("qualityPolicy.sediment")}</li>
            <li>{t("qualityPolicy.alcohol")}</li>
            <li>{t("qualityPolicy.acidity")}</li>
            <li>{t("qualityPolicy.adulterants")}</li>
            <li>{t("qualityPolicy.fat")}</li>
            <li style={{fontWeight: 'bold', color: '#0a4da2'}}>{t("qualityPolicy.snf")}</li>
          </ul>
        </div>

        {renderSwiper(["/union-operations/image-11.png", "/union-operations/image-12.png"])}

        <div className="about-block">
          <h2>{t("qualityPolicy.microTitle")}</h2>
          <ul className="values-list">
            <li>{t("qualityPolicy.mbrt")}</li>
            <li>{t("qualityPolicy.phosphatase")}</li>
            <li>{t("qualityPolicy.spc")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QualityPolicy;