import React from "react";
import { useTranslation } from "react-i18next";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/pages.css";

export default function Cultural() {
  const { t } = useTranslation();

  // 1. Updated to arrays to support the carousel
  const districtImages = {
    ballari: [
      "kanaka-d1.png", 
      "Daroji Sloth Bear Sanctuary.png",
      "kumarswamy-temple.png", 
    ],
    koppal: [
      "Gavi-sid.jpg",
      "mahadeva-temple.png",
      "navlinga-temple.png"

    ], // Add your new images to these arrays as you get them
    raichur: [
      "hatti.png",
      "raichur-fort.png",
      "maski-Ashokan.png"
    ],
    vijayanagara: [
      "hampi.png",
    "TB-dam.png",
  "mylara.png"]
  };

  const districtKeys = Object.keys(districtImages);

  return (
    <section className="culture-page-wrapper">
      <div className="culture-container">
        <h1 className="culture-main-title">{t("cultural.title")}</h1>

        {districtKeys.map((key, dIndex) => {
          const sites = t(`cultural.${key}.sites`, { returnObjects: true });
          const images = districtImages[key];

          return (
            <div key={key} className="district-section">
              <h2 className="district-header">{t(`cultural.${key}.title`)}</h2>

              <div className={`culture-card ${dIndex % 2 !== 0 ? "reverse" : ""}`}>
                
                {/* Text Content */}
                <div className="culture-text-content">
                  {Array.isArray(sites) &&
                    sites.map((site, sIndex) => (
                      <div key={sIndex} className="site-detail">
                        <h4>{site.name}</h4>
                        <p className="site-info-text">{site.info}</p>
                      </div>
                    ))}
                </div>

                {/* Swiper Image Carousel */}
                <div className="culture-image-wrapper">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="culture-swiper"
                  >
                    {/* If district has 3 images, it shows them. 
                        If it has 1, we repeat it 3 times for now as requested. */}
                    {(images.length >= 3 ? images : [images[0], images[0], images[0]]).map((imgName, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={`/images/${imgName}`}
                          alt={`${key} ${i}`}
                          className="culture-img"
                        />
                        <div className="image-overlay-label">
                           {key.toUpperCase()} HERITAGE
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}