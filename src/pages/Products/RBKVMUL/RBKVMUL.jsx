import { NavLink } from "react-router-dom";
import "../../../styles/pages.css";

const rbkvmulProducts = [
  {
    title: "Milk",
    image: "/assets/products/categories/homegenized-tonned-milk.jpg",
    route: "/products/rbkvmul/milk",
  },
  {
    title: "Curd",
    image: "/assets/products/categories/curd.jpg",
    route: "/products/rbkvmul/curd",
  },
];

export default function RBKVMUL() {
  return (
    <section className="page">
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        RBKVMUL Products
      </h1>

      <div className="product-grid">
        {rbkvmulProducts.map((item, i) => (
          <NavLink key={i} to={item.route} className="product-card">
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
