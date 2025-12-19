import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";

export default function TopBanner() {
  const bannerImages = [
    "/images/statue.jpeg",
    "/images/kanaka-d1.png",
    // "/images/kanaka-d2.png",

  ];

  return (
    <section className="hero-banner-section">
      <div className="hero-banner-wrapper">
        <Swiper
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="hero-swiper"
        >
          {bannerImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide-content">
                <img src={src} alt={`Banner ${index + 1}`} className="hero-image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}