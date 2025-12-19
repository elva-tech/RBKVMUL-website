import "../../styles/pages.css";

export default function Activities() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/about-cow-2.b8e1a0b1.png"
          alt="Activities"
        />
      </div>

      <div className="about-container">
        <h1>Activities</h1>

        {/* Procurement */}
        <div className="about-block">
          <p>
            The procurement process involves collecting milk from producers, ensuring quality through rigorous testing (fat, SNF, adulteration), chilling it quickly for freshness, and transporting it to the plant, 
            often via village collection centers and chilling centers for eventual processing, with payment to farmers based on quality, emphasizing transparency and farmer support through cooperative models or direct systems to maintain a consistent, high-quality supply. <br /> <br />
            Here's a breakdown of the key stages:
          </p>
          <h2>Sourcing & Collection</h2>
          <ul className="values-list">
            <li>
             	Milk is delivered from farmers (often twice daily) to local centers, often managed by cooperatives or the dairy itself.
            </li>
            <li>
              	Dairies either establish their own centers (direct) or use agents/contractors to collect milk from producers.
            </li>
            <li>
             	Dairies often train farmers in hygienic milking and handling to ensure clean milk. 
            </li>
          </ul>
        </div>

        {/* Technical Input Activities */}
        <div className="about-block">
          <h2>Quality Testing & Chilling</h2>
        <ul>
          <li>
            	At the VLC, milk is weighed and tested for fat, Solids-Not-Fat (SNF), and adulteration (e.g., water).
          </li>
          <li>
            Milk is quickly cooled (e.g., to 4°C) in bulk coolers at the VLC or a chilling center to preserve quality and prevent bacterial growth.
          </li>
          <li>
            	Samples are taken for more detailed lab analysis before dispatch. 
          </li>
        </ul>
        </div>

        {/* Animal Health */}
        <div className="about-block">
          <h2>Transportation & Processing</h2>
          <p>
          	Chilled milk is transported in insulated tankers to the main dairy plant, often via a chilling center for consolidation.
          </p>
          <p>
          	Upon arrival at the dairy, milk undergoes further rigorous quality checks before processing (pasteurization, separation, etc.). 
          </p>
        </div>

        {/* Artificial Insemination */}
        <div className="about-block">
          <h2>Payment & Management</h2>
          <p>
          1.  Farmers are paid based on the quantity and quality (fat/SNF content) of milk supplied, with payments often made periodically (e.g., every 10 days).
          </p>
          <p>
          2.	Payment slips detail the quality parameters and amount due, with funds often transferred to bank accounts. 
          </p>
        </div>

        {/* Fodder */}
        <div className="about-block">
          <h2>Key Goals:</h2>
          <p>
           1.	Ensuring producers get fair prices.
          </p>
          <p>
            Farmers are educated on enriching dry fodder with urea and trained
            to establish silage demonstrations to reduce milk production
            costs. Cultivation of azolla is promoted due to its high protein
            content.
          </p>
          <p>
           2.	Maintaining high standards from farm to plant.
          </p>
        </div>
        <p>
          3.	Creating strong cold chains and organized collection routes. 
        </p>
        <p>
          This system relies heavily on technology (like automated testing units) and strong farmer relationships to build a reliable, high-quality supply chain. 
        </p>
      </div>

    </section>
  );
}
