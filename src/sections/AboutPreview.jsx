import "../styles/home.css";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-preview-container">

        {/* Left: Content */}
        <div className="about-preview-content animate-slide-up">
          <h2>Our Dairy Products</h2>
          <p>
  A selection of fresh milk and milk products processed and
  distributed with quality and care.
</p>

          <Link to="/about" className="about-preview-btn">
            Learn More About Us
          </Link>
        </div>

        {/* Right: Image */}
        <div className="about-preview-image animate-slide-up delay-1">
          <img
            src="https://via.placeholder.com/480x320?text=KMF+Dairy"
            alt="KMF Dairy Operations"
          />
        </div>

      </div>
    </section>
  );
}
