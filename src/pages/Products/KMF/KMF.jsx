import { NavLink } from "react-router-dom";
import "../../../styles/home.css";

/* ===== PRODUCT CATEGORIES DATA ===== */
const productCategories = [
  {
    title: "Good life",
    image: "/products/Bly Products Good Life.jpg",
    route: "/products/milk",
  },
  {
    title: "Mysore Pak's",
    image: "/products/Bly Products Mysore.jpg",
    route: "/products/curd",
  },
  {
    title: "Doodh Peda's",
    image: "/products/Bly Products Pada.jpg",
    route: "/products/ghee",
  },
  {
    title: "Trupti milk",
    image: "/products/Bly Products Trupti.jpg",
    route: "/products/butter",
  },
  {
    title: "Bread & Bun",
    image: "/products/Bread & Bun.jpg",
    route: "/products/paneer",
  },
  {
    title: "Butter",
    image: "/products/Butter.jpg",
    route: "/products/cheese",
  },
  {
    title: "cassata",
    image: "/products/Cassata.png",
    route: "/products/flavoured-milk",
  },
  {
    title: "Cheese",
    image: "/products/Cheese.jpg",
    route: "/products/chocolates",
  },
  {
    title: "Choco Bar",
    image: "/products/Choco Bar.png",
    route: "/products/namkeens",
  },
  {
    title: "Chocolates",
    image: "/products/Chocolates.png",
    route: "/products/sweets",
  },
  {
    title: "Cone ice creams",
    image: "/products/Cine Ice-Cream.png",
    route: "/products/khova",
  },
  {
    title: "Cookies",
    image: "/products/Cookies.jpg",
    route: "/products/instant-mixes",
  },
  {
    title: "Cup Ice Cream",
    image: "/products/Cup Ice-Cream.png",
    route: "/products/good-life",
  },
   {
    title: "Curd",
    image: "/products/curd.png",
    route: "/products/sweets",
  },
  {
    title: "Family Pack Ice Cream",
    image: "/products/Family Pack Ice-Cream.png",
    route: "/products/khova",
  },
  {
    title: "Flavoured Milk Tatra",
    image: "/products/Flavored Milk Tatra.png",
    route: "/products/instant-mixes",
  },
  {
    title: "Flavoured Bottles",
    image: "/products/Floavored Bottles.png",
    route: "/products/good-life",
  },
   {
    title: "Frozen Foods",
    image: "/products/Frozen Foods.png",
    route: "/products/instant-mixes",
  },
  {
    title: "Ghee",
    image: "/products/Ghee.jpg",
    route: "/products/good-life",
  },
   {
    title: "Gudbud",
    image: "/products/Gudbud.jpg",
    route: "/products/sweets",
  },
  {
    title: "Ice Cream Mockups",
    image: "/products/Ice Cream Mockups.png",
    route: "/products/khova",
  },
  {
    title: "Instant Mix",
    image: "/products/Instant Mix.jpg",
    route: "/products/instant-mixes",
  },
  {
    title: "Kulfi Ice Creams",
    image: "/products/Kulfi Ice-Cream.jpg",
    route: "/products/good-life",
  },

   {
    title: "Milk Powder",
    image: "/products/Milk Proder.jpg",
    route: "/products/instant-mixes",
  },
  {
    title: "Milk",
    image: "/products/milk.png",
    route: "/products/good-life",
  },
   {
    title: "Namkeens",
    image: "/products/Namkeens.png",
    route: "/products/sweets",
  },
  {
    title: "Nandini Good Life Milk",
    image: "/products/Nandini Good Life Milk.png",
    route: "/products/khova",
  },
  {
    title: "natural ice cream",
    image: "/products/natural Ice -Cream.png",
    route: "/products/instant-mixes",
  },
  {
    title: "Paneer",
    image: "/products/paneer.jpg",
    route: "/products/good-life",
  },

   {
    title: "Pet Bottles",
    image: "/products/Pet Bottles.png",
    route: "/products/instant-mixes",
  },
  {
    title: "Rusk",
    image: "/products/Rusk.png",
    route: "/products/good-life",
  },
   {
    title: "Strawberry sundae",
    image: "/products/Sundae.jpg",
    route: "/products/sweets",
  },
  {
    title: "Sweets",
    image: "/products/Sweets.png",
    route: "/products/khova",
  }
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
            src="/assets/slider4 (1).mp4"
            type="video/mp4"
          />
        </video>

      <div className="products-video-overlay">
        
        </div>
     </div>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <div className="about-container">
        <div className="product-grid">
          {productCategories.map((category, index) => (
            <div
              // to={category.route}
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
            </div>
          ))}
        </div>
     </div>

    </section>
  );
}
