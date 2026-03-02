import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/pages.css";

const BallariDairy = () => {
  const { i18n } = useTranslation();

  // Hardcoded content to bypass JSON fetching issues
  const content = {
    en: {
      title: "Ballari Dairy",
      description: "Ballari Dairy is a key processing unit of the Union, dedicated to supplying high-quality milk and milk products to the people of Ballari district. The facility follows stringent hygiene standards to ensure the purity of Nandini products.",
      capacityTitle: "Infrastructure & Capacity",
      capacityDesc: "The dairy is equipped with modern pasteurization and packaging technology to handle large volumes of milk collected from local milk functional cooperatives.",
      features: [
        "Advanced Milk Chilling & Pasteurization",
        "Automatic Pouch Packing Units",
        "Quality Control Laboratory for testing"
      ]
    },
    kn: {
      title: "ಬಳ್ಳಾರಿ ಡೇರಿ",
      description: "ಬಳ್ಳಾರಿ ಡೇರಿಯು ಒಕ್ಕೂಟದ ಪ್ರಮುಖ ಸಂಸ್ಕರಣಾ ಘಟಕವಾಗಿದ್ದು, ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆಯ ಜನರಿಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಹಾಲು ಮತ್ತು ಹಾಲಿನ ಉತ್ಪನ್ನಗಳನ್ನು ಪೂರೈಸಲು ಬದ್ಧವಾಗಿದೆ. ಈ ಘಟಕವು ನಂದಿನಿ ಉತ್ಪನ್ನಗಳ ಶುದ್ಧತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಕಟ್ಟುನಿಟ್ಟಾದ ನೈರ್ಮಲ್ಯ ಮಾನದಂಡಗಳನ್ನು ಅನುಸರಿಸುತ್ತದೆ.",
      capacityTitle: "ಮೂಲಸೌಕರ್ಯ ಮತ್ತು ಸಾಮರ್ಥ್ಯ",
      capacityDesc: "ಸ್ಥಳೀಯ ಹಾಲು ಉತ್ಪಾದಕರ ಸಹಕಾರ ಸಂಘಗಳಿಂದ ಸಂಗ್ರಹಿಸಿದ ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಹಾಲನ್ನು ಸಂಸ್ಕರಿಸಲು ಡೇರಿಯು ಆಧುನಿಕ ಪಾಶ್ಚರೀಕರಣ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್ ತಂತ್ರಜ್ಞಾನವನ್ನು ಹೊಂದಿದೆ.",
      features: [
        "ಸುಧಾರಿತ ಹಾಲು ಶೀತಲೀಕರಣ ಮತ್ತು ಪಾಶ್ಚರೀಕರಣ",
        "ಸ್ವಯಂಚಾಲಿತ ಹಾಲಿನ ಪ್ಯಾಕೆಟ್ ಪ್ಯಾಕಿಂಗ್ ಘಟಕಗಳು",
        "ಗುಣಮಟ್ಟ ಪರೀಕ್ಷೆಗಾಗಿ ಸುಸಜ್ಜಿತ ಪ್ರಯೋಗಾಲಯ"
      ]
    }
  };

  // Language selection logic
  const lang = i18n.language.startsWith("kn") || i18n.language.startsWith("ka") ? "kn" : "en";
  const t = content[lang];

  return (
    <section className="about-page">
      <div className="about-container">
        <h1>{t.title}</h1>

        <div className="about-block">
          <p>{t.description}</p>
        </div>

        {/* Using your existing about-banner CSS class */}
        <div className="about-banner">
          <Swiper 
            modules={[Navigation, Pagination, Autoplay]} 
            navigation 
            pagination={{ clickable: true }} 
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <img src="/union-operations/image-8.png" alt="Ballari Dairy 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/union-operations/image-10.png" alt="Ballari Dairy 2" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="about-block">
          <h2>{t.capacityTitle}</h2>
          <p>{t.capacityDesc}</p>
          <ul className="values-list">
            {t.features.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BallariDairy;