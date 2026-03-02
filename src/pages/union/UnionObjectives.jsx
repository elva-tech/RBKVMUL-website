import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UnionObjectives = () => {
  const { t } = useTranslation();
  const points = t("unionObjectives.points", { returnObjects: true }) || [];

  return (
    <div className="about-page">
      {/* Top Banner using your existing CSS class */}
      <div className="about-banner">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img
              src="/union-operations/union-objectives.png"
              height="300px"
              alt="Profile Banner"
              style={{ width: '100%', objectFit: 'contain' }}
            />
          </SwiperSlide>
          {/* <SwiperSlide><img src="/images/obj-banner-2.jpg" alt="Banner 2" /></SwiperSlide> */}
        </Swiper>
      </div>

      <div className="about-container">
        <h1>{t("unionObjectives.title")}</h1>

        <div className="about-block">
          <ul className="values-list">
            {points.map((point, index) => (
              <React.Fragment key={index}>
                <li style={{ marginBottom: "12px", fontSize: "15px" }}>{point}</li>

                {/* Swiper insertion after 5th point */}
                {index === 4 && (
                  <div style={{ margin: "40px 0", borderRadius: "8px", overflow: "hidden" }}>
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 4000 }}
                    >
                      {/* <SwiperSlide>
                        <img
                          src="/union-operations/union-objectives.png"
                          height="300px"
                          alt="Profile Banner"
                          style={{ width: '100%', objectFit: 'contain' }}
                        />
                      </SwiperSlide> */}
                      {/* <SwiperSlide>
                        <img src="/images/obj-mid-2.jpg" style={{ width: "100%", height: "350px", objectFit: "cover" }} alt="Work 2" />
                      </SwiperSlide> */}
                    </Swiper>
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UnionObjectives;