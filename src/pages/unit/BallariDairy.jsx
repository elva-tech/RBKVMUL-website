import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BallariDairy = () => {
  const { i18n } = useTranslation();

  // INLINE JSON CONTENT
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

  // Switch content based on active language (defaults to 'en' if 'kn' isn't selected)
  const lang = i18n.language.startsWith("kn") || i18n.language.startsWith("ka") ? "kn" : "en";
  const t = content[lang];

  const renderSwiper = (images) => (
    <div className="about-banner" style={{ padding: '10px 0' }}>
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]} 
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 4000 }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img 
              src={img} 
              alt={`Slide ${i}`} 
              style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>{t.title}</h1>

        <div className="about-block">
          <p>{t.description}</p>
        </div>

        {renderSwiper(["/union-operations/image-8.png", "/union-operations/image-10.png"])}

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
    </div>
  );
};

export default BallariDairy;