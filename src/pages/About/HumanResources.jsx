import "../../styles/pages.css";

export default function HumanResources() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/founder-of-milk verghese Kurien Photo 2.jpg"
          alt="Human Resources Department"
        />
      </div>

      <div className="about-container">
        <h1>HR Department</h1>

        {/* Objectives */}
        <div className="about-block">
          <h2>Objectives</h2>
          <p>
            Human Resource policies in the our dairy industry cover core areas like recruitment (skilled/unskilled), training (safety, technical), compensation, performance, and compliance,
             focusing heavily on workplace safety, preventing harassment, managing leave, and ensuring ethical conduct, with specific rules for youth/child labour (e.g., minors in daylight hours only).
              Effective HR drives quality/quantity, reduces turnover, and boosts farm profitability by aligning people management with dairy operations and sustainability goals. 
          </p>
        </div>

        {/* Main Functions */}
        <div className="about-block">
          <h2>Main Functions</h2>
          <ul className="values-list">
            <li>
              Matching skills (technical for processing, physical for farm) with operational needs, forecasting labour demand.
            </li>
            <li>
              	Clear processes, sharing culture/values, providing job descriptions, assigning trainers, explaining worker's comp.
            </li>
            <li>
              Mandatory safety training, accident/injury reporting, emergency plans, personal hygiene, drug/alcohol policies.
            </li>
            <li>
            	Professionalism, respect, anti-harassment, confidentiality, conflict of interest, attendance (punctuality, leave notification).
            </li>
            <li>
              	Fair pay, benefits to attract/retain talent, ensuring satisfaction.
            </li>
            <li>
              	Feedback, skill improvement, linking performance to quality/quantity goals.
            </li>
            <li>
              	Clear policies on holidays, sick leave, etc..
            </li>
            <li>
              	Strict rules on age (min 14), working hours (daytime, 4.5 hrs./day), and fitness certification.
            </li>
            <li>
              	Linking HR to environmental goals, promoting values-driven commitment. 
            </li>
            <li>
              	Skilled, motivated staff directly improves milk quality and quantity.
            </li>
            <li>
              	Good HR reduces high turnover common in farm work.
            </li>
            <li>
              	Meets legal requirements, especially around safety and youth employment.
            </li>
            <li>
              	Better management leads to operational efficiency and financial success. 
            </li>
          </ul>
          <p>
            Start with essential policies for safety, conduct, and leave, use templates, and build up comprehensive systems as you grow, focusing on integrating HR with the unique demands of dairy farming. 
          </p>
        </div>
      </div>

    </section>
  );
}
