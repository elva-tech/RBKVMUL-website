import { NavLink } from "react-router-dom";
import "../../../styles/pages.css";

const rbkvmulProducts = [
 {
    title: "Milk",
    image: "/products/milk.png",
    route: "/products/good-life",
  },
    {
    title: "Curd",
    image: "/products/curd.png",
    route: "/products/sweets",
  },

   {
    title: "Ghee",
    image: "/products/Ghee.jpg",
    route: "/products/good-life",
  },
   {
    title: "Paneer",
    image: "/products/paneer.jpg",
    route: "/products/good-life",
  },
];

export default function RBKVMUL() {
  return (
   <section className="products-page">
  {/* ===== PAGE HEADER ===== */}
  <div className="products-header">
    <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
      RBKVMUL Products
    </h1>
  </div>

  {/* ===== PRODUCT CATEGORIES ===== */}
  <div className="about-container">
    <div className="product-grid">
      {rbkvmulProducts.map((item, i) => (
        <div key={i} className="product-card">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-info">
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
