import { useState, useEffect } from "react";
import "../styles/home.css";

export default function NotificationsPreview() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch with cache buster
    const url = `https://raw.githubusercontent.com/elva-tech/RBKVMUL-website/main/src/data/notofications.js?t=${Date.now()}`;

    fetch(url, { cache: "no-store" })
      .then(res => res.text())
      .then(text => {
        console.log("📥 Raw file content:", text); // Debug
        
        // Extract the array
        const start = text.indexOf("[");
        const end = text.lastIndexOf("]") + 1;
        const arrayStr = text.substring(start, end);
        
        const data = JSON.parse(arrayStr);
        console.log("✅ Parsed data:", data); // Debug
        
        setList(data);
      })
      .catch(err => {
        console.error("❌ Fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="notifications-preview" style={styles.section}>
        <div className="notifications-container" style={styles.container}>
          <h2 className="section-title" style={styles.title}>📢 Notifications</h2>
          <p style={styles.loading}>Loading...</p>
        </div>
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <section className="notifications-preview" style={styles.section}>
        <div className="notifications-container" style={styles.container}>
          <h2 className="section-title" style={styles.title}>📢 Notifications</h2>
          <p style={styles.empty}>No notifications at the moment</p>
        </div>
      </section>
    );
  }

  return (
    <section className="notifications-preview" style={styles.section}>
      <div className="notifications-container" style={styles.container}>
        <h2 className="section-title" style={styles.title}>📢 Notifications</h2>
        
        <ul style={styles.list}>
          {list.map((item) => {
            console.log(`Item ${item.id}:`, item); // Debug each item
            
            return (
              <li key={item.id} style={styles.item}>
                <div style={styles.content}>
                  <span style={styles.date}>📅 {item.date}</span>
                  <h3 style={styles.itemTitle}>{item.title?.en || item.title}</h3>
                  
                  {/* DEBUG: Show what's in item.file */}
                  <div style={{fontSize: '10px', color: '#999', marginTop: '4px'}}>
                    Debug: file = {item.file ? `"${item.file}"` : "null/empty"}
                  </div>
                </div>
                
                {/* Super simple check */}
                {item.file && (
                  <a 
                    href={item.file} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={styles.button}
                  >
                    📎 View File
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f8f9fa"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
    color: "#222"
  },
  loading: {
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
    padding: "40px"
  },
  empty: {
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "2px dashed #ddd"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    gap: "20px"
  },
  content: {
    flex: 1
  },
  date: {
    fontSize: "13px",
    color: "#007bff",
    fontWeight: "bold",
    display: "block",
    marginBottom: "8px"
  },
  itemTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#222",
    margin: 0
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold",
    display: "inline-block",
    whiteSpace: "nowrap",
    transition: "all 0.3s"
  }
};