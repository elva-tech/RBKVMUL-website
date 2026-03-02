import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UnionProfile = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-banner">
        <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination autoplay={{ delay: 3000 }}>
          <SwiperSlide>
  <img 
    src="/union-operations/union-profile.png" 
    height="300px" 
    alt="Profile Banner" 
    style={{ width: '100%', objectFit: 'contain' }} 
  />
</SwiperSlide>
          
        </Swiper>
      </div>

      <div className="about-container">
        <h1>{t("unionProfile.title")}</h1>
        
        <div className="about-block">
          <p>{t("unionProfile.para1")}</p>
          
          {/* <div style={{ margin: "30px 0", borderRadius: "8px", overflow: "hidden" }}>
             <Swiper modules={[Pagination, Autoplay]} pagination autoplay={{ delay: 4000 }}>
                <SwiperSlide><img src="/images/plant-1.jpg" style={{ width: "100%", height: "350px", objectFit: "cover" }} alt="Plant" /></SwiperSlide>
             </Swiper>
          </div> */}

          <p>{t("unionProfile.para2")}</p>
          <p>{t("unionProfile.para3")}</p>
        </div>
      </div>
    </div>
  );
};

export default UnionProfile;