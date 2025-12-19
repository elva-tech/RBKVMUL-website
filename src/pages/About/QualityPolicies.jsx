import "../../styles/pages.css";

export default function QualityPolicies() {
  return (
    <section className="about-page">

      {/* Top banner image */}
      <div className="about-banner">
        <img
          src="/images/milk-right.6710e7e5.png"
          alt="Quality Policies"
        />
      </div>

      <div className="about-container">
        <h1>Quality Policies</h1>

        {/* Food Safety Policy */}
        <div className="about-block">
          <h2>Food Safety Policy</h2>
          <p>
            MYMUL is committed to supply safe milk and Milk Products to the
            satisfaction of customers by:
          </p>
          <ul className="values-list">
            <li>
              Adopting accepted and appropriate methods and technologies in
              procurement, processing, manufacturing, packing and prompt
              delivery of milk and milk products.
            </li>
            <li>
              Maintaining constant communication with all the parties involved
              in the food chain to achieve the ultimate goal of supply of good
              quality milk and milk products.
            </li>
            <li>
              Complying with statutory and regulatory requirements.
            </li>
          </ul>
          <p className="about-note">
            This commitment is supported by measurable objectives and is
            reviewed for continued suitability from time to time.
          </p>
        </div>

        {/* Allergen Control Policy */}
        <div className="about-block">
          <h2>Allergens Control Policy</h2>
          <p>
            We at Mysore Milk Union Limited, Mega Dairy, Mysore, have defined
            procedures for handling the listed allergen(s) in the premises in a
            safe and secure manner, ensuring that none of the allergens enter
            other process areas throughout the organization.
          </p>
          <p>
            Mysore Milk Union Limited ensures prevention of cross contamination
            of allergen(s) through effective awareness and training programs,
            continuous monitoring, corrective action and verification programs.
            All employees, associates and visitors are required to comply with
            the defined policies and preventive measures.
          </p>

          <h3>Sources of Allergen Contamination</h3>
          <ul className="values-list">
            <li>Milk &amp; Milk Products</li>
            <li>Nuts (Cashew)</li>
            <li>Wheat Flour (Gluten)</li>
          </ul>
        </div>

        {/* Environmental Policy */}
        <div className="about-block">
          <h2>Environmental Policy</h2>
          <p>
            We at Mysore Milk Union Limited, Mega Dairy, Mysore, have defined
            procedures to ensure that all operations are carried out in such a
            way as to minimize impact on the immediate and global environment.
            We ensure compliance with all relevant legal and statutory
            requirements.
          </p>
          <p>
            This policy is applicable in areas of production, packing and other
            concerned places where waste material may originate. Proper waste
            handling procedures are in place and waste is disposed or sold as
            per disposition schedule to prevent environmental contamination.
          </p>
        </div>

        {/* Metal & Jewellery Control Policy */}
        <div className="about-block">
          <h2>Metal and Jewellery Control Policy</h2>
          <ul className="values-list">
            <li>
              Continuous monitoring, control and minimization of usage of
              staple pins, metal clips, sharp objects and blades in raw
              material, processing, packing and finished goods areas.
            </li>
            <li>
              Maintenance tools used in raw material, processing and finished
              goods areas are monitored and checked for count before and after
              the activity.
            </li>
            <li>
              Wearing of jewellery including wrist watches in raw material,
              processing and finished goods areas is controlled and monitored.
              Where permitted in specific cases, jewellery is completely
              covered to avoid cross contamination and ensure product safety.
            </li>
          </ul>
        </div>

        {/* Wood & Glass Policy */}
        <div className="about-block">
          <h2>Wood &amp; Glass Policy</h2>
          <ul className="values-list">
            <li>
              Usage of wood is completely eliminated as product contact
              material such as knife grips, stirrers, etc.
            </li>
            <li>
              Wood is avoided even where it does not directly contact the
              product, such as pallets and working tables.
            </li>
            <li>
              Wood is used only in specific applications like external window
              frames and pallets in finished goods stores, in a safe manner.
            </li>
            <li>
              No glass and hard plastic articles are allowed in process halls.
              Laboratory samples are handled only in food grade plastic
              containers.
            </li>
            <li>
              Hardened or shatter-proof safety film is fixed on all window and
              door glasses in processing areas.
            </li>
            <li>
              No wrist watches are allowed in preparation or processing areas.
              Glass and wooden registers are maintained and periodic inspections
              are carried out to prevent contamination.
            </li>
            <li>
              Tube lights located directly above open food areas are fitted
              with protective covers.
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}
