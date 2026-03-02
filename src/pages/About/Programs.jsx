import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Programs = () => {
  const { t } = useTranslation();
  const programs = t("programs.list", { returnObjects: true }) || [];

  const programImages = [
    ["/union-operations/image-1.png"],
    ["/union-operations/image-3.png"],
    ["/union-operations/image-14.png"],
    // ["/union-operations/image-15.png"],
    ["/union-operations/image-5.png"],
    ["/union-operations/image-6.png"],
    ["/union-operations/image-4.png"],
    ["/union-operations/image-7.png"],
    ["/union-operations/image-14.png"],
    ["/union-operations/image-13.png"],
    ["/union-operations/image-3.png"],
    ["/union-operations/image-13.png"],

  ];

  const renderSwiper = (images) => (
    <div style={{ margin: "20px 0", borderRadius: "10px", overflow: "hidden" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Program ${i}`}
              style={{ width: "100%", height: "450px", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>{t("programs.title")}</h1>

        {programs.map((item, index) => (
          <div key={index} className="about-block">
            <h2 style={{ color: "#0a4da2" }}>{item.title}</h2>
            <p style={{ fontWeight: "500" }}>{item.location}</p>
            <p>{item.description}</p>

            {programImages[index] && renderSwiper(programImages[index])}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;