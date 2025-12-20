import "../../styles/pages.css";

export default function Cultural() {
  return (
    <section className="culture-page-wrapper">
      <div className="culture-container">
        <h1 className="culture-main-title">Cultural Heritage</h1>

        {/* Ballari Section */}
        <div className="culture-card">
          <div className="culture-text-content">
            <h3>Ballari: The Spiritual Guardian</h3>
            <p>
              Ballari’s identity is deeply rooted in its spiritual heritage, centered around the revered 
              <strong> Kanaka Durgamma Temple</strong>. As the presiding deity of the city, Durgamma is 
              considered the protector of the region, and the temple serves as a powerful symbol of 
              faith that unites the local community.
            </p>
          </div>
          <div className="culture-image-wrapper">
            <img className="culture-img" src="/images/kanaka-d1.png" alt="Kanaka Durgamma Temple" />
          </div>
        </div>

        {/* Koppal Section */}
        <div className="culture-card reverse">
          <div className="culture-text-content">
            <h3>Koppal: The Kashi of the South</h3>
            <p>
              Koppal carries a profound legacy of peace and service, anchored by the magnificent 
              <strong> Gavi Siddeshwara Matha</strong>. This ancient cave monastery is a cornerstone 
              of the Lingayat tradition, famous for its "Trividha Dasoha"—the selfless service of 
              providing free food, education, and spiritual shelter to all.
            </p>
          </div>
          <div className="culture-image-wrapper">
            <img className="culture-img" src="/images/Gavi-sid.jpg" alt="Gavi Siddeshwara Matha" />
          </div>
        </div>

        {/* Raichur Section */}
        <div className="culture-card">
          <div className="culture-text-content">
            <h3>Raichur: The Land of Forts and Gold</h3>
            <p>
              Raichur is a region where historical grit meets industrial pride, most notably represented 
              by the <strong>Hatti Gold Mines</strong>. As one of the oldest gold mines in the world, 
              it stands as a testament to the district’s incredible mineral wealth and its strategic 
              importance between the Krishna and Tungabhadra rivers.
            </p>
          </div>
          <div className="culture-image-wrapper">
            <img className="culture-img" src="/images/hatti.png" alt="Hatti Gold Mines" />
          </div>
        </div>

        {/* Vijayapura Section */}
        <div className="culture-card reverse">
          <div className="culture-text-content">
            <h3>Vijaynagara: The Eternal City</h3>
            <p>
    The ruins of Vijayanagara at <strong>Hampi</strong> stand as a breathtaking 
    testament to the height of South Indian Hindu architecture. A UNESCO World 
    Heritage site, it features the iconic Stone Chariot, the towering Virupaksha 
    Temple, and intricate musical pillars that resonate with history, reflecting 
    the grandeur of one of India's most powerful historical empires.
  </p>
          </div>
          <div className="culture-image-wrapper">
            <img className="culture-img" src="/images/hampi.png" alt="Gol Gumbaz" />
          </div>
        </div>

      </div>
    </section>
  );
}