import "../styles/home.css";
import { news } from "../data/news";

export default function NewsPreview() {
  return (
    <section className="news-preview">
      <div className="news-container">

        <h2 className="section-title">News & Events</h2>

        <div className="news-grid">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="news-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href="/news">Read More</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
