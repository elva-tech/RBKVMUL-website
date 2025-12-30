import { useTranslation } from "react-i18next";
import "../../../styles/pages.css";

const rbkvmulProducts = [
  { key: "milk", image: "/products/milk.png", route: "/products/good-life" },
  { key: "curd", image: "/products/curd.png", route: "/products/sweets" },
  { key: "ghee", image: "/products/Ghee.jpg", route: "/products/good-life" },
  { key: "paneer", image: "/products/paneer.jpg", route: "/products/good-life" }
];

export default function RBKVMUL() {
  const { t } = useTranslation();

  return (
    <section className="products-page">

      {/* ===== PAGE HEADER ===== */}
      <div className="products-header">
        <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
          {t("products.categories.filterRBKVMUL")}
        </h1>
      </div>

      {/* ===== PRODUCT GRID ===== */}
      <div className="about-container">
        <div className="product-grid">
          {rbkvmulProducts.map((item, i) => (
            <div key={i} className="product-card">
              <div className="product-image">
                <img
                  src={item.image}
                  alt={t(`products.categories.${item.key}`)}
                />
              </div>
              <div className="product-info">
                <h3>{t(`products.categories.${item.key}`)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
