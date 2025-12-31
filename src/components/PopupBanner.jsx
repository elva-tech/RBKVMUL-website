import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import confetti from "canvas-confetti";
import { popupData } from "../data/popupData";
import "../styles/pages.css";

export default function PopupBanner() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");
    if (!seen) {
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
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  }, []);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 350);
  };

if (!open || !popupData.active) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Ribbon - Still using translation file */}
        <span className="popup-ribbon">{t("popup.ribbon")}</span>

        {/* Close Button - Still using translation file */}
        <button className="popup-close" onClick={() => setOpen(false)}>
          ✕
        </button>

        {/* Dynamic Content - NOW USING ADMIN DATA */}
        <h2 className="popup-header">
          {popupData.title[lang] || popupData.title.en}
        </h2>

        <h3 className="popup-subtitle">
          {popupData.subtitle[lang] || popupData.subtitle.en}
        </h3>

        <p className="popup-description">
          {popupData.description[lang] || popupData.description.en}
        </p>

        <div className="popup-image-wrapper">
          <img
            src={popupData.image}
            alt="Announcement"
            className="popup-image"
          />
        </div>
      </div>
    </div>
  );
}