import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("feedback");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const colors = {
    primary: "#0056b3",
    secondary: "#f8f9fa",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending....");

    const formData = new FormData(e.target);
    
    // Web3Forms Configuration
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", `KMF ${tab.toUpperCase()} - ${formData.get("name")}`);
    formData.append("from_name", "KMF Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success");
        alert(tab === "feedback" ? "Thank you for your feedback!" : "Complaint submitted successfully.");
        e.target.reset();
      } else {
        setResult("Error");
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      setResult("Error");
      alert("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.mainTitle, color: colors.primary }}>{t("contact.title")}</h1>
      <h4 style={styles.subTitle}>{t("contact.subtitle")}</h4>

      <div style={styles.imgContainer}>
        <img
          src="/images/founder-of-milk verghese Kurien Photo.png"
          alt="Founder"
          style={styles.founderImg}
        />
      </div>

      <div style={styles.toggleWrapper}>
        <div style={styles.tabBar}>
          <button
            type="button"
            onClick={() => { setTab("feedback"); setResult(""); }}
            style={tab === "feedback" ? styles.activeTab : styles.inactiveTab}
          >
            {t("contact.feedback")}
          </button>
          <button
            type="button"
            onClick={() => { setTab("complaint"); setResult(""); }}
            style={tab === "complaint" ? styles.activeTab : styles.inactiveTab}
          >
            {t("contact.complaints")}
          </button>
        </div>

        <div style={styles.formCard}>
          <h2 style={{ color: colors.primary, marginTop: 0 }}>
            {tab === "feedback" ? t("contact.feedback") : t("contact.complaints")}
          </h2>

          {tab === "complaint" && (
            <div style={styles.alertBox}>
              <strong style={{ color: "#d9534f" }}>Toll Free: 1800 425 8030</strong>
              <p style={{ fontSize: "12px", margin: 0, color: "#666" }}>
                10:00AM – 5:30PM (Except Holidays)
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Honeypot for Spam */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <div style={styles.row} className="resp-row">
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t("contact.name")} *</label>
                <input name="name" required style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t("contact.email")} *</label>
                <input name="email" type="email" required style={styles.input} />
              </div>
            </div>

            <div style={styles.row} className="resp-row">
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t("contact.phone")} *</label>
                <input name="phone" required style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  {tab === "feedback" ? t("contact.subject") : t("contact.purchasedAt")}
                </label>
                <input
                  name={tab === "feedback" ? "subject" : "location"}
                  style={styles.input}
                />
              </div>
            </div>

            <label style={styles.label}>
              {tab === "feedback" ? t("contact.message") : t("contact.complaintDetails")} *
            </label>
            <textarea name="message" required style={styles.textarea} />

            <button
              type="submit"
              disabled={loading}
              style={{ ...styles.submitBtn, backgroundColor: colors.primary }}
            >
              {loading ? "..." : t("contact.submit")}
            </button>
            
            {result && (
              <span style={{ 
                textAlign: "center", 
                marginTop: "10px", 
                fontSize: "14px", 
                color: result === "Success" ? "green" : "red" 
              }}>
                {result}
              </span>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .resp-row { flex-direction: column !important; gap: 0 !important; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: { padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" },
  mainTitle: { textAlign: "center", fontWeight: "bold", marginBottom: "5px" },
  subTitle: { textAlign: "center", color: "#666", marginBottom: "30px" },
  imgContainer: { textAlign: "center", marginBottom: "40px" },
  founderImg: { maxWidth: "100%", height: "auto", borderRadius: "8px" },
  toggleWrapper: { maxWidth: "700px", margin: "0 auto" },
  tabBar: { display: "flex", justifyContent: "center" },
  activeTab: { padding: "12px 25px", backgroundColor: "#fff", borderLeft: "1px solid #ccc", borderRight: "1px solid #ccc", borderTop: "1px solid #ccc", borderBottom: "none", color: "#0056b3", fontWeight: "bold", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", cursor: "pointer" },
  inactiveTab: { padding: "12px 25px", backgroundColor: "#f1f3f5", border: "1px solid #ccc", color: "#666", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", cursor: "pointer" },
  formCard: { backgroundColor: "#fff", padding: "30px", border: "1px solid #ccc", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px" },
  alertBox: { backgroundColor: "#fff5f5", padding: "15px", borderLeft: "4px solid #d9534f", marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column" },
  row: { display: "flex", gap: "15px", marginBottom: "5px" },
  inputGroup: { flex: 1, display: "flex", flexDirection: "column" },
  label: { fontSize: "14px", fontWeight: "bold", marginBottom: "5px", marginTop: "10px" },
  input: { padding: "10px", border: "1px solid #ced4da", borderRadius: "4px" },
  textarea: { padding: "10px", border: "1px solid #ced4da", borderRadius: "4px", height: "100px" },
  submitBtn: { marginTop: "20px", padding: "15px", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }
};

export default Contact;