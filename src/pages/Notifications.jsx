import "../styles/home.css";
import { notifications } from "../data/notofications";

export default function Notifications() {
  return (
    <section className="notifications-preview">
      <div className="notifications-container">
        <h2 className="section-title">Notifications</h2>

        <ul className="notifications-list">
          {notifications.map((item) => (
            <li key={item.id} className="notification-item">
              <span className="notification-date">{item.date}</span>
              <span className="notification-title">{item.title}</span>
            </li>
          ))}
        </ul>

        <div className="notifications-cta">
          {/* <a href="/notifications">View All Notifications</a> */}
        </div>
      </div>
    </section>
  );
}