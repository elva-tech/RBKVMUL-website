import { Link } from "react-router-dom";
import "../styles/pages.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/company-profile">Company Profile</Link></li>
            <li><Link to="/products">Products</Link></li>
            {/* <li><Link to="/units">Chilling Centers</Link></li> */}
            {/* <li><Link to="/units">Sub Offices</Link></li> */}
            <li><Link to="/news">News & Events</Link></li>
            {/* <li><Link to="/notifications">Notifications</Link></li> */}
          </ul>
        </div>

        {/* Address */}
        <div className="footer-col">
          <h4>Address</h4>
          <p>
            Ballari,Raichur & Koppal Co-Operative
            Milk Producers' Societies Union Ltd.<br /><br />
            Sanjay Gandhi Nagar,<br />
            
            Ballari - 583104, Karnataka
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            Ph: 9591999522<br />
            Toll free: 1800 425 6108
          </p>
          <p>
            misrbkmul@gmail.com<br />
          </p>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Karnataka Milk Federation. All rights reserved.</p>

           <div className="developer-credit">
    <a
      href="https://www.elvatech.in/"
      target="_blank"
    >
      <span>Built by</span>
      <video
        src="/assets/elva.mp4"
        autoPlay
        muted
        playsInline
        className="dev-logo-video"
      />
    </a>
  </div>
      </div>

      
    </footer>
  );
}
