import "../styles/home.css";
import { products } from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ProductsPreview() {
  return (
    <section className="products-preview">
      <div className="products-container">

        <div className="products-header">
          <h2>Our Dairy Products</h2>
          <p>
            A wide range of fresh and high-quality milk and milk products
            delivered with care and trust.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
          slidesPerView={4}
          loop
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="products-cta">
          <a href="/products">View All Products</a>
        </div>

      </div>
    </section>
  );
}
