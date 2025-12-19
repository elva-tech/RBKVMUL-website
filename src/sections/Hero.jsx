import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left content */}
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">
            Fresh  & Truly Pure. <br />
            A Taste of Countryside.
          </h1>

          <p className="hero-subtitle animate-slide-up delay-1">
            Karnataka Milk Federation ensures high quality dairy products
            sourced directly from farmers and delivered with trust,
            nutrition, and care.
          </p>

          <a
            href="/products"
            className="hero-btn animate-slide-up delay-2"
          >
            Explore Our Products
          </a>
        </div>

        {/* Right video */}
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/Milk Slider (current).mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
}
