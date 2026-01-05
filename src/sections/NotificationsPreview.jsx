import { useState, useEffect } from "react";
import "../styles/home.css";

export default function NotificationsPreview() {
  const [liveNotifications, setLiveNotifications] = useState([]);

 useEffect(() => {
    const DATA_URL = "https://raw.githubusercontent.com/elva-tech/RBKVMUL-website/main/src/data/notofications.js";

    fetch(DATA_URL)
      .then(res => res.text())
      .then(text => {
        try {
          // Removes 'export const notifications =' and the ';' at the end
          const jsonPart = text.split('=')[1].trim().replace(/;$/, '');
          const data = JSON.parse(jsonPart);
          setLiveNotifications(data);
        } catch (e) {
          console.error("Data is still messy, check your GitHub file content!");
        }
      })
      .catch(err => console.error("Fetch failed:", err));
  }, []);

  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>
        <ul className="notifications-list">
          {liveNotifications.map((item) => (
            <li key={item.id} className="notification-item" style={styles.li}>
              <div>
                <span className="notification-date">{item.date}</span>
                <span className="notification-title">
                  {item.title?.en || item.title}
                </span>
              </div>

              {item.fileUrl && (
                <a 
                  href={item.fileUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={styles.btn}
                >
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
  li: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' },
  btn: { padding: '6px 12px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', fontSize: '12px', textDecoration: 'none' }
};