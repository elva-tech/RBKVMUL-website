import "../../../styles/home.css";

/* ================== PRODUCT DATA ================== */
/*
  To add/remove products:
  - Edit this array ONLY
  - Do NOT touch JSX below
*/

const milkProducts = [
  {
    name: "Nandini Shubham Milk",
    description:
      "Pure pasteurized milk having 5% Fat and 9% SNF. Processed with all the goodness of healthy milk for healthy growth in children.",
    pack: "500 ml, 1 litre",
    image: "/assets/products/milk/550-pasteurised-standardised-milk-pouch-plain-nandini-original-imah4fg6zdwww8h7.webp",
  },
  {
    name: "Nandini Special Toned Milk",
    description:
      "Nutritious homogenized milk with 4% Fat and 9% SNF with added solids. Much thicker and tastier. Good for preparing thick curds.",
    pack: "500 ml, 1 litre",
    image: "/assets/products/milk/500-special-toned-milk-pouch-plain-nandini-original-imah2qcfemhzjk5g.webp",
  },
  {
    name: "Nandini Homogenised Toned Milk",
    description:
      "Pure homogenised milk having 3% Fat and 8.5% SNF.",
    pack: "500 ml, 1 litre",
    image: "/assets/products/categories/homegenized-tonned-milk.jpg",
  },
  {
    name: "Nandini Samrudhi Pasteurized Full Cream Milk",
    description:
      "Pure pasteurized full cream milk with 6.0% fat and 9.0% SNF. Rich, creamier and tastier milk. Ideal for preparing homemade sweets.",
    pack: "500 ml, 1 litre",
    image: "/assets/products/milk/Samrudhi.jpg",
  },
  {
    name: "Pasteurised Cow Milk",
    description:
      "Nandini homogenized cow milk contains 3.5% fat and 8.5% SNF.",
    pack: "500 ml",
    image: "/assets/products/milk/Pasteurised Cow Milk.jpg",
  },
  {
    name: "Nandini Pasteurized Toned Milk",
    description:
      "Karnataka’s highest selling and most preferred milk with minimum 3.0% fat and 8.5% SNF. Suitable for all purposes and all age groups.",
    pack: "500 ml, 1 litre",
    image: "/assets/products/milk/nandini-Pasteurised Cow Milk.jpg",
  },
];

export default function Milk() {
  return (
    <section className="products-page">

      {/* Banner */}
      <div className="about-banner">
        {/* <img
          src="/assets/about/products-milk.jpg"
          alt="Milk Products"
        /> */}
      </div>

      <div className="about-container">
        <h1>Milk</h1>

        <div className="product-grid">
          {milkProducts.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                {product.pack && (
                  <span className="product-pack">
                    Pack Size: {product.pack}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
