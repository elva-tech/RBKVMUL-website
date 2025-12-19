import "../../styles/pages.css";

export default function CompanyProfile() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/assets/about/company-profile.jpg"
          alt="Company Profile"
        />
      </div>

      <div className="about-container">
        <h1>Company Profile</h1>

        <div className="about-block">
          <p>
            The Development of dairy was taken up in the year 1989. The Raichur & Bellary Co-operative Milk Producers societies Union Ltd,. Was established on 1989-90 and having the extended to the entire Raichur District of four taluka & Bellary District of seven taluka.
             The Union undertook the work of organization of milk Co-operatives in AMUL Pattern with the main objective of Socio-economic reformation of the farmers in the rural areas through dairying as main subsidiary occupation. Later the Union Included Koppal into Raichur & Bellary District Co-operative Milk Producers Societies Union Ltd.
          </p>
        </div>
      </div>

    </section>
  );
}
