import "../../styles/pages.css";
// import aboutImage from "../../assets/about-banner.jpg";

export default function AboutOverview() {
  return (
    <section className="about-overview">
      <div className="about-container">
         {/* Top image */}
      <div className="about-banner">
        <img src="/images/milk-right.6710e7e5.png" alt="Dairy Operations" />
      </div>

        <h1>About Us</h1>

        <p>
         The development of the dairy sector in the region was formally initiated in 1989 with the establishment of the Raichur & Bellary Co-operative Milk Producers’ Societies Union Ltd. during 1989–90. The Union was formed to strengthen organized milk production and marketing by bringing rural milk producers under a structured co-operative framework. From its inception, the Union aimed to create a sustainable system that would benefit farmers economically while ensuring a steady supply of quality milk to consumers.
        </p>

        <p>
          The operational jurisdiction of the Union initially extended across the entire Raichur District, covering four talukas, and the Bellary District, comprising seven talukas. By organizing village-level milk producers into co-operative societies, the Union enabled farmers to collectively market their milk, access veterinary and technical services, and receive fair and timely payments. This approach significantly reduced exploitation by middlemen and improved income stability for rural households.
        </p>

        <p>
         The Union adopted the AMUL co-operative model, which emphasizes farmer ownership, democratic management, and transparent operations. Dairying was promoted as a major subsidiary occupation, particularly for small and marginal farmers, with the objective of achieving socio-economic upliftment in rural areas. Through this model, the Union not only enhanced milk production and productivity but also contributed to employment generation and improved livelihoods.
        </p>

        <p>
        Subsequently, the Union expanded its operational area by including Koppal District, leading to its reconstitution as the Raichur, Bellary & Koppal Co-operative Milk Producers’ Societies Union Ltd. This expansion strengthened the regional dairy network and reinforced the Union’s role in rural development, making dairying a reliable and sustainable source of income for farmers across the three districts.
        </p>
      </div>
    </section>
  );
}
