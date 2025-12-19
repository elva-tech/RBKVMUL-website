import "../../styles/pages.css";

export default function Objectives() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/about-cow-2.b8e1a0b1.png"
          alt="Objectives"
        />
      </div>

      <div className="about-container">
        <h1>Objectives</h1>

        {/* Key Objectives */}
        <div className="about-block">
          <h2>Our Key Objectives</h2>
          <ul className="values-list">
            <li>
              	Profit maximization from dairy sector.
            </li>
            <li>
              Socio-economic stability of dairy farmers of the state. 
            </li>
            <li>
Compliance with Food Safety and Standards Act 2006.
            </li>
            <li>
              	To ensure fresh and safe milk to consumers of the state.
            </li>
            <li>
              	Increase Rural Employment Opportunities through Entrepreneurship.
            </li>
            <li>
              	Sustainable Development of the sector
            </li>
            <li>
              	Strengthening of the organized Dairy farming sector through Co-operatives.
            </li>
            <li>
              	Value addition and improved marketing to provide fair price to the farmers.
            </li>
            <li>
              Innovation, Research and Development for cost effective production.
            </li>
            <li>
              	Provide adequate and quality services at farmers’ door step.
            </li>
            <li>
              	Technology transfer through effective extension activities
            </li>
            <li>
              Automate the milk collection and pricing system of the Dairy Co-operatives.
            </li>
            <li>
              Unify the accounting and management system of the Dairy Co-operatives.
            </li>
            <li>
              Creating a network between the Dairy Co-operatives, the Dairy Development Department and   other stake holders for efficient and effective management.
            </li>
          </ul>

          <p className="about-note">
            These objectives guide our operations and ensure that we continue
            to serve both our farmer members and urban consumers while
            promoting rural development and sustainable dairy practices.
          </p>
        </div>

        {/* Main Functions */}
        <div className="about-block">
          <h2>Quality & Food safety</h2>
          <ul className="values-list">
            <li>
              	Healthy cows, clean housing, proper feeding, and responsible antimicrobial use are foundational.
            </li>
            <li>
              	Strict hand washing, clean attire (uniforms, hairnets, gloves), and reporting illnesses are crucial to prevent contamination.
            </li>
            <li>
              	Facilities must be cleanable, with proper drainage; equipment (milking machines, tanks) must be sanitized regularly.
            </li>
            <li>
            	Immediate cooling (to ≤8°C), testing for antibiotics/contaminants at pickup, and maintaining cold chain during transport.
            </li>
            <li>
             Implementing HACCP, pasteurization, and GMP (Good Manufacturing Practices) to control hazards like pathogens, allergens, and physical contaminants.
            </li>
            <li>
            	Regular lab checks for fat, protein, bacterial counts (coliforms), somatic cells, residues, and adulterants.
            </li>
            <li>
              Maintaining detailed records for all stages to enable rapid recalls and accountability.
            </li>
            <li>
              Commitment to producing safe, superior quality milk products
            </li>
            <li>
              	Meeting or exceeding legal requirements and consumer expectations.
            </li>
            <li>
            	Continuous improvement in quality performance.
            </li>
            <li>
              	Open communication of the policy to all stakeholders. 
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
