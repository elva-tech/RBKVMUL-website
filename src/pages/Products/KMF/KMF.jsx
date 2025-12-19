import { NavLink } from "react-router-dom";
import "../../../styles/pages.css";

const kmfProducts = [
  {
    title: "Ghee",
    image: "/assets/products/categories/ghee.jpg",
    route: "/products/kmf/ghee",
  },
  {
    title: "Butter",
    image: "/assets/products/categories/butter_3413fe990d (1).jpg",
    route: "/products/kmf/butter",
  },
  {
    title: "Paneer",
    image: "/assets/products/categories/paneer.jpg",
    route: "/products/kmf/paneer",
  },
];

export default function KMF() {
  return (
    <section className="page">
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        KMF Products
      </h1>

      <div className="product-grid">
        {kmfProducts.map((item, i) => (
          <NavLink key={i} to={item.route} className="product-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
