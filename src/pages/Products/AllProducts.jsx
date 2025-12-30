import { useTranslation } from "react-i18next";
import "../../styles/pages.css";

/* ===== PRODUCT CATEGORIES DATA ===== */
const productCategories = [
  { key: "milk", image: "/products/milk.png", route: "/products/good-life" },
  { key: "curd", image: "/products/curd.png", route: "/products/sweets" },
  { key: "ghee", image: "/products/Ghee.jpg", route: "/products/good-life" },
  { key: "paneer", image: "/products/paneer.jpg", route: "/products/good-life" },
  { key: "butter", image: "/products/Butter.jpg", route: "/products/cheese" },
  { key: "milkPowder", image: "/products/Milk Proder.jpg", route: "/products/instant-mixes" },
  { key: "truptiMilk", image: "/products/Bly Products Trupti.jpg", route: "/products/butter" },
  { key: "goodLife", image: "/products/Bly Products Good Life.jpg", route: "/products/milk" },
  { key: "mysorePak", image: "/products/Bly Products Mysore.jpg", route: "/products/curd" },
  { key: "doodhPeda", image: "/products/Bly Products Pada.jpg", route: "/products/ghee" },
  { key: "breadBun", image: "/products/Bread & Bun.jpg", route: "/products/paneer" },
  { key: "cassata", image: "/products/Cassata.png", route: "/products/flavoured-milk" },
  { key: "cheese", image: "/products/Cheese.jpg", route: "/products/chocolates" },
  { key: "chocoBar", image: "/products/Choco Bar.png", route: "/products/namkeens" },
  { key: "chocolates", image: "/products/Chocolates.png", route: "/products/sweets" },
  { key: "coneIceCream", image: "/products/Cine Ice-Cream.png", route: "/products/khova" },
  { key: "cookies", image: "/products/Cookies.jpg", route: "/products/instant-mixes" },
  { key: "cupIceCream", image: "/products/Cup Ice-Cream.png", route: "/products/good-life" },
  { key: "familyPack", image: "/products/Family Pack Ice-Cream.png", route: "/products/khova" },
  { key: "flavouredMilkTetra", image: "/products/Flavored Milk Tatra.png", route: "/products/instant-mixes" },
  { key: "flavouredBottles", image: "/products/Floavored Bottles.png", route: "/products/good-life" },
  { key: "frozenFoods", image: "/products/Frozen Foods.png", route: "/products/instant-mixes" },
  { key: "gudbud", image: "/products/Gudbud.jpg", route: "/products/sweets" },
  { key: "iceCreamMockups", image: "/products/Ice Cream Mockups.png", route: "/products/khova" },
  { key: "instantMix", image: "/products/Instant Mix.jpg", route: "/products/instant-mixes" },
  { key: "kulfi", image: "/products/Kulfi Ice-Cream.jpg", route: "/products/good-life" },
  { key: "namkeens", image: "/products/Namkeens.png", route: "/products/sweets" },
  { key: "nandiniGoodLife", image: "/products/Nandini Good Life Milk.png", route: "/products/khova" },
  { key: "naturalIceCream", image: "/products/natural Ice -Cream.png", route: "/products/instant-mixes" },
  { key: "petBottles", image: "/products/Pet Bottles.png", route: "/products/instant-mixes" },
  { key: "rusk", image: "/products/Rusk.png", route: "/products/good-life" },
  { key: "strawberrySundae", image: "/products/Sundae.jpg", route: "/products/sweets" },
  { key: "sweets", image: "/products/Sweets.png", route: "/products/khova" }
];

export default function AllProducts() {
  const { t } = useTranslation();

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
          <source src="/assets/our-product.mp4" type="video/mp4" />
        </video>

        <div className="products-video-overlay">
          {/* intentionally empty */}
        </div>
      </div>

      {/* ===== PRODUCT GRID ===== */}
      <div className="about-container">
        <div className="product-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img
                  src={category.image}
                  alt={t(`products.categories.${category.key}`)}
                />
              </div>

              <div className="product-info">
                <h3>{t(`products.categories.${category.key}`)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
