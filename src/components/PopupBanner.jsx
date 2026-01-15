import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import confetti from "canvas-confetti";
import { popupData } from "../data/popupData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/pages.css";

export default function PopupBanner() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");
    if (!seen && popupData?.active) {
      setOpen(true);
      sessionStorage.setItem("popupSeen", "true");

      const colors = [
        "#0a4da2", "#1565c0", "#2196f3", "#03a9f4",
        "#ff6b6b", "#ee5a5a", "#ff4081", "#f50057",
        "#ffd93d", "#ffeb3b", "#ff9800", "#ffc107",
        "#6bcb77", "#4caf50", "#00e676", "#1de9b6",
        "#9c27b0", "#ba68c8", "#7c4dff", "#e040fb",
        "#00bcd4", "#ff5722", "#8bc34a"
      ];

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors
      });

      const end = Date.now() + 2000;
      (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, []);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 350);
  };

  if (!open || !popupData?.active) return null;

  // Fallback for image list
  const imageList = popupData.images || (popupData.image ? [popupData.image] : []);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="popup-ribbon">{t("popup.ribbon")}</span>

        <div style={{ position: "absolute", top: "22px", right: "72px", zIndex: 10 }}>
          <button
            className={`lang-toggle popup-lang-toggle ${animate ? "animate" : ""}`}
            onClick={() => switchLang(currentLang === "en" ? "ka" : "en")}
          >
            {currentLang === "en" ? "ಕ" : "EN"}
          </button>
        </div>

        <button className="popup-close" onClick={() => setOpen(false)}>✕</button>

        <h2 className="popup-header">
          {popupData.title?.[currentLang] || popupData.title?.en}
        </h2>

        <h3 className="popup-subtitle">
          {popupData.subtitle?.[currentLang] || popupData.subtitle?.en}
        </h3>

        <p className="popup-description">
          {popupData.description?.[currentLang] || popupData.description?.en}
        </p>

        <div className="popup-image-wrapper">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={imageList.length > 1}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ borderRadius: "8px" }}
          >
            {imageList.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Announcement ${index}`}
                  className="popup-image"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => { e.target.src = "https://rbkvmul-website.vercel.app" + img; }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}