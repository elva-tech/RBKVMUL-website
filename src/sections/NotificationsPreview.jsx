import { useState, useEffect } from "react";
import "../styles/home.css";

export default function NotificationsPreview() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Fetching the file as text to avoid caching issues
    fetch(`https://raw.githubusercontent.com/elva-tech/RBKVMUL-website/main/src/data/notofications.js?v=${Date.now()}`)
      .then(res => res.text())
      .then(text => {
        // Cleaning the JS to get the JSON array
        const json = JSON.parse(text.split('=')[1].trim().replace(/;$/, ''));
        setList(json);
      })
      .catch(err => console.error("Load error:", err));
  }, []);

  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>
        <ul className="notifications-list" style={{ listStyle: 'none', padding: 0 }}>
          {list.map((item) => (
            <li key={item.id} className="notification-item" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '15px', 
              borderBottom: '1px solid #ddd' 
            }}>
              <div>
                <span className="notification-date" style={{ fontSize: '12px', color: '#888' }}>{item.date}</span>
                <p style={{ margin: '5px 0', fontWeight: '500' }}>{item.title.en || item.title}</p>
              </div>
              
              {/* Only show button if a file was uploaded */}
              {item.fileUrl && (
                <a 
                  href={item.fileUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    padding: '6px 15px', 
                    borderRadius: '4px', 
                    textDecoration: 'none',
                    fontSize: '13px'
                  }}
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