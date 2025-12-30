import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import confetti from "canvas-confetti";
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

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Ribbon */}
        <span className="popup-ribbon">
          {t("popup.ribbon")}
        </span>

        <div
          style={{
            position: "absolute",
            top: "22px",
            right: "72px",
            zIndex: 2,
          }}
        >
          <button
            className={`lang-toggle popup-lang-toggle ${animate ? "animate" : ""
              }`}
            onClick={() =>
              switchLang(i18n.language === "en" ? "ka" : "en")
            }
          >
            {i18n.language === "en" ? "ಕ" : "EN"}
          </button>
        </div>

        {/* Close button */}
        <button
          className="popup-close"
          aria-label={t("popup.close")}
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="popup-header">
          {t("popup.title")}
        </h2>

        <h3 className="popup-subtitle">
          {t("popup.subtitle")}
        </h3>

        <p className="popup-description">
          {t("popup.description")}
        </p>

        <div className="popup-image-wrapper">
          <img
            src="/assets/Announcement-image.png"
            alt={t("popup.imageAlt")}
            className="popup-image"
          />
        </div>
      </div>
    </div>
  );
}
