import { useState, useEffect } from "react";
import "../styles/home.css";
// Remove the static import: import { notifications } from "../data/notofications";

export default function NotificationsPreview() {
  const [liveNotifications, setLiveNotifications] = useState([]);

  useEffect(() => {
    // Fetch directly from the raw GitHub URL to bypass Vercel's build cache
    const GITHUB_RAW_URL = "https://raw.githubusercontent.com/vithesh45/rbkvmul-admin/main/src/data/notofications.js";

    fetch(GITHUB_RAW_URL)
      .then(res => res.text())
      .then(text => {
        // This logic extracts the JSON array from the "export const..." string
        const match = text.match(/\[[\s\S]*\]/);
        if (match) {
          setLiveNotifications(JSON.parse(match[0]));
        }
      })
      .catch(err => console.error("Live fetch failed:", err));
  }, []);

  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>
        <ul className="notifications-list">
          {liveNotifications.map((item) => (
            <li key={item.id} className="notification-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="notification-date">{item.date}</span>
                <span className="notification-title">
                  {item.title?.en || item.title}
                </span>
              </div>

              {item.fileUrl && (
                <a href={item.fileUrl} target="_blank" rel="noreferrer" className="view-btn" style={styles.btn}>
                  View File
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  btn: { padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', fontSize: '12px', textDecoration: 'none' }
};