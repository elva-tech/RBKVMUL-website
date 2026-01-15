import { useState, useEffect } from "react";
// Import i18n hooks
import { useTranslation } from "react-i18next";
import "../styles/home.css";

export default function Notifications() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get current language from i18next
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/elva-tech/RBKVMUL-website/main/src/data/notofications.js?t=${Date.now()}`;

    fetch(url, { cache: "no-store" })
      .then(res => res.text())
      .then(text => {
        const start = text.indexOf("[");
        const end = text.lastIndexOf("]") + 1;
        const data = JSON.parse(text.substring(start, end));
        setList(data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>
            {currentLang === "ka" ? "ಪ್ರಕಟಣೆಗಳು" : "Notifications"}
          </h2>
          <p style={styles.empty}>Loading...</p>
        </div>
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.title}>
            {currentLang === "ka" ? "ಪ್ರಕಟಣೆಗಳು" : "Notifications"}
          </h2>
          <p style={styles.empty}>No notifications</p>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          {currentLang === "ka" ? "ಪ್ರಕಟಣೆಗಳು" : "Notifications"}
        </h2>

        <ul style={styles.list}>
          {list.map((item) => (
            <li key={item.id} style={styles.item}>
              <div style={styles.content}>
                <span style={styles.date}>📅 {item.date}</span>
                {/* Fixed Title Logic: Use currentLang to pick en or ka */}
                <h3 style={styles.itemTitle}>
                  {item.title?.[currentLang] || item.title?.en || item.title}
                </h3>
              </div>

              <button
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  try {
                    const response = await fetch(item.fileUrl);
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;

                    const fileName = item.fileUrl.split('/').pop() || 'download';
                    link.setAttribute('download', fileName);

                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.URL.revokeObjectURL(url);
                  } catch (error) {
                    console.error("Download failed:", error);
                    window.open(item.fileUrl, '_blank');
                  }
                }}
                style={{ ...styles.button, backgroundColor: '#2a82cf', border: 'none', cursor: 'pointer' }}
              >
                {currentLang === "ka" ? "ಡೌನ್‌ಲೋಡ್" : "Download"}
              </button>
            </li>
          ))}
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
  empty: {
    textAlign: "center",
    color: "#999",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "12px"
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
    whiteSpace: "nowrap"
  }
};