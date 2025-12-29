import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";

export default function TopBanner() {
  const bannerImages = [
    "/images/statue.jpeg",
    "/images/kanaka-d1.png",
     "/images/kanaka-d2.png",

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
         {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="products-video"
        >
          <source
            src="/assets/Durga.mp4"
            type="video/mp4"
          />
        </video> */}
        {/* <h6 style={{ fontWeight: '-moz-initial', fontSize: 'clamp(0.53rem, 1vw, 0.2rem)', marginTop:'7px'}}>
  Shot @Sky_View_9
</h6> */}
      </div>
    </section>
  );
}




// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function TopBanner() {
//   const bannerImages = [
//     "/images/statue.jpeg",
//     "/images/kanaka-d1.png",
//     "/images/kanaka-d2.png",
//   ];

//   return (
//     <section
//       style={{
//         width: "100%",
//         padding: "14px 0",
//         background: "#f4f8fc",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       {/* SLIGHTLY SMALLER CONTAINER */}
//       <div
//         style={{
//           width: "380px",     
//           maxWidth: "100%",
//         }}
//       >
//         <Swiper
//         className="compact-swiper"
//           modules={[Autoplay, Pagination, Navigation]}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           loop
//           pagination={{ clickable: true }}
//           navigation
//           slidesPerView={1}
//           style={{
//             borderRadius: "10px",
//             overflow: "hidden",
//             boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
//           }}
//         >
//           {bannerImages.map((src, index) => (
//             <SwiperSlide key={index}>
//               {/* FIXED HEIGHT + FULL COVER */}
//               <div
//                 style={{
//                   width: "100%",
//                   height: "320px",   // 👈 controlled height
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   src={src}
//                   alt={`Heritage ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",   // ✅ fills container
//                     objectPosition: "center",
//                     display: "block",
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }
