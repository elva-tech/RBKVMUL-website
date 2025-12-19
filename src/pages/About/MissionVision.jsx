import "../../styles/pages.css";

export default function MissionVision() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/Vision_and_Mission_min.png"
          alt="Mission and Vision"
        />
      </div>

      <div className="about-container">
        <h1>Mission & Vision</h1>

        {/* Mission */}
        <div className="about-block">
          <h2>Our Mission</h2>
          <p>
            1.	To promote producer oriented viable cooperative society to impart an impetus to the rural income, dairy productivity and rural employment. <br />
2.	To a bridge the gap between price of milk procurement and sale price. <br />
3.	To develop business acumen in marketing and trading disciplines so as to serve consumers with quality milk, give a fillip to the income of milk producers.

          </p>
          <p className="about-note">
            Our Union is committed to society economic development of its member milk producers by adopting advanced technology to make dairying a profitable business by the dedicated workmanship to provide best services to its members and consumers thereby achieving the best position in the Karnataka
          </p>
        </div>

        {/* Values */}
        <div className="about-block">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Honesty</li>
            <li>Discipline / Timeliness</li>
            <li>Quality</li>
            <li>Trust</li>
            <li>Impartiality</li>
            <li>Savings</li>
            <li>Transparency</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
