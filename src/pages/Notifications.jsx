import "../styles/home.css";
import { notifications } from "../data/notofications";
import { useTranslation } from "react-i18next";

export default function Notifications() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>
        <ul className="notifications-list">
          {notifications.map((item) => (
            <li key={item.id} className="notification-item">
              <span className="notification-date">{item.date}</span>
              <span className="notification-title">
                {/* Fix: Specifically access the language key */}
                {typeof item.title === 'object'
                  ? (item.title[lang] || item.title.en)
                  : item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}