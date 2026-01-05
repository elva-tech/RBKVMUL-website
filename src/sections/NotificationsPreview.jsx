import { useState, useEffect } from "react";
import "../styles/home.css";

export default function NotificationsPreview() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState("");

  useEffect(() => {
    const GITHUB_URL = `https://raw.githubusercontent.com/elva-tech/RBKVMUL-website/main/src/data/notofications.js?t=${Date.now()}`;

    fetch(GITHUB_URL, { cache: "no-store" })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(text => {
        try {
          const startIndex = text.indexOf("[");
          const endIndex = text.lastIndexOf("]") + 1;
          
          if (startIndex === -1 || endIndex === 0) {
            throw new Error("No array found in file");
          }
          
          const jsonArray = JSON.parse(text.substring(startIndex, endIndex));
          setList(jsonArray);
          
          if (jsonArray.length === 0) {
            setErrorStatus("No notifications available");
          }
        } catch (e) {
          setErrorStatus("Error loading notifications");
          console.error("Parse error:", e, "Raw:", text);
        }
      })
      .catch(err => {
        setErrorStatus("Failed to load notifications");
        console.error("Fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="notifications-preview">
        <div className="notifications-container">
          <h2 className="section-title">Notifications</h2>
          <p style={{textAlign: 'center', color: '#999'}}>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>
        
        {errorStatus && <p style={{color: 'red', textAlign: 'center', marginBottom: '20px'}}>{errorStatus}</p>}

        {list.length === 0 && !errorStatus && (
          <p style={{textAlign: 'center', color: '#999'}}>No notifications at the moment</p>
        )}

        <ul className="notifications-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {list.map((item) => (
            <li key={item.id} className="notification-item" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '15px 20px', 
              marginBottom: '10px',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              background: '#fff',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <div style={{ flex: 1 }}>
                <span style={{ 
                  fontSize: '12px', 
                  color: '#007bff',
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '5px'
                }}>
                  {item.date}
                </span>
                <p style={{ 
                  margin: '0', 
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  {item.title?.en || item.title}
                </p>
              </div>
              
              {/* FIXED: Check if fileUrl exists and is not empty */}
              {item.fileUrl && item.fileUrl.trim() !== "" ? (
                <a 
                  href={item.fileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    padding: '10px 24px', 
                    borderRadius: '6px', 
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    transition: 'background-color 0.3s',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                >
                  View File
                </a>
              ) : (
                <span style={{
                  fontSize: '12px',
                  color: '#999',
                  fontStyle: 'italic'
                }}>
                  No file attached
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}