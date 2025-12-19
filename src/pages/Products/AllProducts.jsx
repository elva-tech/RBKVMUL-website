import { NavLink } from "react-router-dom";
import "../../styles/pages.css";

/* ===== PRODUCT CATEGORIES DATA ===== */
const productCategories = [
  {
    title: "Milk",
    image: "/assets/products/categories/homegenized-tonned-milk.jpg",
    route: "/products/milk",
  },
  {
    title: "Curd Family",
    image: "/assets/products/categories/curd.jpg",
    route: "/products/curd",
  },
  {
    title: "Ghee",
    image: "/assets/products/categories/ghee.jpg",
    route: "/products/ghee",
  },
  {
    title: "Butter",
    image: "/assets/products/categories/butter_3413fe990d (1).jpg",
    route: "/products/butter",
  },
  {
    title: "Paneer",
    image: "/assets/products/categories/paneer.jpg",
    route: "/products/paneer",
  },
  {
    title: "Cheese",
    image: "/assets/products/categories/Chedder_Cheese_1kg_2_Product_image_f4af245d8d.jpg",
    route: "/products/cheese",
  },
  {
    title: "Flavoured Milk",
    image: "/assets/products/categories/homegenized-tonned-milk.jpg",
    route: "/products/flavoured-milk",
  },
  {
    title: "Chocolates",
    image: "/assets/products/categories/18g_Crispy_Milk_Choco_37cee66ca4.png",
    route: "/products/chocolates",
  },
  {
    title: "Namkeens",
    image: "/assets/products/categories/Panner_Murukku_1_front_mock_2156d1e093.jpg",
    route: "/products/namkeens",
  },
  {
    title: "Sweets",
    image: "/assets/products/categories/Dharwad_Peda_2_Product_Image_279c78e1f0.jpg",
    route: "/products/sweets",
  },
  {
    title: "Khova",
    image: "/assets/products/categories/khova-200.jpg",
    route: "/products/khova",
  },
  {
    title: "Instant Mixes",
    image: "/assets/products/categories/rice_kheer_mix_8a9e757f53.jpg",
    route: "/products/instant-mixes",
  },
  {
    title: "Nandini Good Life",
    image: "/assets/products/categories/Good Life Gold.png",
    route: "/products/good-life",
  },
];

export default function AllProducts() {
  return (
    <section className="products-page">

      {/* ===== VIDEO BANNER ===== */}
      <div className="products-video-banner">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="products-video"
        >
          <source
            src="/assets/our-product.mp4"
            type="video/mp4"
          />
        </video>

        <div className="products-video-overlay">
          {/* <h1>Our Products</h1> */}
        </div>
      </div>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <div className="about-container">
        <div className="product-grid">
          {productCategories.map((category, index) => (
            <NavLink
              to={category.route}
              key={index}
              className="product-card"
            >
              <div className="product-image">
                <img
                  src={category.image}
                  alt={category.title}
                />
              </div>

              <div className="product-info">
                <h3>{category.title}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

    </section>
  );
}
