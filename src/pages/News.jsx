import "../styles/home.css";
import { news } from "../data/news";
import { useTranslation } from "react-i18next";

export default function News() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <section className="news-preview">
      <div className="news-container">
        <h2 className="section-title">News & Events</h2>
        <div className="news-grid">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              {/* Added leading / to ensure correct pathing from root */}
              <img 
                src={`/${item.image}`} 
                alt="" 
                onError={(e) => { e.target.src = "/images/placeholder.png"; }}
              />
              <div className="news-content">
                <h4>
                  {typeof item.title === 'object'
                    ? (item.title[lang] || item.title.en)
                    : item.title}
                </h4>

                <p>
                  {typeof item.description === 'object'
                    ? (item.description[lang] || item.description.en)
                    : item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}