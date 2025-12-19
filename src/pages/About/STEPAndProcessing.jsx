import "../../styles/pages.css";

export default function STEPAndProcessing() {
  return (
    <section className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <img
          src="/activities/Step-1.jpg"
          alt="STEP and Dairy Processing"
        />
        
      </div>
      

      <div className="about-container">
        <h1>STEP & Processing Activities</h1>

        {/* STEP */}
        <div className="about-block">
          <h2>Support to Training and Employment Programme for Women (STEP)</h2>
          <p>
            Women in the dairy sector are empowered through various
            government and institutional programs aimed at training,
            employment, and financial inclusion. The STEP initiative plays
            a major role in organizing women into dairy cooperatives and
            enhancing their livelihoods.
          </p>

          <ul className="values-list">
            <li>
              <strong>STEP:</strong> Funded by the Ministry of Women & Child
              Development, providing financial and technical support to
              organize Women Dairy Cooperative Societies.
            </li>
            <li>
              <strong>NPDD:</strong> Provides training on clean milk
              production, animal health, nutrition, and dairy management.
            </li>
            <li>
              <strong>NABARD Initiatives:</strong> Supports women through
              Self Help Groups, skill training, and concessional credit.
            </li>
          </ul>
        </div>

         <div className="about-banner">
        <img
          src="/activities/Step-2.jpg"
          alt="STEP and Dairy Processing"
        />
        
      </div>


        {/* Processing */}
        <div className="about-block">
          <h2>Processing and Production Activity</h2>
          <p>
            Dairy processing converts raw milk into safe, consumable
            products through systematic testing, treatment, and packaging
            to ensure quality, safety, and shelf life.
          </p>

          <h3>Core Processing Steps</h3>
          <ul className="values-list">
            <li>Milk collection, quality testing, cooling, and storage.</li>
            <li>Removal of physical impurities through filtration.</li>
            <li>
              Separation of cream and skim milk using centrifugal force.
            </li>
            <li>
              Standardization of fat content for consistent quality.
            </li>
            <li>
              Pasteurization to destroy harmful pathogens.
            </li>
            <li>
              Homogenization to ensure uniform texture and prevent cream
              separation.
            </li>
          </ul>

          <h3>Product-Specific Processing</h3>
          <ul className="values-list">
            <li>Fermentation using bacterial cultures.</li>
            <li>Churning cream to produce butter.</li>
            <li>Evaporation and spray drying for milk powders.</li>
            <li>
              Hygienic packaging and refrigerated storage for freshness.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
