import "../styles/pages.css";

export default function ChillingCenters() {
  return (
    <section className="about-page">

      {/* Banner */}
      <div className="about-banner">
        <img
          src="/assets/about/chilling-centers.jpg"
          alt="Chilling Centers"
        />
      </div>

      <div className="about-container">
        <h1>Chilling Centers</h1>

        {/* Hunsur Chilling Centre */}
        <div className="about-block">
          <h2>Hunsur Chilling Centre</h2>
          <p>
            Hunsur Chilling Centre is located about 45 kilometers away from
            Mysore Dairy and is situated off the Hunsur–Madikeri State Highway.
            It was commenced during the year 1984 with an initial chilling
            capacity of 40,000 litres per day. The capacity was expanded to
            60,000 litres per day during 2011 and further expanded up to
            1,00,000 litres per day in the year 2017.
          </p>
          <p>
            Milk is procured through organized milk procurement routes from
            dairy co-operative societies located in Hunsur, K.R. Nagar,
            H.D. Kote, and major parts of Piriyapatna taluks.
          </p>
        </div>

        {/* HD Kote Chilling Centre */}
        <div className="about-block">
          <h2>H.D. Kote Chilling Centre</h2>
          <p>
            Details of the H.D. Kote Chilling Centre will be updated shortly.
          </p>
        </div>

        {/* Sub Offices */}
        <div className="about-block">
          <h2>Sub Offices</h2>
          <ul className="values-list">
            <li>Mysore</li>
            <li>Nanjangud</li>
            <li>T. Narasipura</li>
            <li>K.R. Nagar</li>
            <li>Hunsur</li>
            <li>Piriyapatna</li>
            <li>H.D. Kote</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
