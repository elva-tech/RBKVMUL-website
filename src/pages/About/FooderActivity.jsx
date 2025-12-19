import "../../styles/pages.css";

export default function FodderActivity() {
  return (
    <section className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <img
          src="/activities/Fooder-4.jpg"
          alt="Fodder Development Activity"
        />
      </div>

      <div className="about-container">
        <h1>Fodder Activity</h1>

        <div className="about-block">
          <p>
            Fodder production plays a crucial role in dairy farming by
            ensuring balanced nutrition, improving milk yield, and
            supporting farm sustainability. The process combines
            traditional field-based cultivation with modern conservation
            and innovative techniques to provide year-round green fodder.
          </p>
        </div>

        <div className="about-block">
          <h2>Traditional & Field-Based Fodder Production</h2>
          <ul className="values-list">
            <li>
              Assessment of herd size, land availability, water resources,
              and climate to select suitable fodder crops such as maize,
              sorghum, oats, and legumes.
            </li>
            <li>
              Land preparation, seed sowing, fertilization, irrigation,
              and pest management.
            </li>
            <li>
              Harvesting crops at optimal growth stages to maximize
              nutritional value.
            </li>
          </ul>
        </div>

 <div className="about-banner">
        <img
          src="/activities/Fooder-3.jpg"
          alt="Fooder"
        />
        
      </div>

        <div className="about-block">
          <h2>Conservation (Silage & Hay)</h2>
          <ul className="values-list">
            <li>
              Fermenting chopped green fodder in airtight silos to preserve
              nutrients as silage.
            </li>
            <li>
              Sun-drying grasses and legumes to produce hay, which is then
              baled and stored.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
