import "../../styles/pages.css";

export default function ArtificialInsemination() {
  return (
    <section className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <img
          src="/activities/AI -1.jpg"
          alt="Artificial Insemination Services"
        />
      </div>

      {/* Content */}
      <div className="about-container">
        <h1>Artificial Insemination & Emergency Activities</h1>

        <div className="about-block">
          <p>
            Artificial Insemination (AI) in dairy farming is a scientific
            breeding method that improves genetic quality and productivity
            without natural mating. The process involves collecting semen
            from genetically superior bulls, processing and freezing it,
            and depositing it into cows at the correct stage of heat
            (estrus) by trained technicians.
          </p>
        </div>

        <div className="about-block">
          <h2>AI Process Overview</h2>
          <p>
            The AI procedure includes heat detection, thawing frozen semen
            straws, guiding the insemination gun through the cervix using
            rectal palpation, and depositing semen in the uterine body to
            ensure conception.
          </p>
        </div>

        <div className="about-block">
          <h2>Semen Collection & Processing (At AI Centers)</h2>
          <ul className="values-list">
            <li>Semen is collected from genetically superior bulls.</li>
            <li>
              Semen is mixed with extenders such as milk, sugars, and
              antibiotics for nutrition and protection.
            </li>
            <li>
              The diluted semen is filled into plastic straws and frozen
              in liquid nitrogen at −196°C for long-term storage.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
