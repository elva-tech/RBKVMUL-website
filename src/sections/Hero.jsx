import { useTranslation } from "react-i18next";
import "../styles/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const { t } = useTranslation();

  // const images = [
  //   "/homeScreen-imgs/p-1.png",
  //   "/homeScreen-imgs/p-2.png",
  //   "/homeScreen-imgs/IMG-20260119-WA0000-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0004-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0005-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0006-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0007-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0008-removebg-preview[1].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0003-removebg-preview[2].png",
  //   "/homeScreen-imgs/IMG-20260119-WA0010-removebg-preview[1].png"
  // ];

  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left content */}
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">
            {t("hero.titleLine1")} <br />
            {t("hero.titleLine2")}
          </h1>

          <p className="hero-subtitle animate-slide-up delay-1">
            <strong>RBKVMUL</strong>{" "}
            {t("hero.subtitle")}
          </p>

          <a href="/products" className="hero-btn animate-slide-up delay-2">
            {t("hero.cta")}
          </a>
        </div>

        {/* Right media */}
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/assets/hero.mp4"
              type="video/mp4"
            />
          </video>

          {/* <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            className="hero-video"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt="slide"
                  className="hero-video"
                  style={{
                    objectFit: "contain",   // 🔥 OVERRIDE ONLY FOR IMG
                    background: "#fff"      // 🔥 avoids black gaps (important for PNG)
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper> */}

        </div>

      </div>
    </section>
  );
}