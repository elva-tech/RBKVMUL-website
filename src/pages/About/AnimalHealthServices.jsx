import "../../styles/pages.css";

export default function AnimalHealthServices() {
  return (
    <section className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <img
          src="/activities/Animal _2.jpg"
          alt="Animal Health Services"
        />
      </div>

      {/* Content */}
      <div className="about-container">
        <h1>Animal Health Services</h1>

        <div className="about-block">
          <p>
            The animal health process is a proactive and integrated system
            designed to ensure animal welfare, reduce operational costs,
            and maintain high-quality milk production. It focuses on
            prevention, early detection, and swift treatment, supported
            by detailed records and modern technology.
          </p>
        </div>

        <div className="about-block">
          <h2>Core Components</h2>
          <p>
            The system emphasizes prevention through biosecurity,
            vaccination, proper nutrition, housing, and staff training.
            Continuous monitoring of animal behaviour, temperature, and
            milk quality allows early detection of health issues.
          </p>
          <p>
            When illness is identified, targeted veterinary treatment,
            isolation of affected animals, and strict adherence to
            withdrawal periods are followed to protect both animal health
            and milk safety.
          </p>
        </div>

        <div className="about-banner">
        <img
          src="/activities/Animal -1.png"
          alt="animal health Services"
        />
      </div>

        <div className="about-block">
            <br />
          <h2>Biosecurity &amp; Prevention</h2>
          <ul className="values-list">
            <li>
              Limiting new animal introductions and thoroughly screening
              them to prevent disease entry.
            </li>
            <li>
              Strategic use of vaccines and preventive treatments to build
              immunity.
            </li>
            <li>
              Maintaining clean housing, milking equipment, and water
              supplies to reduce pathogen load.
            </li>
            <li>
              Providing balanced feed and suitable housing to minimize
              stress and disease risk.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
