import "../styles/home.css";
import { FaCheckCircle, FaUsers, FaIndustry } from "react-icons/fa";

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-container">

        <div className="highlight-card animate-slide-up">
          <div className="highlight-icon">
            <FaCheckCircle />
          </div>
          <h3>Quality You Can Trust</h3>
          <p>
            Milk and dairy products processed under strict quality
            standards to ensure purity, safety, and nutrition.
          </p>
        </div>

        <div className="highlight-card animate-slide-up delay-1">
          <div className="highlight-icon">
            <FaUsers />
          </div>
          <h3>From Farmers to Families</h3>
          <p>
            Supporting thousands of farmers while delivering fresh
            dairy products directly to consumers.
          </p>
        </div>

        <div className="highlight-card animate-slide-up delay-2">
          <div className="highlight-icon">
            <FaIndustry />
          </div>
          <h3>Modern Processing Units</h3>
          <p>
            State-of-the-art chilling and processing facilities
            across Karnataka ensure consistent quality.
          </p>
        </div>

      </div>
    </section>
  );
}
