import { useTranslation } from "react-i18next";
import "../styles/home.css";

export default function Hero() {
  const { t } = useTranslation();

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

          <a
            href="/products"
            className="hero-btn animate-slide-up delay-2"
          >
            {t("hero.cta")}
          </a>
        </div>

        {/* Right video */}
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="/assets/Milk Slider (current).mp4"
              type="video/mp4"
            />
          </video>
        </div>

      </div>
    </section>
  );
}
