import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/home.css";

function StatItem({ value, label }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 26);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div className="stat-card" ref={ref}>
      <h3>{count.toLocaleString()}+</h3>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  return (
    <section className="stats">
      <div className="stats-container">

        <StatItem value={32000} label={t("stats.farmers")} />
        <StatItem value={2.4} label={t("stats.processingCapacity")} />
        <StatItem value={150} label={t("stats.products")} />
        <StatItem value={850} label={t("stats.collectionCenters")} />

      </div>
    </section>
  );
}
