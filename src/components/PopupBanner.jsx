import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "../styles/pages.css";

export default function PopupBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem("popupSeen", "true");

      // ---- upgraded confetti burst ----
      // Original + expanded palette
const colors = [
  // Blues (your brand)
  "#0a4da2",
  "#1565c0",
  "#2196f3",
  "#03a9f4",
  
  // Reds & Pinks
  "#ff6b6b",
  "#ee5a5a",
  "#ff4081",
  "#f50057",
  
  // Yellows & Oranges
  "#ffd93d",
  "#ffeb3b",
  "#ff9800",
  "#ffc107",
  
  // Greens
  "#6bcb77",
  "#4caf50",
  "#00e676",
  "#1de9b6",
  
  // Purples
  "#9c27b0",
  "#ba68c8",
  "#7c4dff",
  "#e040fb",
  
  // Extras
  "#00bcd4",  // cyan
  "#ff5722",  // deep orange
  "#8bc34a",  // light green
  "#ffeb3b",  // bright yellow
];

      // initial big burst from center
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      });

      // continuous side sprinkles
      const duration = 2 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, []);

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* decorative ribbon */}
        <span className="popup-ribbon">New</span>

        <button
          className="popup-close"
          aria-label="Close popup"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h2 className="popup-header">Announcement</h2>

        <h3 className="popup-subtitle">Mega Dairy Out Line</h3>
         <p className="popup-description"> 
            Upcoming Mega Dairy at Bellary Taluka Kolagal Grama.  Approved by  Karnataka Mining Environment Restoration Corporation (KMERC)
          </p>

        <div className="popup-image-wrapper">
          <img
            src="/assets/Announcement-image.png"
            alt="Mega Dairy Out Line Announcement"
            className="popup-image"
          />
        </div>
      </div>
    </div>
  );
}